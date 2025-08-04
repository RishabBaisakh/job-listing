export default [
  {
    path: "",
    name: "jobs",
    component: () => import("@/views/employer/JobsView.vue"),
  },
  {
    path: ":id",
    name: "job",
    component: () => import("@/views/employer/JobView.vue"),
  },
  {
    path: "add",
    name: "add-job",
    component: () => import("@/views/employer/AddJobView.vue"),
  },
  {
    path: "edit/:id",
    name: "edit-job",
    component: () => import("@/views/employer/EditJobView.vue"),
  },
];
