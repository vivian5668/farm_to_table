import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, Slider, Slide, Button } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';


const Landing = props => {
  return (
      <Slider fullscreen='True' id="hello">
        <Slide
          src="../image/tornado.png"
          title="This is our big Tagline!">
          Here's our small slogan.
          <div>
            <Button id='landing_button' waves='light'>button<Icon right>cloud</Icon></Button>
          </div>
        </Slide>
        <Slide
          src="../image/earthquake.png"
          title="Left aligned Caption"
          placement="left">
          Here's our small slogan.
          <div>
            <Button id='landing_button2' waves='light'>button<Icon right>cloud</Icon></Button>
          </div>          
        </Slide>
        <Slide
          src="../image/tornado.png"
          title="Right aligned Caption"
          placement="right">
          Here's our small slogan.
          <div>
            <Button id='landing_button3' waves='light'>button<Icon right>cloud</Icon></Button>
          </div>          
        </Slide>
      </Slider>
  )
}

export default Landing;
