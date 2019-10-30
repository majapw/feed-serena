import React, { Component } from 'react';
import logo from './feed-serena.png';
import avocado from './images/avocado.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>FEED SERENA</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-layer">
          <img src={avocado} className="App-food" alt="avocado" />
        </div>
      </div>
    );
  }
}

export default App;
