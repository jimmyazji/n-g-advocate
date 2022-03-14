<template>
  <button
    @click="changeLocale()"
    class="bg-gold-600 hover:bg-gold-400 focus:bg-gold-400 focus:outline-none border-2 border-gold-900 text-gray-800 px-4 py-2 flex justify-center items-center"
  >
    <span class="text-sm font-bold">{{
      $i18n.locale === "en" ? "العربية" : "English"
    }}</span>
  </button>
</template>
<script>
export default {
  methods: {
    changeLocale() {
      if (this.$i18n.locale === "ar") {
        this.$i18n.locale = "en";
        localStorage.setItem("locale", "en");
      } else if (this.$i18n.locale === "en") {
        this.$i18n.locale = "ar";
        localStorage.setItem("locale", "ar");
      }
    },
  },
};
</script>
