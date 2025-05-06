<template>
    <nav class="fixed top-0 left-0 w-full px-6 md:px-10 py-3 flex justify-between items-center bg-pink-100/70 backdrop-blur-md shadow-md rounded-b-2xl z-50 transition-all">
        <!-- Logo -->
        <router-link to="/" class="text-[#333333] font-bold text-2xl">
            Fem<span class="text-pink-800">Insight</span>
        </router-link>
  
        <!-- Menu Desktop -->
        <ul class="hidden md:flex space-x-6 items-center text-sm">
            <li><router-link to="/" class="text-[#6a4c46] font-medium hover:text-pink-600 transition-colors">Beranda</router-link></li>
  
            <li class="relative" v-click-outside="closeDropdown">
                <button @click="toggleDropdown" class="flex items-center text-[#6a4c46] font-medium hover:text-pink-600 transition-colors focus:outline-none">
                    Kalkulator
                    <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.1 1.02l-4.25 4.5a.75.75 0 01-1.1 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
                    </svg>
                </button>
                <ul v-show="dropdownOpen" class="absolute bg-pink-100/80 backdrop-blur-md rounded-lg shadow-md mt-2 w-40 z-20 overflow-hidden">
                    <li><router-link to="/menstruasi" class="block px-4 py-2 hover:bg-pink-200 transition-colors" @click="closeDropdown">Menstruasi</router-link></li>
                    <li><router-link to="/bmi" class="block px-4 py-2 hover:bg-pink-200 transition-colors" @click="closeDropdown">BMI</router-link></li>
                    <li><router-link to="/hpl" class="block px-4 py-2 hover:bg-pink-200 transition-colors" @click="closeDropdown">HPL</router-link></li>
                </ul>
            </li>
  
            <li><router-link to="/about-us" class="text-[#6a4c46] font-medium hover:text-pink-600 transition-colors">Tentang Kami</router-link></li>
            <li><router-link to="/blog" class="text-[#6a4c46] font-medium hover:text-pink-600 transition-colors">Blog</router-link></li>
            <li><router-link to="/tips" class="text-[#6a4c46] font-medium hover:text-pink-600 transition-colors">Tips & Inspirasi</router-link></li>
        </ul>
  
        <!-- Tombol Menu Mobile -->
        <button class="md:hidden text-[#6a4c46] text-2xl focus:outline-none" @click="isOpen = !isOpen">☰</button>
    </nav>
  
    <!-- Menu Mobile -->
    <transition name="fade">
        <ul v-show="isOpen" class="md:hidden absolute top-16 left-0 w-full bg-pink-100/80 backdrop-blur-md text-[#6a4c46] shadow-md z-40 space-y-2 p-4 rounded-b-2xl transition-all">
            <li><router-link to="/" class="block py-2 font-medium hover:text-pink-600 transition-colors" @click="closeMenu">Beranda</router-link></li>
  
            <li>
                <button @click="toggleDropdownMobile" class="flex items-center w-full py-2 font-medium hover:text-pink-600 transition-colors focus:outline-none">
                    Kalkulator
                    <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.1 1.02l-4.25 4.5a.75.75 0 01-1.1 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
                    </svg>
                </button>
                <ul v-show="dropdownMobileOpen" class="ml-4 space-y-2 font-medium text-[#6a4c46]">
                    <li><router-link to="/menstruasi" class="block py-2 hover:text-pink-600 transition-colors" @click="closeAll">Menstruasi</router-link></li>
                    <li><router-link to="/bmi" class="block py-2 hover:text-pink-600 transition-colors" @click="closeAll">BMI</router-link></li>
                    <li><router-link to="/hpl" class="block py-2 hover:text-pink-600 transition-colors" @click="closeAll">HPL</router-link></li>
                </ul>
            </li>
  
            <li><router-link to="/about-us" class="block py-2 font-medium hover:text-pink-600 transition-colors" @click="closeMenu">Tentang Kami</router-link></li>
            <li><router-link to="/blog" class="block py-2 font-medium hover:text-pink-600 transition-colors" @click="closeMenu">Blog</router-link></li>
            <li><router-link to="/tips" class="block py-2 font-medium hover:text-pink-600 transition-colors" @click="closeMenu">Tips & Inspirasi</router-link></li>
        </ul>
    </transition>
</template>
  
<script setup>
import { ref } from 'vue'
  
// Desktop dropdown
const dropdownOpen = ref(false)
const toggleDropdown = () => dropdownOpen.value = !dropdownOpen.value
const closeDropdown = () => dropdownOpen.value = false
  
// Mobile menu & dropdown
const isOpen = ref(false)
const dropdownMobileOpen = ref(false)
  
const toggleDropdownMobile = () => dropdownMobileOpen.value = !dropdownMobileOpen.value
  
const closeMenu = () => {
    isOpen.value = false
    dropdownMobileOpen.value = false
}
  
const closeAll = () => {
    closeMenu()
    closeDropdown()
}
</script>
  
<script>
export default {
    directives: {
        'click-outside': {
            mounted(el, binding) {
                el.clickOutsideEvent = (event) => {
                    if (!(el === event.target || el.contains(event.target))) {
                        binding.value()
                    }
                }
            document.addEventListener('click', el.clickOutsideEvent)
        },
        unmounted(el) {
            document.removeEventListener('click', el.clickOutsideEvent)
            }
        }
    }
}
</script>
  
<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>