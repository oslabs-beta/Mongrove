import { ipcMain } from "electron";
const runQuery = require('./functions/runQuery');

ipcMain.handle('run-query', async (event, ...args) => {
  let responseTime = await runQuery(...args);
  return responseTime;
})