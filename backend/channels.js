import { ipcMain } from "electron";
const generateSchema = require('./functions/generateSchema');

ipcMain.handle('generate-schema', async (event, ...args) => {
  console.log('args: ', ...args);
  await generateSchema(...args);
  return "Added schema";
})

ipcMain.handle('run-query', async (event, ...args) => {
  let responseTime = await runQuery(...args);
  return responseTime;
})