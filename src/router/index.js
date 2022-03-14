import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import TeamView from "../views/TeamView.vue";
import JobsView from "../views/JobsView.vue";
import ContactView from "../views/ContactView.vue";
import ServiceShow from "../views/ServiceShow.vue";
import sourceData from "@/data.json";
// import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // component: AboutView,
    component: () =>
      import(/* webpackChunkName:"about"*/ "../views/AboutView.vue"),
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/services/:slug",
    name: "services.show",
    component: ServiceShow,
    props: (route) => ({
      service: sourceData.services.find(
        (service) => service.slug === route.params.slug
      ),
    }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
