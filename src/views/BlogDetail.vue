<template>
    <div class="max-w-6xl py-12 px-4 mt-8 mx-auto">
      <div v-if="blog">
        <!-- Header dengan gambar -->
        <div class="mb-8 text-center">
          <img :src="blog.image" alt="Blog Image" class="h-64 object-cover rounded-lg shadow-lg mb-6 max-w-3xl mx-auto w-full" />
  
          <!-- Breadcrumb -->
          <div class="mb-4 text-gray-600">
            <span class="cursor-pointer hover:underline" @click="goBlog">Blog</span> &gt;
            <!-- Kategori statis di sini -->
            <span class="cursor-pointer hover:underline">{{ category }}</span> &gt;
            <span>{{ blog.title }}</span>
          </div>
  
          <h1 class="text-3xl font-extrabold text-[#6a4c46] mb-4">{{ blog.title }}</h1>
          <p class="text-lg text-pink-600 mb-6">{{ blog.date }}</p>
        </div>
  
        <!-- Content -->
        <div v-html="blog.content" class="prose lg:prose-xl text-gray-700 max-w-3xl mx-auto"></div>
      </div>
      <div v-else class="text-center">
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  const blogId = route.params.id
  const blog = ref(null)
  
  // Kategori statis
  const category = "Kesehatan Wanita"
  
  // Contoh data blog dengan gambar
  const blogs = [
    {
      id: '1',
      title: 'Pentingnya Menjaga Kesehatan Reproduksi Wanita',
      content: `
      Kesehatan reproduksi wanita adalah aspek penting dalam kehidupan setiap perempuan yang sering kali terabaikan. Memahami bagaimana merawat organ reproduksi dapat membantu mencegah berbagai penyakit dan menjaga kualitas hidup.
  
      <h2> Apa itu Kesehatan Reproduksi?</h2>

      Kesehatan reproduksi merujuk pada kondisi fisik, mental, dan sosial yang berhubungan dengan sistem reproduksi pada semua tahap kehidupan. Hal ini mencakup kesehatan menstruasi, kesuburan, kehamilan, dan menopause.
  
      ### Mengapa Kesehatan Reproduksi Penting?
  
      - **Pencegahan Penyakit**  
      Menjaga kebersihan dan kesehatan organ reproduksi membantu mencegah infeksi menular seksual (IMS), kanker serviks, dan gangguan hormonal.
      
      - **Perencanaan Kehamilan**  
      Memahami siklus menstruasi dan kesehatan reproduksi memudahkan perempuan merencanakan kehamilan dengan baik.
  
      - **Kesejahteraan Mental**  
      Kesehatan reproduksi yang baik turut memengaruhi kesehatan mental dan emosional.
  
      ## Cara Menjaga Kesehatan Reproduksi
  
      1. **Melakukan pemeriksaan rutin**  
      Lakukan pap smear, pemeriksaan payudara, dan konsultasi dokter secara berkala.
  
      2. **Menjaga kebersihan organ intim**  
      Gunakan pakaian dalam berbahan katun dan hindari penggunaan produk pembersih berpewangi.
  
      3. **Menerapkan pola hidup sehat**  
      Konsumsi makanan bergizi, cukup tidur, dan kelola stres dengan baik.
  
      > “Kesehatan reproduksi adalah kunci untuk hidup sehat dan bahagia bagi setiap wanita.” — WHO
  
      ## Kesimpulan
  
      Dengan menjaga kesehatan reproduksi, wanita dapat meningkatkan kualitas hidup dan mencegah berbagai gangguan kesehatan di masa depan. Jangan ragu berkonsultasi dengan tenaga medis jika mengalami keluhan.
      `,
      date: '2025-01-01',
      image: '/images/blog-1.jpg'
    },
    {
      id: '2',
      title: 'Judul Blog Post 2',
      content: 'Isi lengkap blog post 2...',
      date: '2025-02-01',
      image: '/images/blog-2.jpg'
    },
    {
      id: '3',
      title: 'Judul Blog Post 3',
      content: 'Isi lengkap blog post 3...',
      date: '2025-03-01',
      image: '/images/blog-3.jpg'
    }
  ]
  
  // Fetch data blog berdasarkan id
  onMounted(() => {
    blog.value = blogs.find(b => b.id === blogId) || {}
  })
  
  // Metode untuk navigasi breadcrumb
  const goBlog = () => {
    router.push('/blog')  // Menggunakan router.push dengan useRouter
  }
  </script>
  
  <style scoped>
  /* Style untuk teks yang lebih rapih di bagian detail */
  .prose {
    font-family: "Arial", sans-serif;
    font-size: 1.125rem;
    line-height: 1.6;
  }
  
  .prose img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .prose h2,
  .prose h3,
  .prose h4 {
    color: #6a4c46;
    font-weight: bold;
  }
  
  .prose p {
    color: #4a4a4a;
    margin-bottom: 1rem;
  }
  
  .prose blockquote {
    border-left: 4px solid #f8bbd0;
    padding-left: 16px;
    color: #6a4c46;
  }
  
  .prose ul,
  .prose ol {
    margin-left: 2rem;
  }
  
  .prose ul li,
  .prose ol li {
    margin-bottom: 0.75rem;
  }
  </style>
  