import React from 'react'
import { connect } from 'react-redux'

const TodoItem = ({ id, name, isCompleted }) => (
    <li key={id}>
        <input type="checkbox" checked={isCompleted} /> {name}
    </li>
)

const TodoList = (props) => (
    <div className="Todo-List">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    </div>
)

export default connect(state => state, {})(TodoList);