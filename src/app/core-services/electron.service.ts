import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import {
    BrowserWindow,
    app,
    ipcRenderer,
    remote,
    webFrame,
    Remote,
} from 'electron';
import * as path from 'path';
import * as url from 'url';
import * as childProcess from 'child_process';
import * as fs from 'fs';
import { LoggerService } from './logger.service';

export interface OpenAppWindowArgs {
    path: string;
    hasFrame?: boolean;
    height?: number;
    width?: number;
}

@Injectable({ providedIn: 'root' })
export class ElectronService {
    private appWindows: BrowserWindow[] = [];

    ipcRenderer: typeof ipcRenderer;
    webFrame: typeof webFrame;
    remote: typeof remote;
    childProcess: typeof childProcess;
    fs: typeof fs;

    get isElectron() {
        return window && window.process && window.process.type;
    }

    constructor(private logger: LoggerService) {
        // Conditional imports
        if (this.isElectron) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.webFrame = window.require('electron').webFrame;
            this.remote = window.require('electron').remote;

            this.childProcess = window.require('child_process');
            this.fs = window.require('fs');
        }
    }

    getRemote(): Remote {
        return this.remote;
    }

    openAppWindow(args: OpenAppWindowArgs) {
        // don't totally understand this yet, i stole it from maxime's main.ts
        // checking for debug mode maybe?
        const procArgs = this.remote.process.argv.slice(1);
        const serve = procArgs.some(val => val === '--serve');

        // Create the browser window.
        const newWindow = new this.remote.BrowserWindow({
            x: 0,
            y: 0,
            frame: args.hasFrame === undefined ? true : args.hasFrame,
            width: args.width || 640,
            height: args.height || 480,
            webPreferences: {
                nodeIntegration: true,
            },
        });

        const workingDirectory = process.cwd();
        if (serve) {
            // intentionally not doing electron reload here because it's handled in main.ts
            const path = `http://localhost:4200#/${args.path}`
            // use url.format later, but it's choking on #
            console.log('path is', path);
            newWindow.loadURL(path);

        } else {
            newWindow.loadURL(url.format({
                pathname: path.join(workingDirectory, 'dist/index.html'),
                protocol: 'file:',
                slashes: true
            }));
        }

        if (serve) {
            newWindow.webContents.openDevTools();
        }

        this.appWindows.push(newWindow);
        newWindow.on('closed', () => {
            const toRemove = this.appWindows.findIndex(w => w === newWindow);

            if (toRemove < 0) {
                this.logger.error("Couldn't remove browser window from appWindows");
            }
            this.appWindows.splice(toRemove, 1);
        });
    }

    quit() {
        app.quit();
    }
}
