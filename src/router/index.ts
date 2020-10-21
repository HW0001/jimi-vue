import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Labels from "@/views/Labels.vue";
import Home from "@/views/Home.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/labels',
    name: 'Labels',
    component:Labels
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component:Statistics
  }
  ,
  {
    path: "/:catchAll(.*)",
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
