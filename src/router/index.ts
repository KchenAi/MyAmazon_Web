import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '/',
          component: () => import('../views/ProductListView.vue'),
          meta: {
            title: '首页',
            icon: 'home',
          },
        },
      ],
    },
    {
      path: '/about',
      component: Layout,
      children: [
        {
          path: '/about',
          component: HomeView,
          meta: {
            title: '首页',
            icon: 'about',
          },
        },
      ],
    },
  ],
})

export default router
