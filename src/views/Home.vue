<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
    <!-- Pita Background langsung pakai Tailwind -->
    <div class="absolute inset-0 bg-[url('/images/bg-coquette.jpg')] bg-repeat bg-[length:30%] opacity-30"></div>

    <!-- Jumbotron -->
    <div class="w-full p-10 mb-10 flex flex-col lg:flex-row items-center justify-between overflow-hidden relative z-10">

    <!-- Konten Jumbotron -->
    <div class="w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
      <h1 class="text-4xl font-extrabold text-[#6a4c46] mb-4">
        Selamat datang di 
        <span class="text-[#333333]">Fem</span>
        <span class="text-pink-800">Insight</span>
      </h1>
      <p class="text-lg text-gray-700 mb-4">
        Tubuh perempuan unik dan berharga — FemInsight membantu Anda memahami siklus, merencanakan kesehatan, dan merawat diri dengan percaya diri.
      </p>
      <router-link to="/kalkulator" class="inline-block">
        <button class="px-6 py-3 bg-[#f8bbd0] text-[#6a4c46] font-medium rounded-full transition-all hover:scale-105 hover:bg-[#f4a6c6] shadow-lg transform hover:shadow-xl">
          Mulai Sekarang
        </button>
      </router-link>
    </div>

    <!-- Gambar di sebelah kanan -->
    <div class="w-full lg:w-1/2 hidden lg:block">
      <img src="/images/header.png" alt="Health & Wellness" class="mx-auto object-cover">
    </div>

    </div>

    <!-- Konten Utama -->
    <div class="relative z-10 text-center w-full max-w-4xl mb-3">
      <h1 class="text-3xl sm:text-4xl pt-24 sm:pt-0 font-extrabold text-pink-600 mb-6">
        Health & Wellness Calculators
      </h1>
      <p class="text-base sm:text-lg text-gray-600 mb-6">
        One step solution for your health tracking needs.
      </p>

      <!-- Navigasi Kalkulator -->
      <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <div class="p-6 bg-white rounded-xl shadow-lg text-center flex flex-col items-center hover:shadow-2xl transition-all transform hover:scale-105">
          <h2 class="text-lg sm:text-xl font-semibold text-pink-500 mb-2">Kalkulator Menstruasi</h2>
          <p class="text-gray-600 mb-4 text-sm sm:text-base">Prediksi siklus menstruasi Anda dengan mudah.</p>
          <router-link to="/menstruasi">
            <button class="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-700 transition-all transform hover:scale-105">
              Coba
            </button>
          </router-link>
        </div>

        <div class="p-6 bg-white rounded-xl shadow-lg text-center flex flex-col items-center hover:shadow-2xl transition-all transform hover:scale-105">
          <h2 class="text-lg sm:text-xl font-semibold text-blue-500 mb-2">Kalkulator BMI</h2>
          <p class="text-gray-600 mb-4 text-sm sm:text-base">Hitung indeks massa tubuh Anda.</p>
          <router-link to="/bmi">
            <button class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">
              Coba
            </button>
          </router-link>
        </div>

        <div class="p-6 bg-white rounded-xl shadow-lg text-center flex flex-col items-center hover:shadow-2xl transition-all transform hover:scale-105">
          <h2 class="text-lg sm:text-xl font-semibold text-green-500 mb-2">Kalkulator HPL</h2>
          <p class="text-gray-600 mb-4 text-sm sm:text-base">Perkirakan tanggal persalinan Anda.</p>
          <router-link to="/hpl">
            <button class="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-all transform hover:scale-105">
              Coba
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>