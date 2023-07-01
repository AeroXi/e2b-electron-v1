import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
import App from './App';

ipcRenderer.on('show-settings', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

ReactDOM.render(<App />, document.getElementById('root'));