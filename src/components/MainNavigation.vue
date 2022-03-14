<template>
  <nav
    class="hidden sm:flex justify-center h-20 items-center text-gold-600 font-semibold border-b border-gold-600"
  >
    <NavLink :to="{ name: 'home' }">{{ $t("nav.home") }}</NavLink>
    <NavLink :to="{ name: 'about' }">{{ $t("nav.about") }}</NavLink>
    <div
      @mouseover="showServices()"
      @mouseout="hideServices()"
      class="relative h-full"
    >
      <NavLink to="/services">
        {{ $t("nav.services") }}
        <i class="fa fa-angle-down ml-2 transform translate-y-0.5"></i>
      </NavLink>
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          v-show="showingServices"
          class="absolute z-50 mt-1 shadow-sm shadow-gold-800 origin-top-left left-0 w-36"
          style="display: none"
          @click="showingServices = false"
        >
          <ul class="ring-1 ring-gold-700 bg-neutral-900">
            <NestedLink
              v-for="service in services"
              :key="service.slug"
              :to="{ name: 'services.show', params: { slug: service.slug } }"
            >
              {{ service.name }}
            </NestedLink>
          </ul>
        </div>
      </transition>
    </div>
    <NavLink :to="{ name: 'team' }">{{ $t("nav.team") }}</NavLink>
    <NavLink :to="{ name: 'jobs' }">{{ $t("nav.jobs") }}</NavLink>
    <NavLink :to="{ name: 'contact' }">{{ $t("nav.contact") }}</NavLink>
    <LocaleChanger />
  </nav>
  <nav class="sm:hidden py-4 px-2 transform border-b-2 border-gold-600">
    <div class="flex justify-between items-center text-gold-600">
      <button
        @click="showingNavigationDropdown = !showingNavigationDropdown"
        class="inline-flex items-center font-bold justify-center p-2 rounded-md text-almond-600 hover:text-lonestar-600 hover:bg-almond-300 focus:outline-none focus:bg-gold-600 focus:text-gray-800 transition duration-150 ease-in-out"
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
    <div v-show="showingNavigationDropdown" class="sm:hidden block px-2">
      <ResponsiveNavLink :to="{ name: 'contact' }">{{
        $t("nav.home")
      }}</ResponsiveNavLink>
      <ResponsiveNavLink :to="{ name: 'about' }">{{
        $t("nav.about")
      }}</ResponsiveNavLink>
      <ResponsiveNavLink :to="{ name: 'services' }"
        >{{ $t("nav.services")
        }}<i class="fa fa-angle-down ml-2 transform translate-y-0.5"></i
      ></ResponsiveNavLink>
      <ResponsiveNavLink :to="{ name: 'team' }">{{
        $t("nav.team")
      }}</ResponsiveNavLink>
      <ResponsiveNavLink :to="{ name: 'jobs' }">{{
        $t("nav.jobs")
      }}</ResponsiveNavLink>
      <ResponsiveNavLink :to="{ name: 'contact' }">{{
        $t("nav.contact")
      }}</ResponsiveNavLink>
    </div>
  </nav>
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
import NavLink from "@/components/NavLink.vue";
import ResponsiveNavLink from "./ResponsiveNavLink.vue";
import NestedLink from "./NestedLink.vue";
import dataSource from "@/data.json";
const services = dataSource.services;
const showingNavigationDropdown = ref(false);
const showingServices = ref(false);
const showServices = () => {
  showingServices.value = true;
};
const hideServices = () => {
  showingServices.value = false;
};
</script>
