<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 class="text-2xl font-bold text-center mb-6">Menstrual Cycle Calculator</h1>
        
        <form @submit.prevent="calculateNextPeriod">
          <div class="mb-4">
            <label for="lastPeriod" class="block text-gray-700 font-medium mb-2">Last Menstrual Date</label>
            <input 
              type="date" 
              id="lastPeriod" 
              v-model="lastPeriod" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <label for="duration" class="block text-gray-700 font-medium mb-2">Duration (days)</label>
            <input 
              type="number" 
              id="duration" 
              v-model="duration" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g., 5">
          </div>
          <div class="mb-4">
            <label for="cycleLength" class="block text-gray-700 font-medium mb-2">Cycle Length (days)</label>
            <input 
              type="number" 
              id="cycleLength" 
              v-model="cycleLength" 
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g., 28">
          </div>
          <button 
            type="submit" 
            class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            Calculate
          </button>
        </form>
        
        <div v-if="nextPeriod" class="mt-6 text-center">
          <p class="text-lg font-medium">Next Menstrual Date: <span class="font-bold">{{ nextPeriod }}</span></p>
          <p class="text-lg font-medium">Expected End Date: <span class="font-bold">{{ endPeriod }}</span></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lastPeriod: '',
        duration: null,
        cycleLength: null,
        nextPeriod: null,
        endPeriod: null,
      };
    },
    methods: {
      calculateNextPeriod() {
        if (this.lastPeriod && this.duration && this.cycleLength) {
          const lastDate = new Date(this.lastPeriod);
          const nextDate = new Date(lastDate.setDate(lastDate.getDate() + parseInt(this.cycleLength)));
          this.nextPeriod = nextDate.toISOString().split('T')[0];
  
          const endDate = new Date(nextDate.setDate(nextDate.getDate() + parseInt(this.duration) - 1));
          this.endPeriod = endDate.toISOString().split('T')[0];
        } else {
          alert('Please fill in all fields!');
        }
      }
    }
  };
  </script>