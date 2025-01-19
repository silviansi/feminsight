<template>
    <header class="bg-red-200 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo -->
            <h1 class="text-3xl font-bold text-red-800">
            <router-link to="/">HealthCalc</router-link>
            </h1>
  
            <!-- Navigation -->
            <nav class="space-x-4 hidden md:block">
                <router-link to="/" class="hover:underline">Kalkulator Menstruasi</router-link>
                <router-link to="/bmi" class="hover:underline">Kalkulator BMI</router-link>
                <router-link to="/hpl" class="hover:underline">Kalkulator HPL</router-link>
            </nav>
  
            <!-- Hamburger Menu -->
            <button class="md:hidden block text-xl" @click="toggleMobileMenu">☰</button>
        </div>
  
        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="bg-red-100 md:hidden p-4 space-y-2 text-red-800">
            <router-link to="/" class="block hover:underline">Kalkulator Menstruasi</router-link>
            <router-link to="/bmi" class="block hover:underline">Kalkulator BMI</router-link>
            <router-link to="/hpl" class="block hover:underline">Kalkulator HPL</router-link>
        </div>
    </header>
</template>
  
<script>
export default {
    data() {
        return {
            mobileMenuOpen: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },
    },
};
</script>

<style scoped>
header {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>