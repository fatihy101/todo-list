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
})