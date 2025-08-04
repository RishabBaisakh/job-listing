<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  accessCode: "",
});

const error = ref("");
const success = ref("");

const handleRegister = () => {
  error.value = "";
  success.value = "";

  // Basic validation
  if (
    !form.firstName.trim() ||
    !form.lastName.trim() ||
    !form.email.trim() ||
    !form.password.trim() ||
    !form.accessCode.trim()
  ) {
    error.value = "All fields are required.";
    return;
  }

  // Simple email pattern check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(form.email)) {
    error.value = "Please enter a valid email address.";
    return;
  }

  // Password length check
  if (form.password.length < 6) {
    error.value = "Password must be at least 6 characters long.";
    return;
  }

  // Simulate registration logic
  console.log("Registering user:", form);

  success.value = "Registration successful! You can now log in.";

  // Reset form
  form.firstName = "";
  form.lastName = "";
  form.email = "";
  form.password = "";
  form.accessCode = "";
};
</script>

<template>
  <section class="min-h-screen bg-green-50 flex items-center justify-center">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-center mb-6">Register</h2>

      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            v-model="form.firstName"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            v-model="form.lastName"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            v-model="form.email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            v-model="form.password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-1">Access Code</label>
          <input
            type="text"
            v-model="form.accessCode"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div v-if="error" class="mb-4 text-red-600 text-sm">
          {{ error }}
        </div>

        <div v-if="success" class="mb-4 text-green-600 text-sm text-center">
          {{ success }}
        </div>

        <button
          type="submit"
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
      <div class="flex justify-center mt-3 text-green-500 hover:text-green-700">
        <router-link to="/auth/login">Login Screen</router-link>
      </div>
    </div>
  </section>
</template>
