<!-- src/components/CountryCard.vue -->
<template>
  <router-link
    :to="{ name: 'DetailPage', params: { alpha3Code: country.alpha3Code } }"
    class="country-card"
  >
    <img :src="country.flag" :alt="country.name + ' flag'" class="flag" />
    <div class="country-details">
      <h2>{{ country.name }}</h2>
      <p>
        <strong>Population:</strong> {{ country.population.toLocaleString() }}
      </p>
      <p><strong>Region:</strong> {{ country.region }}</p>
      <p><strong>Capital:</strong> {{ country.capital }}</p>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  country: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.country-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
}

.country-card .flag {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
</style>
