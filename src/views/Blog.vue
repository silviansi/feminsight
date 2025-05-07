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
                <button class="text-[#6a4c46] font-semibold hover:underline">
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
  
// Data blog
const blogs = ref([
  {
    id: '1',
    title: 'Bagaimana Pola Haid Bisa Menjadi Cerminan Kesehatan Reproduksi?',
    shortDescription: 'Siklus haid yang teratur bisa menjadi indikator kesehatan tubuh secara keseluruhan.',
    image: '/images/blog-1.jpg',
  },
  {
    id: '2',
    title: 'Kaitan Endometriosis dengan Kesuburan Perempuan',
    shortDescription: 'Endometriosis sering tak disadari, padahal bisa memengaruhi kesuburan.',
    image: '/images/blog-2.jpg',
  },
  {
    id: '3',
    title: 'Mengapa Pemeriksaan Payudara Secara Rutin Penting?',
    shortDescription: 'Deteksi dini kanker payudara bisa menyelamatkan nyawa.',
    image: '/images/blog-3.jpg',
  },
  {
    id: '4',
    title: 'Peran Hormon Estrogen dalam Kesehatan Perempuan',
    shortDescription: 'Estrogen bukan hanya tentang reproduksi, tapi juga memengaruhi banyak fungsi tubuh.',
    image: '/images/blog-4.jpg',
  },
  {
    id: '5',
    title: 'Bagaimana Anemia Bisa Memengaruhi Kesehatan Reproduksi?',
    shortDescription: 'Anemia defisiensi besi sering terjadi pada perempuan usia subur.',
    image: '/images/blog-5.jpg',
  },
  {
    id: '6',
    title: 'Mengapa Polycystic Ovary Syndrome (PCOS) Perlu Diwaspadai?',
    shortDescription: 'PCOS adalah gangguan hormonal yang umum namun sering terabaikan.',
    image: '/images/blog-6.jpg',
  },
  {
    id: '7',
    title: 'Fakta tentang Infeksi Saluran Kemih (ISK) pada Perempuan',
    shortDescription: 'Perempuan lebih rentan mengalami ISK dibanding laki-laki.',
    image: '/images/blog-7.jpg',
  },
  {
    id: '8',
    title: 'Mengapa Vaksin HPV Penting untuk Perempuan?',
    shortDescription: 'Lindungi diri dari kanker serviks dengan vaksin HPV.',
    image: '/images/blog-8.jpg',
  },
  {
    id: '9',
    title: 'Manfaat Pap Smear untuk Deteksi Dini Kanker Serviks',
    shortDescription: 'Pelajari pentingnya tes Pap Smear dalam menjaga kesehatan reproduksi.',
    image: '/images/blog-9.jpg',
  },
  {
    id: '10',
    title: 'Perimenopause: Gejala Awal dan Cara Menghadapinya',
    shortDescription: 'Pahami fase perimenopause agar bisa mempersiapkan diri dengan baik.',
    image: '/images/blog-10.jpg',
  },
  {
    id: '11',
    title: 'Pentingnya Konsumsi Asam Folat bagi Perempuan Usia Subur',
    shortDescription: 'Asam folat membantu mencegah cacat tabung saraf pada janin.',
    image: '/images/blog-11.jpg',
  },
  {
    id: '12',
    title: 'Dampak Stres pada Kesehatan Reproduksi Perempuan',
    shortDescription: 'Stres kronis bisa mengganggu keseimbangan hormon dan siklus haid.',
    image: '/images/blog-12.jpg'
  },
  {
    id: '13',
    title: 'Mengapa Asupan Kalsium Penting bagi Perempuan?',
    shortDescription: 'Kalsium berperan penting dalam menjaga kesehatan tulang, terutama menjelang menopause.',
    image: '/images/blog-13.jpg'
  },
  {
    id: '14',
    title: 'Cara Menjaga Kesehatan Vagina secara Alami',
    shortDescription: 'Keseimbangan pH dan kebersihan area kewanitaan penting untuk mencegah infeksi.',
    image: '/images/blog-14.jpg'
  },
  {
    id: '15',
    title: 'Manfaat Yoga untuk Kesehatan Hormonal Perempuan',
    shortDescription: 'Yoga membantu meredakan stres dan menyeimbangkan hormon reproduksi.',
    image: '/images/blog-15.jpg'
  },
  {
    id: '16',
    title: 'Nutrisi Penting untuk Kesehatan Kehamilan',
    shortDescription: 'Asupan zat besi, asam folat, dan omega-3 penting selama masa kehamilan.',
    image: '/images/blog-16.jpg'
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