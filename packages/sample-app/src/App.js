import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {ThemeProvider} from 'styled-components';
import {Button} from 'sample-components';

class App extends Component {
  render() {
    return (
    	<ThemeProvider theme={{accent: "red"}}>
	      <div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <Button>The Imported Button</Button>
	        </header>
	      </div>
      </ThemeProvider>
    );
  }
}

export default App;
