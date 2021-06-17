const { app, BrowserWindow } = require('electron');
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

require('../backend/channels');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // and load the index.html of the app.
  win.loadFile('index.html');
}

app.on('ready', createWindow);