import { mount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";

describe("SearchBar.vue", () => {
  it("renders an input field with placeholder text", () => {
    const wrapper = mount(SearchBar);
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
    expect(input.attributes("placeholder")).toBe("Search for a country...");
  });

  it("emits 'update:searchQuery' when the input value changes", async () => {
    const wrapper = mount(SearchBar);
    const input = wrapper.find("input");
    await input.setValue("Belgium");

    expect(wrapper.emitted("update:searchQuery")).toBeTruthy();
    expect(wrapper.emitted("update:searchQuery")[0]).toEqual(["Belgium"]);
  });
});
