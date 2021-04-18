// Modules to control application life and create native browser window
const {app, BrowserWindow, shell} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 350,
    height: 550,
    resizable: false,
    frame: false
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

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
