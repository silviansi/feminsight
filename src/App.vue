<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Background pita coquette -->
    <div class="absolute inset-0 bg-[url('/images/bg-coquette.jpg')] bg-repeat bg-[length:30%] opacity-30 -z-10"></div>

    <!-- Navbar -->
    <Navbar />

    <!-- Loading Spinner -->
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
      <div class="animate-spin rounded-full h-16 w-16 border-4 border-[#f8bbd0] border-t-transparent"></div>
    </div>

    <!-- Isi halaman -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoading = ref(false)
const router = useRouter()

// Aktifkan loading saat pindah halaman
router.beforeEach((to, from, next) => {
  isLoading.value = true
  next()
})
router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 300)
})
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>