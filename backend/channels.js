import { ipcMain } from "electron";
const runQuery = require('./functions/runQuery');
const { app, BrowserWindow } = require('electron');


//HANDLE RUNQUERY 
ipcMain.handle('run-query', async (event, ...args) => {
  let responseTime = await runQuery(...args);
  return responseTime;
})



//HANDLE OPEN HELP MODAL
ipcMain.on('open-help', function(){
  // Create the browser window.
  let win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nativeWindowOpen: true
    }
  });

  // and load the index.html of the app.
  win.loadFile('client/help.html');
})
  
