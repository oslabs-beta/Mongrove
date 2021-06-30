const { app, BrowserWindow } = require('electron');


require('../backend/channels');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nativeWindowOpen: true,
      webSecurity: false,
    }
  });

  // and load the index.html of the app.
  win.loadFile('dist/index.html');
}

app.on('ready', createWindow);
