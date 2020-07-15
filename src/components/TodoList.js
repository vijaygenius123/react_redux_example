import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchTodos } from '../reducers/todo.js'
const TodoItem = ({ id, name, isCompleted }) => (
    <li key={id}>
        <input type="checkbox" checked={isCompleted} /> {name}
    </li>
)

const TodoList = (props) => {

    useEffect(() => {
        props.fetchTodos()
    }, [])
    return (
        <div className="Todo-List">
            <ul>
                {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
            </ul>
        </div>
    )
}
export default connect(state => state, { fetchTodos })(TodoList);