<script setup>
import Navbar from '../components/Navbar.vue';

</script>

<template>
    <div>
        <Navbar />
        <main class="min-h-screen flex justify-center items-center">
            <slot />
        </main>
    </div>
</template>