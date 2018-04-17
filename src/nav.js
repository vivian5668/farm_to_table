import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Icon, Navbar, NavItem} from 'react-materialize';
import App from './App.js';


class Nav extends React.PureComponent {
  render() {
    return (
      <div className="nav-wrapper">
      <nav>

     <a href="#" class="brand-logo">Logo</a>
     <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li><a href="sass.html">Sass</a></li>
       <li><a href="badges.html">Components</a></li>
       <li><a href="collapsible.html">JavaScript</a></li>
     </ul>
        {/* <div>
          <Navbar brand='logo' right>
            <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
          </Navbar> */}
            </nav>
        </div>

      );
    }
  }
export default Nav;
