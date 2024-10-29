<template>
  <div class="country-details" v-if="country">
    <img :src="country.flag" :alt="country.name + ' flag'" class="flag" />
    <div class="info">
      <h2>{{ country.name }}</h2>
      <p><strong>Native Name:</strong> {{ country.nativeName }}</p>
      <p>
        <strong>Population:</strong> {{ country.population.toLocaleString() }}
      </p>
      <p><strong>Region:</strong> {{ country.region }}</p>
      <p><strong>Sub Region:</strong> {{ country.subregion }}</p>
      <p><strong>Capital:</strong> {{ country.capital }}</p>
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
      <!-- Conditional rendering for BorderCountries component -->
      <BorderCountries
        :borders="country.borders ?? []"
        :allCountries="allCountries"
        v-if="country.borders && country.borders.length"
      />
    </div>
  </div>
  <div v-else>Loading country details...</div>
</template>

<script setup>
import { defineProps } from "vue";
import BorderCountries from "../components/BorderCountries.vue";

const props = defineProps({
  country: Object,
  allCountries: Array,
});
</script>
