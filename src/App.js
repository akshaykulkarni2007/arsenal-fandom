import React, { Component } from 'react';

import SquadList from './components/Squad/SquadList';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/Common/Nav';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <SquadList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
