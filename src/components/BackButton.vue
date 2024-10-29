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
}

.dark-mode .back-button {
  background-color: #3c4d61;
  color: #ffffff;
}
</style>
