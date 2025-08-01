export default [
  {
    path: "login",
    name: "login",
    component: () => import("@/views/authViews/LoginView.vue"),
  },
  {
    path: "register",
    name: "register",
    component: () => import("@/views/authViews/RegisterView.vue"),
  },
];
