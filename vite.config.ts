import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  // Comment out or remove the test property if not using testing
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // },
});
