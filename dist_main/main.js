"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const electron_1 = require("electron");
const path_1 = tslib_1.__importDefault(require("path"));
const config_1 = tslib_1.__importDefault(require("../config"));
let mainWindow = null;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    if (config_1.default.mode === 'production') {
        console.log(config_1.default.mode);
        const baseUrl = new URL('http://localhost');
        baseUrl.protocol = 'http';
        baseUrl.host = config_1.default.production.host;
        baseUrl.port = String(config_1.default.production.port);
        console.log(baseUrl.toJSON());
        mainWindow.loadURL(baseUrl.toJSON());
        mainWindow.webContents.openDevTools();
    }
    else {
        mainWindow.loadFile(path_1.default.join(__dirname, config_1.default.release.dir, config_1.default.release.name));
    }
    mainWindow.on('close', () => { mainWindow = null; });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
electron_1.app.on('activate', () => { if (mainWindow === null)
    createWindow(); });
//# sourceMappingURL=main.js.map