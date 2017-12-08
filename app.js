let electron = require('electron');

let app = electron.app;
let BrowserWindow = electron.BrowserWindow;

function checkDebug(w, flag) {
    if(flag) {
        return w * 2;
    } else {
        return w;
    }
}

let debugMode = true;

let winOpts = {
    width: checkDebug(275, debugMode),
    height: 275
};

app.on('ready', function() {
    let win = new BrowserWindow(winOpts);

    win.loadURL(`file://${__dirname}/index.html`);

    if(debugMode) {
        win.webContents.openDevTools();
    }
});