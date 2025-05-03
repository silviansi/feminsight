<template>
    <div class="relative h-screen flex items-center justify-center">

    <!-- Konten -->
    <div class="relative z-10 text-center w-full max-w-md px-4 py-8 bg-white bg-opacity-80 rounded-xl shadow-lg mt-4">
        <h1 class="text-xl sm:text-2xl font-bold text-green-500 mb-6">Kalkulator Perkiraan Hari Lahir</h1>

        <!-- Form Kalkulator -->
        <form @submit.prevent="calculateHPL" class="space-y-6">
        <div class="flex flex-col items-start">
            <label for="lastPeriod" class="block text-gray-700 font-medium mb-2">Tanggal Terakhir Menstruasi</label>
            <input type="date" id="lastPeriod" v-model="lastPeriod" class="w-full text-sm sm:text-base px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <button type="submit" class="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-800">
            Kalkulasikan
        </button>
        </form>

        <!-- Hasil Kalkulasi -->
        <div v-if="hpl" class="mt-4 sm:mt-6 text-center">
            <p class="text-lg font-medium">Perkiraan Hari Lahir: <span class="font-bold">{{ hpl }}</span></p>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        lastPeriod: null,
        hpl: null,
        errors: {}
        };
    },
    methods: {
        calculateHPL() {
        this.errors = {}
        if (!this.lastPeriod) {
            this.errors.lastPeriod = 'Tanggal terakhir menstruasi harus diisi'
        }
        if (this.lastPeriod) {
            const lastPeriodDate = new Date(this.lastPeriod)
            const dueDate = new Date(lastPeriodDate.getTime() + 280 * 24 * 60 * 60 * 1000)
            this.hpl = dueDate.toISOString().split('T')[0]
        }
        }
    }
}
</script>