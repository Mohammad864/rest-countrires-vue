<!-- src/components/SortDropdown.vue -->
<template>
  <select v-model="sortOption" @change="$emit('update:sortOption', sortOption)">
    <option value="">Sort by</option>
    <option value="name">Country Name (A-Z)</option>
    <option value="population-asc">Population (Low to High)</option>
    <option value="population-desc">Population (High to Low)</option>
  </select>
</template>

<script setup>
import { ref } from "vue";

const sortOption = ref("");
</script>

<style scoped>
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
