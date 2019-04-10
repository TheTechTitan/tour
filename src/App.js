import React, { Component } from 'react';
import './App.css';
import Userform from './components/UserForm';
import {Test} from './components/test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Userform/>
      </div>
    );
  }
}

export default App;
