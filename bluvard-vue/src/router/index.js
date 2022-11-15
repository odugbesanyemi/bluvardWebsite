import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import about from "../views/about.vue"
import blog from "../views/blog.vue"
import contact from "../views/contact.vue"
import volunteer from "../views/volunteer.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component:about,
    },
    {
      path: "/blog",
      name: "blog",
      component: blog,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
    {
      path: "/volunteer",
      name: "volunteer",
      component: volunteer,
    },

  ],
});

export default router;
