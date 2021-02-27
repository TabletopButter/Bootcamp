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
                            <li key={t.id} style={isCompleteStyle}>
                                {t.text}
                            </li>
                        )
                }
            )
        )
    }
}

export default TodoList;