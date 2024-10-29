<!-- src/components/RegionFilter.vue -->
<template>
  <select
    v-model="selectedRegion"
    @change="$emit('update:selectedRegion', selectedRegion)"
  >
    <option value="">Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
</template>

<script setup>
import { ref } from "vue";

const selectedRegion = ref("");
</script>

<style scoped>
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
