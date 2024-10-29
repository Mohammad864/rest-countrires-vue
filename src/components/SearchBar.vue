<!-- src/components/SearchBar.vue -->
<template>
  <input
    type="text"
    v-model="searchQuery"
    placeholder="Search for a country..."
    @input="$emit('update:searchQuery', searchQuery)"
  />
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");
</script>

<style scoped>
input {
  width: 60%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
