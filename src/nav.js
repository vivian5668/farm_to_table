import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {Button, Icon, Navbar, NavItem} from 'react-materialize';
import App from './App.js';


const Nav = props => {
    return (
      <Navbar brand='logo' left>
        <NavItem href='get-started.html'>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
      </Navbar>
    )
  
  }
export default Nav;
