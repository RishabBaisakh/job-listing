<script setup>
import logo from "@/assets/img/logo.png";
import { NAV_OPTIONS } from "@/constants/navOptions";
import { RouterLink, useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
import { Button, Menu } from "primevue";

const store = useStore();
const route = useRoute();
const router = useRouter();

const isActiveLink = (routePath) => route.path === routePath;
const navOptions = NAV_OPTIONS.employer;

const handleLogout = async () => {
  await store.dispatch("auth/logout");
};

const menu = ref();
const items = ref([
  {
    label: "Company Profile",
    items: [
      { label: "Company", command: () => router.push("/company/profile") },
      { label: "Teams", command: () => router.push("/company/teams") },
    ],
  },
  {
    label: "Account",
    items: [
      { label: "Settings", command: () => router.push("/account/settings") },
      { label: "Logout", command: handleLogout },
    ],
  },
]);

const toggleMenu = (event) => {
  menu.value.toggle(event);
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-12 items-center justify-between">
        <RouterLink class="flex items-center mr-4" to="/">
          <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
          <span class="hidden md:block text-white text-2xl font-bold ml-2">
            Vue Jobs
          </span>
        </RouterLink>

        <div class="hidden md:flex space-x-2 mr-10">
          <RouterLink
            v-for="option in navOptions"
            :key="option.name"
            :to="option.path"
            :class="[
              isActiveLink(option.path) ? 'bg-green-900' : 'hover:bg-gray-900',
              'text-white px-3 py-2 rounded-md mx-4',
            ]"
          >
            {{ option.name }}
          </RouterLink>
          <Button
            icon="pi pi-user"
            class="p-button-text !text-white hover:!bg-gray-900"
            @click="toggleMenu"
          />
          <Menu ref="menu" :model="items" popup />
        </div>
      </div>
    </div>
  </nav>
</template>
