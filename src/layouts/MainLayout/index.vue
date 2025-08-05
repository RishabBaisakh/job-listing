<script setup>
import Navbar from "@/components/Navbar.vue";
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const user = computed(() => store.getters["auth/getUser"]);
const isLoading = computed(() => store.state.auth.isLoading);

watch(isLoading, (loading) => {
  if (!loading && !user.value) {
    router.push("/auth/login");
  }
});

onMounted(async () => {
  await store.dispatch("auth/initializeSession");
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="bg-green-50 flex-grow">
      <RouterView />
    </main>
  </div>
</template>
