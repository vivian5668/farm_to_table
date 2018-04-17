import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, Slider, Slide, Button, CardTitle } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';


const Landing = props => {
  return (
    <div>
      <Row>
        <Col s={4}>
          <p> heudhuehduuheudhuehduh bubebdubedujendjunjiediendi</p>
        </Col>
        <Col s={4} className='landing_row'>
            <div className='list_item'>
              <img src='../image/Fuji_Apples.jpg' />
            </div>
        </Col>
        <Col s={4} className='landing_row'>
            <div className='list_item'>
              <img src='../image/Fuji_Apples.jpg' />
            </div>       
        </Col>
      </Row>

      <Row>
        <Col s={4}>
          <p> heudhuehduuheudhuehduh bubebdubedujendjunjiediendi</p>
        </Col>
        <Col s={4}>
            <div className='list_item'>
              <img src='../image/Fuji_Apples.jpg' />
            </div>
        </Col>
        <Col s={4}>
            <div className='list_item'>
              <img src='../image/Fuji_Apples.jpg' />
            </div>       
        </Col>
      </Row>
    </div>
  )
}

export default Landing;
