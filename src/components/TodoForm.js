import React, { Component } from 'react'

export default (props) => {
    const { currentTodo, currentChange } = props
    const handleInputChange = evt => {
        const val = evt.target.value
        currentChange(val)
    }
    return (<form>
        <input type="text"
            onChange={handleInputChange}
            value={currentTodo} />
    </form>
    )
}