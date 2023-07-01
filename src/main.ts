```typescript
import { app, BrowserWindow, Tray, Menu, ipcMain } from 'electron';
import * as path from 'path';
import { showFloatingWindow } from './utils/shortcutListener';

let tray: Tray | null = null;
let settingsWindow: BrowserWindow | null = null;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, '../public/index.html'));
}

function createTray() {
  tray = new Tray(path.join(__dirname, 'assets/trayIcon.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Settings', click: showSettings },
    { label: 'Quit', click: quitApp },
  ]);
  tray.setToolTip('Electron App');
  tray.setContextMenu(contextMenu);
}

function showSettings() {
  if (settingsWindow) {
    settingsWindow.focus();
    return;
  }

  settingsWindow = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  settingsWindow.loadFile(path.join(__dirname, '../public/settings.html'));

  settingsWindow.on('closed', () => {
    settingsWindow = null;
  });
}

function quitApp() {
  app.quit();
}

app.whenReady().then(() => {
  createWindow();
  createTray();
  showFloatingWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('show-settings', showSettings);
ipcMain.on('quit-app', quitApp);
```