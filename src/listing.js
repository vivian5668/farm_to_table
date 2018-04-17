import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, CardTitle } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './index.css';


const Listing = props => {
  return (
  	<div>
  		<div className='list_row'>
	  		<div className='list_item'>
	  			<img src='../image/Fuji_Apples.jpg' />
			</div>
			<div className='list_item'>
				<img src='../image/Fuji_Apples.jpg' />
			</div>
			<div className='list_item'>
				<img src='../image/Fuji_Apples.jpg' />
			</div>
		</div>


		<div className='list_row'>
			<div className='list_item'>
				<img src='../image/Fuji_Apples.jpg' />
			</div>
			<div className='list_item'>
				<img src='../image/Fuji_Apples.jpg' />
			</div>
			<div className='list_item'>
				<img src='../image/Fuji_Apples.jpg' />
			</div>
		</div>
	</div>
  )
}

export default Listing;
