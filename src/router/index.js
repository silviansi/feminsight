import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MenstruasiView from '../views/Menstruasi.vue';
import BMIView from '../views/BMI.vue';
import HPLView from '../views/HPL.vue';
import AboutView from '../views/About.vue';
import BlogView from '../views/Blog.vue';
import BlogDetailView from '../views/BlogDetail.vue';
import TipsView from '../views/Tips.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/menstruasi', component: MenstruasiView },
  { path: '/bmi', component: BMIView },
  {  path: '/hpl', component: HPLView },
  {  path: '/about-us', component: AboutView },
  {  path: '/blog', component: BlogView },
  { path: '/blog/:id', component: BlogDetailView, props: true },
  { path: '/tips', component: TipsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }  // selalu scroll ke atas saat pindah halaman
  }
})

export default router