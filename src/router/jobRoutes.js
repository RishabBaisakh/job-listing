export default [
  {
    path: "",
    name: "jobs",
    component: () => import("@/views/JobsView.vue"),
  },
  {
    path: ":id",
    name: "job",
    component: () => import("@/views/JobView.vue"),
  },
  {
    path: "add",
    name: "add-job",
    component: () => import("@/views/AddJobView.vue"),
  },
  {
    path: "edit/:id",
    name: "edit-job",
    component: () => import("@/views/EditJobView.vue"),
  },
];
