import React, { Component } from 'react';
import Categories from "./Categories";
import NavigationBar from './NavigationBar.js'
import UserForm from './components/UserForm.js'
import "./Photos/shaun-salmon-1271866-unsplash.jpg";


class App extends Component {

    bg = {
        backgroundImage: './Photos/shaun-salmon-1271866-unsplash.jpg'
    }

  render() {
    return (
      <div>
        <NavigationBar/>
        <section style={this.bg}>
            <div>
              <UserForm/>
            </div>
        </section>
          <br/>
        <div>
          <Categories/>
        </div>

      </div>
    );
  }
}

export default App;
