import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, CardTitle } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './index.css';


const Fruits = props => {
  return (
  	<div className="hello">
  		<div className='list_row'>
            <div className='list_item'>
                <img src="../image/Apples.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Crispy Apples</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Apples2.jpeg" alt="Farm" />
                <div className="text-block">
                  <p>Sweet Apples</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Apples3.jpeg" alt="Farm" />
                <div className="text-block">
                  <p>Organic Apples</p>
                </div>
            </div>
		</div>


		<div className='list_row'>
            <div className='list_item'>
                <img src="../image/Apples4.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Sweet Apples</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Apples5.jpeg" alt="Farm" />
                <div className="text-block">
                  <p>Fresh Apples</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Farm.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Spring Apples</p>
                </div>
            </div>
		</div>
	</div>
  )
}

export default Fruits;
