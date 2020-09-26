import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home//home
  },
  {
    path: "/rank",
    name: "Rank",
    component: () =>
      import( "../components/rank.vue")//rank
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import( "../components/profile.vue")//profile
  },
];

const router = new VueRouter({
  routes
});

export default router;
