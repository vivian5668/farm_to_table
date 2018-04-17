import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {Navbar, NavItem} from 'react-materialize';
import App from './App.js';
import Landing from './Landing';
import Listing from './Listing';
import About from './About';
import Fruits from './Fruits';
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
  <Link to="/Fruits"><img className="navbar" src="./image/Nav Bar with Basket.png" /></Link>
        <Route exact path="/Landing" component={Landing} />
        <Route path="/Listing" component={Listing} />
        <Route path="/About" component={About} />
        <Route path="/Fruits" component={Fruits} />


</div>


    </Router>

    )
  }
export default Nav;
