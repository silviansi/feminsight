<template>
    <div class="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white">
      <!-- Dekorasi Lingkaran -->
      <div class="absolute top-10 right-20 w-56 h-56 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full blur-3xl opacity-50"></div>
      <!-- Konten -->
      <div class="relative z-10 text-center w-full max-w-md px-4 py-8 bg-white bg-opacity-80 rounded-xl shadow-lg mt-4">
        <h1 class="text-xl sm:text-2xl font-bold text-indigo-400 mb-6">Kalkulator BMI</h1>
        <!-- Form Kalkulator -->
        <form @submit.prevent="calculateBMI" class="space-y-6">
          <div class="flex flex-col items-start">
            <label for="weight" class="block text-gray-700 font-medium mb-2">Berat Badan (kg)</label>
            <input type="number" id="weight" v-model="weight" class="w-full text-sm sm:text-base px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="flex flex-col items-start">
            <label for="height" class="block text-gray-700 font-medium mb-2">Tinggi Badan (cm)</label>
            <input type="number" id="height" v-model="height" class="w-full text-sm sm:text-base px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <button type="submit" class="w-full bg-indigo-400 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
              Kalkulasikan
          </button>
        </form>

        <!-- Hasil Kalkulasi -->
        <div v-if="bmi" class="mt-4 sm:mt-6 text-center">
          <p class="text-lg font-medium">BMI: <span class="font-bold">{{ bmi }}</span></p>
          <p v-if="status" class="text-lg font-medium">Status: <span class="font-bold">{{ status }}</span></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      weight: null,
      height: null,
      bmi: null,
      status: null,
      errors: {}
    };
  },
    methods: {
      calculateBMI() {
        this.errors = {}
        if (!this.weight) {
          this.errors.weight = 'Berat badan harus diisi'
        }
        if (!this.height) {
          this.errors.height = 'Tinggi badan harus diisi'
        }
        if (this.weight && this.height) {
          const heightInMeter = this.height / 100
          this.bmi = (this.weight / (heightInMeter * heightInMeter)).toFixed(2)
          if (this.bmi < 18.5) {
            this.status = 'Kekurangan Berat Badan'
          } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
            this.status = 'Normal (Ideal)'
          } else if (this.bmi >= 24.9 && this.bmi < 29.9) {
            this.status = 'Kelebihan Berat Badan'
          } else {
            this.status = 'Obesitas'
          }
        }
  }
  }
}
</script>