import { createRouter, createWebHistory } from 'vue-router';
import MenstruasiView from '../views/Menstruasi.vue';
import BMIView from '../views/BMI.vue';
import HPLView from '../views/HPL.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Menstruasi',
      component: MenstruasiView
    },
    {
      path: '/bmi',
      name: 'BMI',
      component: BMIView,
    },
    {
      path: '/hpl',
      name: 'HPL',
      component: HPLView
    }
  ],
})

export default router
