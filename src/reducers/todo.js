const initialState = {
    todos: [
        { id: 1, name: 'Render Static UI', isCompleted: true },
        { id: 2, name: 'Create Initial State', isCompleted: true },
        { id: 3, name: 'Use State To Render UI', isCompleted: false }
    ],
    currentTodo: 'Temp'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return { ...state, todos: state.todos.concat(action.payload) }
        case "CURRENT_TODO":
            return { ...state, currentTodo: action.payload }
        default:
            return state
    }
}