import { shallowMount } from "@vue/test-utils"
import TodoItem from "@/components/TodoItem.vue"

let wrapper = null

beforeEach(() => {
    wrapper = shallowMount(TodoItem, {
        propsData: {
            todo: {
                id: 1,
                text: "test",
                completed: false
            }
        }
    })
})

afterEach(() => {
    wrapper = null
})

describe("TodoItem.vue", () => {
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
        console.log(wrapper.props('todo'))
        expect(wrapper.find(".todo-item__text").classes()).toContain("completed")
    })

    it("should emit the remove event when the remove button is clicked", async () => {
        wrapper.setProps({
            todo: {
                id: 1
            }
        })
        await wrapper.find(".todo-item__delete-button").trigger("click")
        expect(wrapper.emitted().delete).toBeTruthy()
    })

    it("should emit the toggle event when the checkbox is clicked", () => {
        wrapper.setProps({
            todo: {
                id: 1
            }
        })
        wrapper.find(".todo-item__checkbox").trigger("click")
        expect(wrapper.emitted().toggle).toBeTruthy()
    })

})