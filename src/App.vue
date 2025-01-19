<template>
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
</script>