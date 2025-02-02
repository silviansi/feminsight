<template>
  <div class="relative h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 to-white">
    <!-- Dekorasi Lingkaran -->
    <div class="absolute top-10 right-20 w-56 h-56 bg-gradient-to-br from-pink-200 to-red-300 rounded-full blur-3xl opacity-50"></div>
    <div class="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-red-300 rounded-full blur-3xl opacity-50"></div>

    <!-- Konten -->
    <div class="relative z-10 text-center w-full max-w-md px-4 py-8 bg-white bg-opacity-80 rounded-xl shadow-lg mt-4">
      <h1 class="text-xl sm:text-2xl font-bold text-pink-600 mb-6">Kalkulator Siklus Menstruasi</h1>

      <!-- Form Kalkulator -->
      <form @submit.prevent="calculateNextPeriod" class="space-y-6">
        <div class="flex flex-col items-start">
          <label for="lastPeriod" class="block text-gray-700 font-medium mb-2">Tanggal Terakhir Menstruasi</label>
          <input type="date" id="lastPeriod" v-model="lastPeriod" class="w-full text-sm sm:text-base px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="flex flex-col items-start">
          <label for="duration" class="block text-gray-700 font-medium mb-2">Durasi (hari)</label>
          <div class="flex items-center w-full justify-between">
            <button type="button" @click="updateValue('duration', -1)" class="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-700 transition duration-300">
              -
            </button>
            <input type="number" id="duration" v-model="duration" class="text-center w-36 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button type="button" @click="updateValue('duration', 1)" class="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-700 transition duration-300">
              +
            </button>
          </div>
          <p v-if="errors.duration" class="text-red-500 text-sm mt-1">{{ errors.duration }}</p>
        </div>

        <div class="flex flex-col items-start">
          <label for="cycleLength" class="block text-gray-700 font-medium mb-2">Panjang Siklus (hari)</label>
          <div class="flex items-center w-full justify-between">
            <button type="button" @click="updateValue('cycleLength', -1)" class="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-700 transition duration-300">
              -
            </button>
            <input type="number" id="cycleLength" v-model="cycleLength" class="text-center w-36 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button type="button" @click="updateValue('cycleLength', 1)" class="w-8 h-8 flex items-center justify-center bg-pink-500 text-white rounded-full hover:bg-pink-700 transition duration-300">
              +
            </button>
          </div>
          <p v-if="errors.cycleLength" class="text-red-500 text-sm mt-1">{{ errors.cycleLength }}</p>
        </div>

        <button type="submit" class="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-red-800">
            Kalkulasikan
        </button>
      </form>

      <!-- Hasil Kalkulasi -->
      <div v-if="nextPeriod" class="mt-4 sm:mt-6 text-center">
        <p class="text-lg font-medium">Tanggal Menstruasi Selanjutnya: <span class="font-bold">{{ nextPeriod }}</span></p>
        <p v-if="lastPeriod" class="text-lg font-medium">Tanggal Perkiraan Selesai: <span class="font-bold">{{ endPeriod }}</span></p>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        lastPeriod: '',
        duration: 5, 
        cycleLength: 28, 
        nextPeriod: null,
        endPeriod: null,
        errors: {
          duration: '', 
          cycleLength: '',
      },
      };
    },
    methods: {
      updateValue(field, change) {
        const newValue = parseInt(this[field]) + change;
        if (newValue > 0) {
          this[field] = newValue;
          this.errors[field] = '';
        } else {
          this[field] = 1;
          this.errors[field] = `${field === 'duration' ? 'Durasi' : 'Panjang siklus'} harus berupa angka positif.`;
        }
      },
      calculateNextPeriod() {
        if(!this.lastPeriod) {
          alert('Tanggal terakhir menstruasi harus diisi.');
          return;
        }

        if (!this.duration || isNaN(this.duration) || this.duration <= 0) {
          this.errors.duration = 'Durasi harus berupa angka positif.';
        }
        if (!this.cycleLength || isNaN(this.cycleLength) || this.cycleLength <= 0) {
          this.errors.cycleLength = 'Panjang siklus harus berupa angka positif.';
        }

        if (!this.errors.duration && !this.errors.cycleLength) {
          const lastDate = new Date(this.lastPeriod);

          // Hitung tanggal menstruasi selanjutnya
          const nextDate = new Date(lastDate.getTime()); 
          nextDate.setDate(lastDate.getDate() + Number(this.cycleLength));
          this.nextPeriod = nextDate.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });

          // Hitung tanggal perkiraan selesai menstruasi
          const endDate = new Date(nextDate.getTime()); 
          endDate.setDate(nextDate.getDate() + Number(this.duration) - 1); 
          this.endPeriod = endDate.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
        }
    }
  }, 
};
</script>