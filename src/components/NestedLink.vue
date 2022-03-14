<template>
  <li class="hover:bg-gold-600 hover:text-neutral-800">
    <router-link :to="to" class="p-4 w-full h-full block">
      <slot />
    </router-link>
  </li>
</template>
<script>
export default {
  props: ["name", "to"],
};
</script>
