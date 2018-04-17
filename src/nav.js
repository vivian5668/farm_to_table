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
       <div className="container">
         <nav class="black" className="nav">
        <Link to="/Landing" component={Landing}><i class="fas fa-home"></i></Link>
        <Link to="/Listing" component={Listing}>Listing</Link>
        <Link to="/About" component={About}>About</Link>
        <Link to="#" component={About}>How It Works</Link>
        <Link to= "#" ><i class="fas fa-search"></i></Link>
        <Link to= "#" ><i class="fas fa-shopping-cart"></i></Link>
      </nav>
      <img className="navbar" src="./image/navbar image.png" />
        <Route exact path="/Landing" component={Landing} />
        <Route path="/Listing" component={Listing} />
        <Route path="/About" component={About} />

        {/* <Row>
          <Col s={1} className='grid-example'></Col>
          <Col s={1} className='grid-example'></Col>
          <Col s={1} className='grid-example'></Col>
          <Col s={1} className='grid-example'></Col>
          <Col s={1} className='grid-example'></Col>
          <Col s={1} className='grid-example'>6</Col>
          <Col s={1} className='grid-example'></Col>
          <Col s={1} className='grid-example'></Col>
          <Col s={1} className='grid-example'></Col>
          <Col s={1} className='grid-example'></Col>
          <Col s={1} className='grid-example'></Col>
          <Col s={1} className='grid-example'></Col>
        </Row> */}


    </div>
    </Router>

    )
  }
export default Nav;
