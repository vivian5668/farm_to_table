import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, CardTitle } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './index.css';


const Listing = props => {
  return (
  	<div className="hello">
  		<div className='list_row'>
            <div className='list_item'>
                <img src="../image/blueberry.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Blueberries</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Kiwis.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Kiwis</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/mandarine.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Mandarine Oranges</p>
                </div>
            </div>
		</div>


		<div className='list_row'>
            <div className='list_item'>
                <img src="../image/Blackberries.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Blackberries</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Mutsu.jpeg" alt="Farm" />
                <div className="text-block">
                  <p>Mutsu Apples</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Orangw.JPG" alt="Farm" />
                <div className="text-block">
                  <p>Oranges</p>
                </div>
            </div>
		</div>

		<div className='list_row'>
            <div className='list_item'>
                <img src="../image/strawberry.jpeg" alt="Farm" />
                <div className="text-block">
                  <p>Strawberries</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Apples.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Cameo Apples</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Apples5.jpeg" alt="Farm" />
                <div className="text-block">
                  <p>Gala Apples</p>
                </div>
            </div>
		</div>
	</div>
  )
}

export default Listing;
