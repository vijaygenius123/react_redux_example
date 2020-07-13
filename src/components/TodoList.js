import React, { Component } from 'react'


const TodoItem = ({ id, name, isCompleted }) => (
    <li key={id}>
        <input type="checkbox" checked={isCompleted} /> {name}
    </li>
)

export default (props) => (
    <div className="Todo-List">
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </ul>
    </div>
)