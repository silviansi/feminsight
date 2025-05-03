<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Background pita coquette -->
    <div class="absolute inset-0 bg-[url('/images/bg-coquette.jpg')] bg-repeat bg-[length:30%] opacity-30 -z-10"></div>

    <!-- Navbar -->
    <Navbar />

    <!-- Isi halaman -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
