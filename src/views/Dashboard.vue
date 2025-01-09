<template>
  <div class="min-h-screen flex items-center justify-center bg-red-100">
  <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
    <h1 class="text-2xl font-bold text-center mb-6 text-red-900">Kalkulator Siklus Menstruasi</h1>

      <form @submit.prevent="calculateNextPeriod">
        <div class="mb-4">
          <label for="lastPeriod" class="block text-gray-700 font-medium mb-2">Tanggal Terakhir Menstruasi</label>
          <input type="date" id="lastPeriod" v-model="lastPeriod" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div class="mb-4">
          <label for="duration" class="block text-gray-700 font-medium mb-2">Durasi (hari)</label>
          <input type="number" id="duration" v-model="duration" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 5">
          <p v-if="errors.duration" class="text-red-500 text-sm mt-1">{{ errors.duration }}</p>
        </div>
        <div class="mb-4">
          <label for="cycleLength" class="block text-gray-700 font-medium mb-2">Panjang Siklus (hari)</label>
          <input type="number" id="cycleLength" v-model="cycleLength" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 28">
          <p v-if="errors.cycleLength" class="text-red-500 text-sm mt-1">{{ errors.cycleLength }}</p>
        </div>
        <button type="submit" class="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800">
            Kalkulasikan
        </button>
      </form>
        
      <div v-if="nextPeriod" class="mt-6 text-center">
        <p class="text-lg font-medium">Tanggal Menstruasi Selanjutnya: <span class="font-bold">{{ nextPeriod }}</span></p>
        <p class="text-lg font-medium">Tanggal Perkiraan Selesai: <span class="font-bold">{{ endPeriod }}</span></p>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        lastPeriod: '',
        duration: '', 
        cycleLength: '', 
        nextPeriod: null,
        endPeriod: null,
        errors: {
          duration: '', 
          cycleLength: '',
      },
      };
    },
    watch: {
      duration(value) {
        if (isNaN(value) || value <= 0) {
          this.errors.duration = 'Durasi harus berupa angka positif.';
        } else {
          this.errors.duration = '';
        }
      },
      cycleLength(value) {
        if (isNaN(value) || value <= 0) {
          this.errors.cycleLength = 'Panjang siklus harus berupa angka positif.';
        } else {
          this.errors.cycleLength = '';
        }
      },
    },
    methods: {
      calculateNextPeriod() {
        if (!this.duration || isNaN(this.duration) || this.duration <= 0) {
          this.errors.duration = 'Durasi harus berupa angka positif.';
        }
        if (!this.cycleLength || isNaN(this.cycleLength) || this.cycleLength <= 0) {
          this.errors.cycleLength = 'Panjang siklus harus berupa angka positif.';
        }

        if (!this.errors.duration && !this.errors.cycleLength) {
          const lastDate = new Date(this.lastPeriod);
          const nextDate = new Date(lastDate.setDate(lastDate.getDate() + parseInt(this.cycleLength)));
          this.nextPeriod = nextDate.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });

          const endDate = new Date(nextDate.setDate(nextDate.getDate() + parseInt(this.duration) - 1));
          this.endPeriod = endDate.toLocaleDateString('id-ID', {day: '2-digit', month: '2-digit', year: 'numeric'});
      }
    }
  }, 
};
</script>