import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, CardTitle } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Listing = props => {
  return (
  	<div>
		<Row>
		  <Col s={3} className='grid-example'>
		  	<img src="" />
		  </Col>
		  <Col s={3} className='grid-example'>
		  	<img src="" />
		  </Col>
		  <Col s={3} className='grid-example'>
		  	<img src="" />
		  </Col>
		  <Col s={3} className='grid-example'>
		  	<img src="" />
		  </Col>

		</Row>
		<Row>
		  <Col s={3} className='grid-example'>
		  	<img src="" />
		  </Col>
		  <Col s={3} className='grid-example'>
		  	<img src="" />
		  </Col>
		  <Col s={3} className='grid-example'>
		  	<img src="" />
		  </Col>
		  <Col s={3} className='grid-example'>
		  	<img src="" />
		  </Col>

		</Row>
	</div>
  )
}

export default Listing;
