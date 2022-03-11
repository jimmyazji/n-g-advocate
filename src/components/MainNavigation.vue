<template>
  <nav
    class="hidden sm:flex justify-center items-center text-gold-500 font-semibold border-b border-gold-600"
  >
    <router-link
      class="xl:px-8 lg:px-6 sm:px-4 py-8 hover:bg-neutral-800 hover:text-gold-200 transition-colors"
      to="/"
    >
      {{ $t("nav.home") }}
    </router-link>
    <router-link
      class="xl:px-8 lg:px-6 sm:px-4 py-8 hover:bg-neutral-800 hover:text-gold-200 transition-colors"
      to="/about"
      >{{ $t("nav.about") }}</router-link
    >
    <router-link
      class="xl:px-8 lg:px-6 sm:px-4 py-8 hover:bg-neutral-800 hover:text-gold-200 transition-colors"
      to="/services"
    >
      {{ $t("nav.services") }}
      <i class="fa fa-angle-down ml-2 transform translate-y-0.5"></i>
    </router-link>
    <router-link
      class="xl:px-8 lg:px-6 sm:px-4 py-8 hover:bg-neutral-800 hover:text-gold-200 transition-colors"
      to="/team"
    >
      {{ $t("nav.team") }}
    </router-link>
    <router-link
      class="xl:px-8 lg:px-6 sm:px-4 py-8 hover:bg-neutral-800 hover:text-gold-200 transition-colors"
      to="/jobs"
    >
      {{ $t("nav.jobs") }}
    </router-link>
    <router-link
      class="xl:px-8 lg:px-6 sm:px-4 py-8 hover:bg-neutral-800 hover:text-gold-200 transition-colors"
      to="/contact"
    >
      {{ $t("nav.contact") }}
    </router-link>
    <LocaleChanger />
  </nav>
  <nav
    class="sm:hidden py-4 px-2 transform transition-[height]"
    :class="showingNavigationDropdown ? 'h-50' : 'h-20'"
  >
    <div class="flex justify-between items-center text-gold-500">
      <button
        @click="showingNavigationDropdown = !showingNavigationDropdown"
        class="inline-flex items-center font-bold justify-center p-2 rounded-md text-almond-500 hover:text-lonestar-500 hover:bg-almond-300 focus:outline-none focus:bg-gold-500 focus:text-gray-800 transition duration-150 ease-in-out"
      >
        <svg
          class="h-8 w-8"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            :class="{
              hidden: showingNavigationDropdown,
              'inline-flex': !showingNavigationDropdown,
            }"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            :class="{
              hidden: !showingNavigationDropdown,
              'inline-flex': showingNavigationDropdown,
            }"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <LocaleChanger />
    </div>
  </nav>
  <div
    :class="showingNavigationDropdown ? 'block' : 'hidden'"
    class="sm:hidden px-2 border-b-2 border-gold-500 pb-4"
  >
    <router-link
      class="block py-2 pl-2 focus:bg-gold-500 focus:text-neutral-800"
      to="/"
    >
      {{ $t("nav.home") }}
    </router-link>
    <router-link
      class="block py-2 pl-2 focus:bg-gold-500 focus:text-neutral-800"
      to="/about"
      >{{ $t("nav.about") }}</router-link
    >
    <router-link
      class="block py-2 pl-2 focus:bg-gold-500 focus:text-neutral-800"
      to="/services"
    >
      {{ $t("nav.services") }}
    </router-link>
    <router-link
      class="block py-2 pl-2 focus:bg-gold-500 focus:text-neutral-800"
      to="/team"
    >
      {{ $t("nav.team") }}
    </router-link>
    <router-link
      class="block py-2 pl-2 focus:bg-gold-500 focus:text-neutral-800"
      to="/jobs"
    >
      {{ $t("nav.jobs") }}
    </router-link>
    <router-link
      class="block py-2 pl-2 focus:bg-gold-500 focus:text-neutral-800"
      to="/contact"
    >
      {{ $t("nav.contact") }}
    </router-link>
  </div>
</template>
<script>
import LocaleChanger from "./LocaleChanger.vue";
export default {
  name: "MainNavigation",
  components: { LocaleChanger },
};
</script>
<script setup>
import { ref } from "vue";
const showingNavigationDropdown = ref(false);
</script>
