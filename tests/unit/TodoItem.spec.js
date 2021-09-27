import { shallowMount } from "@vue/test-utils"
import TodoItem from "@/components/TodoItem.vue"
import { createStore } from "vuex"

describe("TodoItem.vue", () => {
    let wrapper = null

    beforeEach(() => {
        wrapper = shallowMount(TodoItem, {
            props: {
                todo: {
                    id:  1,
                    text: "test",
                    completed: false
                }
            }
        })
    })

    afterEach(() => {
        wrapper = null
    })
    it("should render the todo item", () => {
        expect(wrapper.find(".todo-item").exists()).toBe(true)
    })

    it("should render the todo item with the correct text", () => {
        expect(wrapper.find("p.todo-item__text").text()).toBe("test")
    })

    it("should render the todo item with the correct completed state", async () => {
        await wrapper.setProps({
            todo: {
                completed: true
            }
        })
        expect(wrapper.find(".todo-item__text").classes()).toContain("completed")
    })

})

describe("TodoItem Vuex calls", () => {
    let store
    let wrapper
    const todoItem = {
        id: 1,
        text: "test",
        completed: false
    }
    beforeEach(() => {
        store = createStore()
        store.dispatch = jest.fn()

        wrapper = shallowMount(TodoItem, {
            props: {
                todo: todoItem
            },
            global: {
                plugins: [store]
            }
        })
    })

    afterEach(() => {
        wrapper = null
        store = null
     })

    it("should trigger the removeTodo in Vuex actions when the remove button is clicked", async () => {
        await wrapper.find(".todo-item__delete-button").trigger("click")
        expect(store.dispatch).toHaveBeenCalledWith("removeTodo", todoItem)
    })

    it("should trigger updateTodo action in vuex when the checkbox is clicked", async () => {
        const updatedTodo = { ...todoItem, completed: true }
        await wrapper.find(".todo-item__checkbox").trigger("click")
        expect(store.dispatch).toHaveBeenCalledWith("updateTodo", updatedTodo)
    })
})