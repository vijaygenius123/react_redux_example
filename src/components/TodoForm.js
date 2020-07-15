import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateCurrent, saveTodo } from '../reducers/todo'

const TodoForm = (props) => {
    const { currentTodo, updateCurrent } = props

    const handleInputChange = evt => {
        const val = evt.target.value
        updateCurrent(val)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        props.saveTodo(currentTodo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                onChange={handleInputChange}
                value={currentTodo} />
        </form>
    )
}
export default connect(state => ({ currentTodo: state.todo.currentTodo }), { updateCurrent, saveTodo })(TodoForm);