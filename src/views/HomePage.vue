<!-- src/views/HomePage.vue -->
<template>
  <div class="home">
    <Header :theme="theme" @toggleTheme="toggleTheme" />

    <div class="controls">
      <SearchBar v-model:searchQuery="filters.searchQuery" />
      <RegionFilter v-model:selectedRegion="filters.selectedRegion" />
      <SortDropdown v-model:sortOption="filters.sortOption" />
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
import { ref, computed, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import Header from "../components/Header.vue";
import SearchBar from "../components/SearchBar.vue";
import RegionFilter from "../components/RegionFilter.vue";
import SortDropdown from "../components/SortDropdown.vue";
import CountryCard from "../components/CountryCard.vue";

const router = useRouter();
const route = useRoute();

const filters = ref({
  searchQuery: "",
  selectedRegion: "",
  sortOption: "",
});

const countries = ref([]);
const theme = ref("light");

onMounted(async () => {
  // Parse initial query parameters from the URL
  const { searchQuery, selectedRegion, sortOption } = route.query;
  if (searchQuery) filters.value.searchQuery = searchQuery;
  if (selectedRegion) filters.value.selectedRegion = selectedRegion;
  if (sortOption) filters.value.sortOption = sortOption;

  // Fetch country data
  try {
    const response = await axios.get("https://restcountries.com/v2/all");
    countries.value = response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
});

// Sync URL query with filter changes
watch(
  filters,
  (newFilters) => {
    router.replace({
      query: {
        ...route.query,
        searchQuery: newFilters.searchQuery || undefined,
        selectedRegion: newFilters.selectedRegion || undefined,
        sortOption: newFilters.sortOption || undefined,
      },
    });
  },
  { deep: true }
);

const createFuzzyRegex = (input) => {
  const pattern = input.split("").join(".*");
  return new RegExp(pattern, "i");
};

const filteredCountries = computed(() => {
  const regex = createFuzzyRegex(filters.value.searchQuery);

  let filtered = countries.value.filter((country) => {
    const matchesRegion = filters.value.selectedRegion
      ? country.region === filters.value.selectedRegion
      : true;
    const matchesSearch = regex.test(country.name);
    return matchesRegion && matchesSearch;
  });

  if (filters.value.sortOption === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filters.value.sortOption === "name-desc") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  } else if (filters.value.sortOption === "population-asc") {
    filtered.sort((a, b) => a.population - b.population);
  } else if (filters.value.sortOption === "population-desc") {
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
