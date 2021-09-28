import { shallowMount } from "@vue/test-utils"
import Navbar from "@/components/Navbar.vue"

describe("Navbar.vue", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Navbar)
    })
    it("should render the navbar", () => {
      expect(wrapper.find(".navbar").exists()).toBe(true)
    })

    it("should render the navbar text correctly", () => {
        expect(wrapper.find(".navbar__text").text()).toBe("TODO LIST")
    })

    it("should render the navbar menu", () => {
        expect(wrapper.find(".navbar__menu").exists()).toBe(true)
    })
})