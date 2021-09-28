import actions from "@/store/actions.js"

describe("actions", () => {
    it("should have a fetchTodos action", () => {
        expect(actions.fetchTodos).toBeDefined()
    })

    it("should have a createTodo action", () => {
        expect(actions.addTodo).toBeDefined()
    })

    it("should have a updateTodo action", () => {
        expect(actions.updateTodo).toBeDefined()
    })

    it("should have a deleteTodo action", () => {
        expect(actions.removeTodo).toBeDefined()
    })
})