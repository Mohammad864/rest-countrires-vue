<!-- src/components/BackButton.vue -->
<template>
  <button @click="goBack" class="back-button">⬅ Back</button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.back-button {
  padding: 10px;
  margin-bottom: 20px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.dark-mode .back-button {
  background-color: #3c4d61;
  color: #ffffff;
}
</style>
