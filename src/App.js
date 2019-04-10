import React, { Component } from 'react';
import NavigationBar from './NavigationBar.js'
import UserForm from './components/UserForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <div className="App-header">
          <UserForm/>
        </div>
      </div>
    );
  }
}

export default App;
