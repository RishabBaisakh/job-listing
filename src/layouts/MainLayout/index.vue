<script setup>
import Navbar from "@/components/Navbar.vue";
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import JobToolbar from "@/components/JobToolbar.vue";
import { useRoute } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

const user = computed(() => store.getters["auth/getUser"]);
const company = computed(() => store.getters["company/getCompany"]);
const isLoading = computed(() => store.state.auth.isLoading);

const showToolbar = computed(() => route.path.startsWith("/jobs"));

watch(isLoading, (loading) => {
  if (!loading && !user.value) {
    router.push("/auth/login");
  }
});

watch(user, async (newUser) => {
  if (newUser && !company.value) {
    await store.dispatch("company/fetchCompanyById", newUser.company);
  }
});

onMounted(async () => {
  // TODO: I think should belong on outer layer, think more!
  await store.dispatch("auth/initializeSession");
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <div class="sticky top-0 z-50">
      <Navbar />
      <JobToolbar v-if="showToolbar" />
    </div>
    <main
      class="bg-green-50 flex-grow min-h-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
    >
      <RouterView />
    </main>
  </div>
</template>
