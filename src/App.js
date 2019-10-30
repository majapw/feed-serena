import React, { Component } from 'react';
import avocado from './images/avocado.png';
import './App.css';

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-layer">
          {/* <img src={avocado} className="App-food" alt="avocado" /> */}
        </div>
      </div>
    );
  }
}

export default App;
