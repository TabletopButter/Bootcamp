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
            }],
            newTodo:""

        }
    }
    
    addItem = () => {
        
        // this.setState(function(prevState,prevProps) {     //overloading w/ functional setState
        //     return prevState;
        // })
        
        
        this.setState({
            ...this.state,
            todos: [...this.state.todos, {
                id: Date.now(),
                text: this.state.newTodo,
                isComplete:false
            }],
            newTodo:""
        }
        ,
        function() {
            console.log('State after addItem: ',this.state)
        })

        //console.log('State after addItem: ',this.state)
    }

    handleChange = event => {
        // console.log('hhandleChange: the target is', event.target)
        this.setState({
            newTodo:event.target.value
        })
    }

    toggleComplete = id => {
        //make a true copy of state

        // find the ordinal(1st,2nd, 3rd etc) for the todo that the user clicked using the id within the PrevState

        // get a pointer (object ref) to that specific todo obj within the PrevState

        //toggle the isComplete propery of that todo obj within the PrevState

        //replace the state with true PrevState

        this.setState(function(prevState) {     //overloading w/ functional setState
             
            let indexOfTodo = prevState.todos.findIndex(
                t => t.id === id
            )
            //console.log('found the index: ',indexOfTodo)

            let thatTodo = prevState.todos[indexOfTodo]

            thatTodo.isComplete = !thatTodo.isComplete
            
            return prevState;
        })
    }

    handleDelete = id => {
        
        this.setState(function(prevState) {
            let filteredList = prevState.todos.filter(
                t => t.id !== id
            )

            prevState.todos = filteredList;

            return prevState;
        })

    }
    
    render () {
        return (
            <>
                <TodoHeader />
                <TodoInput 
                    addItem={this.addItem}
                    handleChange = {this.handleChange}
                    newTodo={this.state.newTodo}
                />
                <TodoList 
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    handleDelete={this.handleDelete}
                />
            </>
        )
    }
}

export default TodoApp;