import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";

class TodoInput extends React.Component {
    
    add = event => {
        //prevents the default behavior of the form, which would refresh the page
        event.preventDefault()

        // if(!this.todoInput.value) return; //if nothing in input, bail out, want the value so we dont get 0 length strings added
        this.props.addItem() // call the addItem from TodoApp component which was recieved as a prop
        // this.todoInput.value = ""; //empty out the input
    }
    
    render () {
        return (
          <div className="inputContainer">
              <form onSubmit={this.add}>
                <input 
                    type="text" 
                    placeholder="enter your task here"
                    name="todoInput"
                    //lets setup ref with a function, for flexibility(later use)
                    // ref={r=> {this.todoInput = r}} 
                    onChange={this.props.handleChange}
                    value={this.props.newTodo}
                />
              </form>
          </div>
        )
    }
}

export default TodoInput;