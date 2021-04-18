// Modules to control application life and create native browser window
const {
    app,
    BrowserWindow,
    Tray
} = require('electron')

const path = require('path')

let tray

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 350,
        height: 550,
        resizable: false,
        frame: false,
        show: false
    })

    mainWindow.loadFile('index.html')

    // To get different icons depending on the platform,first comment the new Tray line below, then do this:
    // const iconName = process.platform === win32 ? 'windowsIcon.png' : 'macIcon.png'
    // const iconPath = `assets/${iconName}`
    // new Tray(iconPath)
    tray = new Tray('assets/iconTemplate.png')


    // tray onClick event
    tray.on('click', () => {
        if (mainWindow.isVisible()) {
            mainWindow.hide()
        } else {
            mainWindow.show()
        }
    })

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