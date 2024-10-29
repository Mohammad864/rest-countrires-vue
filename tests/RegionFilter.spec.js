import { mount } from "@vue/test-utils";
import RegionFilter from "@/components/RegionFilter.vue";

describe("RegionFilter.vue", () => {
  it("renders a dropdown with region options", () => {
    const wrapper = mount(RegionFilter);
    const options = wrapper.findAll("option");
    expect(options).toHaveLength(6); // Including the default "Filter by Region"
    expect(options.at(1).text()).toBe("Africa");
  });

  it("emits 'update:selectedRegion' when the selection changes", async () => {
    const wrapper = mount(RegionFilter);
    const select = wrapper.find("select");
    await select.setValue("Europe");

    expect(wrapper.emitted("update:selectedRegion")).toBeTruthy();
    expect(wrapper.emitted("update:selectedRegion")[0]).toEqual(["Europe"]);
  });
});
