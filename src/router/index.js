import { createRouter, createWebHistory } from "vue-router";
import employerRoutes from "./employerRoutes";
import authRoutes from "./authRoutes";
import communityRoutes from "./communityRoutes";
import companyRoutes from "./companyRoutes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/employer/HomeView.vue"),
    },
    {
      path: "/auth",
      component: () => import("@/layouts/AuthLayout.vue"),
      children: [...authRoutes],
    },
    {
      path: "/",
      component: () => import("@/layouts/MainLayout/index.vue"),
      children: [
        {
          path: "/jobs",
          component: () => import("@/layouts/MainLayout/EmployerLayout.vue"),
          children: [...employerRoutes],
        },
        {
          path: "/communities",
          component: () => import("@/layouts/MainLayout/CommunityLayout.vue"),
          children: [...communityRoutes],
        },
        {
          path: "company",
          component: () => import("@/layouts/MainLayout/EmployerLayout.vue"),
          children: [...companyRoutes],
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;
