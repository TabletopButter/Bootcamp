import React from 'react'

class Child extends React.Component {
  render(){

    return (
        <>
            
            <input type="text" 
            placeholder="Please Enter Your Name"
            onChange={this.props.handleChange}
            value={this.props.name}
            />
        </>
    )
  }
} 

export default Child