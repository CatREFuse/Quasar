import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
    meta: {
      depth: 0,
    },
  },
  {
    path: "/preference",
    name: "Preference",
    component: () => import("./views/Preference.vue"),
    meta: {
      depth: 1,
    },
  },
  {
    path: "/search",
    name: "SearchRedirect",
    component: () => import("./views/SearchRedrirect.vue"),
    props: (route: { query: { query: string; engine: string } }) => {
      return {
        query: route.query.query,
        engine: route.query.engine,
      };
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  const toDepth = to.path.split("/").length;
  const fromDepth = from.path.split("/").length;
  to.meta.transition = toDepth < fromDepth ? "slide-left" : "slide-right";
});

export default router;
