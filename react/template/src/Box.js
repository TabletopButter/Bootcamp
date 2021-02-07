import React, { Component } from 'react';


class Box extends Component {
    
    bgColor = () => {
        let bg = ['red', 'green', 'blue','grey', 'yellow', 'orange', 'purple', 'cyan', 'crimson', 'ghostwhite', 'indigo', 'lavender'][Math.floor(Math.random() * 12)];
        return bg;
    }
    
    borderColor = () => {
        let bC = ['red', 'green', 'blue','grey', 'yellow', 'orange', 'purple', 'cyan', 'crimson', 'ghostwhite', 'indigo', 'lavender'][Math.floor(Math.random() * 12)];
        return bC;
    }
    
    render() {       
        
        const {boxNum} = this.props;
        let bgStyle = {backgroundColor:this.bgColor(), borderColor:this.borderColor()}
    
        return(
            
            <div className='box' name='box1' style={bgStyle}>{boxNum}</div>
        
        )
    }
}

export default Box;