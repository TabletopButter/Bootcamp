import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import {BsTrash2Fill} from 'react-icons/bs'


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
                            </li> <BsTrash2Fill style = {{color:'red', cursor:'pointer'}}
                                onClick={ () => {this.props.handleDelete(t.id)}}
                            />
                        </div>  
                        )
                }
            )
        )
    }
}

export default TodoList;