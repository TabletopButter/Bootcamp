import React, { Component } from 'react';

class Clicker extends Component {
    
    constructor(props) {
        super(props);
        this.state = {num:1};
        this.genRandom = this.genRandom.bind(this);
    }
    
    
    genRandom() {
        //We need +1, otherwise it will give us numbers 0-9
        let rand = Math.floor(Math.random()*10) +1;
        //update state with new random number
        this.setState({num:rand});
    }

    render() {
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                {/*Ternary operator that checks to see if the random number is equal to 7, or display the button to click */this.state.num ==7 ? <h2>Game Over</h2> : <button onClick={this.genRandom}>Random Number</button>}                
            </div>
        )
    }
}


export default Clicker;