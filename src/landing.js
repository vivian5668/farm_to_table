import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, Slider, Slide, Button, CardTitle } from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import Fruits from './Fruits';



const Landing = props => {
  return (
   <Router> 
    <div>
      <Row>
        <Col s={1}></Col>
        <Col s={3}>
          <p> heudhuehduuheudhuehduh bubebdubedujendjunjiediendi</p>
        </Col>
        <Col s={4} className='landing_row'>
            <div className='list_item'>
 
                <img src="nature.jpg" alt="Norway" />
                <div className="text-block"> 
                  <h4>Nature</h4>
                  <p>What a beautiful sunrise</p>
                </div>
            </div>
        </Col>
        <Col s={4} className='landing_row'>
            <div className='list_item'>
              <img src='../image/Farm.jpg' />
            </div>       
        </Col>
      </Row>

      <Row>
        <Col s={1}></Col>
        <Col s={3}>
          <p> heudhuehduuheudhuehduh bubebdubedujendjunjiediendi</p>
        </Col>
        <Col s={4}>
            <div className='list_item'>
              <img src='../image/Apples.jpg' />
            </div>
        </Col>
        <Col s={4}>
            <div className='list_item'>
              <img src='../image/Farm.jpg' />
            </div>       
        </Col>
      </Row>
      <Route path="/Fruits" component={Fruits} />
    </div>

  </Router>
  )
}

export default Landing;
