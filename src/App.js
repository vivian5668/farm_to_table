import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Icon} from 'react-materialize';
import Landing from './Landing';
import Listing from './Listing';
import About from './About';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Button floating fab='vertical' icon='mode_edit' className='red' large style={{bottom: '45px', right: '24px'}}>
            <Button floating icon='insert_chart' className='red' node='a' href='http://www.google.com'/>
            <Button floating icon='format_quote' className='yellow darken-1' node='a' href='http://www.google.com'/>
            <Button floating icon='publish' className='green' node='a' href='http://www.google.com'/>
            <Button floating icon='attach_file' className='blue' node='a' href='http://www.google.com'/>
          </Button>
          <Landing />
     
      </div>
    );
  }
}

export default App;
