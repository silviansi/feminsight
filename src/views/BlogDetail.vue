<template>
    <div class="max-w-6xl py-12 px-4 mt-8 mx-auto">
        <div v-if="blog">
            <!-- Header dengan gambar -->
            <div class="mb-8 text-center">
            <img :src="blog.image" alt="Blog Image" class="h-64 object-cover rounded-lg shadow-lg mb-6 max-w-3xl mx-auto w-full" />
  
            <!-- Breadcrumb -->
            <div class="mb-4 text-gray-600">
                <span class="cursor-pointer hover:underline" @click="goBlog">Blog</span> &gt;
                <span>{{ blog.title }}</span>
            </div>
  
            <h1 class="text-3xl font-extrabold text-[#6a4c46] mb-4">{{ blog.title }}</h1>
            <p class="text-base text-pink-500 mb-6">{{ blog.date }}</p>
            </div>
  
            <!-- Content -->
            <div v-html="blog.content" class="prose lg:prose-xl text-gray-700 max-w-3xl mx-auto px-3"></div>
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

    <h2><strong>Mengapa Kesehatan Reproduksi Penting?</strong></h2>
    <ul>
        <li><strong>🦋 Pencegahan Penyakit</strong> <br> Menjaga kebersihan dan kesehatan organ reproduksi membantu mencegah infeksi menular seksual (IMS), kanker serviks, endometriosis, serta gangguan hormonal seperti sindrom ovarium polikistik (PCOS).</li>
        <li><strong>🦋 Perencanaan Kehamilan</strong> <br> Memahami siklus menstruasi dan kesehatan reproduksi memudahkan perempuan merencanakan kehamilan dengan baik, baik dalam konteks program hamil maupun pencegahan kehamilan yang tidak diinginkan.</li>
        <li><strong>🦋 Kesejahteraan Mental</strong> <br> Ketidakseimbangan hormon reproduksi dapat memengaruhi suasana hati dan kesehatan mental. Kesehatan reproduksi yang baik membantu menjaga kestabilan emosi dan kualitas hidup.</li>
        <li><strong>🦋 Pengendalian Penyakit Genetik</strong> <br> Konsultasi genetik sebelum kehamilan dapat membantu mencegah penularan penyakit genetik kepada keturunan.</li>
    </ul><br>

    <h2><strong>Cara Menjaga Kesehatan Reproduksi</strong></h2>
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
        <li>🌹 Benjolan atau penebalan di payudara atau ketiak.</li>
        <li>🌹 Perubahan ukuran, bentuk, atau tampilan payudara.</li>
        <li>🌹 Kulit payudara menjadi kemerahan, berkerut, atau seperti kulit jeruk.</li>
        <li>🌹 Keluarnya cairan tidak biasa dari puting, terutama jika berdarah.</li>
        <li>🌹 Nyeri yang tidak hilang dalam waktu lama.</li>
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
        <li><strong>🍉 Regulasi Siklus Menstruasi</strong> <br> Estrogen berperan dalam pertumbuhan lapisan endometrium, mempersiapkan rahim untuk kemungkinan kehamilan.</li>
        <li><strong>🍉 Kesehatan Tulang</strong> <br> Estrogen membantu menjaga kepadatan tulang dan mencegah osteoporosis, terutama saat menopause ketika kadar estrogen menurun.</li>
        <li><strong>🍉 Kesehatan Jantung</strong> <br> Estrogen berkontribusi dalam menjaga kadar kolesterol yang sehat dan melindungi kesehatan pembuluh darah.</li>
        <li><strong>🍉 Kesehatan Kulit dan Rambut</strong> <br> Hormon ini mendukung elastisitas kulit dan pertumbuhan rambut yang sehat.</li>
        <li><strong>🍉 Keseimbangan Emosional</strong> <br> Estrogen berperan dalam kestabilan suasana hati dan fungsi kognitif.</li>
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
        <li><strong>🍑 Kemandulan</strong> <br> Anemia berat dapat memengaruhi kesuburan, mengurangi kemampuan tubuh untuk ovulasi secara normal, dan menghambat proses pembuahan.</li>
        <li><strong>🍑 Keguguran</strong> <br> Kekurangan oksigen dan nutrisi akibat anemia dapat meningkatkan risiko keguguran pada trimester pertama kehamilan.</li>
        <li><strong>🍑 Komplikasi Kehamilan</strong> <br> Anemia selama kehamilan dapat menyebabkan preeklamsia, kelahiran prematur, dan gangguan kesehatan pada bayi seperti berat badan lahir rendah.</li>
        <li><strong>🍑 Gangguan Menstruasi</strong> <br> Anemia juga dapat menyebabkan siklus menstruasi yang tidak teratur atau perdarahan yang berat.</li>
    </ul><br>

    <h2><strong>Gejala Anemia yang Perlu Diwaspadai</strong></h2>
    <ul>
        <li>🫧 Rasa lelah dan lemas yang berlebihan.</li>
        <li>🫧 Pusing atau kepala terasa ringan.</li>
        <li>🫧 Perubahan warna kulit menjadi pucat atau kekuningan.</li>
        <li>🫧 Sesak napas atau detak jantung tidak teratur.</li>
        <li>🫧 Nyeri dada atau gangguan pernapasan.</li>
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
        content: `
    <p>Human Papillomavirus (HPV) adalah salah satu virus menular seksual yang paling umum di dunia. Meskipun sebagian besar infeksi HPV bersifat sementara dan tidak bergejala, beberapa jenis HPV dapat menyebabkan kanker serviks, kanker vulva, kanker vagina, kanker anus, serta kutil kelamin. Vaksinasi HPV menjadi langkah penting dalam pencegahan penyakit-penyakit ini, terutama bagi perempuan.</p><br>

    <h2><strong>Apa Itu HPV?</strong></h2>
    <p>HPV adalah kelompok virus yang terdiri dari lebih dari 100 jenis. Sekitar 40 jenis di antaranya dapat menginfeksi area genital. HPV dibagi menjadi dua kategori utama:</p>
    <ul>
        <li><strong>🫧 HPV risiko rendah</strong> <br> Menyebabkan kutil kelamin dan lesi jinak pada serviks.</li>
        <li><strong>🫧 HPV risiko tinggi</strong> <br> Dapat menyebabkan kanker serviks, kanker anus, kanker tenggorokan, serta kanker lainnya.</li>
    </ul><br>

    <h2><strong>Bagaimana HPV Menular?</strong></h2>
    <p>HPV menular melalui kontak kulit ke kulit, terutama saat hubungan seksual (vaginal, anal, maupun oral). Virus juga dapat menular meskipun orang yang terinfeksi tidak menunjukkan gejala. Karena itu, hampir semua orang yang aktif secara seksual berisiko terpapar HPV di suatu waktu dalam hidup mereka.</p><br>

    <h2><strong>Hubungan HPV dan Kanker Serviks</strong></h2>
    <p>Kanker serviks adalah salah satu kanker paling mematikan bagi perempuan, terutama di negara berkembang. Hampir 99% kasus kanker serviks disebabkan oleh infeksi HPV, terutama tipe 16 dan 18 yang merupakan jenis risiko tinggi. Infeksi HPV yang menetap dalam jangka panjang dapat menyebabkan perubahan sel abnormal pada serviks yang berkembang menjadi kanker.</p><br>

    <h2><strong>Manfaat Vaksin HPV</strong></h2>
    <p>Vaksin HPV telah terbukti sangat efektif dalam mencegah infeksi dari tipe HPV yang paling berbahaya. Manfaat utamanya meliputi:</p>
    <ul>
        <li>🍃 Mencegah kanker serviks</strong></li>
        <li>🍃 Mencegah kutil kelamin</strong></li>
        <li>🍃 Mencegah kanker vulva, vagina, anus, dan orofaring (tenggorokan)</strong></li>
        <li>🍃 Mengurangi kebutuhan tes lanjutan dan prosedur medis akibat hasil Pap smear abnormal</strong></li>
    </ul><br>

    <h2><strong>Kapan Sebaiknya Vaksin HPV Diberikan?</strong></h2>
    <p>Organisasi Kesehatan Dunia (WHO) dan Ikatan Dokter Indonesia (IDI) merekomendasikan vaksinasi HPV untuk:</p>
    <ul>
        <li><strong>🦢 Perempuan usia 9–14 tahun</strong> <br> Sebelum memulai aktivitas seksual, karena vaksin paling efektif sebelum terpapar HPV.</li>
        <li><strong>🦢 Remaja dan dewasa muda hingga usia 26 tahun</strong> <br> Vaksin tetap memberikan manfaat walaupun seseorang sudah aktif secara seksual, selama belum terinfeksi semua tipe HPV yang dilindungi vaksin.</li>
        <li><strong>🦢 Perempuan usia 27–45 tahun</strong> <br> Vaksinasi masih dapat dipertimbangkan setelah konsultasi dengan dokter, tergantung risiko paparan HPV.</li>
    </ul><br>

    <h2><strong>Jenis-jenis Vaksin HPV</strong></h2>
    <p>Di Indonesia, tersedia beberapa jenis vaksin HPV:</p>
    <ul>
        <li><strong>💓 Vaksin bivalen</strong> (melindungi dari HPV tipe 16 dan 18)</li>
        <li><strong>💓 Vaksin quadrivalent</strong> (melindungi dari HPV tipe 6, 11, 16, dan 18)</li>
        <li><strong>💓 Vaksin nonavalent</strong> (melindungi dari 9 tipe HPV, termasuk tipe risiko tinggi lainnya)</li>
    </ul><br>

    <h2><strong>Efektivitas dan Keamanan Vaksin HPV</strong></h2>
    <p>Penelitian menunjukkan bahwa vaksin HPV memberikan perlindungan jangka panjang minimal 10–12 tahun setelah vaksinasi, dan belum ada bukti bahwa dosis tambahan (booster) diperlukan. Vaksin HPV juga sangat aman. Efek samping yang paling umum adalah nyeri, kemerahan, dan bengkak di tempat suntikan, serta demam ringan atau sakit kepala.</p><br>

    <h2><strong>Apakah Vaksin HPV Menggantikan Pap Smear?</strong></h2>
    <p>Tidak. Vaksin HPV tidak menggantikan kebutuhan skrining rutin seperti Pap smear atau tes HPV. Vaksin hanya mencegah infeksi tipe HPV tertentu, tetapi tidak melindungi terhadap semua jenis HPV penyebab kanker serviks. Oleh karena itu, perempuan yang sudah divaksin tetap disarankan menjalani skrining secara berkala sesuai anjuran dokter.</p><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Vaksin HPV adalah salah satu inovasi paling efektif dalam pencegahan kanker serviks dan penyakit terkait HPV lainnya. Vaksin ini aman, efektif, dan memberikan perlindungan jangka panjang. Memberikan vaksinasi sejak usia muda, sebelum terpapar virus, adalah langkah terbaik dalam menjaga kesehatan reproduksi perempuan. Jangan ragu untuk berkonsultasi dengan dokter untuk mengetahui apakah Anda atau anak Anda memenuhi syarat untuk mendapatkan vaksin HPV.</p>
        `,
        date: '08-05-2025',
        image: '/images/blog-8.jpg'
    },
    {
        id: '9',
        title: 'Manfaat Pap Smear untuk Deteksi Dini Kanker Serviks',
        content: `
    <p>Kanker serviks merupakan salah satu kanker paling mematikan bagi perempuan di seluruh dunia, terutama di negara berkembang. Di Indonesia sendiri, kanker serviks menjadi penyebab kematian nomor dua akibat kanker pada perempuan setelah kanker payudara. Salah satu cara paling efektif untuk mencegah dan mendeteksi kanker serviks sejak dini adalah melalui pemeriksaan Pap smear.</p><br>

    <h2><strong>Apa Itu Pap Smear?</strong></h2>
    <p>Pap smear adalah prosedur medis sederhana yang digunakan untuk mendeteksi perubahan sel-sel abnormal pada leher rahim (serviks) sebelum berkembang menjadi kanker. Dalam prosedur ini, dokter mengambil sampel sel dari serviks menggunakan alat kecil seperti spatula atau sikat, lalu sel tersebut diperiksa di laboratorium untuk mendeteksi adanya kelainan.</p><br>

    <h2><strong>Bagaimana Pap Smear Bekerja?</strong></h2>
    <p>Sel-sel abnormal yang ditemukan melalui Pap smear biasanya merupakan tanda awal dari infeksi Human Papillomavirus (HPV) atau perubahan prakanker. Dengan mendeteksi perubahan ini lebih awal, pengobatan bisa dilakukan sebelum sel berkembang menjadi kanker serviks. Pap smear juga dapat mendeteksi infeksi atau peradangan pada serviks.</p><br>

    <h2><strong>Siapa yang Perlu Melakukan Pap Smear?</strong></h2>
    <p>Rekomendasi umum dari WHO dan Ikatan Dokter Indonesia menyarankan:</p>
    <ul>
        <li><strong>🌸 Perempuan usia 21–65 tahun</strong> <br> yang sudah aktif secara seksual disarankan melakukan Pap smear secara rutin.</li>
        <li><strong>🌸 Frekuensi pemeriksaan</strong> <br> Biasanya setiap 3 tahun sekali. Jika Pap smear dikombinasikan dengan tes HPV, pemeriksaan bisa dilakukan setiap 5 tahun sekali.</li>
        <li><strong>🌸 Perempuan di atas usia 65 tahun</strong> <br> dapat berhenti melakukan Pap smear jika hasil tes sebelumnya normal selama 10 tahun terakhir.</li>
    </ul><br>

    <h2><strong>Manfaat Pap Smear</strong></h2>
    <p>Berikut beberapa manfaat utama Pap smear:</p>
    <ul>
        <li><strong>🍒 Deteksi dini sel abnormal</strong> <br> Menemukan perubahan sel sebelum menjadi kanker sehingga pengobatan bisa lebih efektif dan sederhana.</li>
        <li><strong>🍒 Mengurangi angka kematian akibat kanker serviks</strong> <br> Studi menunjukkan bahwa Pap smear secara signifikan menurunkan angka kematian akibat kanker serviks.</li>
        <li><strong>🍒 Memantau kesehatan serviks secara keseluruhan</strong> <br> Pap smear juga bisa mendeteksi infeksi, peradangan, atau kondisi lain yang memerlukan perhatian medis.</li>
        <li><strong>🍒 Memberikan ketenangan</strong> <br> Dengan hasil normal, perempuan dapat merasa lebih tenang tentang kondisi kesehatannya.</li>
    </ul><br>

    <h2><strong>Bagaimana Persiapan untuk Pap Smear?</strong></h2>
    <p>Agar hasil tes lebih akurat, berikut beberapa hal yang perlu diperhatikan sebelum Pap smear:</p>
    <ul>
        <li>🦋 Hindari hubungan seksual, penggunaan produk vagina (seperti krim atau obat), dan douching 2–3 hari sebelum tes.</li>
        <li>🦋 Lakukan pemeriksaan saat tidak sedang menstruasi. Waktu terbaik adalah 10–20 hari setelah hari pertama haid terakhir.</li>
        <li>🦋 Kosongkan kandung kemih sebelum pemeriksaan agar lebih nyaman.</li>
    </ul><br>

    <h2><strong>Apakah Pap Smear Menyakitkan?</strong></h2>
    <p>Prosedur Pap smear umumnya tidak menyakitkan, namun beberapa perempuan mungkin merasa sedikit tidak nyaman atau tekanan ringan saat alat spekulum dimasukkan ke dalam vagina. Proses pengambilan sampel hanya memakan waktu beberapa menit.</p><br>

    <h2><strong>Apa Arti Hasil Pap Smear?</strong></h2>
    <p>Hasil Pap smear biasanya dibagi menjadi beberapa kategori:</p>
    <ul>
        <li><strong>💐 Normal</strong> <br> Tidak ditemukan sel abnormal. Pemeriksaan bisa diulang sesuai jadwal rutin.</li>
        <li><strong>💐 Sel abnormal ringan (ASC-US atau LSIL)</strong> <br> Biasanya disebabkan oleh infeksi HPV ringan dan sering hilang sendiri. Dokter bisa menyarankan tes lanjutan atau observasi.</li>
        <li><strong>💐 Sel abnormal sedang atau berat (HSIL)</strong> <br> Membutuhkan pemeriksaan lanjutan seperti kolposkopi dan biopsi untuk memastikan apakah ada perubahan prakanker.</li>
        <li><strong>💐 Sel kanker</strong> <br> Jika terdeteksi, dokter akan merujuk untuk pengobatan lebih lanjut.</li>
    </ul><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Pap smear adalah alat deteksi dini yang sangat penting dan efektif dalam mencegah kanker serviks. Dengan melakukan pemeriksaan secara rutin, perempuan dapat mendeteksi perubahan sel sejak awal dan mendapatkan penanganan yang tepat sebelum berkembang menjadi kanker. Jangan tunda pemeriksaan, dan konsultasikan dengan dokter untuk mengetahui kapan saat terbaik melakukan Pap smear bagi Anda.</p>
        `,
        date: '08-05-2025',
        image: '/images/blog-9.jpg'
    },
    {
        id: '10',
        title: 'Perimenopause: Gejala Awal dan Cara Menghadapinya',
        content: `
    <p>Perimenopause adalah fase transisi alami dalam kehidupan perempuan yang terjadi sebelum memasuki menopause. Pada masa ini, tubuh mulai mengalami perubahan hormonal yang signifikan, khususnya penurunan kadar estrogen dan progesteron. Perimenopause dapat dimulai sejak usia akhir 30-an atau awal 40-an dan berlangsung selama beberapa tahun sebelum menstruasi berhenti sepenuhnya.</p><br>

    <h2><strong>Apa Itu Perimenopause?</strong></h2>
    <p>Perimenopause berasal dari kata "peri" yang berarti "sekitar" atau "menjelang", dan "menopause", yaitu berhentinya menstruasi secara permanen. Masa perimenopause menandai dimulainya fluktuasi hormon yang menyebabkan berbagai gejala fisik dan emosional. Masa ini biasanya berlangsung sekitar 4 hingga 10 tahun sebelum menopause resmi terjadi, yang ditandai dengan tidak adanya menstruasi selama 12 bulan berturut-turut.</p><br>

    <h2><strong>Gejala Umum Perimenopause</strong></h2>
    <p>Gejala perimenopause bervariasi pada setiap perempuan, tetapi beberapa yang paling umum meliputi:</p>
    <ul>
        <li><strong>✨ Siklus menstruasi tidak teratur</strong> <br> Menstruasi bisa menjadi lebih pendek, lebih panjang, lebih ringan, atau lebih berat dari biasanya.</li>
        <li><strong>✨ Hot flashes (sensasi panas tiba-tiba)</strong> <br> Biasanya disertai keringat malam (night sweats) dan jantung berdebar.</li>
        <li><strong>✨ Gangguan tidur</strong> <br> Kesulitan tidur atau sering terbangun di malam hari.</li>
        <li><strong>✨ Perubahan suasana hati</strong> <br> Mudah marah, cemas, atau merasa depresi tanpa sebab yang jelas.</li>
        <li><strong>✨ Penurunan libido</strong> <br> Hasrat seksual dapat menurun akibat perubahan hormon dan kekeringan vagina.</li>
        <li><strong>✨ Kekeringan dan ketidaknyamanan pada vagina</strong> <br> Karena menurunnya produksi estrogen.</li>
        <li><strong>✨ Masalah konsentrasi dan daya ingat</strong> <br> Sering disebut "brain fog".</li>
        <li><strong>✨ Perubahan berat badan</strong> <br> Penambahan berat badan, terutama di area perut.</li>
    </ul><br>

    <h2><strong>Apa Penyebab Gejala Perimenopause?</strong></h2>
    <p>Fluktuasi kadar hormon estrogen dan progesteron adalah penyebab utama gejala perimenopause. Penurunan estrogen mempengaruhi berbagai sistem tubuh, termasuk sistem reproduksi, kardiovaskular, tulang, dan sistem saraf.</p><br>

    <h2><strong>Bagaimana Cara Menghadapi Perimenopause?</strong></h2>
    <p>Meskipun perimenopause adalah proses alami, ada banyak cara yang dapat dilakukan untuk mengelola gejala agar tetap merasa nyaman dan sehat:</p>
    <ul>
        <li><strong>💖 Pola makan sehat</strong> <br> Konsumsi makanan kaya kalsium, vitamin D, serat, dan antioksidan. Kurangi makanan tinggi gula, lemak jenuh, dan garam.</li>
        <li><strong>💖 Olahraga teratur</strong> <br> Lakukan aktivitas fisik seperti berjalan, yoga, atau berenang untuk menjaga kesehatan jantung, tulang, dan mood.</li>
        <li><strong>💖 Tidur cukup</strong> <br> Ciptakan rutinitas tidur yang baik dan hindari kafein atau alkohol di malam hari.</li>
        <li><strong>💖 Manajemen stres</strong> <br> Latihan pernapasan, meditasi, atau terapi dapat membantu meredakan kecemasan dan perubahan suasana hati.</li>
        <li><strong>💖 Hindari pemicu hot flashes</strong> <br> Seperti makanan pedas, minuman panas, alkohol, dan suhu ruangan yang terlalu panas.</li>
        <li><strong>💖 Terapi hormon (HRT)</strong> <br> Bagi sebagian perempuan, dokter dapat merekomendasikan terapi penggantian hormon untuk meredakan gejala berat. Konsultasikan terlebih dahulu risiko dan manfaatnya.</li>
        <li><strong>💖 Konsultasi dengan dokter</strong> <br> Penting untuk memeriksakan diri secara rutin agar mendapat panduan pengelolaan gejala yang tepat.</li>
    </ul><br>

    <h2><strong>Kapan Harus Berkonsultasi ke Dokter?</strong></h2>
    <p>Anda sebaiknya berkonsultasi dengan dokter jika mengalami:</p>
    <ul>
        <li>🌙 Pendarahan hebat atau sangat tidak teratur.</li>
        <li>🌙 Nyeri panggul yang tidak biasa.</li>
        <li>🌙 Gejala yang mengganggu aktivitas sehari-hari.</li>
    </ul><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Perimenopause adalah bagian alami dari kehidupan perempuan yang menandai transisi menuju menopause. Dengan memahami gejalanya dan menerapkan pola hidup sehat, masa perimenopause bisa dijalani dengan nyaman dan tenang. Jangan ragu untuk berkonsultasi dengan tenaga medis jika gejala terasa berat atau mengganggu kualitas hidup Anda.</p>
        `,
        date: '08-05-2025',
        image: '/images/blog-10.jpg'
    },
    {
        id: '11',
        title: 'Pentingnya Konsumsi Asam Folat bagi Perempuan Usia Subur',
        content: `
    <p>Asam folat adalah salah satu vitamin B (vitamin B9) yang memiliki peranan sangat penting bagi kesehatan, terutama bagi perempuan usia subur. Konsumsi asam folat yang cukup tidak hanya mendukung kesehatan umum, tetapi juga sangat berperan dalam kesehatan reproduksi dan perkembangan janin saat kehamilan. Memahami manfaat asam folat serta kebutuhan asupannya adalah langkah penting bagi setiap perempuan yang merencanakan kehamilan atau berada dalam usia subur.</p><br>

    <h2><strong>Apa Itu Asam Folat?</strong></h2>
    <p>Asam folat adalah bentuk sintetis dari folat, vitamin B9 yang secara alami terdapat dalam makanan seperti sayuran hijau, kacang-kacangan, dan buah-buahan. Asam folat diperlukan tubuh untuk membentuk DNA, mendukung pembelahan sel, serta memproduksi sel darah merah yang sehat. Karena tubuh tidak dapat menyimpan asam folat dalam jumlah besar, asupan harian yang cukup sangat penting untuk menjaga keseimbangan tubuh.</p><br>

    <h2><strong>Mengapa Asam Folat Penting bagi Perempuan Usia Subur?</strong></h2>
    <ul>
        <li><strong>🍒 Menurunkan Risiko Cacat Tabung Saraf (Neural Tube Defects)</strong><br> Asam folat sangat penting untuk mencegah cacat tabung saraf pada janin, seperti spina bifida dan anencephaly, yang terjadi pada awal kehamilan, seringkali sebelum seorang perempuan tahu bahwa dirinya hamil.</li>
        <li><strong>🍒 Memperbaiki Kesehatan Reproduksi</strong><br> Asam folat berperan dalam mendukung ovulasi yang sehat, memelihara kualitas sel telur, serta meningkatkan kesuburan. Penelitian menunjukkan bahwa perempuan dengan kadar asam folat yang baik memiliki peluang kehamilan yang lebih tinggi.</li>
        <li><strong>🍒 Mencegah Anemia</strong><br> Asam folat membantu produksi sel darah merah. Kekurangan asam folat dapat menyebabkan anemia megaloblastik, yang membuat perempuan mudah lelah, lemah, dan kurang bertenaga.</li>
        <li><strong>🍒 Mendukung Pembelahan dan Pertumbuhan Sel</strong><br> Karena perannya dalam pembentukan DNA, asam folat penting dalam proses pembelahan dan pertumbuhan sel yang sehat, baik untuk kesehatan diri sendiri maupun untuk perkembangan janin.</li>
    </ul><br>

    <h2><strong>Berapa Banyak Asam Folat yang Dibutuhkan?</strong></h2>
    <ul>
        <li><strong>🕊️ Perempuan usia subur (15–49 tahun)</strong> disarankan mengonsumsi minimal 400 mikrogram (mcg) asam folat per hari.</li>
        <li><strong>🕊️ Perempuan yang merencanakan kehamilan atau sedang hamil</strong> dianjurkan meningkatkan asupan menjadi 600 mcg per hari.</li>
        <li><strong>🕊️ Perempuan menyusui</strong> disarankan mengonsumsi sekitar 500 mcg per hari.</li>
    </ul><br>
    <p>Kebutuhan ini bisa dipenuhi melalui kombinasi makanan kaya folat dan suplemen asam folat sesuai anjuran dokter.</p><br>

    <h2><strong>Sumber Makanan yang Kaya Asam Folat</strong></h2>
    <ul>
        <li>🌿 Sayuran berdaun hijau (bayam, brokoli, selada)</li>
        <li>🌿 Kacang-kacangan (kacang merah, lentil, kacang polong)</li>
        <li>🌿 Buah-buahan (jeruk, alpukat, pepaya, pisang)</li>
        <li>🌿 Sereal atau roti yang diperkaya asam folat</li>
        <li>🌿 Hati sapi atau ayam (dalam jumlah terbatas)</li>
    </ul><br>

    <h2><strong>Kapan Sebaiknya Mulai Mengonsumsi Asam Folat?</strong></h2>
    <p>Idealnya, perempuan mulai mengonsumsi asam folat sejak memasuki usia subur, bahkan jauh sebelum merencanakan kehamilan. Karena cacat tabung saraf terjadi pada 28 hari pertama kehamilan, seringkali sebelum kehamilan terdeteksi, maka asupan asam folat yang cukup sejak awal sangat penting.</p><br>

    <h2><strong>Apakah Terlalu Banyak Asam Folat Berbahaya?</strong></h2>
    <p>Meskipun asam folat umumnya aman, konsumsi dalam dosis sangat tinggi (lebih dari 1000 mcg/hari) dalam jangka panjang bisa menyamarkan gejala kekurangan vitamin B12 atau menyebabkan efek samping seperti gangguan pencernaan. Oleh karena itu, sebaiknya konsumsi sesuai anjuran dokter atau petunjuk suplemen.</p><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Asam folat adalah nutrisi esensial yang tidak boleh diabaikan oleh perempuan usia subur. Manfaatnya dalam mendukung kesuburan, kesehatan reproduksi, serta mencegah cacat lahir pada janin menjadikan asupan asam folat yang cukup sebagai investasi penting untuk masa depan. Pastikan Anda mengonsumsi makanan bergizi seimbang yang kaya folat, dan konsultasikan dengan dokter jika perlu suplemen tambahan, terutama saat merencanakan kehamilan.</p>
        `,
        date: '08-05-2025',
        image: '/images/blog-11.jpg'
    },
    {
        id: '12',
        title: 'Dampak Stres pada Kesehatan Reproduksi Perempuan',
        content: `
    <p>Stres adalah bagian dari kehidupan modern yang tidak bisa sepenuhnya dihindari. Namun, jika tidak dikelola dengan baik, stres kronis dapat memberikan dampak serius terhadap kesehatan, termasuk kesehatan reproduksi perempuan. Memahami bagaimana stres memengaruhi sistem reproduksi membantu perempuan lebih waspada dalam menjaga keseimbangan mental dan fisik.</p><br>

    <h2><strong>Bagaimana Stres Memengaruhi Sistem Reproduksi?</strong></h2>
    <p>Saat tubuh mengalami stres, kelenjar adrenal melepaskan hormon stres seperti kortisol dan adrenalin. Dalam jangka pendek, hormon ini membantu tubuh merespons situasi berbahaya. Namun, stres kronis menyebabkan kadar kortisol terus meningkat, yang dapat mengganggu keseimbangan hormon reproduksi seperti estrogen, progesteron, luteinizing hormone (LH), dan follicle-stimulating hormone (FSH). Ketidakseimbangan ini dapat berdampak pada siklus menstruasi, ovulasi, hingga kesuburan.</p><br>

    <h2><strong>Dampak Stres terhadap Kesehatan Reproduksi Perempuan</strong></h2>
    <ul>
        <li><strong>💎 Gangguan Siklus Menstruasi</strong><br> Stres dapat menyebabkan menstruasi tidak teratur, amenore (tidak menstruasi), atau menorrhagia (menstruasi berlebihan). Stres memengaruhi hipotalamus, pusat pengatur hormon di otak, yang mengontrol ovarium dan kelenjar pituitari.</li>
        <li><strong>💎 Ovulasi Tidak Teratur atau Terhenti</strong><br> Kadar kortisol yang tinggi dapat menghambat pelepasan LH dan FSH, sehingga ovulasi menjadi tidak teratur atau tidak terjadi (anovulasi). Ini dapat menurunkan peluang kehamilan.</li>
        <li><strong>💎 Penurunan Kesuburan</strong><br> Stres kronis dikaitkan dengan penurunan kualitas sel telur, penurunan libido, serta perubahan pada lendir serviks yang membuat sperma sulit mencapai sel telur.</li>
        <li><strong>💎 Peningkatan Risiko Sindrom Polikistik Ovarium (PCOS)</strong><br> Stres yang berkelanjutan dapat memperparah ketidakseimbangan hormon androgen, yang terkait dengan PCOS, salah satu penyebab infertilitas perempuan.</li>
        <li><strong>💎 Peningkatan Risiko Endometriosis</strong><br> Beberapa studi menunjukkan bahwa stres dapat memperburuk gejala endometriosis, termasuk nyeri panggul dan gangguan menstruasi.</li>
        <li><strong>💎 Komplikasi Kehamilan</strong><br> Pada perempuan hamil, stres berlebihan meningkatkan risiko kelahiran prematur, berat badan lahir rendah, dan preeklampsia.</li>
    </ul><br>

    <h2><strong>Ciri-Ciri Stres yang Mempengaruhi Reproduksi</strong></h2>
    <ul>
        <li>🌸 Menstruasi tidak teratur atau berhenti</li>
        <li>🌸 Nyeri haid lebih parah dari biasanya</li>
        <li>🌸 Kesulitan hamil meskipun memiliki hubungan seksual rutin tanpa kontrasepsi</li>
        <li>🌸 Penurunan gairah seksual</li>
        <li>🌸 Kelelahan berlebihan, mudah marah, sulit tidur</li>
    </ul><br>

    <h2><strong>Cara Mengelola Stres untuk Menjaga Kesehatan Reproduksi</strong></h2>
    <ul>
        <li><strong>🦋 Olahraga Teratur</strong><br> Aktivitas fisik seperti yoga, jalan kaki, atau berenang dapat membantu mengurangi hormon stres dan meningkatkan endorfin (hormon kebahagiaan).</li>
        <li><strong>🦋 Teknik Relaksasi</strong><br> Meditasi, pernapasan dalam, dan mindfulness membantu menenangkan pikiran dan tubuh.</li>
        <li><strong>🦋 Istirahat yang Cukup</strong><br> Tidur berkualitas minimal 7–8 jam per malam penting untuk menjaga keseimbangan hormon.</li>
        <li><strong>🦋 Konsultasi Psikolog atau Konselor</strong><br> Jika stres sulit dikendalikan, bantuan profesional dapat membantu menemukan cara efektif mengatasi tekanan.</li>
        <li><strong>🦋 Menjaga Pola Makan Sehat</strong><br> Asupan gizi seimbang yang kaya vitamin B, magnesium, dan omega-3 membantu mendukung sistem saraf dan hormon.</li>
        <li><strong>🦋 Bangun Dukungan Sosial</strong><br> Berbicara dengan pasangan, keluarga, atau teman dapat meringankan beban emosional.</li>
    </ul><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Stres yang berkepanjangan tidak hanya berdampak pada kesehatan mental, tetapi juga dapat mengganggu keseimbangan hormon dan fungsi reproduksi perempuan. Mengelola stres secara efektif adalah bagian penting dari menjaga kesehatan reproduksi, baik bagi yang merencanakan kehamilan maupun yang ingin menjaga keseimbangan siklus menstruasi. Jangan ragu mencari bantuan profesional jika stres mulai mengganggu keseharian atau kesehatan tubuh Anda.</p>
        `,
        date: '08-05-2025',
        image: '/images/blog-12.jpg'
    },
    {
        id: '13',
        title: 'Mengapa Asupan Kalsium Penting bagi Perempuan?',
        content: `
    <p>Kalsium adalah mineral esensial yang memainkan peran penting dalam menjaga kesehatan tulang dan gigi. Bagi perempuan, kebutuhan kalsium menjadi semakin krusial seiring bertambahnya usia, terutama untuk mencegah penyakit tulang seperti osteoporosis. Selain itu, kalsium juga memiliki fungsi penting dalam sistem saraf, otot, dan pembekuan darah.</p><br>

    <h2><strong>Mengapa Perempuan Membutuhkan Kalsium Lebih Banyak?</strong></h2>
    <p>Perempuan memiliki risiko lebih tinggi mengalami pengeroposan tulang dibandingkan laki-laki. Hal ini disebabkan oleh beberapa faktor:</p>
    <ul>
        <li><strong>🩰 Perubahan Hormon</strong><br> Setelah menopause, kadar hormon estrogen menurun drastis. Estrogen berperan penting dalam menjaga kepadatan tulang. Penurunan estrogen mempercepat proses pelepasan kalsium dari tulang, meningkatkan risiko osteoporosis.</li>
        <li><strong>🩰 Kebutuhan Selama Kehamilan dan Menyusui</strong><br> Saat hamil dan menyusui, tubuh perempuan membutuhkan lebih banyak kalsium untuk mendukung pertumbuhan tulang dan gigi janin serta produksi ASI.</li>
        <li><strong>🩰 Risiko Osteopenia dan Osteoporosis</strong><br> Osteopenia adalah kondisi awal penurunan kepadatan tulang yang bisa berkembang menjadi osteoporosis jika asupan kalsium tidak mencukupi.</li>
    </ul><br>

    <h2><strong>Fungsi Penting Kalsium dalam Tubuh</strong></h2>
    <ul>
        <li><strong>💖 Menjaga Kesehatan Tulang dan Gigi</strong><br> Sekitar 99% kalsium dalam tubuh tersimpan di tulang dan gigi. Kalsium mendukung kekuatan dan kepadatan tulang sepanjang hidup.</li>
        <li><strong>💖 Mendukung Kontraksi Otot</strong><br> Kalsium membantu otot berkontraksi, termasuk otot jantung. Kekurangan kalsium dapat menyebabkan kram atau kejang otot.</li>
        <li><strong>💖 Membantu Fungsi Saraf</strong><br> Kalsium berperan dalam penghantaran sinyal saraf dari otak ke seluruh tubuh.</li>
        <li><strong>💖 Mendukung Pembekuan Darah</strong><br> Kalsium membantu proses pembekuan darah saat terjadi luka.</li>
        <li><strong>💖 Memelihara Keseimbangan Hormon</strong><br> Kalsium berperan dalam pelepasan hormon dan enzim yang berfungsi dalam berbagai proses tubuh.</li>
    </ul><br>

    <h2><strong>Berapa Kebutuhan Kalsium Perempuan?</strong></h2>
    <ul>
        <li>🦢 Perempuan usia 19–50 tahun: 1000 mg/hari</li>
        <li>🦢 Perempuan usia >50 tahun: 1200 mg/hari</li>
        <li>🦢 Ibu hamil dan menyusui: 1000–1300 mg/hari</li>
    </ul><br>

    <h2><strong>Sumber Makanan Kaya Kalsium</strong></h2>
    <ul>
        <li>💫 Susu, yogurt, dan keju</li>
        <li>💫 Ikan sarden dan salmon (dengan tulang)</li>
        <li>💫 Sayuran hijau seperti bayam, brokoli, dan kale</li>
        <li>💫 Kacang almond dan biji wijen</li>
        <li>💫 Tahu dan tempe yang diperkaya kalsium</li>
        <li>💫 Jus jeruk dan sereal yang difortifikasi kalsium</li>
    </ul><br>

    <h2><strong>Tips Memaksimalkan Penyerapan Kalsium</strong></h2>
    <ul>
        <li><strong>👒 Pastikan Asupan Vitamin D</strong><br> Vitamin D membantu penyerapan kalsium. Paparan sinar matahari pagi dan konsumsi ikan berlemak dapat membantu memenuhi kebutuhan vitamin D.</li>
        <li><strong>👒 Konsumsi Kalsium dalam Porsi Kecil</strong><br> Tubuh lebih mudah menyerap kalsium dalam jumlah 500–600 mg per kali konsumsi daripada sekaligus dalam jumlah besar.</li>
        <li><strong>👒 Batasi Konsumsi Kafein dan Garam Berlebih</strong><br> Kafein dan natrium dalam garam dapat meningkatkan ekskresi kalsium melalui urine.</li>
    </ul><br>

    <h2><strong>Risiko Kekurangan Kalsium</strong></h2>
    <ul>
        <li>💍 Osteopenia dan osteoporosis (patah tulang lebih mudah)</li>
        <li>💍 Kram otot, kesemutan, atau mati rasa</li>
        <li>💍 Detak jantung tidak teratur</li>
        <li>💍 Gangguan pertumbuhan pada anak dan remaja</li>
    </ul><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Asupan kalsium yang cukup sangat penting untuk menjaga kesehatan tulang, gigi, dan fungsi tubuh lainnya. Perempuan, terutama yang memasuki usia menopause atau sedang hamil dan menyusui, perlu memastikan kebutuhan kalsium harian tercukupi. Pola makan seimbang yang kaya kalsium dan vitamin D, ditambah gaya hidup sehat, akan membantu menjaga kualitas hidup dan mencegah penyakit tulang di kemudian hari.</p>
        `,
        date: '08-05-2025',
        image: '/images/blog-13.jpg'
    },
    {
        id: '14',
        title: 'Cara Menjaga Kesehatan Vagina secara Alami',
        content: `
    <p>Menjaga kesehatan vagina merupakan bagian penting dari kesehatan reproduksi perempuan secara keseluruhan. Vagina adalah organ yang memiliki kemampuan membersihkan dirinya sendiri, namun tetap membutuhkan perawatan yang tepat agar keseimbangan flora alami dan tingkat pH tetap terjaga. Perawatan yang salah justru bisa menyebabkan infeksi, iritasi, atau ketidakseimbangan mikroorganisme. Berikut panduan cara merawat kesehatan vagina secara alami tanpa bahan kimia berlebihan.</p><br>

    <h2><strong>1. Jaga Kebersihan dengan Air Bersih</strong></h2>
    <p>Mencuci area kewanitaan cukup dengan air bersih tanpa sabun berpewangi. Vagina memiliki keseimbangan bakteri baik (lactobacillus) yang menjaga keasaman dan mencegah pertumbuhan bakteri jahat. Penggunaan sabun wangi atau antiseptik berlebihan dapat mengganggu keseimbangan ini.</p><br>

    <h2><strong>2. Pilih Pakaian Dalam yang Tepat</strong></h2>
    <ul>
        <li><strong>🍓 Gunakan bahan katun</strong> — Katun menyerap keringat dan menjaga area tetap kering, sehingga mencegah pertumbuhan jamur.</li>
        <li><strong>🍓 Hindari celana dalam ketat</strong> — Celana dalam terlalu ketat meningkatkan kelembapan dan risiko iritasi.</li>
        <li><strong>🍓 Ganti pakaian dalam setiap hari</strong> — Terutama jika berkeringat atau setelah berolahraga.</li>
    </ul><br>

    <h2><strong>3. Konsumsi Makanan Bergizi</strong></h2>
    <ul>
        <li><strong>✨ Probiotik</strong> — Yogurt dan kefir mengandung lactobacillus yang baik untuk flora vagina.</li>
        <li><strong>✨ Vitamin C dan antioksidan</strong> — Buah-buahan seperti jeruk, stroberi, dan kiwi membantu memperkuat sistem imun dan mencegah infeksi.</li>
        <li><strong>✨ Cukupi cairan</strong> — Minum air putih minimal 2 liter per hari untuk menjaga hidrasi dan mendukung produksi cairan vagina yang sehat.</li>
    </ul><br>

    <h2><strong>4. Hindari Douching</strong></h2>
    <p>Douching atau membilas bagian dalam vagina dengan cairan tertentu tidak disarankan. Kebiasaan ini dapat merusak flora normal vagina dan meningkatkan risiko infeksi seperti bacterial vaginosis atau infeksi jamur.</p><br>

    <h2><strong>5. Bersihkan dengan Arah yang Benar</strong></h2>
    <p>Setelah buang air kecil atau besar, selalu bersihkan area kewanitaan dari arah depan ke belakang (vagina ke anus) untuk mencegah perpindahan bakteri dari anus ke vagina atau saluran kemih.</p><br>

    <h2><strong>6. Jaga Aktivitas Seksual yang Aman</strong></h2>
    <ul>
        <li><strong>💓 Gunakan kondom</strong> untuk mencegah infeksi menular seksual (IMS).</li>
        <li><strong>💓 Rutin melakukan pemeriksaan kesehatan reproduksi</strong>, seperti Pap Smear dan tes IMS jika aktif secara seksual.</li>
    </ul><br>

    <h2><strong>7. Jangan Tahan Buang Air Kecil</strong></h2>
    <p>Kebiasaan menahan kencing terlalu lama dapat meningkatkan risiko infeksi saluran kemih (ISK). Biasakan buang air kecil setelah berhubungan intim untuk membantu membuang bakteri yang mungkin masuk ke saluran kemih.</p><br>

    <h2><strong>8. Perhatikan Saat Menstruasi</strong></h2>
    <ul>
        <li>💅 Ganti pembalut atau tampon setiap 4–6 jam.</li>
        <li>💅 Pilih pembalut berbahan lembut dan tidak mengandung pewangi.</li>
        <li>💅 Jika menggunakan menstrual cup, sterilkan secara rutin sesuai petunjuk.</li>
    </ul><br>

    <h2><strong>9. Kelola Stres</strong></h2>
    <p>Stres berlebihan dapat memengaruhi keseimbangan hormon dan menurunkan daya tahan tubuh, yang berdampak pada kesehatan vagina. Lakukan aktivitas relaksasi seperti meditasi, yoga, atau olahraga teratur.</p><br>

    <h2><strong>10. Konsultasi dengan Dokter Jika Ada Keluhan</strong></h2>
    <p>Jika mengalami gejala seperti keputihan berwarna dan berbau tidak sedap, gatal, atau nyeri, segera konsultasikan ke dokter untuk pemeriksaan lebih lanjut. Jangan mencoba mengobati sendiri tanpa diagnosis yang tepat.</p><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Perawatan vagina yang sehat sebenarnya sederhana dan alami. Dengan menjaga kebersihan, memilih pakaian yang tepat, menerapkan pola makan bergizi, dan melakukan pemeriksaan rutin, perempuan dapat menjaga keseimbangan flora vagina dan mencegah berbagai masalah kesehatan. Ingat, vagina adalah organ yang mampu membersihkan dirinya sendiri — cukup dukung dengan gaya hidup sehat tanpa perlu intervensi berlebihan.</p>
        `,
        date: '08-05-2025',
        image: '/images/blog-14.jpg'
    },
    {
        id: '15',
        title: 'Manfaat Yoga untuk Kesehatan Hormonal Perempuan',
        content: `
    <p>Yoga bukan hanya untuk kebugaran fisik, tetapi juga memiliki banyak manfaat bagi kesehatan hormonal perempuan. Keseimbangan hormon memainkan peran penting dalam berbagai aspek kesehatan, seperti kesehatan reproduksi, suasana hati, dan metabolisme. Beberapa pose yoga dapat membantu meredakan gejala terkait ketidakseimbangan hormon, serta meningkatkan sirkulasi darah, mengurangi stres, dan memperbaiki kualitas tidur. Berikut adalah beberapa manfaat yoga yang dapat mendukung keseimbangan hormonal pada perempuan.</p><br>

    <h2><strong>1. Mengurangi Stres dan Meningkatkan Keseimbangan Hormon Stres 🧸</strong></h2>
    <p>Stres berlebihan dapat memengaruhi kadar hormon kortisol, yang dapat mengganggu keseimbangan hormon lainnya, seperti estrogen dan progesteron. Yoga dengan teknik pernapasan dan meditasi dapat membantu menenangkan sistem saraf, menurunkan kadar kortisol, dan membantu tubuh kembali ke kondisi seimbang. Posisi yoga seperti <em>Child's Pose</em> dan <em>Forward Bend</em> dapat meredakan ketegangan dan stres.</p><br>

    <h2><strong>2. Menstimulasi Fungsi Kelenjar Endokrin 🧸</strong></h2>
    <p>Kelenjar endokrin, seperti tiroid, pankreas, dan adrenal, berfungsi mengatur produksi hormon di tubuh. Beberapa pose yoga, seperti <em>Shoulder Stand</em> dan <em>Plow Pose</em>, dapat merangsang kelenjar tiroid dan meningkatkan metabolisme tubuh. Peningkatan fungsi kelenjar ini juga dapat memperbaiki kualitas tidur, memperbaiki mood, dan menstabilkan kadar gula darah.</p><br>

    <h2><strong>3. Menyeimbangkan Hormon Reproduksi 🧸</strong></h2>
    <p>Yoga dapat membantu menyeimbangkan hormon reproduksi pada perempuan, seperti estrogen dan progesteron. Beberapa pose, seperti <em>Bridge Pose</em> dan <em>Legs Up the Wall</em>, dapat membantu meredakan gejala PMS, seperti kram perut dan perubahan suasana hati. Selain itu, yoga juga dapat membantu mengatur siklus menstruasi, memperbaiki kesehatan ovarium, dan meningkatkan kesuburan.</p><br>

    <h2><strong>4. Meningkatkan Sirkulasi Darah ke Organ Reproduksi 🧸</strong></h2>
    <p>Posisi yoga terbalik, seperti <em>Headstand</em> dan <em>Downward Dog</em>, dapat meningkatkan aliran darah ke organ reproduksi, yang membantu meningkatkan keseimbangan hormon. Sirkulasi darah yang baik mendukung pembuangan racun dan meningkatkan fungsi organ reproduksi, seperti rahim dan ovarium. Hal ini dapat membantu mencegah masalah kesehatan reproduksi, seperti fibroid atau endometriosis.</p><br>

    <h2><strong>5. Menyelaraskan Hormon Tiroid 🧸</strong></h2>
    <p>Yoga dapat mendukung pengaturan hormon tiroid, yang berperan dalam pengaturan metabolisme tubuh. Pose yoga seperti <em>Fish Pose</em> atau <em>Neck Rolls</em> dapat membantu merangsang kelenjar tiroid, yang penting bagi metabolisme dan produksi energi tubuh. Menjaga tiroid tetap sehat juga berhubungan dengan pengaturan berat badan dan tingkat energi yang optimal.</p><br>

    <h2><strong>6. Meningkatkan Kesehatan Mental dan Emosional 🧸</strong></h2>
    <p>Yoga tidak hanya bermanfaat untuk fisik, tetapi juga kesehatan mental. Beberapa latihan yoga yang melibatkan meditasi dan pernapasan, seperti <em>Pranayama</em>, dapat membantu mengurangi kecemasan, depresi, dan perasaan cemas yang berhubungan dengan ketidakseimbangan hormon. Menjaga kesehatan mental penting untuk keseimbangan hormon, karena hormon stres yang tinggi dapat mengganggu produksi hormon lainnya.</p><br>

    <h2><strong>7. Meningkatkan Kualitas Tidur 🧸</strong></h2>
    <p>Yoga membantu menenangkan tubuh dan pikiran, yang sangat bermanfaat untuk tidur yang lebih nyenyak. Tidur yang cukup adalah faktor penting untuk menjaga keseimbangan hormon, terutama hormon yang terkait dengan metabolisme dan stres. Beberapa pose relaksasi, seperti <em>Savasana</em> dan <em>Corpse Pose</em>, dapat membantu tubuh dan pikiran untuk beristirahat sepenuhnya dan memulihkan diri secara alami.</p><br>

    <h2><strong>8. Membantu Mengurangi Gejala Menopause 🧸</strong></h2>
    <p>Yoga dapat membantu meredakan gejala menopause, seperti hot flashes, kecemasan, dan gangguan tidur. Beberapa pose seperti <em>Cat-Cow Pose</em> dan <em>Cobber Pose</em> dapat membantu menyeimbangkan hormon estrogen dan progesteron yang berfluktuasi selama menopause. Yoga juga dapat membantu menjaga fleksibilitas tubuh dan mengurangi rasa sakit yang sering terjadi pada perempuan yang memasuki usia menopause.</p><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Yoga dapat menjadi alat yang efektif untuk menjaga kesehatan hormonal perempuan dengan mengurangi stres, menyeimbangkan kadar hormon, meningkatkan sirkulasi darah, serta mendukung keseimbangan fisik dan mental. Dengan melibatkan yoga dalam rutinitas harian, perempuan dapat merasakan manfaat besar dalam hal kesehatan hormon, kesuburan, dan kualitas hidup secara keseluruhan. Mulailah dengan pose dasar dan secara bertahap tingkatkan latihan untuk merasakan manfaatnya dalam jangka panjang.</p>
        `,
        date: '08-05-2025',
        image: '/images/blog-15.jpg'
    },
    {
        id: '16',
        title: 'Nutrisi Penting untuk Kesehatan Kehamilan',
        content: `
    <p>Kehamilan adalah fase penting dalam kehidupan seorang perempuan yang membutuhkan perhatian khusus, terutama dalam hal asupan nutrisi. Nutrisi yang tepat tidak hanya berperan dalam menjaga kesehatan ibu, tetapi juga dalam mendukung pertumbuhan dan perkembangan janin. Kekurangan atau ketidakseimbangan nutrisi selama kehamilan dapat berdampak negatif pada kesehatan ibu maupun bayi, baik dalam jangka pendek maupun panjang. Berikut adalah beberapa nutrisi esensial yang perlu diperhatikan selama masa kehamilan.</p><br>

    <h2><strong>1. Asam Folat 🌿</strong></h2>
    <p>Asam folat (vitamin B9) sangat penting terutama pada trimester pertama kehamilan, bahkan dianjurkan sejak perencanaan kehamilan. Asam folat berperan dalam pembentukan tabung saraf bayi, yang nantinya berkembang menjadi otak dan sumsum tulang belakang. Kekurangan asam folat dapat meningkatkan risiko cacat tabung saraf, seperti spina bifida. Sumber asam folat antara lain sayuran berdaun hijau (bayam, brokoli), kacang-kacangan, jeruk, dan suplemen prenatal.</p><br>

    <h2><strong>2. Zat Besi 🌿</strong></h2>
    <p>Selama kehamilan, volume darah meningkat sekitar 50%, sehingga kebutuhan zat besi pun meningkat. Zat besi penting untuk pembentukan hemoglobin, yang mengangkut oksigen ke seluruh tubuh dan janin. Kekurangan zat besi dapat menyebabkan anemia, yang meningkatkan risiko kelahiran prematur dan berat badan lahir rendah. Sumber zat besi yang baik meliputi daging merah tanpa lemak, ayam, ikan, kacang-kacangan, dan sayuran hijau.</p><br>

    <h2><strong>3. Kalsium 🌿</strong></h2>
    <p>Kalsium penting untuk perkembangan tulang dan gigi bayi, serta menjaga kesehatan tulang ibu. Jika asupan kalsium ibu tidak mencukupi, tubuh akan mengambil cadangan kalsium dari tulang ibu untuk memenuhi kebutuhan janin, yang dapat meningkatkan risiko osteoporosis di kemudian hari. Sumber kalsium yang baik termasuk susu dan produk olahannya (yogurt, keju), tahu, tempe, kacang almond, dan sayuran berdaun hijau.</p><br>

    <h2><strong>4. DHA (Asam Lemak Omega-3) 🌿</strong></h2>
    <p>Docosahexaenoic Acid (DHA) adalah asam lemak omega-3 yang berperan penting dalam perkembangan otak dan mata janin. Asupan DHA yang cukup selama kehamilan dapat meningkatkan perkembangan kognitif dan penglihatan bayi. Sumber DHA antara lain ikan berlemak seperti salmon, sarden, dan tuna, serta suplemen minyak ikan yang aman untuk ibu hamil.</p><br>

    <h2><strong>5. Protein 🌿</strong></h2>
    <p>Protein adalah komponen penting dalam pembentukan jaringan tubuh bayi, termasuk otot, kulit, dan organ. Protein juga berperan dalam produksi hormon dan enzim. Ibu hamil membutuhkan asupan protein yang cukup setiap harinya. Sumber protein yang baik antara lain daging tanpa lemak, ayam, telur, produk susu, kacang-kacangan, dan tahu-tempe.</p><br>

    <h2><strong>6. Vitamin D 🌿</strong></h2>
    <p>Vitamin D membantu penyerapan kalsium dan fosfor, yang penting untuk perkembangan tulang bayi. Selain itu, vitamin D juga berperan dalam sistem kekebalan tubuh ibu dan janin. Kekurangan vitamin D dapat meningkatkan risiko preeklamsia, diabetes gestasional, dan berat badan lahir rendah. Vitamin D bisa diperoleh dari paparan sinar matahari, ikan berlemak, telur, dan suplemen bila diperlukan.</p><br>

    <h2><strong>7. Serat 🌿</strong></h2>
    <p>Masalah pencernaan, seperti sembelit, umum terjadi selama kehamilan karena perubahan hormon dan tekanan dari rahim yang membesar. Serat membantu menjaga kesehatan pencernaan dan mencegah sembelit. Sumber serat yang baik meliputi buah-buahan, sayuran, kacang-kacangan, dan biji-bijian utuh.</p><br>

    <h2><strong>8. Zinc 🌿</strong></h2>
    <p>Zinc atau seng berperan dalam pembelahan sel, pertumbuhan jaringan, dan sistem kekebalan tubuh. Kekurangan zinc dapat memengaruhi perkembangan janin dan meningkatkan risiko komplikasi kehamilan. Sumber zinc meliputi daging merah, seafood (seperti tiram), kacang-kacangan, dan biji-bijian.</p><br>

    <h2><strong>9. Iodium 🌿</strong></h2>
    <p>Iodium diperlukan untuk produksi hormon tiroid yang penting bagi perkembangan otak dan sistem saraf janin. Kekurangan iodium selama kehamilan dapat menyebabkan gangguan perkembangan kognitif dan mental pada bayi. Sumber iodium antara lain garam beryodium, produk laut, dan produk susu.</p><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Memenuhi kebutuhan nutrisi selama kehamilan sangat penting untuk mendukung kesehatan ibu dan perkembangan optimal janin. Ibu hamil disarankan untuk mengonsumsi makanan bergizi seimbang yang mencakup berbagai nutrisi esensial. Konsultasi dengan tenaga kesehatan atau ahli gizi sangat dianjurkan untuk memastikan kebutuhan nutrisi terpenuhi dengan baik. Dengan asupan nutrisi yang tepat, kehamilan yang sehat dan persalinan yang aman dapat tercapai.</p>
        `,
        date: '08-05-2025',
        image: '/images/blog-16.jpg'
    },
    {
        id: '17',
        title: 'Memahami Pilihan Metode KB yang Tepat untuk Perempuan',
        content: `
    <p>Perencanaan keluarga merupakan bagian penting dalam menjaga kesehatan reproduksi perempuan sekaligus mendukung kesejahteraan keluarga. Salah satu caranya adalah dengan memilih metode kontrasepsi (KB) yang sesuai dengan kebutuhan dan kondisi masing-masing individu. Dengan berbagai pilihan yang tersedia, penting bagi perempuan untuk memahami manfaat, risiko, serta cara kerja masing-masing metode agar dapat mengambil keputusan yang tepat dan bijak. Artikel ini akan membahas berbagai jenis metode KB dan pertimbangannya.</p><br>

    <h2><strong>1. Kontrasepsi Hormonal</strong></h2>
    <p>Kontrasepsi hormonal bekerja dengan cara mengubah kadar hormon dalam tubuh untuk mencegah ovulasi (pelepasan sel telur) atau mengubah kondisi lendir serviks dan lapisan rahim agar tidak mendukung kehamilan. Jenisnya meliputi:</p>
    <ul>
        <li><strong>🧸 Pil KB:</strong> Pil kombinasi (estrogen dan progestin) atau pil progestin saja. Harus diminum setiap hari pada waktu yang sama.</li>
        <li><strong>🧸 Suntik KB:</strong> Biasanya diberikan setiap 1 atau 3 bulan sekali. Praktis bagi yang sulit mengingat minum pil.</li>
        <li><strong>🧸 Implan KB:</strong> Batang kecil yang ditanam di bawah kulit lengan dan dapat bekerja hingga 3–5 tahun.</li>
        <li><strong>🧸 Patch (plester KB):</strong> Ditempel di kulit dan diganti setiap minggu.</li>
        <li><strong>🧸 Cincin vagina:</strong> Dipasang di dalam vagina selama 3 minggu dan dilepas selama 1 minggu.</li>
    </ul><br>

    <h2><strong>2. Kontrasepsi Non-Hormonal</strong></h2>
    <p>Bagi perempuan yang tidak cocok dengan hormon atau memiliki kondisi medis tertentu, kontrasepsi non-hormonal bisa menjadi alternatif:</p>
    <ul>
        <li><strong>🌼 IUD (Intrauterine Device) Tembaga:</strong> Alat kecil berbentuk T yang dimasukkan ke dalam rahim dan bisa mencegah kehamilan hingga 10 tahun. Tidak mengandung hormon.</li>
        <li><strong>🌼 Kondom:</strong> Selain mencegah kehamilan, juga melindungi dari infeksi menular seksual (IMS). Tersedia kondom pria dan kondom wanita.</li>
        <li><strong>🌼 Metode pengamatan kesuburan:</strong> Mengamati siklus menstruasi, suhu basal tubuh, dan lendir serviks untuk menghindari masa subur.</li>
        <li><strong>🌼 Spermisida:</strong> Zat kimia yang membunuh sperma. Biasanya digunakan bersama kondom atau diafragma.</li>
    </ul><br>

    <h2><strong>3. Metode Permanen (Sterilisasi)</strong></h2>
    <p>Bagi perempuan atau pasangan yang sudah yakin tidak ingin memiliki anak lagi, metode permanen bisa menjadi pilihan:</p>
    <ul>
        <li><strong>💓 Tubektomi (Sterilisasi perempuan):</strong> Memotong atau mengikat saluran tuba agar sel telur tidak bertemu sperma. Prosedur permanen yang biasanya tidak bisa dibalikkan.</li>
        <li><strong>💓 Vasektomi (Sterilisasi pria):</strong> Memotong atau mengikat saluran sperma pada pria. Prosedur ini lebih sederhana dan risiko komplikasinya lebih rendah dibanding tubektomi.</li>
    </ul><br>

    <h2><strong>4. Faktor yang Perlu Dipertimbangkan</strong></h2>
    <p>Memilih metode KB tidak hanya soal efektivitas, tetapi juga kenyamanan dan kesehatan. Berikut beberapa hal yang perlu dipertimbangkan:</p>
    <ul>
        <li><strong>🍒 Kesehatan:</strong> Riwayat penyakit seperti hipertensi, diabetes, migrain, atau gangguan pembekuan darah bisa memengaruhi pilihan metode.</li>
        <li><strong>🍒 Efek samping:</strong> Seperti perubahan siklus haid, perubahan berat badan, atau mood swing.</li>
        <li><strong>🍒 Kenyamanan dan kemudahan penggunaan:</strong> Apakah nyaman digunakan harian, bulanan, atau jangka panjang.</li>
        <li><strong>🍒 Perlindungan dari IMS:</strong> Hanya kondom yang dapat mencegah infeksi menular seksual.</li>
        <li><strong>🍒 Rencana kehamilan di masa depan:</strong> Apakah ingin menunda sementara atau tidak ingin hamil sama sekali.</li>
    </ul><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Setiap perempuan memiliki kebutuhan, preferensi, dan kondisi kesehatan yang unik dalam memilih metode kontrasepsi. Oleh karena itu, konsultasi dengan tenaga kesehatan sangat dianjurkan agar mendapatkan informasi yang tepat dan pilihan yang sesuai. Dengan pemahaman yang baik tentang berbagai pilihan KB, perempuan dapat merencanakan kehamilan dengan lebih sadar dan bertanggung jawab demi kesehatan diri sendiri dan keluarga.</p>
        `,
        date: '09-05-2025',
        image: '/images/blog-17.jpg'
    },
    {
        id: '18',
        title: 'Peran Vitamin D dalam Kesehatan Tulang dan Kesuburan Perempuan',
        content: `
    <p>Vitamin D adalah vitamin larut lemak yang berperan penting dalam penyerapan kalsium dan fosfor, dua mineral utama untuk kesehatan tulang. Selain itu, vitamin D juga berfungsi dalam regulasi sistem kekebalan dan keseimbangan hormon, yang berpengaruh pada kesuburan perempuan.</p><br>

    <h2><strong>Manfaat Vitamin D untuk Tulang</strong></h2>
    <ul>
        <li><strong>🌞 Memperkuat Tulang</strong> <br> Vitamin D membantu tubuh menyerap kalsium secara maksimal, mencegah tulang rapuh dan osteoporosis, terutama pada perempuan pasca menopause.</li>
        <li><strong>🌞 Mencegah Osteomalasia</strong> <br> Kekurangan vitamin D dapat menyebabkan osteomalasia (pelunakan tulang) yang menyebabkan nyeri dan kelemahan otot.</li>
    </ul><br>

    <h2><strong>Peran Vitamin D dalam Kesuburan Perempuan</strong></h2>
    <ul>
        <li><strong>💛 Mendukung Kesehatan Ovarium</strong> <br> Vitamin D berperan dalam pematangan folikel dan ovulasi. Penelitian menunjukkan kadar vitamin D yang optimal berhubungan dengan peluang kehamilan yang lebih baik.</li>
        <li><strong>💛 Menyeimbangkan Hormon</strong> <br> Vitamin D memengaruhi produksi hormon estrogen dan progesteron yang penting untuk siklus menstruasi yang teratur.</li>
        <li><strong>💛 Mengurangi Risiko PCOS</strong> <br> Vitamin D dapat membantu mengurangi resistensi insulin dan peradangan yang terkait dengan sindrom ovarium polikistik (PCOS).</li>
    </ul><br>

    <h2><strong>Sumber Vitamin D</strong></h2>
    <ul>
        <li><strong>🌿 Paparan Sinar Matahari</strong> <br> Berjemur selama 10–15 menit pada pagi atau sore hari dapat membantu produksi vitamin D secara alami.</li>
        <li><strong>🌿 Makanan Kaya Vitamin D</strong> <br> Ikan berlemak (salmon, tuna), kuning telur, hati sapi, dan produk fortifikasi (susu, sereal) adalah sumber yang baik.</li>
        <li><strong>🌿 Suplemen Vitamin D</strong> <br> Suplemen bisa menjadi pilihan jika asupan dari makanan dan sinar matahari tidak mencukupi, tentunya dengan konsultasi dokter.</li>
    </ul><br>

    <h2><strong>💡 Tips Menjaga Kadar Vitamin D Optimal</strong></h2>
    <ol>
        <li>🌼 Rutin berjemur di pagi/sore hari selama 10–15 menit.</li>
        <li>🌼 Konsumsi makanan kaya vitamin D minimal 2–3 kali per minggu.</li>
        <li>🌼 Periksa kadar vitamin D secara berkala, terutama bagi perempuan yang sedang merencanakan kehamilan atau sudah memasuki usia menopause.</li>
    </ol><br>

    <blockquote>"Vitamin D tidak hanya baik untuk tulang, tetapi juga kunci dalam menjaga kesehatan reproduksi perempuan." — WHO</blockquote><br>

    <h2><strong>💌 Kesimpulan</strong></h2>
    <p>Vitamin D memainkan peran ganda dalam menjaga kesehatan tulang yang kuat dan mendukung kesuburan perempuan. Pastikan asupan vitamin D tercukupi melalui paparan sinar matahari, makanan bergizi, atau suplemen bila diperlukan. Jangan ragu untuk konsultasi dengan tenaga medis untuk menjaga keseimbangan nutrisi yang optimal.</p>
        `,
        date: '09-05-2025',
        image: '/images/blog-18.jpg'
    },
    {
        id: '19',
        title: 'Efek Samping Kontrasepsi: Apa yang Normal dan Apa yang Harus Diwaspadai?',
        content: `
    
        `,
        date: '09-05-2025',
        image: '/images/blog-19.jpg'
    },
    {
        id: '20',
        title: 'Manfaat Konsumsi Probiotik bagi Kesehatan Pencernaan dan Vagina',
        content: `
    
        `,
        date: '09-05-2025',
        image: '/images/blog-20.jpg'
    },
    {
        id: '21',
        title: 'Mengapa Konseling Sebelum Memilih KB Itu Penting?',
        content: `
    
        `,
        date: '09-05-2025',
        image: '/images/blog-21.jpg'
    },
    {
        id: '22',
        title: 'Mengenal Fibroid Rahim: Gejala dan Pengobatannya',
        content: `
    
        `,
        date: '09-05-2025',
        image: '/images/blog-22.jpg'
    },
    {
        id: '23',
        title: 'KB Pasca Melahirkan: Pilihan Aman untuk Ibu Menyusui',
        content: `
    
        `,
        date: '09-05-2025',
        image: '/images/blog-23.jpg'
    },
    {
        id: '24',
        title: 'Kesehatan Panggul dan Pencegahan Prolaps Organ Reproduksi',
        content: `
    
        `,
        date: '09-05-2025',
        image: '/images/blog-24.jpg'
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