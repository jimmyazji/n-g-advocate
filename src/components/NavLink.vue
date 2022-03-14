<template>
  <router-link
    :to="to"
    class="xl:px-8 lg:px-6 sm:px-4 h-full flex justify-center items-center hover:bg-neutral-800 focus:outline-none hover:text-gold-400 transform transition focus:scale-105"
    active-class="scale-105 border-b-2 border-gold-600 text-gold-500"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  props: ["to"],
};
</script>
