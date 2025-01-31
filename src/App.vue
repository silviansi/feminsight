<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </component>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LandingLayouts from '@/layouts/LandingLayouts.vue';
import MenuLayout from '@/layouts/MenuLayout.vue';

const route = useRoute();

// Pastikan default layout adalah LandingLayouts
const layout = computed(() => route.meta.layout || LandingLayouts);
</script>

<style>
/* Animasi transisi */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
<!-- <template>
  <div id="app">
    <Navbar />
    <main class="p-0">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script> -->