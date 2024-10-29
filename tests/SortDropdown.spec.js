import { mount } from "@vue/test-utils";
import SortDropdown from "@/components/SortDropdown.vue";

describe("SortDropdown.vue", () => {
  it("renders a dropdown with sorting options", () => {
    const wrapper = mount(SortDropdown);
    const options = wrapper.findAll("option");
    expect(options).toHaveLength(5); // Including the default "Sort by"
    expect(options.at(1).text()).toBe("Country Name (A-Z)");
  });

  it("emits 'update:sortOption' when the selection changes", async () => {
    const wrapper = mount(SortDropdown);
    const select = wrapper.find("select");
    await select.setValue("population-asc");

    expect(wrapper.emitted("update:sortOption")).toBeTruthy();
    expect(wrapper.emitted("update:sortOption")[0]).toEqual(["population-asc"]);
  });
});
