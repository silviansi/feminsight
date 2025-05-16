<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden mt-8">
    <!-- Lace background di bawah navbar -->
    <div class="absolute lace-border w-full h-12 top-2"></div>
    
    <!-- Hero Section -->
    <section class="w-full max-w-6xl text-center pt-16 px-4">
      <h1 class="text-xl md:text-4xl font-extrabold text-[#6a4c46] mb-4" data-aos="zoom-in-up" data-aos-duration="1000">
        Blog FemInsight
      </h1>
      <p class="text-lg md:text-xl text-pink-600" data-aos="zoom-in-down" data-aos-duration="1200">
        Berita dan informasi seputar kesehatan perempuan.
      </p>
    </section>
  
    <!-- Blog Posts -->
    <section class="w-full max-w-6xl py-12 px-4 grid md:grid-cols-4 gap-8 mb-6">
      <!-- Daftar blog -->
      <div
      v-for="blog in blogs"
      :key="blog.id"
      class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 overflow-hidden flex flex-col"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      :data-aos-delay="i * 100"
      >
        <img :src="blog.image" alt="Blog Image" class="w-full h-40 object-cover rounded-t-xl" />
        <div class="p-4 flex flex-col flex-grow">
          <h2 class="text-lg font-semibold text-pink-600 mb-2">{{ blog.title }}</h2>
          <p class="text-gray-700 text-base flex-grow">{{ blog.shortDescription }}</p>
          <router-link :to="`/blog/${blog.id}`" class="mt-4">
            <button class="text-[#6a4c46] font-semibold hover:underline">Baca Selengkapnya</button>
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
  },
  {
    id: '17',
    title: 'Memahami Pilihan Metode KB yang Tepat untuk Perempuan',
    shortDescription: 'Metode KB (pil KB, IUD, suntik, implan, kondom, dll.) beserta kelebihan, kekurangan, dan siapa yang cocok untuk masing-masing',
    image: '/images/blog-17.jpg'
  },
  {
    id: '18',
    title: 'Peran Vitamin D dalam Kesehatan Tulang dan Kesuburan Perempuan',
    shortDescription: 'Vitamin D berperan penting dalam penyerapan kalsium dan kesehatan reproduksi.',
    image: '/images/blog-18.jpg'
  },
  {
    id: '19',
    title: 'Efek Samping Kontrasepsi: Apa yang Normal dan Apa yang Harus Diwaspadai?',
    shortDescription: 'Ketahui efek samping umum dari berbagai metode kontrasepsi dan kapan harus berkonsultasi dengan dokter.',
    image: '/images/blog-19.jpg'
  },
  {
    id: '20',
    title: 'Manfaat Konsumsi Probiotik bagi Kesehatan Pencernaan dan Vagina',
    shortDescription: 'Bagaimana probiotik membantu menjaga flora usus sekaligus kesehatan vagina.',
    image: '/images/blog-20.jpg'
  },
  {
    id: '21',
    title: 'Mengapa Konseling Sebelum Memilih KB Itu Penting?',
    shortDescription: 'Memilih metode kontrasepsi tidak boleh asal. Konseling membantu memahami pilihan yang aman, efektif, dan sesuai kebutuhan.',
    image: '/images/blog-21.jpg'
  },
  {
    id: '22',
    title: 'Mengenal Fibroid Rahim: Gejala dan Pengobatannya',
    shortDescription: 'Fibroid rahim bisa menyebabkan nyeri dan perdarahan. Kenali gejalanya dan opsi pengobatan untuk kualitas hidup yang lebih baik.',
    image: '/images/blog-22.jpg'
  },
  {
    id: '23',
    title: 'KB Pasca Melahirkan: Pilihan Aman untuk Ibu Menyusui',
    shortDescription: 'Cari tahu metode KB yang aman bagi ibu menyusui, serta kapan waktu yang tepat untuk memulai kontrasepsi pasca persalinan.',
    image: '/images/blog-23.jpg'
  },
  {
    id: '24',
    title: 'Kesehatan Panggul dan Pencegahan Prolaps Organ Reproduksi',
    shortDescription: 'Otot dasar panggul yang kuat penting untuk menopang organ reproduksi. Pelajari cara merawatnya agar terhindar dari prolaps dan inkontinensia.',
    image: '/images/blog-24.jpg'
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