<template>
  <article class="py-12">
    <h1 class="text-center text-4xl">{{ service.name }}</h1>
    <p class="text-center mt-4">{{ service.description }}</p>
  </article>
</template>
<script>
// import sourceData from "@/data.json";
export default {
  props: { service: Object },
};
</script>
