<template>
    <div class="relative h-screen flex items-center justify-center">
      
      <!-- Konten -->
      <div class="relative z-10 text-center w-full max-w-md px-4 py-8 bg-white bg-opacity-80 rounded-xl shadow-lg mt-4">
        <h1 class="text-xl sm:text-2xl font-extrabold text-[#6a4c46] mb-6">Kalkulator BMI</h1>
        <!-- Form Kalkulator -->
        <form @submit.prevent="calculateBMI" class="space-y-6">
          <div class="flex flex-col items-start">
            <label for="weight" class="block text-gray-700 font-base mb-2">Berat Badan (kg)</label>
            <div class="flex items-center w-full justify-between">
              <button type="button" @click="updateValue('weight', -1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
                -
              </button>
              <input type="number" id="weight" v-model="weight" class="text-center w-36 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <button type="button" @click="updateValue('weight', 1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
                +
              </button>
            </div>
          </div>
          <div class="flex flex-col items-start">
            <label for="height" class="block text-gray-700 font-base mb-2">Tinggi Badan (cm)</label>
            <div class="flex items-center w-full justify-between">
              <button type="button" @click="updateValue('height', -1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
                -
              </button>
              <input type="number" id="height" v-model="height" class="text-center w-36 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <button type="button" @click="updateValue('height', 1)" class="w-8 h-8 flex items-center justify-center bg-[#f8bbd0] text-white rounded-full hover:bg-[#f4a6c6] transition duration-300">
                +
              </button>
            </div>
            </div>
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
      weight: null,
      height: null,
      bmi: null,
      status: null,
      errors: {}
    };
  },
    methods: {
    updateValue(field, increment) {
      if (field === 'weight') {
        this.weight = Math.max(0, (this.weight || 0) + increment);
      } else if (field === 'height') {
        this.height = Math.max(0, (this.height || 0) + increment);
      }
    },
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