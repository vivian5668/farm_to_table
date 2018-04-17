import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, Slider, Slide, Button, CardTitle } from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import Fruits from './Fruits';



const Landing = props => {
  return (
   <Router>
    <div className="hello">
      <Row>
        <Col s={1}></Col>
        <Col s={3}>
          <p className='intro'>

            <h4>Produce from the farm delivered direct to your door. </h4> <br/>
            We believe if more people eat locally grown food and practice a healthy lifestyle we can increase the health and well being of every individual, family and farmer in the community.
          </p>
        </Col>
        <Col s={4} className='landing_row'>
            <div className='list_item'>
                <img src="../image/Farm.jpg" alt="Farm" />
                <div className="text-block">
                  <p>What a beautiful sunrise</p>
                </div>
            </div>
        </Col>
        <Col s={4} className='landing_row'>
            <div className='list_item'>
                <img src="../image/Farm.jpg" alt="Farm" />
                <div className="text-block">
                  <p>What a beautiful sunrise</p>
                </div>
            </div>
        </Col>
      </Row>

      <Row>
        <Col s={1}></Col>
        <Col s={3}>
          <p className='intro'> Our mission is to make locally grown food easily accessible for the community to enjoy.
          </p>
        </Col>
        <Col s={4}>
            <div className='list_item'>
                <img src="../image/Farm.jpg" alt="Farm" />
                <div className="text-block">
                  <p>What a beautiful sunrise</p>
                </div>
            </div>
        </Col>
        <Col s={4}>
            <div className='list_item'>
                <img src="../image/Farm.jpg" alt="Farm" />
                <div className="text-block">
                  <p>What a beautiful sunrise</p>
                </div>
            </div>
        </Col>
      </Row>
      <Route path="/Fruits" component={Fruits} />
    </div>

  </Router>
  )
}

export default Landing;
