<!-- src/views/HomePage.vue -->
<template>
  <div class="home">
    <Header :theme="theme" @toggleTheme="toggleTheme" />

    <div class="controls">
      <SearchBar v-model:searchQuery="searchQuery" />
      <RegionFilter v-model:selectedRegion="selectedRegion" />
      <SortDropdown v-model:sortOption="sortOption" />
    </div>

    <div class="country-grid">
      <CountryCard
        v-for="country in filteredCountries"
        :key="country.alpha3Code"
        :country="country"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import Header from "../components/Header.vue";
import SearchBar from "../components/SearchBar.vue";
import RegionFilter from "../components/RegionFilter.vue";
import SortDropdown from "../components/SortDropdown.vue";
import CountryCard from "../components/CountryCard.vue";

const searchQuery = ref("");
const selectedRegion = ref("");
const sortOption = ref("");
const countries = ref([]);
const theme = ref("light");

onMounted(async () => {
  try {
    const response = await axios.get("https://restcountries.com/v2/all");
    countries.value = response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
});

const createFuzzyRegex = (input) => {
  const pattern = input.split("").join(".*");
  return new RegExp(pattern, "i");
};

const filteredCountries = computed(() => {
  const regex = createFuzzyRegex(searchQuery.value);

  let filtered = countries.value.filter((country) => {
    const matchesRegion = selectedRegion.value
      ? country.region === selectedRegion.value
      : true;
    const matchesSearch = regex.test(country.name);
    return matchesRegion && matchesSearch;
  });

  if (sortOption.value === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption.value === "population-asc") {
    filtered.sort((a, b) => a.population - b.population);
  } else if (sortOption.value === "population-desc") {
    filtered.sort((a, b) => b.population - a.population);
  }

  return filtered;
});

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  document.body.classList.toggle("dark-mode", theme.value === "dark");
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  color: #333;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
}

.controls {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.controls input,
.controls select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.country-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.country-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.country-card .flag {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.country-card .country-details {
  padding: 10px;
}

.dark-mode {
  background-color: #212e37;
  color: #fff;
}

.dark-mode .country-card {
  background-color: #444;
}
</style>
