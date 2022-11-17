import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import about from "../views/about.vue"
import blog from "../views/blog.vue"
import contact from "../views/contact.vue"
import volunteer from "../views/volunteer.vue"
import pageNotFound from "../views/page-not-found.vue"
import projectDigitalRural from '../views/project-digital-rural.vue'
import ourTeam from "../views/about-team.vue"
import getInvolved from "../views/getinvolved.vue"
import donatePage from "../views/donate.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: pageNotFound,
    },
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
    {
      path: "/projects/Digital-Rural",
      name: "digital-Rural",
      component: projectDigitalRural,
    },
    {
      path:"/about/Team",
      name: "Our Team",
      component: ourTeam
    },
    {
      path:"/getinvolved",
      name: "getinvolved",
      component: getInvolved
    },
    {
      path:"/getinvolved/donate",
      name: "donate",
      component: donatePage
    },
    
  ],
});

export default router;
