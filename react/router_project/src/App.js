import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './HomeComponent';
import About from './AboutComponent'
import Contact from './ContactComponent'

class App extends Component {
  render() {
    return(
      //where we will build our routes
     
     <Router>
      <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <hr/>
            <Route exact path ="/" component={Home}/>
            <Route path ="/about" component={About}/>
            <Route path ="/contact" component={Contact}/>
          </div>
        </div>
    </Router>
    )
  }
}

export default App;
