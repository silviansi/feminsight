<template>
    <div class="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-50 to-white px-4">
      <!-- Dekorasi Lingkaran -->
      <div class="absolute top-10 right-20 w-56 h-56 bg-gradient-to-br from-pink-200 to-red-300 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-red-300 rounded-full blur-3xl opacity-50"></div>
  
      <!-- Konten Utama -->
      <div class="relative z-10 text-center w-full max-w-4xl mb-3">
        <h1 class="text-3xl sm:text-4xl pt-24 sm:pt-0 font-bold text-pink-600">Health & Wellness Calculators</h1>
        <p class="text-base sm:text-lg text-gray-600 mb-6">One step solution for your health tracking needs.</p>
  
        <!-- Navigasi Kalkulator -->
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <div class="p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center">
            <h2 class="text-lg sm:text-xl font-semibold text-pink-500">Kalkulator Menstruasi</h2>
            <p class="text-gray-600 mb-4 text-sm sm:text-base">Prediksi siklus menstruasi Anda dengan mudah.</p>
            <a href="/menstruasi" class="mt-auto px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-700">Coba</a>
          </div>
          
          <div class="p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center">
            <h2 class="text-lg sm:text-xl font-semibold text-blue-500">Kalkulator BMI</h2>
            <p class="text-gray-600 mb-4 text-sm sm:text-base">Hitung indeks massa tubuh Anda.</p>
            <a href="/bmi" class="mt-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Coba</a>
          </div>
          
          <div class="p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center">
            <h2 class="text-lg sm:text-xl font-semibold text-green-500">Kalkulator HPL</h2>
            <p class="text-gray-600 mb-4 text-sm sm:text-base">Perkirakan tanggal persalinan Anda.</p>
            <a href="/hpl" class="mt-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700">Coba</a>
          </div>
        </div>
      </div>
    </div>
</template>  