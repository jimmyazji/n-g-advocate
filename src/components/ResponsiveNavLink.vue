<template>
  <router-link
    :to="to"
    class="block py-2 pl-2 focus:bg-gold-600 focus:text-neutral-800 transition-colors mt-4"
    active-class="border-b-2 border-gold-600"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  props: ["to"],
};
</script>
