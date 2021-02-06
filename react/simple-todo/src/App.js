import React, {Component} from 'react';
import './App.css';
import TodoItem from './TodoItem';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [],
      newTodo: ''
    }

    // this.handleChange = this.handleChange.bind(this) - we fixed this with the fat arrow function so we have access to it within the entire app
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();  //do not want the browser to reload the page
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos,newTodo:''}); //sets the state with the new todos list & sets the input field back to blank
  }

  render() {
    
    const todoList = this.state.todos.map((todo,index) => (
      <TodoItem key ={index} text ={todo} />
    ))
    
    return(
      <div className = "App">
        <h1>I am the Todo App</h1>
        <form onSubmit= {this.handleSubmit}>
          <input 
          type="text" 
          className="todo-input" 
          name="newTodo" // need to refrence later
          placeholder='What needs to be done?' 
          autoComplete='off' // helps prevent user browser from auto completing
          value={this.state.newTodo}
          onChange={this.handleChange}  // every time user types, a change happens
          />
         
          <button type="submit" className="save-button">SAVE</button>
        </form>

        <div className="todo-conent">
          <ol>
            {/*This is where our list of todos will go */todoList}
          </ol>
        </div>
      </div>
    )
  }
}

export default App;
