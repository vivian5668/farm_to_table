import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {Navbar, NavItem} from 'react-materialize';
import App from './App.js';
import Landing from './Landing';
import Listing from './Listing';
import About from './About';
import { Row, Col, Icon, Card, Slider, Slide, Button } from 'react-materialize';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const Nav = props => {
    return (

      <Router>
       <div>
         <nav>
        <Link to="/Landing" component={Landing}>Home</Link>
        <Link to="/Listing" component={Listing}>Listing</Link>
        <Link to="/About" component={About}>About</Link>
        {/* <NavItem href='get-started.html'><Icon>Cart</Icon></NavItem> */}
        <Link to= "#" ><i class="material-icons">shopping_cart</i></Link>
      </nav>
        <Route exact path="/Landing" component={Landing} />
        <Route path="/Listing" component={Listing} />
        <Route path="/About" component={About} />


    </div>
    </Router>

    )
  }
export default Nav;
