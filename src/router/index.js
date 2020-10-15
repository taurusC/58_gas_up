import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '@/layout/navLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {title: '首页'},
        component: () => import(/* webpackChunkName: "about" */ '@/views/home.vue'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
