import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchTodos, toggleTodo } from '../reducers/todo.js'
const TodoItem = ({ id, name, isCompleted, toggleTodo }) => (
    <li key={id}>
        <input type="checkbox" checked={isCompleted} onChange={() => toggleTodo(id)} /> {name}
    </li>
)

const TodoList = (props) => {

    useEffect(() => {
        props.fetchTodos()
    }, [])
    return (
        <div className="Todo-List">
            <ul>
                {props.todos.map(todo => <TodoItem key={todo.id} toggleTodo={props.toggleTodo} {...todo} />)}
            </ul>
        </div>
    )
}
export default connect(state => ({ todos: state.todo.todos }), { fetchTodos, toggleTodo })(TodoList);