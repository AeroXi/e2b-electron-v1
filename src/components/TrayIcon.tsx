import { Tray, Menu } from 'electron';
import path from 'path';

class TrayIcon {
  private tray: Tray | null = null;

  constructor(private app: Electron.App, private mainWindow: Electron.BrowserWindow) {}

  create() {
    this.tray = new Tray(path.join(__dirname, 'tray-icon.png'));
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Settings', click: this.showSettings },
      { type: 'separator' },
      { label: 'Quit', click: this.quitApp },
    ]);
    this.tray.setToolTip('Tray Application');
    this.tray.setContextMenu(contextMenu);
  }

  private showSettings = () => {
    this.mainWindow.webContents.send('show-settings');
  };

  private quitApp = () => {
    this.app.quit();
  };
}

export default TrayIcon;