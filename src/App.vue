<template>
  <div id="app">
    <Navigation />
    <main class="xl:max-w-6xl lg:max-w-4xl md:max-w-2xl px-2 sm:px-0 mx-auto">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>
<script>
import Navigation from "@/components/MainNavigation.vue";
import {
  setDocumentDirectionPerLocale,
  setDocumentLang,
  setDocumentTitle,
} from "@/util/i18n/document";
export default {
  components: { Navigation },
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
scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
