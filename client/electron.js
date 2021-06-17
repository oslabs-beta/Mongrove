const { app, BrowserWindow } = require('electron');
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

// try {
// 	require('electron-reloader')(module, {
//     watchRenderer: true
//   })
// } catch (_) { console.log('Error'); }

// require('electron-reload')(__dirname, {
//     electron: path.join(__dirname, 'node_modules', 'electron'),
//     hardResetMethod: 'exit'
// });

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  });

  // and load the index.html of the app.
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
}).then(createWindow);

// app.on('ready', createWindow);