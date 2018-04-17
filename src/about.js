import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, CardTitle } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const About = props => {
  return (
    <Row>
      <Col s={12}>
        <Row>
          <Col s={1}></Col>
          <Col s={10}>
            <h1 className='aboutheader'>About Dirt-to-Table</h1>
            <h3 className='aboutsubheader'>Miss good old milkman and fresh daily delivery? You can do the same for food!</h3>
            <p>lorem lorem lorem lorem lorem</p>
         </Col>
          <Col s={1}></Col>
        </Row>
        <Row>
          <Col s={3} className='center aboutcol'>
              <img src='./image/DV.jpg' />
              <p className='abouttext'>Daniel Vancura</p>
              <div className='iconlist'>
                <a href='https://github.com/danielrvancura'>
                  <i className='fab fa-github fa-lg'></i>
                </a>
                <a href='https://www.linkedin.com/in/daniel-vancura/'>
                  <i className='fab fa-linkedin-in fa-lg'></i>
                </a>
              </div>
            </Col>
            <Col s={3} className='center aboutcol'>
              <img src='./img/chelsea.png' />
              <p className='abouttext'>Chelsea Zhu</p>
              <div className='iconlist'>
                <a href='https://github.com/vivian5668'>
                  <i className='fab fa-github fa-lg'></i>
                </a>
                <a href='https://www.linkedin.com/in/chelsea-qianwei-zhu'>
                  <i className='fab fa-linkedin-in fa-lg'></i>
                </a>
              </div>
            </Col>
            <Col s={3} className='center aboutcol'>
              <img src='./img/mike.png' />
              <p className='abouttext'>Michael Hammer</p>
              <div className='iconlist'>
                <a href="https://github.com/HamMike">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/michael-a-hammer">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </div>
            </Col>
            <Col s={3} className='center aboutcol'>
              <img src='./img/scott.png' />
              <p className='abouttext'>Scott Molsness</p>
              <div className='iconlist'>
                <a href="https://github.com/smolsn13">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/scottmolsness">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </div>
            </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default About;
