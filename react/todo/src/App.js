import React from 'react'
import './App.css';
import TodoApp from './Components/todoApp';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <h1>TodoMatic</h1>
        <TodoApp />
      </div>
    )
  }
}





export default App;

/* User Stories:
  1.Read a list of todos, so that the browser render them (done)
  2.Add a todo using keyboard, so that someone who prefers keyboard input can add
  2a. Add a todo using mouse, so that a user on a phone can also use our app
  3.Mark a todo as complete using a mouse click
  4.View a category of todos ex. a. all todos b. not complete todos only c. completed todos only
  5.Delete a todo using mouse click

  6. Add todo ownership and view only user's todos

*/
