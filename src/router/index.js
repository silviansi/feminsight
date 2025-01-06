import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: DashboardView,
    }
  ],
})

export default router
