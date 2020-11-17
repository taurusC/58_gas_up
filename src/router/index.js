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
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
      },
      {
        path: '/mine',
        name: 'mine',
        meta: {title: '个人中心'},
        component: () => import(/* webpackChunkName: "about" */ '@/views/personal'),
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
  },
  {
    path: '/headerLayout',
    name: 'headerLayout',
    redirect: '/',
    meta: {title: '提示'},
    component: () => import(/* webpackChunkName: "about" */ '@/layout/headerLayout.vue'),
    children: [
      {
        path: '/balance',
        name: 'balance',
        meta: {title: '优惠余额'},
        component: () => import(/* webpackChunkName: "about" */ '@/views/balance.vue'),
      },
      {
        path: '/oilCardTopUp',
        name: 'oilCardTopUp',
        meta: {title: '油卡充值'},
        component: () => import(/* webpackChunkName: "about" */ '@/views/oilCardTopUp.vue'),
      },
      {
        path: '/bindOilCard',
        name: 'bindOilCard',
        meta: {title: '油卡管理'},
        component: () => import(/* webpackChunkName: "about" */ '@/views/bindOilCard.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
