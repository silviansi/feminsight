<script setup>
import Navbar from '../components/Navbar.vue';

</script>

<template>
    <div>
        <Navbar />
        <main>
            <slot></slot>
        </main>
    </div>
</template>