import React from 'react';
import TrayIcon from './components/TrayIcon';
import TrayMenu from './components/TrayMenu';
import SettingsWindow from './components/SettingsWindow';
import FloatingWindow from './components/FloatingWindow';

class App extends React.Component {
  state = {
    showSettings: false,
    showFloatingWindow: false,
  };

  handleTrayClick = () => {
    this.setState({ showSettings: !this.state.showSettings });
  };

  handleShortcut = () => {
    this.setState({ showFloatingWindow: !this.state.showFloatingWindow });
  };

  render() {
    return (
      <div>
        <TrayIcon onClick={this.handleTrayClick} />
        {this.state.showSettings && <TrayMenu />}
        {this.state.showSettings && <SettingsWindow />}
        {this.state.showFloatingWindow && <FloatingWindow />}
      </div>
    );
  }
}

export default App;