// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "",
        name: "Search",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Search.vue"),
      },
      {
        path: "",
        name: "Profil",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Profil.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
