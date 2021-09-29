import { Pact } from '@pact-foundation/pact'
import path from 'path'
import TodoRequests from '@/utils/TodoRequests'

const mockProvider = new Pact({
    consumer: 'todo-client',
    provider: 'todo-service',
    port: 1234,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    cors: true,
    pactfileWriteMode: 'overwrite' // Options: overwrite, update, merge
})

const baseUrl = 'http://localhost:1234'

describe('Todo Service', () => {
    beforeAll(() => mockProvider.setup())
    afterAll(() => mockProvider.finalize())
    afterEach(() => mockProvider.verify())

    const userId = "Do9030213a-8d03-4e8d-aae2-762989d54399tO"
    const requestHeaders = {
        'Accept': 'application/json',
        'X-User-Id': userId
    }

    describe('Getting all todos', () => {
        it('should return a list of todos', async () => {
            const expectedResponse = {
                todos: [
                    {
                        id: 1,
                        title: 'Buy milk',
                        userId: userId,
                        completed: false
                    },
                    {
                        id: 2,
                        title: 'Buy eggs',
                        userId: userId,
                        completed: false
                    }
                ]
            }

            mockProvider.addInteraction({
                state: 'there are 2 todos',
                uponReceiving: 'a request for todos',
                withRequest: {
                    method: 'GET',
                    path: '/todos',
                    headers: requestHeaders
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: expectedResponse
                }
            })

            const response = await TodoRequests.getTodos(baseUrl, userId)
            expect(response.data).toEqual(expectedResponse)
        })

        it('should return an empty list of todos', async () => {
            const expectedResponse = {
                todos: []
            }

            mockProvider.addInteraction({
                state: 'there are no todos',
                uponReceiving: 'a request for todos',
                withRequest: {
                    method: 'GET',
                    path: '/todos',
                    headers: requestHeaders
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: expectedResponse
                }
            })

            const response = await TodoRequests.getTodos(baseUrl, userId)
            expect(response.data).toEqual(expectedResponse)
        })
    })

    describe('Adding todo item', () => {
        it('should add a todo item', async () => {
            const expectedResponse = {
                "success": true
            }

            const requestbody = {
                id: 5,
                title: 'Buy some milk',
                completed: false,
                userId: userId,
            }

            mockProvider.addInteraction({
                state: 'a todo item is added',
                uponReceiving: 'a request to add a todo item',
                withRequest: {
                    method: 'POST',
                    path: '/todos',
                    headers: requestHeaders,
                    body: requestbody,
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: expectedResponse
                }
            })

            const response = await TodoRequests.addTodo(baseUrl, userId, requestbody)
            expect(response.data).toEqual(expectedResponse)
        })

        it('should return an error when adding a todo item', async () => {
            const expectedResponse = {
                "success": false,
                "error": "Validation failed: Title can't be blank"
            }

            const requestbody = {
                id: 5,
                title: '',
                completed: false,
                userId: userId,
            }

            mockProvider.addInteraction({
                state: 'a todo item is not added',
                uponReceiving: 'a request to add a todo item',
                withRequest: {
                    method: 'POST',
                    path: '/todos',
                    headers: requestHeaders,
                    body: requestbody,
                },
                willRespondWith: {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: expectedResponse
                }
            })
            try {
                const response = await TodoRequests.addTodo(baseUrl, userId, requestbody)
            } catch(error) {
                expect(error.response.data).toEqual(expectedResponse)
                expect(error.response.status).toEqual(400)
            }
        })

        it('should return an error when adding a todo item with an invalid userId', async () => {
            const expectedResponse = {
                "success": false,
                "error": "Validation failed: Header userId and item's userId must be same"
            }

            const requestbody = {
                id: 6,
                title: 'Buy some milk',
                completed: false,
                userId: '3127637621763a',
            }

            mockProvider.addInteraction({
                state: 'header userId and item userId isn\'t same',
                uponReceiving: 'a request to add a todo item',
                withRequest: {
                    method: 'POST',
                    path: '/todos',
                    headers: requestHeaders,
                    body: requestbody,
                },
                willRespondWith: {
                    status: 401,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: expectedResponse
                }
            })
            try {
                const response = await TodoRequests.addTodo(baseUrl, userId, requestbody)
            } catch(error) {
                expect(error.response.data).toEqual(expectedResponse)
                expect(error.response.status).toEqual(401)
            }
        })
    })

    describe('Updating todo item', () => {
        it('should update a todo item', async () => {
            const expectedResponse = {
                "success": true
            }

            const requestbody = {
                id: 1,
                title: 'Buy some milk',
                completed: true,
                userId: userId,
            }

            mockProvider.addInteraction({
                state: 'a todo item is updated',
                uponReceiving: 'a request to update a todo item',
                withRequest: {
                    method: 'PUT',
                    path: '/todos',
                    headers: requestHeaders,
                    body: requestbody,
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: expectedResponse
                }
            })

            const response = await TodoRequests.updateTodo(baseUrl, userId, requestbody)
            expect(response.data).toEqual(expectedResponse)
        })

        it('should return an error when updating a todo item', async () => {
            const expectedResponse = {
                "success": false,
                "error": "Validation failed: Title can't be blank"
            }

            const requestbody = {
                id: 1,
                title: '',
                completed: false,
                userId: userId,
            }

            mockProvider.addInteraction({
                state: 'a todo item is not updated',
                uponReceiving: 'a request to update a todo item',
                withRequest: {
                    method: 'PUT',
                    path: '/todos',
                    headers: requestHeaders,
                    body: requestbody,
                },
                willRespondWith: {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: expectedResponse
                }
            })
            try {
                const response = await TodoRequests.updateTodo(baseUrl, userId, requestbody)
            } catch(error) {
                expect(error.response.data).toEqual(expectedResponse)
                expect(error.response.status).toEqual(400)
            }
        })
    })

    describe('Deleting todo item', () => {
        const todoId = 1

        it('should delete a todo item', async () => {
            const expectedResponse = {
                "success": true
            }

            const requestbody = {
                id: 1,
                title: 'Buy some milk',
                completed: true,
                userId: userId,
            }

            mockProvider.addInteraction({
                state: 'a todo item is deleted',
                uponReceiving: 'a request to delete a todo item',
                withRequest: {
                    method: 'DELETE',
                    path: `/todos/${todoId}`,
                    headers: requestHeaders
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: expectedResponse
                }
            })

            const response = await TodoRequests.deleteTodo(baseUrl, userId, todoId)
            expect(response.data).toEqual(expectedResponse)
        })

        it('should return an error when deleting a todo item due to non-matching userId', async () => {
            const expectedResponse = {
                "success": false,
                "error": "Authorization failed: You're unauthorized to delete this todo item"
            }

            mockProvider.addInteraction({
                state: 'a todo item is not deleted',
                uponReceiving: 'a request to delete a todo item',
                withRequest: {
                    method: 'DELETE',
                    path: `/todos/${todoId}`,
                    headers: requestHeaders
                },
                willRespondWith: {
                    status: 401,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    body: expectedResponse
                }
            })
            try {
                const response = await TodoRequests.deleteTodo(baseUrl, userId, todoId)
            } catch(error) {
                expect(error.response.data).toEqual(expectedResponse)
                expect(error.response.status).toEqual(401)
            }
        })
    })
})




