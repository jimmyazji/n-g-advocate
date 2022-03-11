<template>
  <nav class="flex justify-center items-center text-gold-500 font-semibold">
    <router-link
      class="px-8 py-8 hover:bg-zinc-800 hover:text-gold-200 transition-colors"
      to="/"
    >
      Home
    </router-link>
    <router-link
      class="px-8 py-8 hover:bg-zinc-800 hover:text-gold-200 transition-colors"
      to="/about"
      >About</router-link
    >
    <router-link
      class="px-8 py-8 hover:bg-zinc-800 hover:text-gold-200 transition-colors"
      to="/services"
    >
      Services
      <i class="fa fa-angle-down ml-2 transform translate-y-0.5"></i>
    </router-link>
    <router-link
      class="px-8 py-8 hover:bg-zinc-800 hover:text-gold-200 transition-colors"
      to="/team"
    >
      Our team
    </router-link>
    <router-link
      class="px-8 py-8 hover:bg-zinc-800 hover:text-gold-200 transition-colors"
      to="/jobs"
    >
      Jobs
    </router-link>
    <router-link
      class="px-8 py-8 hover:bg-zinc-800 hover:text-gold-200 transition-colors"
      to="/contact"
    >
      Contact us
    </router-link>
  </nav>
</template>
<script>
export default {
  name: "MainNavigation",
};
</script>
