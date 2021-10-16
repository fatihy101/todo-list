import mutations from '@/store/mutations.js'

describe('mutations', () => {
    it('should add a new todo item', () => {
        const state = {
            todos: []
        }

        mutations.ADD_TODO(state, {
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

        mutations.REMOVE_TODO(state, 1)

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

        mutations.UPDATE_TODO(state, {
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

        mutations.FETCH_TODOS(state, data)
        expect(state.todos).toEqual(data)
    })

    it('should set the userId', () => {
        const state = {
            userId: null
        }
        const data = "testID"

        mutations.SET_USER_ID(state, data)
        expect(state.userId).toEqual(data)
    })

    it("should delete all items for one item", () => {
        const state = {
            todos: [{
                id: 1,
                text: "test",
                completed: false,
                userId: "testId"
            }]
        }

        mutations.CLEAR_TODOS(state)
        expect(state.todos).toEqual([])
    })

    it("should delete all items for multple items in array", () => {
        const state = {
            todos: [{
                id: 1,
                text: "test",
                completed: false,
                userId: "testId"
            },
            {
                id: 2,
                text: "tes2",
                completed: false,
                userId: "testId"
            }
        ]
        }
        mutations.CLEAR_TODOS(state)
        expect(state.todos).toEqual([])
    })

})