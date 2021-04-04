import React from 'react'
import Child from './Child'


// I completly forgot to add the .env file that made react live update possible and spent way to much time wondering why my code wasnt working


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