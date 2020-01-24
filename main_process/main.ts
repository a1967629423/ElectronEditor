import {app, BrowserWindow} from 'electron'
import path from 'path'
import config from '../config'
let mainWindow:BrowserWindow|null = null;

function createWindow(){
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    });
    
    if(config.mode === 'production'){
        console.log(config.mode)
        const baseUrl = new URL('http://localhost');
        baseUrl.protocol= 'http'
        baseUrl.host = config.production.host;
        baseUrl.port = String(config.production.port);
        console.log(baseUrl.toJSON())
        mainWindow.loadURL(baseUrl.toJSON())
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(path.join(__dirname,config.release.dir,config.release.name))
    }
    mainWindow.on('close',()=>{mainWindow = null})
}
app.on('ready',createWindow)
app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin') app.quit()
})
app.on('activate',()=>{if(mainWindow === null)createWindow()})