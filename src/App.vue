<template>
  <div id="app">
    <Navigation />
    <main class="min-h-screen">
      <router-view />
    </main>
    <ScrollTop />
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/MainNavigation.vue";
import Footer from "@/components/MainFooter.vue";
import ScrollTop from "@/components/ScrollTop.vue";
import {
  setDocumentDirectionPerLocale,
  setDocumentLang,
  setDocumentTitle,
} from "@/util/i18n/document";
export default {
  components: { Navigation, Footer, ScrollTop },
  mounted() {
    this.$watch(
      "$i18n.locale",
      (newLocale, oldLocale) => {
        if (newLocale === oldLocale) {
          return;
        }
        setDocumentLang(newLocale);
        setDocumentDirectionPerLocale(newLocale);
        setDocumentTitle(this.$t("app.title"));
      },
      { immediate: true }
    );
  },
};
</script>
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease-in-out;
}
.scale-enter-active {
  transition: all 0.5s ease-in-out;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
