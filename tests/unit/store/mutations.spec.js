import { mutations } from '@/store'

const { ADD_TODO, REMOVE_TODO, UPDATE_TODO, CLEAR_TODOS, FETCH_TODOS } = mutations

describe('mutations', () => {
    it('should add a new todo item', () => {
        const state = {
            todos: []
        }

        ADD_TODO(state, {
            id: 1,
            text: 'test',
            completed: false
        })

        expect(state.todos).toEqual([{
            id: 1,
            text: 'test',
            completed: false
        }])
    })

    it('should remove a todo item', () => {
        const state = {
            todos: [{
                id: 1,
                text: 'test',
                completed: false
            }]
        }

        REMOVE_TODO(state, 1)

        expect(state.todos).toEqual([])
    })

    it('should update a todo item', () => {
        const state = {
            todos: [{
                id: 1,
                text: 'test',
                completed: false
            }]
        }

        UPDATE_TODO(state, {
            id: 1,
            text: 'test',
            completed: true
        })

        expect(state.todos).toEqual([{
            id: 1,
            text: 'test',
            completed: true
        }])
    })

    it('should clear all todo items', () => {
        const state = {
            todos: [{
                id: 1,
                text: 'test',
                completed: false
            }]
        }

        CLEAR_TODOS(state)

        expect(state.todos).toEqual([])
    })

    it('should fetch todo items', () => {
        const state = {
            todos: []
        }

        const data = [
            {
                id: 1,
                text: 'test data 1',
                completed: false
            },
            {
                id: 2,
                text: 'test data 2',
                completed: true
            }
        ]

        FETCH_TODOS(state, data)
        expect(state.todos).toEqual(data)
    })
})