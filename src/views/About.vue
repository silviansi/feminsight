<template>
    <div class="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden mt-8">
        <!-- Lace background di bawah navbar -->
        <div class="absolute lace-border w-full h-12 top-2"></div>
        <!-- Hero Section -->
        <section class="w-full max-w-6xl text-center pt-16 px-4">
            <h1 class="text-xl md:text-4xl font-extrabold text-[#6a4c46] mb-4">Tentang FemInsight</h1>
            <p class="text-lg md:text-xl text-pink-600">Bersama memahami tubuh, merawat diri, dan merayakan kesehatan perempuan.</p>
        </section>
  
        <!-- Visi & Misi -->
        <section class="w-full max-w-6xl py-12 px-4 grid md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                <h2 class="text-xl font-semibold text-pink-600 mb-4">Visi Kami</h2>
                <p class="text-gray-700 text-base md:text-lg">Menjadi sahabat terpercaya perempuan Indonesia dalam memahami kesehatan reproduksi dan merawat diri dengan percaya diri dan cinta.</p>
            </div>
            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
                <h2 class="text-xl font-semibold text-pink-600 mb-4">Misi Kami</h2>
                <ul class="space-y-2 text-gray-700 text-base md:text-lg">
                <li>🎀 Menyediakan informasi kesehatan akurat & mudah dipahami</li>
                <li>🎀 Memberikan alat bantu praktis untuk pemantauan kesehatan</li>
                <li>🎀 Mendorong perempuan merawat diri dengan penuh cinta</li>
                </ul>
            </div>
        </section>
  
        <!-- Cerita FemInsight -->
        <section class="w-full max-w-5xl py-12 px-4 text-center">
            <h2 class="text-xl md:text-4xl font-extrabold text-[#6a4c46] mb-6">Cerita FemInsight</h2>
            <p class="text-gray-700 text-lg leading-relaxed">
                FemInsight lahir dari keinginan untuk menghadirkan ruang aman dan nyaman bagi perempuan Indonesia dalam memahami tubuh dan kesehatannya. Kami percaya setiap perempuan berhak mendapatkan akses informasi yang jelas, alat bantu yang akurat, dan komunitas yang suportif.  
                Bersama FemInsight, mari kita rayakan perjalanan kesehatan perempuan dengan bijak, lembut, dan penuh cinta.
            </p>
        </section>
  
        <!-- CTA -->
        <section class="w-full max-w-5xl py-12 px-4 text-center">
            <h2 class="text-2xl md:text-3xl font-extrabold text-[#6a4c46] mb-4">Mari jelajahi FemInsight bersama kami!</h2>
            <p class="text-gray-700 mb-6">Gunakan kalkulator kesehatan atau baca FemTips untuk merawat diri dengan bijaksana.</p>
            <router-link to="/blog">
                <button class="px-6 py-3 bg-[#f8bbd0] text-[#6a4c46] font-medium rounded-full transition hover:scale-105 hover:bg-[#f4a6c6] shadow-lg hover:shadow-xl">
                    Baca FemTips
                </button>
            </router-link>
        </section>
    </div>
</template>

<style scoped>
.lace-border {
  background-image: url('/images/lace-2.png');
  background-repeat: repeat-x;
  background-position: top center;
  background-size: auto 100%;
}
</style>