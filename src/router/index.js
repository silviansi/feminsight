import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MenstruasiView from '../views/Menstruasi.vue';
import BMIView from '../views/BMI.vue';
import HPLView from '../views/HPL.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/bmi',
      component: BMIView,
    },
    {
      path: '/menstruasi',
      component: MenstruasiView,
    },
    {
      path: '/hpl',
      component: HPLView,
    }
  ],
})

export default router
