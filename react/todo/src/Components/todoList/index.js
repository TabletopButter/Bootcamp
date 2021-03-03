import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";

class TodoList extends React.Component {
    render () {
        return (
                this.props.todos.map(
                    t => {
                        let isCompleteStyle=t.isComplete ? {textDecoration:'line-through', color:'gray'} : {}
                        return (
                            
                         <div key={t.id}> 
                            <li 
                                key={t.id} 
                                style={isCompleteStyle}
                                className="todos"
                                onClick={ () => {this.props.toggleComplete(t.id)}}
                                >
                                {t.text}
                            </li> <button>Delete</button>
                        </div>  
                        )
                }
            )
        )
    }
}

export default TodoList;