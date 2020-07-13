import reducer from './todo'

describe('Todo reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, { type: 'ANYTHING' })
        expect(result).toBeDefined()
    })

    test('adds a todo', () => {
        const startState = {
            todos: [
                { id: 1, name: 'Render Static UI', isCompleted: true },
                { id: 2, name: 'Create Initial State', isCompleted: true },
                { id: 3, name: 'Use State To Render UI', isCompleted: false }
            ]
        }
        const expectedState = {
            todos: [
                { id: 1, name: 'Render Static UI', isCompleted: true },
                { id: 2, name: 'Create Initial State', isCompleted: true },
                { id: 3, name: 'Use State To Render UI', isCompleted: false },
                { id: 4, name: 'Added A Todo', isCompleted: false }
            ]
        }
        const action = { type: 'TODO_ADD', payload: { id: 4, name: 'Added A Todo', isCompleted: false } }
        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })
})