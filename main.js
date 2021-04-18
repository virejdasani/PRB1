// Modules to control application life and create native browser window
const {
    app,
    BrowserWindow,
    Tray
} = require('electron')
const path = require('path')

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 350,
        height: 550,
        resizable: false,
        frame: false
    })

    mainWindow.loadFile('index.html')

    // This is the icon that shows up in the tray 
    new Tray('assets/iconTemplate.png')

// To get different icons depending on the platform,first comment the new Tray line above, then do this:
    // const iconName = process.platform === win32 ? 'windowsIcon.png' : 'macIcon.png'
    // const iconPath = `assets/${iconName}`
    // new Tray(iconPath)

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})