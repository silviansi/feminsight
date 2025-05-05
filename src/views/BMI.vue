<template>
    <div class="relative h-screen flex items-center justify-center">
      
      <!-- Konten utama -->
      <div class="relative z-10 text-center w-full max-w-md px-8 py-8 bg-white bg-opacity-80 rounded-xl shadow-lg mt-4">
        <h1 class="text-xl sm:text-2xl font-extrabold text-[#6a4c46] mb-6">Kalkulator BMI</h1>
        <!-- Form Kalkulator -->
        <form @submit.prevent="calculateBMI" class="space-y-6">
          <!-- Input: berat badan -->
          <div class="flex flex-col items-start">
            <label for="weight" class="block text-gray-700 font-base mb-2">Berat Badan (kg)</label>
            <div class="flex items-center w-full justify-between">
              <button type="button" aria-label="Kurangi berat badan" @click="updateValue('weight', -1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
                -
              </button>
              <input type="number" id="weight" v-model="weight" class="text-center w-36 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <button type="button" aria-label="Tambah berat badan" @click="updateValue('weight', 1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
                +
              </button>
            </div>
            <p v-if="errors.weight" class="text-red-500 text-sm mt-1">{{ errors.weight }}</p>
          </div>

          <!-- Input: tinggi badan -->
          <div class="flex flex-col items-start">
            <label for="height" class="block text-gray-700 font-base mb-2">Tinggi Badan (cm)</label>
            <div class="flex items-center w-full justify-between">
              <button type="button" aria-label="Kurangi tinggi badan" @click="updateValue('height', -1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
                -
              </button>
              <input type="number" id="height" v-model="height" class="text-center w-36 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <button type="button" aria-label="Tambah berat badan" @click="updateValue('height', 1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
                +
              </button>
            </div>
            <p v-if="errors.height" class="text-red-500 text-sm mt-1">{{ errors.height }}</p>
          </div>

          <!-- Tombol kalkulasi -->
          <button type="submit" class="w-full bg-[#f8bbd0] text-[#6a4c46] font-semibold py-2 px-4 rounded-lg hover:bg-[#f4a6c6] transition duration-300">
              Kalkulasikan
          </button>
        </form>

        <!-- Hasil Kalkulasi -->
        <div v-if="bmi" class="mt-4 sm:mt-6 text-center text-[#6a4c46]">
          <p class="text-lg font-base">BMI: <span class="font-bold">{{ bmi }}</span></p>
          <p v-if="status" class="text-lg font-base">Status: <span class="font-bold">{{ status }}</span></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // Input data
      weight: null,
      height: null,

      // Hasil kalkulasi
      bmi: null,
      status: null,

      // Error handling
      errors: {
        weight: '',
        height: '',
      }
    };
  },
  methods: {
    /**
     * Update nilai input (tombol - / + )
     * @param {string} field - Nama field ('weight' atau 'height')
     * @param {number} increment - Perubahan nilai (+1 atau -1)
     */
     updateValue(field, increment, minValue = 0) {
      const currentValue = parseFloat(this[field]) || 0;
      const newValue = currentValue + increment;
      this[field] = Math.max(minValue, newValue);
    },
    /**
     * Validasi input BMI
     * @returns {boolean} - True jika input valid, false jika ada error
     */
    validateInputs() {
      this.errors = {};

      // Validasi berat badan
      if (!this.weight || isNaN(this.weight) || this.weight <= 0) {
        this.errors.weight = 'Berat badan harus berupa angka lebih dari 0';
      } 

      // Validasi tinggi badan
      if (!this.height || isNaN(this.height) || this.height <= 0) {
        this.errors.height = 'Tinggi badan harus berupa angka lebih dari 0';
      }

      // Return true jika tidak ada error
      return Object.keys(this.errors).length === 0;
    },
    /**
     * Hitung BMI
     */
    calculateBMI() {
      if (this.validateInputs()) {
        const heightInMeter = this.height / 100; // Konversi tinggi badan ke meter
        this.bmi = (this.weight / (heightInMeter * heightInMeter)).toFixed(2); // Hitung BMI

        // Tentukan status berdasarkan nilai BMI
        if (this.bmi < 18.5) {
          this.status = 'Kekurangan Berat Badan';
        } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
          this.status = 'Normal (Ideal)';
        } else if (this.bmi >= 24.9 && this.bmi < 29.9) {
          this.status = 'Kelebihan Berat Badan';
        } else {
          this.status = 'Obesitas';
        }
      } else {
        this.bmi = null; // Reset hasil jika ada error
        this.status = null; // Reset status jika ada error
      }
    }
  }
}
</script>