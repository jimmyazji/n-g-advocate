<template>
  <Navigation />
  <main class="max-w-6xl mx-auto">
    <router-view />
  </main>
</template>
<script setup>
import Navigation from "@/components/MainNavigation.vue";
</script>
