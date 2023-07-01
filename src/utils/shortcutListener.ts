import { app, globalShortcut } from 'electron';
import { showFloatingWindow } from '../main';

app.on('ready', () => {
  globalShortcut.register('Option+X', () => {
    showFloatingWindow();
  });
});

app.on('will-quit', () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll();
});