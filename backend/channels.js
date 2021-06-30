import { ipcMain } from 'electron'
const runQuery = require('./functions/runQuery')
const { generateTestDatabase } = require('./functions/generateTestDatabase')
const { app, BrowserWindow } = require('electron')

// Handle call to the run-query channel and return the response time to ipcRenderer
ipcMain.handle('run-query', async (event, ...args) => {
  const responseTime = await runQuery(...args)
  return responseTime
})

// Handle call to the generate-test-database channel and return the response time to ipcRenderer
ipcMain.handle('generate-test-data', async (event, ...args) => {
  const data = await generateTestDatabase(...args);
  return data;
})

// Open the help modal on call to open-help channel
ipcMain.on('open-help', function () {
  const win = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nativeWindowOpen: true,
      webSecurity: false,
      name: 'helpModal'
    }
  })

  // Load the help modal
  win.loadFile('client/help.html');
})
