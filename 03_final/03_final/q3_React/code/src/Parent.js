import React from 'react'
import Child from './Child'

class Parent extends React.Component {

  constructor(props){
    super(props)
    this.state = {name: ''}
  }


  handleChange = (event) => {
    this.setState({
      name:event.target.value
    })
  }

  render(){
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <Child
            handleChange = {this.handleChange}
            value = {this.state.name}
        />
 
      </div>
    )
  }

} 

export default Parent