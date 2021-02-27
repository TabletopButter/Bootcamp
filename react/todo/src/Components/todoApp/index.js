import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import TodoHeader from '../todoHeader';
import TodoInput from '../todoInput';
import TodoList from '../todoList';

class TodoApp extends React.Component {
    
    constructor(props) {
        // runs any parent's constructors
        super(props);
        // initial state
            //state is React is imutable (cannot change) so you will replace
        this.state = {
            todos: [{
                id: 1,
                text: "Call Mom",
                isComplete: false
            }, {
                id:2,
                text: "Finish Homework",
                isComplete: true
            }]

        }
    }
    
    addItem = text => {
        this.setState({
            ...this.state,
            todos: [...this.state.todos, {
                id: Date.now(),
                text: text,
                isComplete:false
            }]
        })
    }
    
    render () {
        return (
            <>
                <h3>TodoApp</h3>
                <TodoHeader />
                <TodoInput 
                    addItem={this.addItem}
                />
                <TodoList 
                    todos={this.state.todos}
                />
            </>
        )
    }
}

export default TodoApp;