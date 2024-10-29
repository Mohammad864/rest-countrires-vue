<!-- src/components/BorderCountries.vue -->
<template>
  <div class="border-countries" v-if="borders && borders.length">
    <strong>Border Countries:</strong>
    <router-link
      v-for="border in borders"
      :key="border"
      :to="{ name: 'DetailPage', params: { alpha3Code: border } }"
      class="border-link"
    >
      {{ getCountryName(border) }}
    </router-link>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  borders: {
    type: Array,
    default: () => [],
  },
  allCountries: {
    type: Array,
    required: true,
  },
});

const getCountryName = (code) => {
  const country = props.allCountries.find((c) => c.alpha3Code === code);
  return country ? country.name : code;
};
</script>

<style scoped>
.border-countries {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 10px;
}

.border-link {
  padding: 5px 10px;
  background-color: #e0e0e0;
  color: #333;
  border-radius: 4px;
  text-decoration: none;
}
</style>
