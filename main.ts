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

let appWindow: BrowserWindow;
let tray: Tray;
const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');

ipcMain.on('trayCreated', (eventEmitter: EventEmitter, trayCreated: Tray) => {
    tray = trayCreated;
});

ipcMain.on('trayExists', () => {
    appWindow.webContents.send('tray', tray && !tray.isDestroyed());
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
    appWindow = new BrowserWindow({
        x: 0,
        y: 0,
        frame: false,
        width: size.width,
        height: size.height,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    appWindow.maximize();

    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(`${__dirname}/node_modules/electron`)
        });
        appWindow.loadURL('http://localhost:4200');
    } else {
        appWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }

    if (serve) {
        appWindow.webContents.openDevTools();
    }

    // Emitted when the window is closed.
    appWindow.on('closed', () => {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        appWindow = null;
    });
}

function onHotkey() {
    if (appWindow) {
        appWindow.restore();
        appWindow.focus();
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
        createWindow();
    });

    app.on('will-quit', () => {
        globalShortcut.unregisterAll();
    });

} catch (e) {
    // Catch Error
    // throw e;
}
