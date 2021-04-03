### Question:

Where in a react component would you put code 
that you only want to invoke when said component mounts?

Include class and functional component methods of doing this. 
Provide examples.

If you don't recall, research it and provide examples.


### Answer

The componentDidMount() method would be the best place because it takes place after the component renders


You would have your react app

import React, {Component}  from 'react'

class App extends Component {

    cosntructor here

    somesortofCallHere(()=> {
        this.setState({data})
    })

    componentDidMount() {
        this.somesortofCallhere();
    }

    render() {
        return()
            <div>
                {this.state.data}
            </div>
    }

}