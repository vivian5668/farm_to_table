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
                  <p>What a beautiful organic blueberry!</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Kiwis.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Fresh Organic Kiwis</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/mandarine.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Mandarines from Dan's Farm</p>
                </div>
            </div>
		</div>


		<div className='list_row'>
            <div className='list_item'>
                <img src="../image/Market.jpeg" alt="Farm" />
                <div className="text-block">
                  <p>Organic Market</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Mutsu.jpeg" alt="Farm" />
                <div className="text-block">
                  <p>Fresh Mutsu!</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Orangw.JPG" alt="Farm" />
                <div className="text-block">
                  <p>Sweet Oranges!</p>
                </div>
            </div>
		</div>

		<div className='list_row'>
            <div className='list_item'>
                <img src="../image/strawberry.jpeg" alt="Farm" />
                <div className="text-block">
                  <p>Hand-picked strawberries</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Box.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Fresh produce, better living~</p>
                </div>
            </div>
            <div className='list_item'>
                <img src="../image/Farm.jpg" alt="Farm" />
                <div className="text-block">
                  <p>Daniel's Organic Farm</p>
                </div>
            </div>
		</div>
	</div>
  )
}

export default Listing;
