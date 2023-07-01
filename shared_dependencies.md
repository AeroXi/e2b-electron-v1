1. Dependencies:
    - "electron": Required for creating the Electron app.
    - "react": Required for creating the React components.
    - "react-dom": Required for rendering the React components.
    - "typescript": Required for writing TypeScript code.

2. Exported Variables:
    - "App" from "src/App.tsx": The main React component of the application.
    - "TrayIcon" from "src/components/TrayIcon.tsx": The React component for the tray icon.
    - "TrayMenu" from "src/components/TrayMenu.tsx": The React component for the tray menu.
    - "SettingsWindow" from "src/components/SettingsWindow.tsx": The React component for the settings window.
    - "FloatingWindow" from "src/components/FloatingWindow.tsx": The React component for the floating window.

3. Data Schemas: None specified in the prompt.

4. ID Names of DOM Elements:
    - "root" in "public/index.html": The root element where the React app is injected.

5. Message Names:
    - "show-settings" and "quit-app" for communication between main and renderer processes in Electron.

6. Function Names:
    - "createWindow" in "src/main.ts": Function to create the main window of the Electron app.
    - "createTray" in "src/main.ts": Function to create the tray icon.
    - "showSettings" in "src/main.ts": Function to show the settings window.
    - "quitApp" in "src/main.ts": Function to quit the app.
    - "showFloatingWindow" in "src/utils/shortcutListener.ts": Function to show the floating window when the shortcut is pressed.