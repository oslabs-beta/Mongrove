import { ipcMain } from "electron";
const runQuery = require('./functions/runQuery');
const generateTestDatabase = require('./functions/generateTestDatabase');
const { app, BrowserWindow } = require('electron');


//HANDLE RUNQUERY 
ipcMain.handle('run-query', async (event, ...args) => {
  let responseTime = await runQuery(...args);
  return responseTime;
})

ipcMain.handle('generate-test-data', async (event, ...args) => {
  let data = await generateTestDatabase(...args);
  return data;
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
      nativeWindowOpen: true,
      name:'helpModal'
    }
  });

  // and load the index.html of the app (looks in dist, not main directory, because we told it to in webpack (output))
  win.loadFile('../client/help.html');
})
  
