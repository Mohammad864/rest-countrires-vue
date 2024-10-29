import { createApp } from "vue";
import App from "./App.vue"; // Check that this path is correct
import router from "./router"; // Include the router if using Vue Router

const app = createApp(App);
app.use(router); // Make sure to use the router if it's set up
app.mount("#app"); // Ensure this matches the div in your index.html
