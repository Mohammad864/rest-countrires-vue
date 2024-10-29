<!-- src/views/DetailPage.vue -->
<template>
  <div class="detail">
    <Header :theme="theme" @toggleTheme="toggleTheme" />

    <!-- Use the BackButton component here -->
    <BackButton />

    <div v-if="country" class="country-details">
      <img :src="country.flag" :alt="country.name + ' flag'" class="flag" />
      <div class="info">
        <h2>{{ country.name }}</h2>
        <div class="details">
          <div>
            <p><strong>Native Name:</strong> {{ country.nativeName }}</p>
            <p>
              <strong>Population:</strong>
              {{ country.population.toLocaleString() }}
            </p>
            <p><strong>Region:</strong> {{ country.region }}</p>
            <p><strong>Sub Region:</strong> {{ country.subregion }}</p>
            <p><strong>Capital:</strong> {{ country.capital }}</p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain:</strong>
              {{ country.topLevelDomain?.join(", ") }}
            </p>
            <p>
              <strong>Currencies:</strong>
              {{ country.currencies?.map((c) => c.name).join(", ") }}
            </p>
            <p>
              <strong>Languages:</strong>
              {{ country.languages?.map((l) => l.name).join(", ") }}
            </p>
          </div>
        </div>
        <BorderCountries
          :borders="country.borders"
          :allCountries="allCountries"
        />
      </div>
    </div>
    <div v-else>Loading country details...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import Header from "../components/Header.vue";
import BorderCountries from "../components/BorderCountries.vue";
import BackButton from "../components/BackButton.vue"; // Use JavaScript comment style

const route = useRoute();
const country = ref(null);
const allCountries = ref([]);
const theme = ref("light");

const fetchCountryDetails = async (alpha3Code) => {
  try {
    const countryResponse = await axios.get(
      `https://restcountries.com/v2/alpha/${alpha3Code}`
    );
    country.value = countryResponse.data;

    if (!allCountries.value.length) {
      const allCountriesResponse = await axios.get(
        "https://restcountries.com/v2/all"
      );
      allCountries.value = allCountriesResponse.data;
    }
  } catch (error) {
    console.error("Error fetching country data:", error);
  }
};

onMounted(() => fetchCountryDetails(route.params.alpha3Code));

watch(
  () => route.params.alpha3Code,
  (newCode) => {
    fetchCountryDetails(newCode);
  }
);

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  document.body.classList.toggle("dark-mode", theme.value === "dark");
};
</script>

<style scoped>
.detail {
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.country-details {
  display: flex;
  gap: 50px;
  align-items: start;
  max-width: 1200px;
  margin: auto;
}

.flag {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.info {
  max-width: 600px;
  color: #333;
}

.info h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.details {
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
}

.info p {
  font-size: 1rem;
  margin: 8px 0;
}

.info p strong {
  font-weight: bold;
}

.border-countries {
  display: flex;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.border-link {
  padding: 5px 15px;
  background-color: #e0e0e0;
  color: #333;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
}

.dark-mode .detail {
  background-color: #2b3945;
  color: #ffffff;
}

.dark-mode .info h2,
.dark-mode .info p,
.dark-mode .info p strong {
  color: #ffffff;
}

.dark-mode .border-link {
  background-color: #3c4d61;
  color: #ffffff;
}
</style>
