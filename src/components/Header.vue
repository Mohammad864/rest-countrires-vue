<!-- src/components/Header.vue -->
<template>
  <header>
    <h1>Where in the world?</h1>
    <button @click="$emit('toggleTheme')">
      {{ theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode" }}
    </button>
  </header>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
}
</style>
