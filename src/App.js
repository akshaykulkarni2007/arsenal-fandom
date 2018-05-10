import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/Common/Nav';
import NavDrawer from './components/Common/NavDrawer';

import SquadList from './components/Squad/SquadList';

import './App.css';

class App extends Component {

  state = {
    navDrawer: {
      open: false
    }
  }

  handleNavMenuTrigger = () => {
    this.setState({navDrawer: {...this.state.navDrawer, open: !this.state.navDrawer.open}})
  };

  handleNavMenuClose = () => this.setState({navDrawer: {...this.state.navDrawer, open: false}});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar triggerNavMenu = {this.handleNavMenuTrigger}/>
          <NavDrawer open = {this.state.navDrawer.open} handleClose = {this.handleNavMenuClose}/>
          <SquadList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
