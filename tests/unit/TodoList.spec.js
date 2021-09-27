import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import TodoList from "@/components/TodoList.vue";

describe("TodoList.vue", () => {
    let wrapper
    let store

    beforeEach(() => {
        store = createStore({
            state: {
                todos: [{
                    id: 1,
                    text: "test",
                    completed: false
                }]
            },
            mutations: {
                // Added for testing 'no-item' state
                clearTodo(state) {
                    state.todos = []
                }
            },
            getters: {
                todos: state => state.todos
            },
        })
        wrapper = mount(TodoList, {
            global: {
                plugins: [store]
            }
        })
    })

    afterEach(() => {
        wrapper = null
        store = null
    })

    it("renders a list of todos", () => {
        expect(wrapper.findAll(".todo-item").length).toBe(1)
    })

    it("should render a text when there's no item", async () => {
        await store.commit("clearTodo")
        const noItemText = wrapper.find(".no-item__text").text()
        expect(noItemText).toBe("Your todo list is empty. Add new todos!")
    })
})