import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchTodos, toggleTodo, deleteTodo } from '../reducers/todo.js'
const TodoItem = ({ id, name, isCompleted, toggleTodo, deleteTodo }) => (
    <li key={id}>
        <span className="delete-item">
            <button onClick={() => deleteTodo(id)} > X </button>
        </span>
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
                {props.todos.map(todo => <TodoItem
                    key={todo.id}
                    toggleTodo={props.toggleTodo}
                    deleteTodo={props.deleteTodo}
                    {...todo}
                />)}
            </ul>
        </div>
    )
}
export default connect(state => ({ todos: state.todo.todos }), { fetchTodos, toggleTodo, deleteTodo })(TodoList);