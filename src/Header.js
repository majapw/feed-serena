import React, { Component } from 'react';
import logo from './images/serena.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="Header-title">
          <span className="Header-title--gold">Feed</span><br />
          <span className="Header-title--seafoam">Serena</span><br />
          <span className="Header-title--babyblue">.com</span>
        </h1>
        <img src={logo} className="Header-logo" alt="logo" />
      </div>
    );
  }
}

export default Header;
