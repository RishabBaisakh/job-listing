<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const form = reactive({
  email: "",
  password: "",
  accessCode: "",
});

const error = ref("");

const handleLogin = async () => {
  if (!form.email || !form.password || !form.accessCode) {
    error.value = "All fields are required.";
    return;
  }

  try {
    await store.dispatch("auth/login", {
      email: form.email,
      password: form.password,
      accessCode: form.accessCode,
    });
    router.push("/jobs");
  } catch (error) {
    console.error("Error while loggin in", error);
  }

  error.value = "";
};
</script>

<template>
  <section class="min-h-screen bg-green-50 flex items-center justify-center">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            v-model="form.email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            v-model="form.password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Access Code</label>
          <input
            type="text"
            v-model="form.accessCode"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div v-if="error" class="mb-4 text-red-500 text-sm">
          {{ error }}
        </div>

        <button
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </form>
      <div class="flex justify-center mt-3 text-green-500 hover:text-green-700">
        <router-link to="/auth/register">Register Screen</router-link>
      </div>
    </div>
  </section>
</template>
