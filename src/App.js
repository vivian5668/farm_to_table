import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Icon} from 'react-materialize'


class App extends Component {
  render() {
    return (
      <div className="App">
          <Button floating fab='vertical' icon='mode_edit' className='red' large style={{bottom: '45px', right: '24px'}}>
            <Button floating icon='insert_chart' className='red'/>
            <Button floating icon='format_quote' className='yellow darken-1'/>
            <Button floating icon='publish' className='green'/>
            <Button floating icon='attach_file' className='blue'/>
          </Button>
      </div>
    );
  }
}

export default App;
