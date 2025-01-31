<template>
    <nav class="fixed top-0 left-0 w-full px-6 md:px-10 py-4 flex justify-between items-center bg-white/30 backdrop-blur-md z-50">
      
        <!-- Logo -->
        <div class="text-pink-600 font-bold text-2xl">FemInsight</div>
  
        <!-- Menu Desktop -->
        <ul class="hidden md:flex space-x-6">
            <li><router-link to="/" class="text-gray-700 hover:text-pink-600">Home</router-link></li>
            <li><router-link to="/bmi" class="text-gray-700 hover:text-pink-600">BMI</router-link></li>
            <li><router-link to="/menstruasi" class="text-gray-700 hover:text-pink-600">Menstruasi</router-link></li>
            <li><router-link to="/hpl" class="text-gray-700 hover:text-pink-600">HPL</router-link></li>
        </ul>
  
        <!-- Tombol Menu Mobile -->
        <button class="md:hidden text-gray-700 text-2xl" @click="isOpen = !isOpen">
            ☰
        </button>
  
        <!-- Menu Mobile -->
        <div v-if="isOpen" class="absolute top-16 left-0 w-full bg-white/90 backdrop-blur-md shadow-md py-4 flex flex-col items-center space-y-4 md:hidden">
            <router-link to="/" class="text-gray-700 hover:text-pink-600" @click="isOpen = false">Home</router-link>
            <router-link to="/bmi" class="text-gray-700 hover:text-pink-600" @click="isOpen = false">BMI</router-link>
            <router-link to="/menstruasi" class="text-gray-700 hover:text-pink-600" @click="isOpen = false">Menstruasi</router-link>
            <router-link to="/hpl" class="text-gray-700 hover:text-pink-600" @click="isOpen = false">HPL</router-link>
        </div>
    </nav>
</template>
  
<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>