import { Injectable } from '@angular/core';
import { app, Remote, Menu, Tray, EventEmitter } from 'electron';
import { ElectronService } from './electron.service';
import { LoggerService } from './logger.service';

@Injectable({ providedIn: 'root' })
export class TrayService {
    private static tray: Tray;

    constructor(private electron: ElectronService, private logger: LoggerService) {
        this.electron.ipcRenderer.on('tray', (eventEmitter: EventEmitter, isTrayCreated: boolean) => {
            console.log('tray event received', isTrayCreated);
            if (!isTrayCreated) {
                this.buildTray();
            }
        });
    }

    build() {
        // send the message to get the existing tray - we're subscribed
        // to the event `tray` above. if we don't get anything back,
        // we build a new one.
        this.electron.ipcRenderer.send('trayExists');
    }

    destroy() {
        this.electron.ipcRenderer.send('trayDestroy');
    }

    private buildTray() {
        console.log('building a tray');
        const electronRemote = this.electron.getRemote();
        const contextMenu = electronRemote.Menu.buildFromTemplate([
            {
                label: 'Preferences',
                click: item => {
                    this.electron.openAppWindow({
                        path: 'preferences',
                    });
                },
            },
            { type: 'separator' },
            {
                label: 'Quit',
                role: 'quit',
                click: item => {
                    this.electron.quit();
                }
            },
        ]);

        const tray = new electronRemote.Tray('./src/assets/taskbar.png');
        tray.setToolTip('Radium');
        tray.setContextMenu(contextMenu);
        this.electron.ipcRenderer.send('trayCreated', tray);

        console.log('this is the tray i built', tray);
    }
}
