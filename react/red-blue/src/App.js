import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      favColor: 'red'
    }
    setTimeout(()=>this.setState({favColor:'blue'}), 5000);
  }

  render(){
    const {favColor} = this.state;
    return(
      <div>
        My favorite color is: {favColor}.
      </div>
    );
  }
}


export default App;