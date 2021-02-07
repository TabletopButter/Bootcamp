import React, {Component} from 'react';
import './App.css';
import Box from './Box'

class FourBoxesApp extends Component {
  render() {
    return(
      <div className="App">
        <Box className='box' boxNum="1"/><Box className='box' boxNum="2"/><Box className='box' boxNum="3"/><Box className='box' boxNum="4"/>
      </div>
    )
  }
}

export default FourBoxesApp;
