const {app, BrowserWindow} = require('electron')
const {spawn} = require('child_process')

function createWindow() {
    const window = new BrowserWindow({
        width : 1024,
        height : 768,
        resizable : false,
        autoHideMenuBar : true,
        webPreferences : {
            nodeIntegration : true,
            contextIsolation: false
        }
    })

    window.loadFile(__dirname+"/Pages/index.html")

    //window.webContents.openDevTools()
}

app.whenReady().then(
    createWindow,
    spawn("python", ['../back-end/index.py']))

app.on('window-all-closed',()=>{
    if(process.platform != 'darwin')
        app.quit()
})

app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length===0){
        createWindow()
    }
})