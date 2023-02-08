import { createRouter, createWebHistory } from "vue-router";
import routes from '../routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/DemoMenu.vue"),
    },
    {
      path: "/demo-0",
      name: "counter-base",
      component: () => import("../demo0/DemoCounter.vue"),
    },
    {
      path: "/demo-1",
      name: "counter-base",
      component: () => import("../demo1/DemoCounter.vue"),
    },
    ...routes,
  ],
});

export default router;
