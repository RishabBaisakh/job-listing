import { createRouter, createWebHistory } from "vue-router";
import jobRoutes from "./jobRoutes";
import authRoutes from "./authRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/jobs",
      component: () => import("@/layouts/JobsLayout.vue"),
      children: [...jobRoutes],
    },
    {
      path: "/auth",
      component: () => import("@/layouts/AuthLayout.vue"),
      children: [...authRoutes],
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
