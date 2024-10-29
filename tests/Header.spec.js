// tests/Header.spec.js
import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders the correct title", () => {
    const wrapper = mount(Header, {
      props: { theme: "light" },
    });
    expect(wrapper.text()).toContain("Where in the world?");
  });

  it("displays the correct toggle button based on theme prop", async () => {
    const wrapper = mount(Header, {
      props: { theme: "light" },
    });
    expect(wrapper.text()).toContain("🌙 Dark Mode");

    await wrapper.setProps({ theme: "dark" });
    expect(wrapper.text()).toContain("☀️ Light Mode");
  });

  it("emits 'toggleTheme' event when the button is clicked", async () => {
    const wrapper = mount(Header, {
      props: { theme: "light" },
    });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("toggleTheme");
  });
});
