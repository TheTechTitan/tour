import React, {Component} from 'react';
import "./NavigationBar.css"


class NavigationBar extends Component {
    render() {
        return (
            <div className="container">
                <header className="App-header" style={{marginLeft:50}}>

                    <h1 className="texTour">Tour Sri Lanka</h1>
                    <p>Are you a registered Travel Agent? <a href="%PUBLIC_URL%/index.html">Register</a></p>

                </header>
            </div>
        );
    }
}

export default NavigationBar;
