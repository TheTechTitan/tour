import React, { Component } from 'react';
import Categories from "./Categories";
import NavigationBar from './NavigationBar.js'
import UserForm from './components/UserForm.js'


class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <div>
          <UserForm/>
        </div>
          <br/>
        <div>
          <Categories/>
        </div>

      </div>
    );
  }
}

export default App;
