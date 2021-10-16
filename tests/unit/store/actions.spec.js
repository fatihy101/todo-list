import actions from '@/store/actions.js'
// import moxios from 'moxios'

describe('actions', () => {
    describe('Functions definition checks', () => {
        it('should have a fetchTodos action', () => {
            expect(actions.fetchTodos).toBeDefined()
        })

        it('should have a createTodo action', () => {
            expect(actions.addTodo).toBeDefined()
        })

        it('should have a updateTodo action', () => {
            expect(actions.updateTodo).toBeDefined()
        })

        it('should have a deleteTodo action', () => {
            expect(actions.removeTodo).toBeDefined()
        })
    })
})

    // const baseUrl = 'http://localhost:4000'
    //     describe('Mock the API requests', () => {
    //         jest.setTimeout(30000)

    //         let state
    //         const commit = jest.fn()
    //         beforeEach(()=> {
    //             moxios.install()
    //             state = {
    //                 userId: 'TEST_UID'
    //             }
    //         })

    //         afterEach(() => {
    //             moxios.uninstall()
    //         })

    //         it('should fetch the all todos from API', async () => {
    //             moxios.stubRequest(`${baseUrl}/todos`, {
    //                 status: 200,
    //                 response: [
    //                     {id: "1", completed: false, text: "Get some milk", userId: state.userId},
    //                     {id: "2", completed: false, text: "Get some eggs", userId: state.userId},
    //                 ]
    //             })

    //             await actions.fetchTodos({commit, state})

    //             moxios.wait(() => {
    //                 expect(commit).toHaveBeenCalledWith('FETCH_TODOS', [
    //                     {id: "1", completed: false, text: "Get some milk", userId: state.userId},
    //                     {id: "2", completed: false, text: "Get some eggs", userId: state.userId},
    //                 ])
    //             })

    //         })
    //     })


