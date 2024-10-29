import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DetailPage from "../views/DetailPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/detail/:alpha3Code",
    name: "DetailPage",
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
