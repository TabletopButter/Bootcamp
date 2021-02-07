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
    
    rSize = () => {
        let size = [74, 28, 36, 85][Math.floor(Math.random() * 4)];
        return size;
    }

    render() {       
        
        const {boxNum} = this.props;
        let bgStyle = {backgroundColor:this.bgColor(), borderColor:this.borderColor(),width:this.rSize(), height:this.rSize()}
    
        return(
            
            <div className='box' name='box1' style={bgStyle}><span>{boxNum}</span></div>
        
        )
    }
}

export default Box;