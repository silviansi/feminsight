<template>
    <div class="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden mt-8">
        <!-- Lace background di bawah navbar -->
        <div class="absolute lace-border w-full h-12 top-2"></div>
    
        <!-- Hero Section -->
        <section class="w-full max-w-6xl text-center pt-16 px-4">
            <h1 class="text-xl md:text-4xl font-extrabold text-[#6a4c46] mb-4">Blog FemInsight</h1>
            <p class="text-lg md:text-xl text-pink-600">Berita dan informasi seputar kesehatan perempuan.</p>
        </section>
  
        <!-- Blog Posts -->
        <section class="w-full max-w-6xl py-12 px-4 grid md:grid-cols-4 gap-8 mb-6">
            <!-- Daftar blog -->
            <div
            v-for="blog in blogs"
            :key="blog.id"
            class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 overflow-hidden flex flex-col"
            >
            <img :src="blog.image" alt="Blog Image" class="w-full h-40 object-cover rounded-t-xl" />
            <div class="p-4 flex flex-col flex-grow">
                <h2 class="text-lg font-semibold text-pink-600 mb-2">{{ blog.title }}</h2>
                <p class="text-gray-700 text-base flex-grow">{{ blog.shortDescription }}</p>
                <router-link :to="`/blog/${blog.id}`" class="mt-4">
                <button class="w-full bg-[#f8bbd0] text-[#6a4c46] font-semibold py-2 rounded-lg hover:bg-[#f4a6c6] transition">
                    Baca Selengkapnya
                </button>
                </router-link>
            </div>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
  
// Data blog (dengan gambar)
const blogs = ref([
  {
    id: '1',
    title: 'Bagaimana Pola Haid Bisa Menjadi Cerminan Kesehatan Reproduksi?',
    shortDescription: 'Siklus haid yang teratur bisa menjadi indikator kesehatan tubuh secara keseluruhan.',
    image: '/images/blog-1.jpg',
    content: `Siklus haid tidak hanya menunjukkan kesiapan tubuh untuk reproduksi, tetapi juga mencerminkan keseimbangan hormon dalam tubuh. Gangguan seperti haid terlalu sering, jarang, atau tidak datang sama sekali bisa menjadi tanda adanya ketidakseimbangan hormon, stres berlebih, atau kondisi medis seperti PCOS dan endometriosis. Memantau pola haid bisa membantu deteksi dini masalah kesehatan.`
  },
  {
    id: '2',
    title: 'Kaitan Endometriosis dengan Kesuburan Perempuan',
    shortDescription: 'Endometriosis sering tak disadari, padahal bisa memengaruhi kesuburan.',
    image: '/images/blog-2.jpg',
    content: `Endometriosis terjadi saat jaringan mirip endometrium tumbuh di luar rahim. Kondisi ini bisa menyebabkan nyeri hebat saat haid dan berdampak pada kesuburan. Jaringan endometriosis dapat menghalangi tuba falopi atau mengganggu proses ovulasi. Diagnosis dini dan pengobatan tepat, seperti terapi hormonal atau laparoskopi, dapat membantu meningkatkan peluang kehamilan.`
  },
  {
    id: '3',
    title: 'Mengapa Pemeriksaan Payudara Secara Rutin Penting?',
    shortDescription: 'Deteksi dini kanker payudara bisa menyelamatkan nyawa.',
    image: '/images/blog-3.jpg',
    content: `Pemeriksaan payudara secara rutin membantu mendeteksi perubahan atau benjolan yang tidak biasa sejak dini. Kanker payudara yang ditemukan pada tahap awal memiliki tingkat kesembuhan yang jauh lebih tinggi. Perempuan dianjurkan melakukan SADARI (Periksa Payudara Sendiri) setiap bulan dan pemeriksaan klinis secara berkala, terutama setelah usia 40 tahun.`
  },
  {
    id: '4',
    title: 'Peran Hormon Estrogen dalam Kesehatan Perempuan',
    shortDescription: 'Estrogen bukan hanya tentang reproduksi, tapi juga memengaruhi banyak fungsi tubuh.',
    image: '/images/blog-4.jpg',
    content: `Hormon estrogen berperan besar dalam perkembangan organ reproduksi, mengatur siklus haid, serta menjaga kesehatan tulang dan jantung. Kadar estrogen yang terlalu rendah atau tinggi bisa menyebabkan masalah, seperti osteoporosis atau risiko kanker payudara. Memahami peran estrogen membantu perempuan lebih peka terhadap perubahan tubuh.`
  },
  {
    id: '5',
    title: 'Bagaimana Anemia Bisa Memengaruhi Kesehatan Reproduksi?',
    shortDescription: 'Anemia defisiensi besi sering terjadi pada perempuan usia subur.',
    image: '/images/blog-5.jpg',
    content: `Anemia terjadi saat tubuh kekurangan sel darah merah sehat, sering akibat kekurangan zat besi. Pada perempuan, anemia bisa diperparah oleh menstruasi berat atau kehamilan. Kondisi ini bisa menyebabkan kelelahan, sulit konsentrasi, dan bahkan mengganggu ovulasi. Asupan makanan bergizi dan suplemen zat besi bisa membantu mengatasinya.`
  },
  {
    id: '6',
    title: 'Mengapa Polycystic Ovary Syndrome (PCOS) Perlu Diwaspadai?',
    shortDescription: 'PCOS adalah gangguan hormonal yang umum namun sering terabaikan.',
    image: '/images/blog-6.jpg',
    content: `PCOS ditandai dengan ketidakseimbangan hormon yang menyebabkan haid tidak teratur, jerawat, pertumbuhan rambut berlebih, dan kista kecil di ovarium. PCOS juga berkaitan dengan risiko diabetes tipe 2 dan gangguan metabolisme. Diagnosis dini dan pengelolaan pola hidup sehat berperan penting dalam mengurangi gejalanya.`
  },
  {
    id: '7',
    title: 'Fakta tentang Infeksi Saluran Kemih (ISK) pada Perempuan',
    shortDescription: 'Perempuan lebih rentan mengalami ISK dibanding laki-laki.',
    image: '/images/blog-7.jpg',
    content: `ISK terjadi ketika bakteri masuk ke saluran kemih dan menyebabkan infeksi. Gejalanya termasuk nyeri saat buang air kecil, sering ingin buang air kecil, dan urin berbau tajam. Karena uretra perempuan lebih pendek, bakteri lebih mudah mencapai kandung kemih. Menjaga kebersihan dan cukup minum air putih bisa membantu mencegah ISK.`
  },
  {
    id: '8',
    title: 'Mengapa Vaksin HPV Penting untuk Perempuan?',
    shortDescription: 'Lindungi diri dari kanker serviks dengan vaksin HPV.',
    image: '/images/blog-8.jpg',
    content: `Vaksin HPV melindungi dari Human Papillomavirus, penyebab utama kanker serviks. Vaksin ini paling efektif diberikan pada usia 9-26 tahun, tetapi perempuan dewasa masih bisa mendapat manfaatnya. Selain vaksinasi, tetap lakukan skrining rutin seperti Pap Smear untuk deteksi dini dan pencegahan optimal.`
  }
])
</script>
  
  <style scoped>
  .lace-border {
    background-image: url('/images/lace-2.png');
    background-repeat: repeat-x;
    background-position: top center;
    background-size: auto 100%;
  }
  </style>
  