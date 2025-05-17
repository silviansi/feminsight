<template>
    <div class="relative h-screen flex items-center justify-center">
        <!-- Card Peringatan (desktop) -->
        <div class="absolute top-6 left-6 mt-12 bg-pink-100 p-4 rounded-xl shadow-lg max-w-xs mx-auto hidden sm:block" data-aos="fade-down-right" data-aos-duration="800">
            <p class="text-sm font-medium text-pink-600">
                *Hasil perkiraan Hari Perkiraan Lahir (HPL) ini hanya bersifat estimasi. Tanggal persalinan dapat berbeda tergantung kondisi ibu dan janin. Konsultasikan selalu dengan tenaga kesehatan.
            </p>
        </div>

        <!-- Konten utama -->
        <div class="relative z-10 text-center w-full max-w-md px-8 py-8 bg-white bg-opacity-80 rounded-xl shadow-lg mt-4" data-aos="zoom-in" data-aos-duration="800">
            <h1 class="text-xl sm:text-2xl font-extrabold text-[#6a4c46] mb-6">Kalkulator Perkiraan Hari Lahir</h1>

            <!-- Form Kalkulator -->
            <form @submit.prevent="calculateHPL" class="space-y-6">
            <!-- Input: tanggal terakhir menstruasi -->
                <div class="flex flex-col items-start">
                    <label for="lastPeriod" class="block text-gray-700 font-base mb-2">Tanggal Terakhir Menstruasi</label>
                    <input type="date" id="lastPeriod" v-model="lastPeriod" class="w-full text-sm sm:text-base px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <!-- Tombol kalkulasi -->
                <button type="submit" class="w-full bg-[#f8bbd0] text-[#6a4c46] font-semibold py-2 px-4 rounded-lg hover:bg-[#f4a6c6] transition duration-300">
                    Kalkulasikan
                </button>
            </form>

            <!-- Hasil Kalkulasi -->
            <div v-if="hpl" class="mt-4 sm:mt-6 text-center text-[#6a4c46]">
                <p class="text-lg font-base">Perkiraan Hari Lahir: <span class="font-bold">{{ hpl }}</span></p>
            </div>

            <!-- Card Peringatan (mobile) -->
            <div class="mt-6 bg-pink-100 p-4 rounded-xl shadow-lg max-w-xs mx-auto block sm:hidden">
                <p class="text-sm font-medium text-pink-600">
                    *Hasil perkiraan Hari Perkiraan Lahir (HPL) ini hanya bersifat estimasi. Tanggal persalinan dapat berbeda tergantung kondisi ibu dan janin. Konsultasikan selalu dengan tenaga kesehatan.
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
        lastPeriod: null,

        // Output data
        hpl: null,

        // Error messages
        errors: {}
        };
    },
    methods: {
        /**
         * Hitung Hari Perkiraan Lahir (HPL) berdasarkan tanggal terakhir menstruasi
         */
         calculateHPL() {
            this.errors = {}

            if (!this.lastPeriod) {
                this.errors.lastPeriod = 'Tanggal terakhir menstruasi harus diisi';
            }

            if (this.lastPeriod) {
                const lastPeriodDate = new Date(this.lastPeriod);
                const dueDate = new Date(lastPeriodDate.getTime() + 280 * 24 * 60 * 60 * 1000);

                const day = dueDate.getDate().toString().padStart(2, '0');
                const month = (dueDate.getMonth() + 1).toString().padStart(2, '0');
                const year = dueDate.getFullYear();

                this.hpl = `${day}-${month}-${year}`;
            }
        }
    }
}
</script>