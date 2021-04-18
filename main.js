// Modules to control application life and create native browser window
const {
    app,
    BrowserWindow,
    Tray,
    Menu
} = require('electron')

const path = require('path')

let tray

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 350,
        height: 450,
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
        // If the window is visible and the tray icon is clicked, it should become hidden and vice versa
        if (mainWindow.isVisible()) {
            mainWindow.hide()
        } else {
            mainWindow.show()
        }
    })


// This is to check is the window is in focus
    // function checkIfFocused() {
    //     // If the window is in focus
    //     if (mainWindow.isFocused()) {
    //         // console.log('Focused')
    //         // mainWindow.hide()
    //     }
    //     // If the window is not in focus
    //     else {
    //         mainWindow.hide()
    //     }
    //     // Check if window is in focus every 5 seconds
    //     setTimeout(checkIfFocused, 5000)
    // }
    // // Initial function call
    // checkIfFocused()

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