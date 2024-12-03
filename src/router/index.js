import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/00-HomeView.vue"


import PortfolioView from "../views/02-PortfolioView.vue"
import PortfolioDetail from "../views/02.1-PortfolioDetail.vue"
import AboutView from "../views/03-CreaPortfolioView.vue"
import CreaPortfolioView from "../views/03-CreaPortfolioView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/designportfolio",
      name: "portfolio",
      component: PortfolioView,
      props: true,
    },
    /* {
      path: "/portfolio/:label",
      name: "portfolioitem",
      component: PortfolioDetail,
      props: true,
    }, */
    {
      path: "/liquidstudios",
      name: "Liquid Studios",
      component: CreaPortfolioView,
      props: true,
    },

    {
      path: "/nicecactus",
      name: "nicecactus",
      component: PortfolioDetail,
      props: true,
    },

    {
      path: "/fanzie",
      name: "Fanzie",
      component: AboutView,
      props: true,
    },
  ],
})

export default router
