import {
    app,
    AllElectron,
    BrowserWindow,
    globalShortcut,
    ipcMain,
    screen,
    Tray,
    EventEmitter
} from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow;
let tray: Tray;
const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');

ipcMain.on('trayCreated', (eventEmitter: EventEmitter, trayCreated: Tray) => {
    tray = trayCreated;
});

ipcMain.on('trayExists', () => {
    win.webContents.send('tray', tray);
});

ipcMain.on('trayDestroy', () => {
    if (tray && !tray.isDestroyed()) {
        tray.destroy();
    }
});

function createWindow() {
    const electronScreen = screen;
    const size = electronScreen.getPrimaryDisplay().workAreaSize;

    // Create the browser window.
    win = new BrowserWindow({
        x: 0,
        y: 0,
        frame: false,
        width: size.width,
        height: size.height,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.maximize();

    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(`${__dirname}/node_modules/electron`)
        });
        win.loadURL('http://localhost:4200');
    } else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }

    if (serve) {
        win.webContents.openDevTools();
    }

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

function onHotkey() {
    if (win) {
        win.restore();
        win.focus();
    }
    else {
        createWindow();
    }
}

try {
    // enable notifications on windows during dev
    app.setAppUserModelId(process.execPath)

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on('ready', () => {
        createWindow();

        globalShortcut.register('CommandOrControl+Shift+J', onHotkey);
        console.log('registered shortcut');
    });

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        // except i want it not to quit when the windows close cuz doy
        // if (process.platform !== 'darwin') {
        //     app.quit();
        // }
    });

    app.on('activate', () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (win === null) {
            createWindow();
        }
    });

    app.on('will-quit', () => {
        globalShortcut.unregisterAll();
    });

} catch (e) {
    // Catch Error
    // throw e;
}
