import React, { Component } from 'react';
import OutlinedInputAdornments from './OutlinedInputAdornments'
import NavigationBar from './NavigationBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <div className="App-header">
          <OutlinedInputAdornments/>
        </div>
      </div>
    );
  }
}

export default App;
