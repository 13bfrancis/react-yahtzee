import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Yahtzee from './Components/Yahtzee';

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Yahtzee />
      </>
    );
  }
}

export default App;
