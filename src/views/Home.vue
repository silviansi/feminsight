<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">

    <!-- Jumbotron -->
    <section class="w-full px-10 pt-10 flex flex-col lg:flex-row items-center justify-between overflow-hidden relative z-10">

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
          Ayo Mulai!
        </button>
      </router-link>
    </div>

    <!-- Gambar di sebelah kanan -->
    <div class="w-full lg:w-1/2 hidden lg:block">
      <img src="/images/header-1.png" alt="Health & Wellness" class="mx-auto object-cover">
    </div>

    </section>

    <!-- Fitur Unggulan -->
    <section class="relative z-10 w-full max-w-6xl py-2 mb-6">
      <h2 class="text-3xl sm-text-4xl font-extrabold text-pink-600 text-center mb-10">
        Kenapa memilih FemInsight?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:scale-105">
          <img src="/images/icon-easy.png" alt="Mudah digunakan" class="mx-auto w-16 h-16 mb-4" />
          <h3 class="text-xl font-semibold text-[#6a4c46] mb-2">Mudah Digunakan</h3>
          <p class="text-gray-600 text-sm sm:text-base">Antarmuka intuitif, cocok untuk semua usia.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:scale-105">
          <img src="/images/icon-accurate.png" alt="Akurat & Andal" class="mx-auto w-16 h-16 mb-4" />
          <h3 class="text-xl font-semibold text-[#6a4c46] mb-2">Akurat & Andal</h3>
          <p class="text-gray-600 text-sm sm:text-base">Kalkulasi berbasis data medis terpercaya.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:scale-105">
          <img src="/images/icon-femtips.png" alt="FemTips" class="mx-auto w-16 h-16 mb-4" />
          <h3 class="text-xl font-semibold text-[#6a4c46] mb-2">FemTips</h3>
          <p class="text-gray-600 text-sm sm:text-base">
            Temukan tips seputar kesehatan dan perawatan diri agar hidup makin nyaman dan percaya diri.
          </p>
        </div>
      </div>
    </section>

    <!-- Kalkulator -->
    <section class="relative z-10 text-center w-full max-w-6xl py-4">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-pink-600 mb-6">
        Kalkulator Kesehatan & Kebugaran
      </h2>
      <p class="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Solusi mudah untuk melacak kesehatan dan merencanakan masa depan Anda dengan percaya diri.
      </p>

      <!-- Navigasi Kalkulator -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Kalkulator Menstruasi -->
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transition-all transform hover:scale-105">
          <img src="/images/icon-calendar-1.png" alt="Kalkulator Menstruasi" class="mx-auto w-16 h-16 mb-4" />
          <h3 class="text-xl font-semibold text-pink-600 mb-2">Kalkulator Menstruasi</h3>
          <p class="text-gray-600 text-sm sm:text-base mb-4">Prediksi siklus menstruasi Anda dengan mudah.</p>
          <router-link to="/menstruasi">
            <button class="px-6 py-3 bg-pink-200 text-[#6a4c46] font-medium rounded-full transition-all hover:scale-105 hover:bg-pink-300 shadow">
              Coba Sekarang
            </button>
          </router-link>
        </div>

        <!-- Kalkulator BMI -->
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transition-all transform hover:scale-105">
          <img src="/images/icon-bmi.png" alt="Kalkulator BMI" class="mx-auto w-16 h-16 mb-4" />
          <h3 class="text-xl font-semibold text-blue-500 mb-2">Kalkulator BMI</h3>
          <p class="text-gray-600 text-sm sm:text-base mb-4">Hitung indeks massa tubuh Anda.</p>
          <router-link to="/bmi">
            <button class="px-6 py-3 bg-blue-200 text-[#6a4c46] font-medium rounded-full transition-all hover:scale-105 hover:bg-blue-300 shadow">
              Coba Sekarang
            </button>
          </router-link>
        </div>

        <!-- Kalkulator HPL -->
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transition-all transform hover:scale-105">
          <img src="/images/icon-hpl.png" alt="Kalkulator HPL" class="mx-auto w-16 h-16 mb-4" />
          <h3 class="text-xl font-semibold text-green-500 mb-2">Kalkulator HPL</h3>
          <p class="text-gray-600 text-sm sm:text-base mb-4">Perkirakan tanggal persalinan Anda.</p>
          <router-link to="/hpl">
            <button class="px-6 py-3 bg-green-200 text-[#6a4c46] font-medium rounded-full transition-all hover:scale-105 hover:bg-green-300 shadow">
              Coba Sekarang
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Infografis & Fun Fact -->
    <section class="relative z-10 w-full max-w-6xl py-16">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-pink-600 text-center mb-6">
        Infografis & Fun Fact Seputar Kesehatan
      </h2>

      <!-- Infografis -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:scale-105">
          <img src="/images/infografis-1.png" alt="Infografis 1" class="mx-auto w-24 h-24 mb-4" />
          <h3 class="text-xl font-semibold text-pink-600 mb-2">Siklus Menstruasi</h3>
          <p class="text-gray-600 text-sm sm:text-base">Infografis ini membantu Anda memahami tahap-tahap siklus menstruasi dengan lebih mudah dan visual.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:scale-105">
          <img src="/images/infografis-2.png" alt="Infografis 2" class="mx-auto w-24 h-24 mb-4" />
          <h3 class="text-xl font-semibold text-pink-600 mb-2">Kesehatan Tubuh Perempuan</h3>
          <p class="text-gray-600 text-sm sm:text-base">Temukan tips merawat tubuh Anda dengan infografis tentang pola makan dan olahraga yang tepat.</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:scale-105">
          <img src="/images/infografis-3.png" alt="Infografis 3" class="mx-auto w-24 h-24 mb-4" />
          <h3 class="text-xl font-semibold text-pink-600 mb-2">Pentingnya Hidrasi</h3>
          <p class="text-gray-600 text-sm sm:text-base">Infografis ini mengingatkan Anda akan pentingnya hidrasi untuk kesehatan kulit dan tubuh secara keseluruhan.</p>
        </div>
      </div>

      <!-- Fun Fact -->
      <div class="bg-pink-100 p-8 rounded-xl shadow-lg text-center">
        <h3 class="text-xl font-semibold text-[#6a4c46] mb-4">Fun Fact</h3>
        <p class="text-lg text-gray-700 mb-4">
          Tahukah Anda? Perempuan cenderung lebih sensitif terhadap rasa sakit saat menstruasi karena fluktuasi hormon, tetapi ada juga perempuan yang merasa lebih kuat dan energik selama periode ini!
        </p>
        <p class="text-lg text-gray-700">
          Jadi, tidak ada satu pengalaman yang sama bagi setiap individu. Setiap tubuh unik dan memerlukan perhatian khusus.
        </p>
      </div>
    </section>

  </div>
</template>