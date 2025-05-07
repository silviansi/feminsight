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
            <p class="text-base text-pink-500 mb-6">{{ blog.date }}</p>
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
    <p>Kesehatan reproduksi wanita adalah aspek penting dalam kehidupan setiap perempuan yang sering kali terabaikan. Memahami bagaimana merawat organ reproduksi dapat membantu mencegah berbagai penyakit dan menjaga kualitas hidup.</p><br>

    <h2><strong>Apa itu Kesehatan Reproduksi?</strong></h2>
    <p>Kesehatan reproduksi merujuk pada kondisi fisik, mental, dan sosial yang berhubungan dengan sistem reproduksi pada semua tahap kehidupan. Hal ini mencakup kesehatan menstruasi, kesuburan, kehamilan, dan menopause.</p><br>

    <p>Organ reproduksi wanita meliputi ovarium, tuba falopi, rahim, serviks, dan vagina. Setiap bagian memiliki peran penting dalam proses reproduksi, mulai dari produksi sel telur hingga kehamilan dan kelahiran. Oleh karena itu, memahami cara kerja sistem ini menjadi dasar untuk menjaga kesehatannya.</p><br>

    <h2><strong>Mengapa Kesehatan Reproduksi Penting?</strong></h2><br>
    <ul>
    <li><strong>🧸 Pencegahan Penyakit</strong> <br> Menjaga kebersihan dan kesehatan organ reproduksi membantu mencegah infeksi menular seksual (IMS), kanker serviks, endometriosis, serta gangguan hormonal seperti sindrom ovarium polikistik (PCOS).</li>
    <li><strong>🧸 Perencanaan Kehamilan</strong> <br> Memahami siklus menstruasi dan kesehatan reproduksi memudahkan perempuan merencanakan kehamilan dengan baik, baik dalam konteks program hamil maupun pencegahan kehamilan yang tidak diinginkan.</li>
    <li><strong>🧸 Kesejahteraan Mental</strong> <br> Ketidakseimbangan hormon reproduksi dapat memengaruhi suasana hati dan kesehatan mental. Kesehatan reproduksi yang baik membantu menjaga kestabilan emosi dan kualitas hidup.</li>
    <li><strong>🧸 Pengendalian Penyakit Genetik</strong> <br> Konsultasi genetik sebelum kehamilan dapat membantu mencegah penularan penyakit genetik kepada keturunan.</li>
    </ul><br>

    <h2><strong>Cara Menjaga Kesehatan Reproduksi</strong></h2><br>
    <ol>
    <li><strong>🌷 Melakukan pemeriksaan rutin</strong> <br> Lakukan pap smear, pemeriksaan payudara, USG transvaginal, dan konsultasi dokter secara berkala untuk deteksi dini penyakit seperti kanker serviks dan kista ovarium.</li>
    <li><strong>🌷 Menjaga kebersihan organ intim</strong> <br> Cuci area kewanitaan dengan air bersih, hindari penggunaan sabun berpewangi, serta ganti pembalut atau pantyliner secara teratur.</li>
    <li><strong>🌷 Menerapkan pola hidup sehat</strong> <br> Konsumsi makanan bergizi (tinggi serat, vitamin, dan mineral), olahraga teratur, cukup tidur, serta kelola stres dengan baik melalui meditasi atau aktivitas yang menyenangkan.</li>
    <li><strong>🌷 Melakukan vaksinasi</strong> <br> Vaksin HPV (Human Papillomavirus) direkomendasikan untuk mencegah kanker serviks. Vaksinasi hepatitis B juga penting untuk mencegah infeksi menular seksual.</li>
    <li><strong>🌷 Menghindari perilaku berisiko</strong> <br> Hindari hubungan seksual tanpa pengaman, penggunaan narkoba suntik, dan kebiasaan merokok yang dapat merusak kesehatan reproduksi.</li>
    </ol><br>

    <h2><strong>Tanda-tanda Gangguan Kesehatan Reproduksi</strong></h2>
    <p>Penting untuk mengenali gejala gangguan reproduksi agar dapat segera ditangani. Berikut beberapa tanda yang perlu diwaspadai:</p>
    <ul>
    <li>🌸 Siklus menstruasi tidak teratur atau sangat nyeri</li>
    <li>🌸 Keputihan yang berbau tidak sedap atau berubah warna</li>
    <li>🌸 Nyeri saat berhubungan seksual</li>
    <li>🌸 Pendarahan di luar siklus menstruasi</li>
    <li>🌸 Nyeri panggul berkepanjangan</li>
    </ul><br>

    <blockquote>“Kesehatan reproduksi adalah kunci untuk hidup sehat dan bahagia bagi setiap wanita.” — WHO</blockquote><br>

    <h2><strong>🕊️ Peran Kesehatan Mental dalam Reproduksi</strong></h2>
    <p>Kesehatan mental dan reproduksi saling berkaitan erat. Stres berlebihan dapat memengaruhi siklus menstruasi, menurunkan kesuburan, dan memperburuk gejala PMS atau menopause. Oleh karena itu, menjaga keseimbangan emosional juga merupakan bagian dari merawat kesehatan reproduksi.</p><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Dengan menjaga kesehatan reproduksi, wanita dapat meningkatkan kualitas hidup, merencanakan keluarga dengan lebih baik, dan mencegah berbagai gangguan kesehatan di masa depan. Jangan ragu untuk berkonsultasi dengan tenaga medis jika mengalami keluhan atau membutuhkan informasi lebih lanjut.</p>
        `,
        date: '06-05-2025',
        image: '/images/blog-1.jpg'
    },
    {
        id: '2',
        title: 'Kaitan Endometriosis dengan Kesuburan Perempuan',
        content: `
    <p>Endometriosis adalah kondisi kesehatan yang memengaruhi jutaan perempuan di seluruh dunia, namun sering kali tidak disadari hingga gejala menjadi parah. Salah satu dampak serius dari endometriosis adalah gangguan pada kesuburan. Memahami hubungan antara endometriosis dan kesuburan sangat penting agar perempuan dapat mengambil langkah pencegahan dan penanganan yang tepat.</p><br>

    <h2><strong>Apa itu Endometriosis?</strong></h2>
    <p>Endometriosis adalah kondisi di mana jaringan yang mirip dengan lapisan dalam rahim (endometrium) tumbuh di luar rahim, seperti di ovarium, tuba falopi, dan organ panggul lainnya. Jaringan ini tetap bereaksi terhadap siklus menstruasi — menebal, luruh, dan berdarah — namun tidak bisa keluar dari tubuh sehingga menyebabkan peradangan, nyeri, dan pembentukan jaringan parut.</p><br>

    <h2><strong>Gejala Umum Endometriosis</strong></h2>
    <ul>
    <li><strong>☁️ Nyeri Haid Berlebihan</strong> <br> Rasa nyeri yang hebat selama menstruasi, lebih intens daripada kram biasa.</li>
    <li><strong>☁️ Nyeri saat Berhubungan Intim</strong> <br> Rasa sakit yang dirasakan selama atau setelah hubungan seksual.</li>
    <li><strong>☁️ Gangguan Pencernaan</strong> <br> Sembelit, diare, atau kembung terutama saat menstruasi.</li>
    <li><strong>☁️ Kesulitan Hamil</strong> <br> Sulitnya mencapai kehamilan meskipun sudah mencoba dalam waktu lama.</li>
    </ul><br>

    <h2><strong>Bagaimana Endometriosis Mempengaruhi Kesuburan?</strong></h2>
    <ol>
    <li><strong>👒 Penyumbatan Tuba Falopi</strong> <br> Jaringan parut dan perlengketan (adhesi) dapat menyumbat saluran tuba, mencegah pertemuan sel telur dan sperma.</li>
    <li><strong>👒 Gangguan Ovulasi</strong> <br> Kista endometriosis (endometrioma) di ovarium dapat mengganggu proses pelepasan sel telur.</li>
    <li><strong>👒 Peradangan Kronis</strong> <br> Peradangan yang terus-menerus menciptakan lingkungan yang tidak ideal untuk pembuahan dan implantasi embrio.</li>
    <li><strong>👒 Penurunan Kualitas Sel Telur</strong> <br> Endometriosis berhubungan dengan penurunan kualitas oosit, yang berdampak pada keberhasilan kehamilan.</li>
    </ol><br>

    <blockquote>“Endometriosis adalah penyebab sekitar 30-50% kasus infertilitas pada perempuan.” — American Society for Reproductive Medicine</blockquote><br>

    <h2><strong>Diagnosis dan Penanganan Endometriosis</strong></h2>
    <ol>
    <li><strong>💗 Diagnosis</strong> <br> Pemeriksaan yang meliputi USG, MRI, atau laparoskopi (operasi minimal invasif) untuk memastikan adanya jaringan endometriosis.</li>
    <li><strong>💗 Pengobatan</strong> <br> Pilihan terapi meliputi obat pereda nyeri, terapi hormonal (seperti pil KB atau agonis GnRH), dan pembedahan untuk mengangkat jaringan endometriosis.</li>
    <li><strong>💗 Program Kehamilan</strong> <br> Jika endometriosis menyebabkan infertilitas, dokter bisa merekomendasikan inseminasi buatan atau bayi tabung (IVF).</li>
    </ol><br>

    <h2><strong>Pencegahan dan Pola Hidup Sehat</strong></h2>
    <ul>
    <li><strong>💐 Kelola Stres</strong> <br> Stres berlebihan dapat memperburuk gejala endometriosis. Praktik relaksasi seperti yoga dan meditasi disarankan.</li>
    <li><strong>💐 Pola Makan Sehat</strong> <br> Konsumsi makanan tinggi antioksidan seperti sayuran hijau, buah-buahan, dan ikan berlemak dapat membantu mengurangi peradangan.</li>
    <li><strong>💐 Olahraga Teratur</strong> <br> Aktivitas fisik ringan seperti berjalan kaki atau berenang dapat meningkatkan aliran darah dan mengurangi nyeri panggul.</li>
    </ul><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Endometriosis adalah kondisi yang kompleks namun dapat dikelola dengan diagnosis dan penanganan yang tepat. Bagi perempuan yang mengalami gejala atau kesulitan hamil, penting untuk segera berkonsultasi dengan dokter spesialis. Penanganan dini tidak hanya mengurangi nyeri, tetapi juga meningkatkan peluang untuk hamil dan menjalani hidup berkualitas.</p>
        `,
        date: '06-05-2025',
        image: '/images/blog-2.jpg'
    },
    {
        id: '3',
        title: 'Mengapa Pemeriksaan Payudara Secara Rutin Penting?',
        content: `
    <p>Pemeriksaan payudara secara rutin merupakan salah satu langkah penting dalam menjaga kesehatan perempuan. Deteksi dini terhadap perubahan atau kelainan pada payudara dapat meningkatkan peluang pengobatan yang berhasil dan mengurangi risiko komplikasi serius. Meskipun kesadaran tentang kanker payudara semakin meningkat, masih banyak perempuan yang belum rutin melakukan pemeriksaan sendiri maupun pemeriksaan medis.</p><br>

    <h2><strong>Apa Itu Pemeriksaan Payudara?</strong></h2>
    <p>Pemeriksaan payudara adalah serangkaian langkah untuk mendeteksi adanya benjolan, perubahan bentuk, atau gejala tidak normal pada jaringan payudara. Pemeriksaan ini bisa dilakukan secara mandiri (SADARI) maupun oleh tenaga medis (SADANIS).</p><br>

    <h2><strong>Jenis Pemeriksaan Payudara</strong></h2>
    <ul>
    <li><strong>💓 SADARI (Pemeriksaan Payudara Sendiri)</strong> <br> Pemeriksaan mandiri yang dilakukan secara rutin setiap bulan, biasanya seminggu setelah menstruasi selesai.</li>
    <li><strong>💓 SADANIS (Pemeriksaan Payudara oleh Tenaga Medis)</strong> <br> Pemeriksaan fisik oleh dokter atau tenaga medis yang berpengalaman untuk mendeteksi kelainan yang sulit dirasakan sendiri.</li>
    <li><strong>💓 Mammografi</strong> <br> Pemeriksaan pencitraan menggunakan sinar-X untuk mendeteksi perubahan kecil yang tidak teraba pada payudara. Direkomendasikan bagi perempuan usia 40 tahun ke atas atau yang memiliki risiko tinggi.</li>
    </ul><br>

    <h2><strong>Mengapa Pemeriksaan Payudara Penting?</strong></h2>
    <ol>
    <li><strong>🍒 Deteksi Dini Kanker Payudara</strong> <br> Kanker payudara yang ditemukan pada tahap awal memiliki tingkat kesembuhan yang tinggi dan pengobatan yang lebih sederhana.</li>
    <li><strong>🍒 Mengenali Perubahan Dini</strong> <br> Mengenali tanda-tanda seperti benjolan, perubahan kulit, atau keluarnya cairan dari puting sejak dini dapat mencegah komplikasi.</li>
    <li><strong>🍒 Meningkatkan Kesadaran Tubuh</strong> <br> Memahami kondisi normal payudara membantu perempuan mengenali perubahan yang tidak biasa.</li>
    </ol><br>

    <h2><strong>Tanda-Tanda yang Perlu Diwaspadai</strong></h2>
    <ul>
    <li>💍 Benjolan atau penebalan di payudara atau ketiak.</li>
    <li>💍 Perubahan ukuran, bentuk, atau tampilan payudara.</li>
    <li>💍 Kulit payudara menjadi kemerahan, berkerut, atau seperti kulit jeruk.</li>
    <li>💍 Keluarnya cairan tidak biasa dari puting, terutama jika berdarah.</li>
    <li>💍 Nyeri yang tidak hilang dalam waktu lama.</li>
    </ul><br>

    <h2><strong>Kapan Harus Memulai Pemeriksaan?</strong></h2>
    <p>Perempuan disarankan memulai pemeriksaan SADARI sejak usia 20 tahun, dan SADANIS setiap 1–3 tahun pada usia 20–40 tahun. Setelah usia 40 tahun, pemeriksaan SADANIS dan mammografi sebaiknya dilakukan setiap tahun atau sesuai anjuran dokter.</p><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Pemeriksaan payudara secara rutin adalah investasi penting bagi kesehatan jangka panjang perempuan. Dengan mengenali tubuh sendiri dan rutin berkonsultasi dengan tenaga medis, kita dapat meningkatkan peluang deteksi dini dan pengobatan yang efektif. Jangan ragu untuk menjadikan pemeriksaan payudara sebagai bagian dari rutinitas kesehatan pribadi.</p>
        `,
        date: '07-05-2025',
        image: '/images/blog-3.jpg'
    },
    {
        id: '4',
        title: 'Peran Hormon Estrogen dalam Kesehatan Perempuan',
        content: `
    <p>Hormon estrogen memainkan peran krusial dalam menjaga kesehatan perempuan sepanjang hidupnya. Sebagai salah satu hormon seks utama, estrogen memengaruhi berbagai sistem tubuh, mulai dari reproduksi hingga kesehatan tulang dan jantung. Memahami bagaimana hormon ini bekerja dapat membantu perempuan lebih peduli terhadap keseimbangan hormonal dan kesehatannya secara keseluruhan.</p><br>

    <h2><strong>Apa Itu Estrogen?</strong></h2>
    <p>Estrogen adalah hormon yang diproduksi terutama di ovarium, meskipun dalam jumlah kecil juga dihasilkan oleh kelenjar adrenal dan jaringan lemak. Hormon ini bertanggung jawab atas perkembangan ciri-ciri seksual sekunder perempuan dan mengatur siklus menstruasi.</p><br>

    <h2><strong>Fungsi Utama Estrogen</strong></h2>
    <ul>
    <li><strong>🌸 Regulasi Siklus Menstruasi</strong> <br> Estrogen berperan dalam pertumbuhan lapisan endometrium, mempersiapkan rahim untuk kemungkinan kehamilan.</li>
    <li><strong>🌸 Kesehatan Tulang</strong> <br> Estrogen membantu menjaga kepadatan tulang dan mencegah osteoporosis, terutama saat menopause ketika kadar estrogen menurun.</li>
    <li><strong>🌸 Kesehatan Jantung</strong> <br> Estrogen berkontribusi dalam menjaga kadar kolesterol yang sehat dan melindungi kesehatan pembuluh darah.</li>
    <li><strong>🌸 Kesehatan Kulit dan Rambut</strong> <br> Hormon ini mendukung elastisitas kulit dan pertumbuhan rambut yang sehat.</li>
    <li><strong>🌸 Keseimbangan Emosional</strong> <br> Estrogen berperan dalam kestabilan suasana hati dan fungsi kognitif.</li>
    </ul><br>

    <h2><strong>Gejala Ketidakseimbangan Estrogen</strong></h2>
    <ul>
    <li>🌼 Menstruasi tidak teratur atau berhenti.</li>
    <li>🌼 Hot flashes dan keringat malam (terutama saat menopause).</li>
    <li>🌼 Penurunan gairah seksual.</li>
    <li>🌼 Perubahan suasana hati, kecemasan, atau depresi.</li>
    <li>🌼 Penambahan berat badan, terutama di area perut.</li>
    <li>🌼 Nyeri sendi atau tulang rapuh.</li>
    </ul><br>

    <h2><strong>Cara Menjaga Keseimbangan Estrogen</strong></h2>
    <ol>
    <li><strong>✨ Pola Hidup Sehat</strong> <br> Konsumsi makanan bergizi, olahraga rutin, dan tidur cukup membantu keseimbangan hormon.</li>
    <li><strong>✨ Kelola Stres</strong> <br> Stres kronis dapat mengganggu produksi hormon, jadi penting untuk menerapkan relaksasi.</li>
    <li><strong>✨ Konsultasi Medis</strong> <br> Pemeriksaan hormon dan konsultasi dokter penting, terutama bagi perempuan yang mengalami gejala menopause atau gangguan hormonal lainnya.</li>
    <li><strong>✨ Berhenti Merokok</strong> <br> Merokok dapat menurunkan kadar estrogen dan mempercepat menopause.</li>
    </ol><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Estrogen adalah hormon vital yang memengaruhi hampir semua aspek kesehatan perempuan. Menjaga keseimbangan hormon ini dapat meningkatkan kualitas hidup dan mencegah berbagai masalah kesehatan. Jika Anda mengalami gejala ketidakseimbangan hormon, konsultasikan dengan tenaga medis untuk mendapatkan penanganan yang tepat.</p>
        `,
        date: '07-05-2025',
        image: '/images/blog-4.jpg'
    },
    {
        id: '5',
        title: 'Bagaimana Anemia Bisa Memengaruhi Kesehatan Reproduksi?',
        content: `
    <p>Anemia adalah kondisi ketika tubuh kekurangan sel darah merah yang sehat atau hemoglobin yang cukup untuk mengangkut oksigen ke seluruh tubuh. Pada perempuan, anemia bisa berdampak besar pada kesehatan reproduksi, terutama jika tidak ditangani dengan baik. Mengetahui lebih dalam tentang penyebab dan dampaknya dapat membantu perempuan mengelola kesehatan mereka dengan lebih efektif.</p><br>

    <h2><strong>Apa itu Anemia?</strong></h2>
    <p>Anemia terjadi ketika jumlah sel darah merah atau kadar hemoglobin dalam darah lebih rendah dari normal. Hemoglobin, komponen dalam sel darah merah yang mengikat oksigen, berfungsi untuk mengangkut oksigen ke seluruh tubuh. Jika kadar hemoglobin rendah, tubuh akan kesulitan mendapatkan oksigen yang cukup, yang memengaruhi banyak organ dan fungsi tubuh.</p><br>

    <h2><strong>Jenis-Jenis Anemia</strong></h2>
    <ul>
    <li><strong>🍓 Anemia Defisiensi Zat Besi</strong> <br> Penyebab paling umum, terjadi ketika tubuh kekurangan zat besi yang diperlukan untuk membuat hemoglobin.</li>
    <li><strong>🍓 Anemia Akibat Kekurangan Vitamin</strong> <br> Kekurangan vitamin B12 atau folat juga dapat mengurangi produksi sel darah merah yang sehat.</li>
    <li><strong>🍓 Anemia Hemolitik</strong> <br> Terjadi ketika sel darah merah dihancurkan lebih cepat daripada tubuh dapat memproduksinya.</li>
    <li><strong>🍓 Anemia Aplastik</strong> <br> Kondisi langka yang terjadi ketika sumsum tulang tidak menghasilkan cukup sel darah merah.</li>
    </ul><br>

    <h2><strong>Anemia dan Kesehatan Reproduksi</strong></h2>
    <p>Anemia dapat memengaruhi kesehatan reproduksi perempuan dengan berbagai cara. Dalam jangka panjang, anemia yang tidak ditangani dapat mengganggu kemampuan tubuh untuk mendukung kehamilan yang sehat. Beberapa efek yang dapat timbul akibat anemia pada perempuan termasuk:</p>
    <ul>
    <li><strong>🦢 Kemandulan</strong> <br> Anemia berat dapat memengaruhi kesuburan, mengurangi kemampuan tubuh untuk ovulasi secara normal, dan menghambat proses pembuahan.</li>
    <li><strong>🦢 Keguguran</strong> <br> Kekurangan oksigen dan nutrisi akibat anemia dapat meningkatkan risiko keguguran pada trimester pertama kehamilan.</li>
    <li><strong>🦢 Komplikasi Kehamilan</strong> <br> Anemia selama kehamilan dapat menyebabkan preeklamsia, kelahiran prematur, dan gangguan kesehatan pada bayi seperti berat badan lahir rendah.</li>
    <li><strong>🦢 Gangguan Menstruasi</strong> <br> Anemia juga dapat menyebabkan siklus menstruasi yang tidak teratur atau perdarahan yang berat.</li>
    </ul><br>

    <h2><strong>Gejala Anemia yang Perlu Diwaspadai</strong></h2>
    <ul>
    <li>🧸 Rasa lelah dan lemas yang berlebihan.</li>
    <li>🧸 Pusing atau kepala terasa ringan.</li>
    <li>🧸 Perubahan warna kulit menjadi pucat atau kekuningan.</li>
    <li>🧸 Sesak napas atau detak jantung tidak teratur.</li>
    <li>🧸 Nyeri dada atau gangguan pernapasan.</li>
    </ul><br>

    <h2><strong>Cara Mengatasi Anemia</strong></h2>
    <ol>
    <li><strong>💖 Konsumsi Zat Besi dan Vitamin</strong> <br> Makanan kaya zat besi seperti daging merah, sayuran berdaun hijau, dan kacang-kacangan sangat dianjurkan. Sumber vitamin B12 dan folat juga penting untuk mencegah anemia.</li>
    <li><strong>💖 Penggunaan Suplemen</strong> <br> Dalam kasus kekurangan gizi yang parah, suplemen zat besi, vitamin B12, atau folat mungkin diperlukan untuk memperbaiki kondisi.</li>
    <li><strong>💖 Pemeriksaan Rutin</strong> <br> Pemeriksaan darah secara teratur dapat membantu mendeteksi anemia lebih dini, terutama bagi perempuan yang berisiko tinggi, seperti mereka yang sedang hamil atau menstruasi berat.</li>
    <li><strong>💖 Perawatan Medis Lainnya</strong> <br> Dalam kasus anemia berat atau yang disebabkan oleh penyakit tertentu, perawatan medis lebih lanjut seperti transfusi darah atau pengobatan penyakit dasar mungkin diperlukan.</li>
    </ol><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Anemia adalah kondisi yang perlu diperhatikan, terutama bagi perempuan yang sedang berencana hamil atau yang sudah berada dalam usia reproduksi. Dengan pemahaman yang tepat dan pengelolaan yang baik, anemia dapat diatasi untuk menjaga kesehatan reproduksi yang optimal.</p>
        `,
        date: '07-05-2025',
        image: '/images/blog-5.jpg'
    },
    {
        id: '6',
        title: 'Mengapa Polycystic Ovary Syndrome (PCOS) Perlu Diwaspadai?',
        content: `
    <p>Polycystic Ovary Syndrome (PCOS) adalah gangguan hormonal yang mempengaruhi banyak perempuan di seluruh dunia. PCOS sering kali tidak terdiagnosis hingga gejalanya menjadi cukup parah. Pemahaman tentang PCOS dapat membantu perempuan mengelola kondisi ini dengan lebih baik dan mencegah dampaknya terhadap kesehatan jangka panjang, terutama pada kesuburan dan kesehatan metabolik.</p><br>

    <h2><strong>Apa itu Polycystic Ovary Syndrome (PCOS)?</strong></h2>
    <p>PCOS adalah kondisi di mana ovarium perempuan menghasilkan lebih banyak hormon laki-laki (androgen) daripada yang seharusnya. Hormon berlebih ini mengganggu proses ovulasi dan dapat menyebabkan pembentukan kista di ovarium. PCOS dapat memengaruhi siklus menstruasi, kesuburan, penampilan fisik, dan kesehatan metabolik secara keseluruhan.</p><br>

    <h2><strong>Gejala PCOS</strong></h2>
    <p>Gejala PCOS dapat bervariasi antar individu, namun beberapa gejala yang paling umum meliputi:</p>
    <ul>
    <li><strong>📜 Menstruasi Tidak Teratur</strong> <br> Salah satu gejala utama PCOS adalah siklus menstruasi yang tidak teratur, atau bahkan tidak menstruasi sama sekali. Ini terjadi karena ovarium tidak melepaskan telur secara teratur.</li>
    <li><strong>📜 Kesulitan Hamil</strong> <br> Karena gangguan ovulasi, perempuan dengan PCOS sering kali kesulitan untuk hamil.</li>
    <li><strong>📜 Hormon Androgen Tinggi</strong> <br> Hormon androgen yang berlebihan dapat menyebabkan gejala seperti jerawat, pertumbuhan rambut berlebih (hirsutisme), dan penipisan rambut pada kulit kepala.</li>
    <li><strong>📜 Kista Ovarium</strong> <br> Banyak perempuan dengan PCOS memiliki ovarium yang membesar dan mengandung banyak kista kecil yang berisi cairan. Kista ini bisa terlihat pada pemeriksaan ultrasonografi.</li>
    </ul><br>

    <h2><strong>Penyebab PCOS</strong>
    <p>Penyebab pasti dari PCOS belum sepenuhnya dipahami, namun beberapa faktor yang dapat memengaruhi antara lain:</p>
    <ul>
    <li><strong>💓 Genetik</strong> <br> Jika ada riwayat keluarga dengan PCOS, kemungkinan seseorang akan mengidap kondisi ini lebih besar.</li>
    <li><strong>💓 Hormon Insulin</strong> <br> Banyak perempuan dengan PCOS memiliki kadar insulin yang lebih tinggi, yang dapat menyebabkan tubuh menghasilkan lebih banyak hormon androgen.</li>
    <li><strong>💓 Peradangan Kronis</strong> <br> Perempuan dengan PCOS sering kali menunjukkan tanda-tanda peradangan kronis ringan yang dapat memengaruhi fungsi ovarium.</li>
    </ul><br>

    <h2><strong>Komplikasi yang Dapat Timbul akibat PCOS</strong></h2>
    <p>Jika tidak dikelola dengan baik, PCOS dapat menimbulkan beberapa komplikasi kesehatan, termasuk:</p>
    <ul>
    <li><strong>✨ Kemandulan</strong> <br> Kesulitan untuk hamil adalah salah satu masalah terbesar yang dihadapi oleh perempuan dengan PCOS, karena gangguan pada ovulasi yang terjadi.</li>
    <li><strong>✨ Diabetes Tipe 2</strong> <br> PCOS meningkatkan risiko diabetes tipe 2 karena ketidakmampuan tubuh dalam menggunakan insulin secara efektif.</li>
    <li><strong>✨ Masalah Jantung</strong> <br> Perempuan dengan PCOS lebih berisiko mengalami masalah jantung, seperti hipertensi dan gangguan kolesterol.</li>
    <li><strong>✨ Depresi dan Kecemasan</strong> <br> PCOS dapat memengaruhi kualitas hidup, dengan meningkatnya risiko gangguan mental seperti depresi dan kecemasan, yang sering disebabkan oleh gejala fisik seperti jerawat dan penambahan berat badan.</li>
    </ul><br>

    <h2><strong>Pengelolaan dan Pengobatan PCOS</strong></h2>
    <p>Walaupun PCOS tidak dapat disembuhkan, ada beberapa cara untuk mengelola gejalanya dan mencegah komplikasi jangka panjang:</p>
    <ol>
    <li><strong>💅 Perubahan Gaya Hidup</strong> <br> Diet sehat dan olahraga teratur dapat membantu menurunkan berat badan, mengurangi resistensi insulin, dan mengatur siklus menstruasi.</li>
    <li><strong>💅 Pengobatan Hormon</strong> <br> Penggunaan pil KB atau obat hormon lain dapat membantu mengatur siklus menstruasi dan mengurangi gejala seperti jerawat dan pertumbuhan rambut berlebih.</li>
    <li><strong>💅 Metformin</strong> <br> Obat ini digunakan untuk mengatur kadar insulin, yang membantu mengatur ovulasi dan menurunkan risiko diabetes.</li>
    <li><strong>💅 Induksi Ovulasi</strong> <br> Bagi perempuan yang ingin hamil, obat seperti clomiphene dapat digunakan untuk merangsang ovulasi dan meningkatkan peluang kehamilan.</li>
    </ol><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>PCOS adalah kondisi medis yang dapat memengaruhi banyak aspek kehidupan seorang perempuan, termasuk kesuburan, metabolisme, dan kesehatan mental. Dengan diagnosis dini dan pengelolaan yang tepat, perempuan dengan PCOS dapat menjalani hidup yang sehat dan produktif. Jika Anda mengalami gejala yang mencurigakan, sangat penting untuk berkonsultasi dengan dokter untuk mendapatkan perawatan yang sesuai.</p>
        `,
        date: '07-05-2025',
        image: '/images/blog-6.jpg'
    },
    {
        id: '7',
        title: 'Fakta tentang Infeksi Saluran Kemih (ISK) pada Perempuan',
        content: `
    <p>Infeksi Saluran Kemih (ISK) adalah salah satu infeksi bakteri yang paling umum terjadi, terutama pada perempuan. Diperkirakan bahwa sekitar 50–60% perempuan akan mengalami setidaknya satu episode ISK dalam hidup mereka. Memahami penyebab, gejala, pencegahan, dan pengobatan ISK sangat penting agar kondisi ini tidak berkembang menjadi lebih serius.</p><br>

    <h2><strong>Apa Itu Infeksi Saluran Kemih (ISK)?</strong></h2>
    <p>ISK adalah infeksi yang terjadi di bagian mana pun dari sistem kemih, yaitu ginjal, ureter, kandung kemih, dan uretra. Infeksi paling sering terjadi di saluran bawah, yaitu kandung kemih (sistitis) dan uretra (uretritis). Jika tidak diobati, ISK dapat menyebar ke ginjal (pielonefritis) dan menyebabkan komplikasi serius.</p><br>

    <h2><strong>Mengapa Perempuan Lebih Rentan Terhadap ISK?</strong></h2>
    <p>Anatomi tubuh perempuan berperan besar dalam kerentanan terhadap ISK. Uretra perempuan lebih pendek dibandingkan laki-laki, sehingga bakteri lebih mudah mencapai kandung kemih. Selain itu, letak uretra yang dekat dengan anus memudahkan bakteri dari area rektal, seperti <em>Escherichia coli</em> (E. coli), masuk ke saluran kemih.</p><br>

    <h2><strong>Gejala ISK pada Perempuan</strong></h2>
    <p>Gejala ISK dapat muncul secara tiba-tiba dan biasanya meliputi:</p>
    <ul>
    <li>👒 Rasa terbakar saat buang air kecil</strong></li>
    <li>👒 Sering ingin buang air kecil, tetapi hanya sedikit yang keluar</strong></li>
    <li>👒 Urine berwarna keruh atau berbau menyengat</strong></li>
    <li>👒 Nyeri di area panggul atau perut bagian bawah</strong></li>
    <li>👒 Demam dan menggigil (jika infeksi sudah mencapai ginjal)</strong></li>
    </ul><br>

    <h2><strong>Penyebab ISK</strong></h2>
    <p>Penyebab utama ISK adalah bakteri, terutama <em>E. coli</em>, yang biasanya hidup di usus besar dan sekitar anus. Faktor risiko yang meningkatkan kemungkinan ISK antara lain:</p>
    <ul>
    <li><strong>🕊️ Aktivitas seksual</strong> <br> Hubungan seksual dapat mendorong bakteri masuk ke uretra.</li>
    <li><strong>🕊️ Menahan buang air kecil</strong> <br> Menahan urine terlalu lama memungkinkan pertumbuhan bakteri dalam kandung kemih.</li>
    <li><strong>🕊️ Kebersihan yang kurang tepat</strong> <br> Membersihkan area genital dari belakang ke depan setelah buang air besar dapat memindahkan bakteri ke uretra.</li>
    <li><strong>🕊️ Kehamilan dan menopause</strong> <br> Perubahan hormonal mempengaruhi flora vagina dan meningkatkan risiko ISK.</li>
    <li><strong>🕊️ Penggunaan alat kontrasepsi tertentu</strong> <br> Diafragma dan spermisida dapat meningkatkan risiko ISK.</li>
    </ul><br>

    <h2><strong>Komplikasi ISK jika Tidak Diobati</strong></h2>
    <p>ISK yang tidak segera ditangani dapat menyebabkan komplikasi serius, seperti:</p>
    <ul>
    <li><strong>👛 Pielonefritis (infeksi ginjal)</strong> <br> Infeksi yang menyebar ke ginjal dapat menyebabkan kerusakan ginjal permanen dan infeksi darah (sepsis).</li>
    <li><strong>👛 Infeksi berulang</strong> <br> Perempuan yang pernah mengalami ISK memiliki risiko lebih tinggi terkena infeksi berulang.</li>
    <li><strong>👛 Masalah kehamilan</strong> <br> ISK saat hamil dapat meningkatkan risiko bayi lahir prematur atau berat lahir rendah.</li>
    </ul><br>

    <h2><strong>Cara Mencegah ISK</strong></h2>
    <p>Beberapa langkah pencegahan yang efektif meliputi:</p>
    <ol>
    <li><strong>🌹 Minum air putih yang cukup</strong> <br> Membantu membilas bakteri dari saluran kemih.</li>
    <li><strong>🌹 Buang air kecil setelah berhubungan seksual</strong> <br> Membantu mengeluarkan bakteri yang mungkin masuk ke uretra.</li>
    <li><strong>🌹 Membersihkan area genital dengan benar</strong> <br> Bersihkan dari depan ke belakang setelah buang air besar atau kecil.</li>
    <li><strong>🌹 Hindari produk iritan</strong> <br> Jangan gunakan sabun wangi, semprotan kewanitaan, atau bedak di area genital.</li>
    <li><strong>🌹 Jangan menahan buang air kecil terlalu lama</strong></li>
    </ol><br>

    <h2><strong>📜 Pengobatan ISK</strong></h2>
    <p>ISK biasanya diobati dengan antibiotik yang diresepkan oleh dokter. Penting untuk menghabiskan seluruh dosis antibiotik meskipun gejala membaik untuk mencegah infeksi berulang atau resistensi antibiotik. Untuk meringankan gejala, disarankan juga untuk minum banyak air, mengonsumsi obat pereda nyeri bila perlu, dan beristirahat cukup.</p><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Infeksi Saluran Kemih adalah kondisi umum yang dapat menyebabkan ketidaknyamanan signifikan jika tidak ditangani dengan tepat. Dengan memahami faktor risiko, gejala, pencegahan, dan pengobatannya, perempuan dapat menjaga kesehatan saluran kemih dan mencegah komplikasi yang lebih serius. Jika Anda mengalami gejala ISK, segera konsultasikan dengan tenaga medis untuk penanganan yang tepat.</p>
        `,
        date: '07-05-2025',
        image: '/images/blog-7.jpg'
    },
    {
        id: '8',
        title: 'Mengapa Vaksin HPV Penting untuk Perempuan?',
        content: 'Isi lengkap blog post 8...',
        date: '12-05-2025',
        image: '/images/blog-8.jpg'
    },
    {
        id: '9',
        title: 'Manfaat Pap Smear untuk Deteksi Dini Kanker Serviks',
        content: 'Isi lengkap blog post 9...',
        date: '13-05-2025',
        image: '/images/blog-9.jpg'
    },
    {
        id: '10',
        title: 'Perimenopause: Gejala Awal dan Cara Menghadapinya',
        content: 'Isi lengkap blog post 10...',
        date: '14-05-2025',
        image: '/images/blog-10.jpg'
    },
    {
        id: '11',
        title: 'Kesehatan Mental dan Kesehatan Reproduksi: Apa Hubungannya?',
        content: 'Isi lengkap blog post 11...',
        date: '15-05-2025',
        image: '/images/blog-11.jpg'
    },
    {
        id: '12',
        title: 'Mengapa Pemeriksaan Kesehatan Rutin Penting bagi Perempuan?',
        content: 'Isi lengkap blog post 12...',
        date: '16-05-2025',
        image: '/images/blog-12.jpg'
    },
    {
        id: '13',
        title: 'Mengapa Vaksinasi Penting untuk Kesehatan Perempuan?',
        content: 'Isi lengkap blog post 13...',
        date: '17-05-2025',
        image: '/images/blog-13.jpg'
    },
    {
        id: '14',
        title: 'Perawatan Kulit yang Tepat untuk Perempuan Usia 30-an',
        content: 'Isi lengkap blog post 14...',
        date: '18-05-2025',
        image: '/images/blog-14.jpg'
    },
    {
        id: '15',
        title: 'Mengapa Penting untuk Memahami Siklus Menstruasi?',
        content: 'Isi lengkap blog post 15...',
        date: '19-05-2025',
        image: '/images/blog-15.jpg'
    },
    {
        id: '16',
        title: 'Nutrisi Penting untuk Kesehatan Kehamilan',
        content: 'Isi lengkap blog post 16...',
        date: '20-05-2025',
        image: '/images/blog-16.jpg'
    },
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