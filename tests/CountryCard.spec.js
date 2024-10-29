import { mount } from "@vue/test-utils";
import CountryCard from "@/components/CountryCard.vue";

describe("CountryCard.vue", () => {
  const country = {
    alpha3Code: "BEL",
    name: "Belgium",
    population: 11319511,
    region: "Europe",
    capital: "Brussels",
    flag: "https://restcountries.com/v2/alpha/bel",
  };

  it("renders country details correctly", () => {
    const wrapper = mount(CountryCard, {
      props: { country },
    });

    expect(wrapper.text()).toContain("Belgium");
    expect(wrapper.text()).toContain("Population: 11,319,511");
    expect(wrapper.text()).toContain("Region: Europe");
    expect(wrapper.text()).toContain("Capital: Brussels");
  });

  it("renders the country flag with the correct src and alt attributes", () => {
    const wrapper = mount(CountryCard, {
      props: { country },
    });
    const img = wrapper.find("img.flag");
    expect(img.attributes("src")).toBe(country.flag);
    expect(img.attributes("alt")).toBe("Belgium flag");
  });
});
