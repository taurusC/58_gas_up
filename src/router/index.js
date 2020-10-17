import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/index',
    redirect: '/home',
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
  {
    path: '/packageList',
    name: 'packageList',
    meta: {title: '优惠列表'},
    component: () => import(/* webpackChunkName: "about" */ '@/views/packageList.vue'),
    
  },
  {
    path: '/prompt',
    name: 'prompt',
    meta: {title: '提示'},
    component: () => import(/* webpackChunkName: "about" */ '@/views/prompt.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
