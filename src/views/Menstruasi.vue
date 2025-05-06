<template>
  <div class="relative h-screen flex items-center justify-center mt-12 sm:mt-6">

    <!-- Card peringatan (desktop) -->
    <div class="absolute top-6 left-6 mt-6 bg-pink-100 p-4 rounded-xl shadow-lg max-w-xs mx-auto hidden sm:block">
      <p class="text-sm font-medium text-pink-600">
        *Hasil prediksi ini hanya bersifat perkiraan dan tidak dapat dipercaya 100%. Siklus menstruasi dapat bervariasi antar individu.
      </p>
    </div>

    <!-- Konten utama -->
    <div class="relative z-10 text-center w-full max-w-md px-8 py-8 bg-white rounded-xl shadow-lg mt-4">
      <h1 class="text-xl sm:text-2xl font-extrabold text-[#6a4c46] mb-6">Kalkulator Siklus Menstruasi</h1>

      <!-- Form kalkulator -->
      <form @submit.prevent="calculateNextPeriod" class="space-y-6">
        <!-- Input: tanggal terakhir menstruasi -->
        <div class="flex flex-col items-start">
          <label for="lastPeriod" class="block text-gray-700 font-base mb-2">Tanggal Terakhir Menstruasi</label>
          <input type="date" id="lastPeriod" v-model="lastPeriod" class="w-full text-sm sm:text-base px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <!-- Input: durasi menstruasi -->
        <div class="flex flex-col items-start">
          <label for="duration" class="block text-gray-700 font-base mb-2">Durasi (hari)</label>
          <div class="flex items-center w-full justify-between">
            <button type="button" aria-label="Kurangi durasi" @click="updateValue('duration', -1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
              -
            </button>
            <input type="number" id="duration" v-model="duration" class="text-center w-36 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button type="button" aria-label="Tambah durasi" @click="updateValue('duration', 1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
              +
            </button>
          </div>
          <p v-if="errors.duration" class="text-red-500 text-sm mt-1">{{ errors.duration }}</p>
        </div>

        <!-- Input: panjang siklus -->
        <div class="flex flex-col items-start">
          <label for="cycleLength" class="block text-gray-700 font-base mb-2">Panjang Siklus (hari)</label>
          <div class="flex items-center w-full justify-between">
            <button type="button" aria-label="Kurangi panjang siklus" @click="updateValue('cycleLength', -1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
              -
            </button>
            <input type="number" id="cycleLength" v-model="cycleLength" class="text-center w-36 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button type="button" aria-label="Tambah panjang siklus" @click="updateValue('cycleLength', 1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
              +
            </button>
          </div>
          <p v-if="errors.cycleLength" class="text-red-500 text-sm mt-1">{{ errors.cycleLength }}</p>
        </div>

        <!-- Tombol kalkulasi -->
        <button type="submit" class="w-full bg-[#f8bbd0] text-[#6a4c46] font-semibold py-2 px-4 rounded-lg hover:bg-[#f4a6c6] transition duration-300">
            Kalkulasikan
        </button>
      </form>

      <!-- Hasil kalkulasi -->
      <div v-if="nextPeriod" class="mt-4 sm:mt-6 text-center text-[#4a4c46]">
        <p class="text-lg font-base">Tanggal Menstruasi Selanjutnya: <span class="font-semibold">{{ nextPeriod }}</span></p>
        <p v-if="lastPeriod" class="text-lg font-base">Tanggal Perkiraan Selesai: <span class="font-semibold">{{ endPeriod }}</span></p>
      </div>

      <!-- Card peringatan (mobile) -->
      <div class="mt-6 bg-pink-100 p-4 rounded-xl shadow-lg max-w-xs mx-auto block sm:hidden">
        <p class="text-sm font-medium text-pink-600">
          *Hasil prediksi ini hanya bersifat perkiraan dan tidak dapat dipercaya 100%. Siklus menstruasi dapat bervariasi antar individu.
        </p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      // Input data
      lastPeriod: '',
      duration: 5, 
      cycleLength: 28,
        
      // Hasil kalkulasi
      nextPeriod: null,
      endPeriod: null,

      // Error handling
      errors: {
        duration: '', 
        cycleLength: '',
      },
    };
  },
  methods: {
    /**
      * Update nilai input (tombol - / + )
      * @param {string} field - Nama field ('duration' atau 'cycleLength')
      * @param {number} change - Perubahan nilai (+1 atau -1)
      */
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

    /**
      * Validasi input durasi dan panjang siklus
      * @returns {boolean} - Apakah input valid
      */
    validateInputs() {
      let isValid = true;
      this.errors.duration = '';
      this.errors.cycleLength = '';

      if (!this.duration || isNaN(this.duration) || this.duration <= 0) {
        this.errors.duration = "Durasi harus berupa angka positif.";
        isValid = false;
      }

      if (!this.cycleLength || isNaN(this.cycleLength) || this.cycleLength <= 0) {
        this.errors.cycleLength = "Panjang siklus harus berupa angka positif.";
        isValid = false;
      }

      return isValid;
    },

    /**
      * Hitung tanggal menstruasi selanjutnya dan selesai
      */
    calculateNextPeriod() {
      if(!this.lastPeriod) {
        alert('Tanggal terakhir menstruasi harus diisi.');
        return;
      }

      if (!this.validateInputs()) {
        return;
      }

      const lastDate = new Date(this.lastPeriod);

      // Hitung tanggal menstruasi selanjutnya
      const nextDate = new Date(lastDate.getTime()); 
      nextDate.setDate(lastDate.getDate() + Number(this.cycleLength));
      this.nextPeriod = nextDate.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });

      // Hitung tanggal perkiraan selesai menstruasi
      const endDate = new Date(nextDate.getTime()); 
      endDate.setDate(nextDate.getDate() + Number(this.duration) - 1); 
      this.endPeriod = endDate.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
    },
  }, 
};
</script>