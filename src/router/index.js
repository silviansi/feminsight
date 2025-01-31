import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LandingLayouts from '../layouts/LandingLayouts.vue';
import MenstruasiView from '../views/Menstruasi.vue';
import BMIView from '../views/BMI.vue';
import HPLView from '../views/HPL.vue';
import MenuLayout from '../layouts/MenuLayout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
      meta: { layout: LandingLayouts },
    },
    {
      path: '/bmi',
      component: BMIView,
      meta: { layout: MenuLayout },
    },
    {
      path: '/menstruasi',
      component: MenstruasiView,
      meta: { layout: MenuLayout },
    },
    {
      path: '/hpl',
      component: HPLView,
      meta: { layout: MenuLayout },
    }
  ],
})

export default router
