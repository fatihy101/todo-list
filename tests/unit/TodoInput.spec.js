import { shallowMount } from "@vue/test-utils"
import TodoInput from "@/components/TodoInput.vue"
import { createStore } from "vuex"

describe("TodoInput.vue", () => {
    let store
    let wrapper
    beforeEach(() => {
        // prepare the mock
        store = createStore()
        store.dispatch = jest.fn()
        wrapper = shallowMount(TodoInput, { global: { plugins: [store] } })
    })

    afterEach(() => {
        wrapper = null
    })

    it("should render the input element with the class todo-input", () => {
        expect(wrapper.find("div.todo-input").exists()).toBe(true)
    })

    it("should trigger the addTodo action in Vuex", async () => {
        const text = "test todo"
        // set the input value and trigger the click event
        wrapper.find("input").setValue(text)
        await wrapper.find("button").trigger("click")
        // check if the addTodo action was called with the correct text
        expect(store.dispatch).toHaveBeenCalledWith("addTodo", text)
    })

    it("should contain 'shake' class when the input is empty", async () => {
        await wrapper.find("button").trigger("click")
        expect(wrapper.find("div.todo-input").classes()).toContain("shake")
    })

    it("should not contain 'shake' class when the input is not empty", async () => {
        await wrapper.find("input").setValue("test")
        await wrapper.find("button").trigger("click")
        expect(wrapper.find("div.todo-input").classes()).not.toContain("shake")
    })
})