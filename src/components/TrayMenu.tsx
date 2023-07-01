import { remote } from 'electron';
import React from 'react';

const TrayMenu = () => {
  const { Menu, MenuItem } = remote;

  const handleSettingsClick = () => {
    window.ipcRenderer.send('show-settings');
  };

  const handleQuitClick = () => {
    window.ipcRenderer.send('quit-app');
  };

  const menu = new Menu();
  menu.append(new MenuItem({ label: 'Settings', click: handleSettingsClick }));
  menu.append(new MenuItem({ label: 'Quit', click: handleQuitClick }));

  return (
    <div onClick={() => menu.popup({ window: remote.getCurrentWindow() })}>
      <img src="tray-icon.png" alt="Tray Icon" />
    </div>
  );
};

export default TrayMenu;