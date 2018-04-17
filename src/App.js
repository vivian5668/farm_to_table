import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Icon, Navbar, NavItem} from 'react-materialize';
import Nav from './Nav.js';
import Landing from './Landing';
import Listing from './Listing';
import About from './About';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          <Landing />
      </div>
    );
  }
}

export default App;
