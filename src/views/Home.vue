<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden mt-8">
    <!-- Lace background di bawah navbar -->
    <div class="absolute lace-border w-full h-12 top-2"></div>

    <!-- Ribbon -->
    <div class="absolute top-24 md:top-14 left-5 w-28 md:w-40 rotate-[-12deg] opacity-40">
      <img src="/images/ribbon-1.png" alt="Health & Wellness" class="w-full h-auto object-cover" />
    </div>

    <!-- Section: Jumbotron -->
    <section class="relative py-28 md:py-16 px-8 sm:px-6 md:px-20 w-full max-w-7xl mt-8">
      <div class="flex flex-col-reverse md:flex-row items-center gap-8">

        <!-- Text content -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6a4c46] mb-4 leading-snug" data-aos="fade-up" data-aos-duration="2000">
            Kenali tubuhmu, cintai dirimu — bersama
            <span class="text-[#333333]">Fem</span><span class="text-pink-800">Insight</span>
          </h1>
          <p class="text-gray-700 text-base sm:text-lg mb-6" data-aos="fade-up" data-aos-duration="3000">
            Tubuh perempuan unik dan berharga — FemInsight membantu Anda memahami siklus, merencanakan kesehatan, dan merawat diri dengan percaya diri.
          </p>
          <motion.button
            :whileHover="{ scale: 1.05 }"
            :whileTap="{ scale: 0.95 }"
            @click="scrollToFeatures"
            class="px-6 py-3 bg-[#f8bbd0] text-[#6a4c46] font-medium rounded-full hover:scale-105 hover:bg-[#f4a6c6] shadow-lg focus-visible:outline focus-visible:outline-pink-400"
            data-aos="fade-up" data-aos-duration="3000">
            Ayo Mulai! 💗
          </motion.button>
        </div>

        <!-- Image collage -->
        <div class="relative w-full md:w-1/2 h-[350px] sm:h-[400px] hidden md:block">
          <motion.div 
            :initial="{ opacity: 0, y: 60, rotate: -25 }"
            :animate="{ opacity: 1, y: 0, rotate: -10 }"
            :transition="{ duration: 1.0, delay: 0.9, ease: 'easeOut' }"
            class="absolute top-8 left-6 rotate-[-10deg] sm:left-10 w-40 bg-white shadow-lg p-2 border rounded-lg">
            <img src="/images/polaroid-1.png" alt="Self Care" class="w-full h-28 sm:h-32 object-cover rounded" />
          </motion.div>

          <motion.div 
            :initial ="{ opacity: 0, y: 60, rotate: 25 }"
            :animate="{ opacity: 1, y: 0, rotate: 10 }"
            :transition="{ duration: 1.0, delay: 1.0, ease: 'easeOut' }"
            class="absolute top-8 right-0 w-36 rotate-[8deg] bg-white shadow-lg p-2 border rounded-lg">
            <img src="/images/polaroid-2.png" alt="Fem Power" class="w-full h-24 sm:h-28 object-cover rounded" />
          </motion.div>

          <motion.div
            :initial="{ opacity: 0, y: 60, rotate: -15 }"
            :animate="{ opacity: 1, y: 0, rotate: -5 }"
            :transition="{ duration: 1.0, delay: 1.2, ease: 'easeOut' }"
            class="absolute top-28 right-36 w-40 rotate-[-3deg] bg-white shadow-lg p-2 border rounded-lg">
            <img src="/images/polaroid-3.png" alt="Body Awareness" class="w-full h-24 sm:h-28 object-cover rounded" />
          </motion.div>

          <motion.div 
            :initial="{ opacity: 0, y: 60, rotate: 10 }"
            :animate="{ opacity: 1, y: 0, rotate: 5 }"
            :transition="{ duration: 1.0, delay: 1.4, ease: 'easeOut' }"
            class="absolute bottom-4 left-36 w-32 rotate-[10deg] bg-[#f8bbd0] p-3 shadow-lg border-2 border-[#f8bbd0] rounded-lg">
            <p class="text-sm text-[#6a4c46] text-center font-medium leading-tight">Jaga kesehatanmu 🌸</p>
          </motion.div>

          <motion.div 
            :initial="{ opacity: 0, scale: 0 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ 
              duration: 0.4,
              scale: { type: 'spring', visualDuration: 0.8, bounce: 0.5 } }"
            class="absolute bottom-0 right-10 w-24">
            <img src="/images/stamp-1.png" alt="Stamp" class="w-full h-auto object-cover opacity-80" />
          </motion.div>
          <motion.div
            :initial="{ opacity: 0, scale: 0, rotate: 10 }"
            :animate="{ opacity: 1, scale: 1, rotate: 10 }"
            :transition="{ 
              duration: 0.4,
              scale: { type: 'spring', visualDuration: 0.8, bounce: 0.5 } }"
            class="absolute bottom-20 right-4 w-20 rotate-[10deg]">
            <img src="/images/stamp-2.png" alt="Stamp" class="w-full h-auto object-cover opacity-80" />
          </motion.div>
        </div>
      </div>
    </section>

    <!-- Section: Fitur Unggulan -->
    <section id="features" class="w-full max-w-6xl py-16 px-4 text-center mx-auto">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-[#6a4c46] mb-4">
        Fitur Unggulan FemInsight
      </h2>
      <p class="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        FemInsight hadir untuk membantu perempuan memahami dan menjaga kesehatannya dengan alat dan informasi terpercaya.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div
          v-for="(fitur, i) in fiturList"
          :key="i"
          class="bg-white rounded-xl shadow-md p-6 hover:shadow-lg"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          :data-aos-delay="i * 200"
        >
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-pink-200 text-[#6a4c46] rounded-full text-3xl">
            {{ fitur.icon }}
          </div>
          <h3 class="text-lg font-semibold text-[#6a4c46] mb-2">{{ fitur.judul }}</h3>
          <p class="text-gray-600 text-sm">{{ fitur.deskripsi }}</p>
        </div>
      </div>
    </section>

    <!-- Section: Kalkulator -->
    <section class="w-full max-w-6xl py-12 px-4 text-center">
      <h2 class="text-3xl sm:text-4xl font-extrabold text-[#6a4c46] mb-6">Kalkulator Kesehatan & Kebugaran</h2>
      <p class="text-base sm:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Solusi mudah untuk melacak kesehatan dan merencanakan masa depan Anda dengan percaya diri.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform">
          <img src="/images/icon-calendar-1.png" alt="Kalkulator Menstruasi" class="mx-auto w-16 h-16 mb-4" />
          <h3 class="text-xl font-bold text-pink-600 mb-2">Kalkulator Menstruasi</h3>
          <p class="text-gray-600 text-sm sm:text-base mb-4">Prediksi siklus menstruasi Anda.</p>
          <router-link to="/menstruasi">
            <button class="px-6 py-3 bg-pink-200 text-[#6a4c46] font-medium rounded-full transition hover:scale-105 hover:bg-pink-300 shadow">
              Coba Sekarang
            </button>
          </router-link>
        </div>

        <div 
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform">
          <img src="/images/icon-bmi.png" alt="Kalkulator BMI" class="mx-auto w-16 h-16 mb-4" />
          <h3 class="text-xl font-bold text-blue-500 mb-2">Kalkulator BMI</h3>
          <p class="text-gray-600 text-sm sm:text-base mb-4">Hitung indeks massa tubuh Anda.</p>
          <router-link to="/bmi">
            <button class="px-6 py-3 bg-blue-200 text-[#6a4c46] font-medium rounded-full transition hover:scale-105 hover:bg-blue-300 shadow">
              Coba Sekarang
            </button>
          </router-link>
        </div>

        <div 
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          class="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform">
          <img src="/images/icon-hpl.png" alt="Kalkulator HPL" class="mx-auto w-16 h-16 mb-4" />
          <h3 class="text-xl font-bold text-green-500 mb-2">Kalkulator HPL</h3>
          <p class="text-gray-600 text-sm sm:text-base mb-4">Perkirakan tanggal persalinan Anda.</p>
          <router-link to="/hpl">
            <button class="px-6 py-3 bg-green-200 text-[#6a4c46] font-medium rounded-full transition hover:scale-105 hover:bg-green-300 shadow">
              Coba Sekarang
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Section: Artikel Populer -->
    <section class="w-full max-w-6xl py-12 px-4">
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-[#6a4c46]">Artikel Populer & Tips Kesehatan Wanita</h2>
        <p class="text-base sm:text-lg text-gray-600 mt-2">Temukan berbagai artikel seputar kesehatan wanita yang bermanfaat untuk gaya hidup sehat dan keseimbangan tubuh.</p>
      </div>

      <!-- Wrapper for Articles -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <!-- Artikel 1 -->
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img src="/images/articel-1.jpg" alt="Artikel 1" class="w-full h-40 object-cover">
          <div class="p-4">
            <h3 class="font-semibold text-[#6a4c46] text-lg text-center mb-2">Menjaga Kesehatan Reproduksi Wanita</h3>
            <p class="text-gray-600 text-sm mb-4">Pelajari bagaimana menjaga kesehatan reproduksi dengan tips yang mudah diterapkan dalam kehidupan sehari-hari.</p>
            <a href="#" class="text-[#6a4c46] font-semibold hover:underline">Baca Selengkapnya</a>
          </div>
        </div>

        <!-- Artikel 2 -->
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img src="/images/articel-2.jpg" alt="Artikel 2" class="w-full h-40 object-cover">
          <div class="p-4">
            <h3 class="font-semibold text-[#6a4c46] text-lg text-center mb-2">Nutrisi untuk Kesehatan Wanita</h3>
            <p class="text-gray-600 text-sm mb-4">Artikel ini memberikan tips diet sehat yang bisa meningkatkan kualitas hidup dan mendukung kesehatan jangka panjang.</p>
            <a href="#" class="text-[#6a4c46] font-semibold hover:underline">Baca Selengkapnya</a>
          </div>
        </div>

        <!-- Artikel 3 -->
        <div
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
          <img src="/images/articel-3.jpg" alt="Artikel 3" class="w-full h-40 object-cover">
          <div class="p-4">
            <h3 class="font-semibold text-[#6a4c46] text-lg text-center mb-2">Cara Mengelola Stres dengan Yoga</h3>
            <p class="text-gray-600 text-sm mb-4">Stres bisa mempengaruhi kesehatan tubuh. Pelajari cara mengelola stres dengan yoga dan relaksasi yang mudah diikuti.</p>
            <a href="#" class="text-[#6a4c46] font-semibold hover:underline">Baca Selengkapnya</a>
          </div>
        </div>

        <!-- Button: Lihat Semua Artikel -->
        <div class="flex justify-center items-center p-4">
          <a href="/blog" class="bg-transparent text-[#6a4c46] border-2 border-[#6a4c46] py-2 px-6 rounded-full text-sm font-semibold hover:bg-[#f8bbd0] hover:text-[#6a4c46] transition duration-300">Lihat Semua Artikel</a>
        </div>
      </div>
    </section>

      <!-- Section: FAQ -->
      <section class="w-full max-w-6xl py-12 px-4">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-[#6a4c46] text-center mb-10">Pertanyaan yang Sering Diajukan (FAQ)</h2>

        <div class="space-y-4">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            :data-aos-delay="i * 200"
            v-for="(faq, index) in faqs" :key="index" class="bg-white border border-pink-100 rounded-xl shadow hover:shadow-md transition">
            <button @click="toggle(index)" class="w-full flex justify-between items-center p-4 sm:p-6 text-left rounded-xl hover:bg-pink-50 transition">
              <span class="text-[#6a4c46] text-base sm:text-lg font-semibold flex items-center gap-2">
                {{ faq.question }} <span class="text-pink-500 text-xl">{{ faq.emoji }}</span>
              </span>
              <svg :class="{'transform rotate-180': activeIndex === index}" class="h-5 w-5 text-pink-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="activeIndex === index" class="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 text-sm sm:text-base">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </section>
      

    <!-- Section: Fun Fact -->
    <section class="w-full max-w-6xl py-12 px-4">
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

<script setup>
import { ref } from 'vue'
import { motion } from 'motion-v'

// Data fitur
const fiturList = [
  {
    icon: '📆',
    judul: 'Pelacak Siklus Menstruasi',
    deskripsi: 'Lacak dan prediksi siklus menstruasi dengan mudah, sehingga kamu bisa lebih memahami tubuhmu setiap bulan.'
  },
  {
    icon: '⚖️',
    judul: 'Kalkulator BMI',
    deskripsi: 'Hitung Indeks Massa Tubuh (BMI) untuk memantau status berat badan dan kesehatan secara umum.'
  },
  {
    icon: '🤰',
    judul: 'Kalkulator HPL',
    deskripsi: 'Prediksi Hari Perkiraan Lahir (HPL) dengan memasukkan tanggal menstruasi terakhir untuk perencanaan kehamilan yang lebih baik.'
  },
  {
    icon: '✨',
    judul: 'Inspirasi & Quotes Positif',
    deskripsi: 'Dapatkan inspirasi dan afirmasi positif untuk mendukung kesehatan mental Anda.'
  },
  {
    icon: '❓',
    judul: 'Mitos dan Fakta Perempuan',
    deskripsi: 'Ketahui kebenaran di balik berbagai mitos seputar kesehatan perempuan agar Anda bisa lebih memahami diri.'
  },
  {
    icon: '🧘‍♀️',
    judul: 'Tips Kesehatan & Relaksasi',
    deskripsi: 'Pelajari tips relaksasi dan teknik perawatan diri untuk menjaga keseimbangan tubuh dan pikiran.'
  }
]

// Data FAQ
const faqs = [
  {
    question: 'Apakah FemInsight aman digunakan?',
    answer: 'Ya, FemInsight menggunakan data anonim dan tidak menyimpan informasi pribadi Anda. Semua kalkulasi berbasis data medis yang terpercaya.',
    emoji: '💖'
  },
  {
    question: 'Apakah FemInsight gratis digunakan?',
    answer: 'Tentu saja! Semua fitur kalkulator dan tips kesehatan di FemInsight bisa diakses secara gratis tanpa biaya apapun.',
    emoji: '🎀'
  },
  {
    question: 'Apakah saya perlu mendaftar akun untuk menggunakan kalkulator?',
    answer: 'Tidak perlu. Anda bisa langsung menggunakan kalkulator kapan saja tanpa registrasi atau login.',
    emoji: '🌸'
  }
]

const scrollToFeatures = () => {
  const element = document.getElementById('features')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// FAQ toggle
const activeIndex = ref(null)
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.lace-border {
  background-image: url('/images/lace-2.png');
  background-repeat: repeat-x;
  background-position: top center;
  background-size: auto 100%;
}
</style>