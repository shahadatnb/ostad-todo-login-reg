<script setup>
import { authStore } from './store/authStore.js';
</script>

<template>
  <main class="w-full min-h-screen p-5">
  <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div>
    <router-link :to="{ name: 'home'}" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Home</router-link>
    <router-link :to="{ name: 'todo'}" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Todo</router-link>
    <router-link :to="{ name: 'login'}" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Login</router-link>
    <router-link :to="{ name: 'register'}" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Register</router-link>
    <button @click="authStore.logout()" type="button" class="text-lg no-underline text-blue hover:text-blue-dark ml-2">Logout</button>
  </div>
</nav>

    <router-view></router-view>
  </main>
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
