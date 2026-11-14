/* =====================================================================
   DATA PAMERAN — satu-satunya file yang perlu kamu isi.
   ---------------------------------------------------------------------
   • Tambah satu objek di KELOMPOK untuk setiap kelompok yang sudah
     mengumpulkan. Kelompok yang belum ada otomatis tampil sebagai
     "belum diunggah" (berdasarkan SITE.jumlahKelompok).
   • Bisa juga dibuat otomatis dari CSV lewat admin/konverter.html.
   • Path file relatif terhadap index.html, contoh:
       paper:  "papers/kelompok-07.pdf"
       foto:   "dokumentasi/kelompok-07/1.jpg"
     Link Google Drive juga bisa dipakai langsung (file harus
     dibagikan "Siapa saja yang memiliki link").
   ===================================================================== */

window.SITE = {
  judul: "Crown of Iron",
  subjudul: "The Oath of Camelot",
  penyelenggara: "FORTRAN 2026",
  eyebrow: "Pameran Daring Tugas Besar · Kaderisasi FORTRAN 2026",
  institusi: "Kaderisasi FORTRAN 2026 · S1 Informatika, Telkom University",
  deskripsi:
    "Ruang pamer hasil tugas besar seluruh kelompok peserta kaderisasi FORTRAN 2026. " +
    "Setiap kelompok mengangkat satu bidang kajian, menuliskannya dalam mini paper, " +
    "dan mendokumentasikan proses kerjanya. Pilih kursi di meja bundar atau telusuri arsip untuk membacanya.",
  tentang: [
    "Tugas besar kaderisasi FORTRAN 2026 semula akan ditampilkan dalam pameran terbuka. Bentuknya kemudian diganti menjadi website ini supaya karya seluruh kelompok bisa dibaca kapan saja dan oleh siapa saja.",
    "Setiap kelompok mengumpulkan mini paper 4–6 halaman beserta dokumentasi pengerjaan. Kelompok yang membangun produk, misalnya web, dashboard, user manual, atau prototipe fisik, juga menyertakan tautan ke luarannya.",
    "Halaman ini hanya menampilkan karya; tidak ada pengumpulan atau penilaian di sini."
  ],
  jumlahKelompok: 29,
  kredit: "Disusun oleh PJ Kelompok Tubes FORTRAN 2026 untuk Divisi Evaluasi.",
  // Ubah ke true hanya untuk pratinjau dengan data fiktif.
  modeContoh: false
};

/* Bidang kajian. "warna" dipakai untuk panji, kursi meja bundar, dan label.
   Bidang yang belum dipakai kelompok mana pun otomatis disembunyikan. */
window.BIDANG = {
  SEAL: {
    nama: "SEAL",
    rumpun: "Kelompok Keahlian",
    panji: "Azure",
    warna: "#5b84c4",
    deskripsi: "Proyek perangkat lunak yang dituangkan dalam mini paper atau user manual, misalnya panduan pemakaian aplikasi yang dibangun kelompok."
  },
  DSIS: {
    nama: "DSIS",
    rumpun: "Kelompok Keahlian",
    panji: "Vert",
    warna: "#3f9a7a",
    deskripsi: "Proyek berbasis data, disajikan sebagai mini paper atau visualisasi data seperti dashboard interaktif."
  },
  CITI: {
    nama: "CITI",
    rumpun: "Kelompok Keahlian",
    panji: "Gules",
    warna: "#c45a4c",
    deskripsi: "Karya berwujud fisik: prototipe atau produk akhir, didukung mini paper yang menjelaskan rancangan dan cara kerjanya."
  },
  ORMAWA: {
    nama: "Ormawa",
    rumpun: "Organisasi",
    panji: "Purpure",
    warna: "#9b6cb4",
    deskripsi: "Rancangan UKM baru, berangkat dari analisis akar masalah yang ingin dijawab oleh organisasi tersebut."
  },
  TEKNOLOGI: {
    nama: "Eksplorasi Teknologi",
    singkat: "Eks. Teknologi",
    rumpun: "Eksplorasi",
    panji: "Argent",
    warna: "#b7c0c9",
    deskripsi: "Mini paper tentang sudut pandang kelompok terhadap teknologi masa kini, atau analisis arah teknologi di masa depan."
  }
};

/* ---------------------------------------------------------------------
   KELOMPOK — satu objek per kelompok (1 sampai SITE.jumlahKelompok).
   Kelompok yang judulnya masih kosong tampil sebagai "belum diunggah".
   Kolom:
     no          : nomor kelompok                                 [wajib]
     bidang      : SEAL | DSIS | CITI | ORMAWA | TEKNOLOGI | ""   (kosong = belum ditentukan)
     judul       : judul mini paper
     abstrak     : 1 paragraf ringkasan
     kataKunci   : ["kata", "kunci"]
     anggota     : [{ nama: "...", nim: "..." }]   (nim boleh kosong)
     paper       : path PDF atau link Google Drive
     luaran      : [{ label: "Dashboard", url: "https://..." }]
     dokumentasi : [{ src: "dokumentasi/kelompok-07/1.jpg", caption: "..." }]
   --------------------------------------------------------------------- */
window.KELOMPOK = [
  {
    no: 1,
    bidang: "SEAL",
    judul: "Perancangan Sistem Antrean Otomatis Berbasis Virtual Waiting Room dengan Mekanisme First-In, First-Out (FIFO) dan Caching pada Portal Akademik saat Pengisian Kartu Rencana Studi (KRS) Mahasiswa",
    abstrak:
      "Periode pengisian Kartu Rencana Studi (KRS) pada portal akademik kerap memicu lonjakan akses secara bersamaan akibat batasan waktu registrasi dan persaingan kuota kelas. " +
      "Tanpa mekanisme pengendalian trafik, seluruh permintaan masuk secara serentak ke server dan diperparah oleh fenomena retry storm (percobaan muat ulang berulang oleh pengguna saat akses gagal), yang mengakibatkan penurunan performa hingga kegagalan layanan. " +
      "Makalah ini mengusulkan rancangan konseptual sistem antrean otomatis berbasis Virtual Waiting Room sebagai lapisan gerbang (gatekeeper) sebelum permintaan mencapai server utama. " +
      "Dalam arsitektur yang diusulkan, pengguna yang mengakses sistem melebihi ambang batas kapasitas aman akan diberikan nomor antrean berbasis First-In, First-Out (FIFO) dan diteruskan secara bertahap, didukung oleh mekanisme caching untuk mengurangi beban baca berulang pada data jadwal kelas. " +
      "Evaluasi konseptual melalui pemodelan alur proses dan analisis komparatif menunjukkan bahwa arsitektur ini berpotensi menjaga stabilitas ketersediaan layanan serta memberikan kepastian giliran akses bagi mahasiswa selama periode puncak pengisian KRS.",
    kataKunci: ["sistem antrean", "Virtual Waiting Room", "First-In, First-Out (FIFO)", "caching", "Kartu Rencana Studi"],
    anggota: [
      { nama: "Muhammad Akmal Mursalim", nim: "" },
      { nama: "Muhammad Alifiansyah Wibisono", nim: "" },
      { nama: "Muhammad Ikhsan", nim: "" },
      { nama: "Faizah Ghantari Marasabessy", nim: "" },
      { nama: "Allysa Mutiara", nim: "" },
      { nama: "Rizik Dwiko Priyanto", nim: "" },
      { nama: "I Nyoman Pradnya Wicaksana", nim: "" },
      { nama: "Ahmad Aldiansyah", nim: "" },
      { nama: "Alvin Chandra Tanuwijaya", nim: "" },
      { nama: "Alfito Maulana", nim: "" },
      { nama: "I Dewa Gede Bagas Danendra", nim: "" }
    ],
    paper: "papers/kelompok-01.pdf",
    luaran: [
      { label: "Situs presentasi", url: "https://pendragon-eta.vercel.app/" },
      { label: "Dokumentasi kegiatan (Google Drive)", url: "https://drive.google.com/drive/folders/1fho2Zq9NjzRB1T-6GorBkbpJGhvXhCJz" }
    ],
    dokumentasi: []
  },
  {
    no: 2,
    bidang: "SEAL",
    judul: "Orgo: Ruang Kerja Organisasi Mahasiswa untuk Mengelola Event, Kepanitiaan, Tugas, Dokumen, dan Keuangan",
    abstrak:
      "Orgo adalah aplikasi web yang membantu organisasi mahasiswa menyiapkan dan menjalankan kepanitiaan event dalam satu ruang kerja. " +
      "Pengurus dan panitia bekerja pada data yang sama, mulai dari periode kepengurusan, event, divisi, tugas, dokumen, sampai keuangan, sehingga informasi tidak lagi tersebar di banyak grup chat dan berkas terpisah. " +
      "Fitur utamanya meliputi dasbor dengan hitung mundur hari-H dan progres tugas, pembuatan event dari template, pengaturan divisi dan penempatan anggota, papan Kanban dengan durasi otomatis, " +
      "repositori dokumen beserta alur pengajuan dan notulen yang dapat diubah menjadi tugas, serta keuangan yang mencakup RAB, arus kas berbukti, dan realisasi terhadap RAB. " +
      "Hak akses diatur per peran (Admin, Ketua/BPH, Sekretaris, Bendahara, Kepala divisi, dan Anggota panitia), dan prototipe ini menyediakan akun demo untuk mencoba setiap peran.",
    kataKunci: ["manajemen organisasi", "kepanitiaan", "kanban", "RAB", "hak akses berbasis peran", "aplikasi web"],
    anggota: [
      { nama: "Ahmad Radhin Praditya", nim: "" },
      { nama: "Alfandi Hassan", nim: "" },
      { nama: "Arbani Ihsan", nim: "" },
      { nama: "Athala Nabih Salman", nim: "" },
      { nama: "Aulya Zhalzhabilah", nim: "" },
      { nama: "Cayseya Galeno Bilal Pratama", nim: "" },
      { nama: "Diego Fortuna", nim: "" },
      { nama: "Dylan Setyawan Ekapraja", nim: "" },
      { nama: "Muhammad Al Farel", nim: "" },
      { nama: "Muhammad Andhika Bagaskoro", nim: "" }
    ],
    paper: "papers/kelompok-02.pdf",
    luaran: [
      { label: "Aplikasi Orgo", url: "https://tubesfortrankelompok2.pages.dev/" }
    ],
    dokumentasi: []
  },
  {
    no: 3, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Fauzan Nur Abdillah", nim: "" },
      { nama: "Zahid Alfathin", nim: "" },
      { nama: "Yazid Alghiffari", nim: "" },
      { nama: "Shultan Alief Prasasti", nim: "" },
      { nama: "Diandra Rafi Ramadhan", nim: "" },
      { nama: "Nala Royyan Adi Sulistyo", nim: "" },
      { nama: "Dimas Muhamad Faiz", nim: "" },
      { nama: "Rainda Akmal Ghazali Kamsin", nim: "" },
      { nama: "Tengku Kanaya Naiyira", nim: "" },
      { nama: "Muhammad Corey Toraakhzai", nim: "" },
      { nama: "Fahrel Nurzazidhan", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 4, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Agung Kaleb Sasauw", nim: "" },
      { nama: "Muhamad Habibi Nur Rahman", nim: "" },
      { nama: "Mahesa Arga Wibisono", nim: "" },
      { nama: "M. Ilhan Khafidhah", nim: "" },
      { nama: "Muhammad Zuhdi Ulwan", nim: "" },
      { nama: "Aisha Haya Az-Zahra Khoirunnisa", nim: "" },
      { nama: "Endra", nim: "" },
      { nama: "R Bhumi Niscala Nirwasita", nim: "" },
      { nama: "Khalid Ahmad Naufal Iswahyudi", nim: "" },
      { nama: "Visky Muji Ramadhan", nim: "" },
      { nama: "Aditya Putra Permana", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 5,
    bidang: "DSIS",
    judul: "Analisis Penerapan Kecerdasan Buatan dalam Personalisasi Sistem Rekomendasi Produk E-commerce",
    abstrak:
      "Kecerdasan buatan banyak dimanfaatkan platform e-commerce melalui sistem rekomendasi produk yang membantu pengguna menemukan produk sesuai minat dan preferensi belanjanya. " +
      "Namun, sistem rekomendasi masih kesulitan mengenali kebutuhan pengguna baru yang belum memiliki riwayat interaksi atau pembelian yang cukup (cold-start problem), sehingga rekomendasinya kurang sesuai. " +
      "Penulisan ini menggunakan metode tinjauan literatur terhadap enam artikel ilmiah tentang penerapan kecerdasan buatan dan sistem rekomendasi pada e-commerce. " +
      "Berdasarkan kajian tersebut, diusulkan konsep personalisasi adaptif yang memanfaatkan pilihan awal pengguna berupa kategori dan rentang harga produk, lalu menyesuaikan rekomendasi secara bertahap melalui umpan balik dan interaksi pengguna. " +
      "Hasil kajian menunjukkan bahwa keterbatasan informasi pengguna baru menjadi salah satu tantangan dalam personalisasi rekomendasi, dan efektivitas konsep yang diusulkan masih memerlukan pengujian lebih lanjut.",
    kataKunci: ["kecerdasan buatan", "e-commerce", "sistem rekomendasi", "personalisasi adaptif", "pengguna baru"],
    anggota: [
      { nama: "Thania Evelina Munte", nim: "" },
      { nama: "Rethiesalya Eliyanta Putri", nim: "" },
      { nama: "Dwi Hania Irfani", nim: "" },
      { nama: "Melvin Ivander", nim: "" },
      { nama: "Fanujiya Kidna Khasal", nim: "" },
      { nama: "Qhikiza Alicia", nim: "" },
      { nama: "Muhammad Raihan Nurtoha", nim: "" }
    ],
    paper: "papers/kelompok-05.pdf",
    luaran: [],
    dokumentasi: []
  },
  {
    no: 6, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Muhammad Panji Adirangga", nim: "" },
      { nama: "Grasfi Imanuela Cahyaningtyas", nim: "" },
      { nama: "Azka Muhammad Aqila", nim: "" },
      { nama: "Muhammad Zein", nim: "" },
      { nama: "Hanif Bajri", nim: "" },
      { nama: "Deni Kurniawan", nim: "" },
      { nama: "Muh. Syah Devan Al Ghifari", nim: "" },
      { nama: "M. Fajar Ramadhan", nim: "" },
      { nama: "Muhammad Sulthon Alkhayyis", nim: "" },
      { nama: "Vania", nim: "" },
      { nama: "Javier Rayhan Aqila", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 7,
    bidang: "DSIS",
    judul: "Aplikasi Web Deteksi Berita Hoaks Berbahasa Indonesia Menggunakan IndoBERT",
    abstrak:
      "Penyebaran berita hoaks di Indonesia membutuhkan alat bantu yang dapat mengenali berita terindikasi hoaks secara cepat. " +
      "Penelitian ini membangun aplikasi web deteksi berita hoaks berbahasa Indonesia yang menerima teks berita dan menghasilkan label hoaks atau valid beserta skor keyakinan. " +
      "Banyak penelitian sebelumnya melaporkan akurasi di atas 90%, tetapi umumnya hanya diuji pada data dari sumber yang sama dengan data latih. " +
      "Model IndoBERT di-fine-tune dan dibandingkan dengan TF-IDF dan SVM menggunakan dataset berita politik yang dilabeli ulang dan dibersihkan dari penanda sumber, lalu diuji pada 600 berita dari dataset lain dan diadaptasi dengan sebagian data tersebut. " +
      "IndoBERT memperoleh F1-macro 0,977, lebih tinggi daripada SVM (0,944), tetapi pada berita dari sumber berbeda kedua model hanya mencapai ROC-AUC sekitar 0,60, dan adaptasi dengan 480 berita menaikkannya menjadi 0,75–0,76. " +
      "Aplikasi dibangun dengan Gradio di Hugging Face Spaces dan lulus seluruh skenario uji fungsional. Hasil ini menunjukkan bahwa keragaman data latih lebih menentukan kemampuan model daripada pilihan modelnya.",
    kataKunci: ["berita hoaks", "IndoBERT", "TF-IDF", "SVM", "klasifikasi teks", "aplikasi web"],
    anggota: [
      { nama: "Grace Martina Caroline Aritonang", nim: "" },
      { nama: "Kora Lalita", nim: "" },
      { nama: "Khaylila Ahzaria Putri Surindra", nim: "" },
      { nama: "Muhammad Naufal", nim: "" },
      { nama: "Azman Fathary Baswara", nim: "" },
      { nama: "Riespati Khairunnisa", nim: "" },
      { nama: "Andreanus Sondika Butar Butar", nim: "" },
      { nama: "Mahsa Muhammad Zahran", nim: "" },
      { nama: "Nesshya Azzahra", nim: "" },
      { nama: "Rafiif Alfatih Nusantara", nim: "" },
      { nama: "Ferry Zaky Anwar Zain", nim: "" },
      { nama: "Dimas Panji Ananda Marfa'i", nim: "" }
    ],
    paper: "papers/kelompok-07.pdf",
    luaran: [
      { label: "Aplikasi deteksi hoaks", url: "https://huggingface.co/spaces/bopobop/deteksi-hoaks" }
    ],
    dokumentasi: []
  },
  {
    no: 8,
    bidang: "TEKNOLOGI",
    judul: "Analisis Keterbatasan Aplikasi PKKMB dan Eksplorasi Teknologi Web Interaktif \"Campus Xplore\" sebagai Solusi Navigasi Berkelanjutan",
    abstrak:
      "Dokumen ini menyajikan analisis terhadap teknologi navigasi kampus saat ini dan mengeksplorasi purwarupa web antarmuka \"Campus Xplore\" sebagai inovasi masa depan. " +
      "Sistem ini menerima masukan berupa interaksi klik pengguna pada elemen peta dan menghasilkan keluaran visual berupa detail informasi fasilitas kampus. " +
      "Dari sudut pandang teknologi modern, aksesibilitas informasi harus bersifat inklusif dan berkelanjutan. " +
      "Kesenjangan yang terjadi saat ini adalah sistem pemetaan kampus masih menggunakan aplikasi seluler khusus orientasi mahasiswa baru yang aksesnya ditutup setelah masa orientasi berakhir, membutuhkan proses instalasi, dan memiliki informasi gedung yang tidak komprehensif. " +
      "Eksplorasi yang dilakukan berfokus pada pergeseran paradigma menuju antarmuka pemetaan digital berbasis web. " +
      "Pengembangan purwarupa dilakukan pada sisi klien dengan memanfaatkan teknologi HTML, CSS, dan JavaScript untuk menerjemahkan titik koordinat lokasi menjadi jendela informasi responsif tanpa memerlukan komputasi basis data eksternal. " +
      "Hasil eksperimen menunjukkan bahwa antarmuka web interaktif memberikan akses informasi yang jauh lebih cepat dan persisten dibandingkan aplikasi konvensional. " +
      "Eksplorasi teknologi ini membuktikan bahwa masa depan navigasi publik terletak pada sistem berbasis peramban web yang tidak bergantung pada masa orientasi dan instalasi pihak ketiga.",
    kataKunci: ["analisis teknologi", "aplikasi PKKMB", "Campus Xplore", "navigasi persisten", "purwarupa web"],
    anggota: [
      { nama: "Marami Nailuridho", nim: "" },
      { nama: "Mufidah Afifah", nim: "" },
      { nama: "Muhammad Daniel Amsyar", nim: "" },
      { nama: "Abidzar Alghifari", nim: "" },
      { nama: "Satria Abdillah Mohamad", nim: "" },
      { nama: "Madtrope'i Putra Andoki", nim: "" },
      { nama: "Divanca Jadzia Hasan", nim: "" },
      { nama: "Raphael Kendra Aryasatya", nim: "" },
      { nama: "Imanuel Denile Berfy Felix Bombang", nim: "" },
      { nama: "Nafidhiya Alistiani", nim: "" },
      { nama: "Fadhlan Akbar Shobari", nim: "" },
      { nama: "Miracle Ezekiel Rahakbauw", nim: "" }
    ],
    paper: "papers/kelompok-08.pdf",
    luaran: [
      { label: "Dokumentasi kegiatan (Google Drive)", url: "https://drive.google.com/drive/folders/1_x-XNncd2QYKGZMU739qo-RtbYtZymDZ?usp=sharing" }
    ],
    dokumentasi: []
  },
  {
    no: 9,
    bidang: "DSIS",
    judul: "Implementasi Algoritma Decision Tree untuk Prediksi Kelulusan Tepat Waktu Mahasiswa",
    abstrak:
      "Ketepatan waktu kelulusan mahasiswa merupakan salah satu indikator penting dalam mengevaluasi kualitas institusi pendidikan tinggi. " +
      "Permasalahan yang sering terjadi adalah keterlambatan kelulusan akibat kurang terdeteksinya performa akademik mahasiswa sejak dini. " +
      "Dengan mengetahui potensi keterlambatan lebih awal, pihak program studi dapat memberikan intervensi atau bimbingan akademik yang tepat. " +
      "Solusi yang diusulkan adalah sistem klasifikasi menggunakan algoritma Decision Tree berbasis data akademik mahasiswa (IPK, kehadiran, SKS, dan partisipasi organisasi) untuk memprediksi status kelulusan. " +
      "Hasil pengujian menunjukkan model mampu mengklasifikasikan status kelulusan dengan akurasi 100% pada data uji, sehingga berpotensi digunakan sebagai pendukung keputusan akademik di lingkungan program studi.",
    kataKunci: ["decision tree", "prediksi kelulusan", "klasifikasi", "data mining", "sistem pendukung keputusan"],
    anggota: [
      { nama: "Charles Nathan Marcelino Tambunan", nim: "" },
      { nama: "Fahmi Aufa", nim: "" },
      { nama: "Farrel Adi Irfani", nim: "" },
      { nama: "Fayza Khalisha Rahma", nim: "" },
      { nama: "I Putu Axel Tristan Wirya Atmaja", nim: "" },
      { nama: "Julian Ferdiyanto", nim: "" },
      { nama: "Muhammad Rifkhy Fazriyan", nim: "" },
      { nama: "Muhammad Rakan Arami", nim: "" }
    ],
    paper: "papers/kelompok-09.pdf",
    luaran: [
      { label: "Notebook Kaggle", url: "https://www.kaggle.com/code/aryanugrahakaggle/prediksi-kelulusan-mahasiswa/notebook" }
    ],
    dokumentasi: []
  },
  {
    no: 10, bidang: "", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Rakha Rizqullah Siregar", nim: "" },
      { nama: "Mutya Hazna", nim: "" },
      { nama: "Wira Putro Hartono", nim: "" },
      { nama: "Marchella Yuniarsan", nim: "" },
      { nama: "Opra Ridho Illahi", nim: "" },
      { nama: "Michael Vindenovan Limbong", nim: "" },
      { nama: "Rafael Putra Ananta Saragih", nim: "" },
      { nama: "Naida Iskandar", nim: "" },
      { nama: "Irham Maulana", nim: "" },
      { nama: "Muhammad Ghifran Febrian", nim: "" },
      { nama: "Fikri Ahmad Fadhilah", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 11, bidang: "ORMAWA", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Ni Wayan Sharira Purnamasari Setiawan", nim: "" },
      { nama: "Zahro Khoirur Rohma", nim: "" },
      { nama: "Rayhan Muzab Fauzan", nim: "" },
      { nama: "Haziq Muhammad Wirdas", nim: "" },
      { nama: "Aghnia Fasya Launita", nim: "" },
      { nama: "Muhammad Keiza Benjamin Andri Purnama", nim: "" },
      { nama: "Fransiskus Brama Wijaya", nim: "" },
      { nama: "Lucky Javier Ridwanullah", nim: "" },
      { nama: "Abram Bagus Bagaskara", nim: "" },
      { nama: "Naufal Asa Malika", nim: "" },
      { nama: "Andi Reski Ramadhani", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 12,
    bidang: "SEAL",
    judul: "Perancangan Website \"PortalInformasi\" Pendaftaran UKM dan Laboratorium di Telkom University untuk Mempermudah Akses Informasi Mahasiswa",
    abstrak:
      "Mahasiswa memiliki kesempatan untuk mengembangkan minat dan kemampuan melalui kegiatan di luar perkuliahan, misalnya dengan bergabung dalam Unit Kegiatan Mahasiswa (UKM) atau laboratorium. " +
      "Namun, informasi pendaftaran dari setiap organisasi dan laboratorium dapat ditemukan melalui media yang berbeda-beda. " +
      "Mahasiswa perlu memeriksa berbagai sumber untuk mengetahui kesempatan yang sedang dibuka, sehingga informasi dapat berisiko terlewat. " +
      "Penulisan ini mengusulkan website \"PortalInformasi\" yang mengumpulkan pengumuman pendaftaran UKM dan laboratorium dalam satu platform. " +
      "Perancangan difokuskan pada kebutuhan mahasiswa untuk melihat daftar, mencari informasi, membaca persyaratan dan periode pendaftaran, serta membuka tautan pendaftaran resmi. " +
      "Tahapan pengerjaan meliputi identifikasi masalah, analisis kebutuhan, perancangan alur sistem, dan rancangan antarmuka.",
    kataKunci: ["akses informasi", "pendaftaran", "UKM", "laboratorium", "website"],
    anggota: [
      { nama: "Lazhi Nadri Ramadhan", nim: "" },
      { nama: "Olivia Cahya Daniswara", nim: "" },
      { nama: "Arya Awal Adriansyah", nim: "" },
      { nama: "Mochamad Rizkyka Zainal Rafi'i", nim: "" },
      { nama: "Ahmad Rifki Dwi Putra Singgih", nim: "" },
      { nama: "Muhamad Novran Razak", nim: "" },
      { nama: "Mohamad Fakhri Saleh", nim: "" },
      { nama: "Rafli Arya Adiyatma", nim: "" },
      { nama: "Asar Puja Arjuna Sembiring", nim: "" },
      { nama: "Mahadivika Iman Nasri", nim: "" },
      { nama: "Muhammad Gavino Indra Putra", nim: "" }
    ],
    paper: "papers/kelompok-12.pdf",
    luaran: [
      { label: "Website PortalInformasi", url: "https://portalinformasi-paper-perancangan-website-pendaft.ai.studio/" },
      { label: "Website paper", url: "https://portalinformasi-mahasiswa.ai.studio/" }
    ],
    dokumentasi: []
  },
  {
    no: 13,
    bidang: "TEKNOLOGI",
    judul: "EduAI Helper: Rancangan Portal Belajar Pemrograman yang Meminta Mahasiswa Mencoba Dulu sebelum Bertanya ke AI",
    abstrak:
      "Mahasiswa sudah memakai AI untuk belajar pemrograman, dan sebagian memakainya untuk mendapat jawaban tanpa memahami prosesnya. " +
      "Kemampuan membaca pesan error dan menelusuri alur program hanya terbentuk jika dikerjakan sendiri, sedangkan jawaban instan melompati latihan itu, dan sumber belajar yang ada belum mengatur cara AI dipakai. " +
      "Dari kajian literatur dan diskusi kelompok, disusun rancangan EduAI Helper, portal web dengan tiga bagian: cheatsheet materi dengan contoh kode C++, kolom tanya jawab yang mewajibkan pengguna menulis percobaannya lebih dulu, dan galeri tips belajar. " +
      "AI memberi petunjuk dalam tiga tingkat dan tidak menampilkan kode perbaikan utuh. " +
      "Hasil utamanya berupa rancangan interaksi yang menuntut mahasiswa mencoba lebih dulu, disertai rencana pengujian pada mahasiswa seangkatan; efektivitasnya belum diuji.",
    kataKunci: ["kecerdasan buatan", "pembelajaran pemrograman", "scaffolding", "portal edukasi", "mahasiswa informatika"],
    anggota: [
      { nama: "Keysha Renata Aniqa", nim: "" },
      { nama: "Felix Felizio", nim: "" },
      { nama: "Muhammad Zikri Fachrezi", nim: "" },
      { nama: "Ahsanul Hadi Fauzi", nim: "" },
      { nama: "Faiz Ramdlan Anshori", nim: "" },
      { nama: "Fakhri Muhammad Dzakwan", nim: "" },
      { nama: "Mochammad Fikri", nim: "" },
      { nama: "Muhammad Thoriq Rahita", nim: "" },
      { nama: "Afdhal Zikron Abrar", nim: "" },
      { nama: "Muhammad Fadhlurrahman Safar", nim: "" }
    ],
    paper: "papers/kelompok-13.pdf",
    luaran: [],
    dokumentasi: []
  },
  {
    no: 14,
    bidang: "DSIS",
    judul: "Klasifikasi Citra Sampah untuk Pemilahan Organik, Anorganik, B3, dan Residu Menggunakan Transfer Learning EfficientNet-B0 pada Gabungan Dataset Kaggle dan RealWaste",
    abstrak:
      "Pemilahan sampah di sumber masih sering gagal karena orang ragu menentukan tempat sampah yang tepat. " +
      "Penelitian ini membangun sistem yang menerima satu foto sampah dan menghasilkan jenis materialnya beserta kategori tempat sampah: organik, anorganik, B3, atau residu. " +
      "Sebagian besar dataset publik berisi foto produk berlatar polos, sehingga model yang tampak sangat akurat pada data sejenis belum tentu andal pada sampah nyata yang kotor, lecek, dan berlatar beragam. " +
      "Kami menggabungkan dataset Kaggle Garbage Classification dan RealWaste, membuang duplikat serta label yang bertentangan, menyusun sembilan kelas yang dipetakan ke empat tempat sampah, dan membagi data tanpa kebocoran antar-subset. " +
      "EfficientNet-B0 pralatih ImageNet di-fine-tune dalam dua tahap, lalu dilengkapi ambang keyakinan dan aplikasi web yang menyimpan koreksi pengguna untuk pelatihan ulang. " +
      "Model yang dilatih hanya dengan data Kaggle mencapai akurasi 96,8% pada data uji Kaggle, tetapi turun menjadi 54,5% pada foto sampah nyata RealWaste. " +
      "Penambahan RealWaste ke data latih menaikkan akurasi pada foto sampah nyata menjadi 93,8%, dengan akurasi keseluruhan 95,7% untuk sembilan kelas dan 98,5% untuk empat kategori tempat sampah.",
    kataKunci: ["klasifikasi sampah", "transfer learning", "EfficientNet", "domain gap", "RealWaste", "pemilahan sampah"],
    anggota: [
      { nama: "Luthfi Ra'is Wiguna", nim: "" },
      { nama: "I Gede Ananda Bela Persada", nim: "" },
      { nama: "Affan Mangi Layana", nim: "" },
      { nama: "Fauzan Yusuf Habibie", nim: "" },
      { nama: "Aninda Marethaningtyas Cessary Putri Bellammy", nim: "" },
      { nama: "Tsara Naila Alfikri", nim: "" },
      { nama: "Farel Adsenov Situmorang", nim: "" }
    ],
    paper: "papers/kelompok-14.pdf",
    luaran: [],
    dokumentasi: []
  },
  {
    no: 15,
    bidang: "SEAL",
    judul: "CampusHUB: Platform Terintegrasi untuk Pengelolaan Kegiatan dan Kalender Kampus",
    abstrak:
      "CampusHUB adalah platform manajemen kegiatan kampus berbasis web yang menjembatani mahasiswa, organisasi kemahasiswaan (UKM, laboratorium/riset, dan panitia event), serta Super Admin universitas. " +
      "Setiap jadwal kegiatan yang diajukan organisasi melewati alur persetujuan berjenjang, dan hanya jadwal yang disetujui yang tampil di Kalender Resmi Kampus. " +
      "Kalender interaktifnya menyediakan tampilan bulan, minggu, hari, dan daftar, dengan filter berdasarkan tipe, organisasi, dan kata kunci serta pembedaan warna untuk event, UKM, dan lab. " +
      "Fitur lainnya meliputi pendeteksi bentrok jadwal berdasarkan waktu dan lokasi, pendaftaran peserta dengan pengelolaan kuota, hak akses terpisah untuk lima peran pengguna, serta notifikasi di dalam aplikasi untuk setiap pengajuan, persetujuan, permintaan revisi, dan penolakan.",
    kataKunci: ["kalender kampus", "manajemen kegiatan", "approval workflow", "deteksi bentrok jadwal", "aplikasi web"],
    anggota: [
      { nama: "Muhammad Nur Thoyyib", nim: "" },
      { nama: "Muhammad Kafka Rahfi Gifassya", nim: "" },
      { nama: "Zahra Ari Syafina", nim: "" },
      { nama: "Dude Nova Ariyanto", nim: "" },
      { nama: "Septyan Muwahhid Mahmud", nim: "" },
      { nama: "M. Hermanu Arsya Ramadhan", nim: "" },
      { nama: "Tsania Rahma Haliza", nim: "" },
      { nama: "Gading Huga Pranata", nim: "" },
      { nama: "Muhammad Reffy Lesmana", nim: "" },
      { nama: "Attala Deval Alryan", nim: "" },
      { nama: "Made Bayu Adnyana", nim: "" },
      { nama: "Pius Edrik Pau", nim: "" }
    ],
    paper: "papers/kelompok-15.pdf",
    luaran: [],
    dokumentasi: []
  },
  {
    no: 16, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Muhammad Rafiki Hannan", nim: "" },
      { nama: "Arfandika Syahputra", nim: "" },
      { nama: "Muhammad Fariel", nim: "" },
      { nama: "Muhamad Bintang Alfatah", nim: "" },
      { nama: "Mehtar Nafisa Krisnu", nim: "" },
      { nama: "Nadhif Ramdhan", nim: "" },
      { nama: "Rafa Al-Fattah", nim: "" },
      { nama: "Nahdah Runa Musyaffa", nim: "" },
      { nama: "Muhammad Ariq Alkosstra", nim: "" },
      { nama: "Muhammad Wildan Arta", nim: "" },
      { nama: "Muhammad Kaysan Parsa Rifandiputra", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 17,
    bidang: "SEAL",
    judul: "Perancangan Sistem Lost and Found Telkom University",
    abstrak:
      "Kehilangan dan penemuan barang di lingkungan perguruan tinggi merupakan permasalahan yang sering terjadi. " +
      "Informasi mengenai barang hilang maupun barang yang ditemukan dapat tersebar melalui berbagai media sehingga sulit ditemukan kembali dan dikelola secara terpusat. " +
      "Kondisi tersebut dapat menyulitkan mahasiswa dalam melaporkan, mencari, dan menemukan informasi barang. " +
      "Sistem Lost and Found yang terorganisasi diperlukan untuk mempermudah pertukaran informasi mengenai barang hilang dan ditemukan di lingkungan Telkom University. " +
      "Penelitian ini mengembangkan website Lost and Found yang ditujukan bagi civitas akademika Telkom University. " +
      "Sistem menyediakan fasilitas untuk melaporkan barang hilang dan barang ditemukan, menampilkan informasi barang, serta membantu pengguna mencari barang berdasarkan informasi yang tersedia. " +
      "Sistem yang dikembangkan diuji untuk mengetahui kesesuaian fungsi dan kemudahan penggunaannya. " +
      "Hasil pengujian menunjukkan tingkat keberhasilan fungsi dan pengalaman penggunaan sistem berdasarkan skenario pengujian yang dilakukan. " +
      "Hasil tersebut digunakan untuk mengidentifikasi kelebihan dan kekurangan sistem sebagai dasar pengembangan lebih lanjut.",
    kataKunci: ["lost and found", "website", "usability", "Telkom University", "sistem informasi"],
    anggota: [
      { nama: "Airlangga Rizkytama", nim: "" },
      { nama: "Aishara Alula Myiesha Jenna", nim: "" },
      { nama: "Dennis Hernian Majid", nim: "" },
      { nama: "Fahri Putra Yonki", nim: "" },
      { nama: "Farros Hanif Syawaludien", nim: "" },
      { nama: "Mochamad Ghifary Soleiman", nim: "" },
      { nama: "Muhammad Yolan Maulana", nim: "" },
      { nama: "Rafi Alghifari", nim: "" },
      { nama: "Robby Hidayat", nim: "" },
      { nama: "Teuku Fawwaz Alwanda", nim: "" }
    ],
    paper: "papers/kelompok-17.pdf",
    luaran: [
      { label: "Website Temu Barang", url: "https://lost-and-found-telkom-university.vercel.app/" }
    ],
    dokumentasi: []
  },
  {
    no: 18,
    bidang: "SEAL",
    judul: "Aplikasi Optimasi Penyelesaian Transaksi Utang-Piutang Kelompok Berbasis Algoritma Minimum Cash-Flow dan Teori Graf (SettleGraph)",
    abstrak:
      "Penyelesaian utang-piutang dalam kegiatan patungan kelompok sering rumit dan memakan waktu karena pembayaran talangan yang berlapis antaranggota. " +
      "Aplikasi pembagi tagihan biasa hanya membagi nominal per struk tanpa menyederhanakan relasi utang secara menyeluruh, sehingga pengguna menanggung biaya transfer berulang dan risiko salah hitung. " +
      "Penelitian ini membangun SettleGraph, aplikasi web yang memodelkan utang-piutang kelompok sebagai graf berarah berbobot, menghitung saldo bersih setiap anggota, lalu menerapkan algoritma Minimum Cash-Flow berbasis greedy untuk memasangkan piutang dan utang terbesar secara bertahap. " +
      "Keluarannya berupa daftar instruksi transfer paling minimal beserta visualisasi graf sebelum dan sesudah optimasi. " +
      "Pengujian pada 10 skenario simulasi menunjukkan jumlah transfer berkurang lebih dari 50% dibandingkan pencatatan langsung tanpa optimasi, dengan seluruh saldo akhir seimbang (net-zero).",
    kataKunci: ["algoritma greedy", "minimum cash-flow", "optimasi transaksi", "pembagian tagihan", "teori graf"],
    anggota: [
      { nama: "Lukman Hakim", nim: "" },
      { nama: "Muhammad Naufal Faiq Aljjizrawi", nim: "" },
      { nama: "Haura Agitha Humaira", nim: "" },
      { nama: "Rayya Izzatul Mila", nim: "" },
      { nama: "Aliya Ammaranisa Kurniawan", nim: "" },
      { nama: "Kjell Mikhail Ragnvald", nim: "" },
      { nama: "Naila Zahra Ramadhani", nim: "" },
      { nama: "Muhammad Daffa Apriansyah", nim: "" },
      { nama: "Marsha Luthfiyah Aqela", nim: "" },
      { nama: "Mariza Syalzabilla", nim: "" },
      { nama: "Jati Bintang Samudera Kharisma Putra", nim: "" }
    ],
    paper: "papers/kelompok-18.pdf",
    luaran: [],
    dokumentasi: []
  },
  {
    no: 19,
    bidang: "DSIS",
    judul: "SkillProof: An Evidence Based Student Skill Mapping and Industry Gap Analysis System",
    abstrak:
      "Industri teknologi terus berubah, dan mahasiswa Informatika dituntut memahami seberapa jauh kemampuan mereka sudah sesuai dengan keterampilan yang dicari dunia kerja. " +
      "Pemetaan keterampilan selama ini sering bertumpu pada penilaian mandiri dan belum mengaitkan bukti penerapan kemampuan lewat proyek dengan kebutuhan kompetensi pada lowongan pekerjaan. " +
      "Paper ini mengusulkan SkillProof, sistem pemetaan keterampilan berbasis bukti yang memadukan penilaian mandiri mahasiswa, dokumentasi proyek, dan informasi kebutuhan industri. " +
      "Natural Language Processing dirancang untuk mengekstraksi keterampilan dari deskripsi pekerjaan dan dokumentasi proyek, sedangkan Machine Learning (K-Means Clustering) direncanakan untuk menganalisis pola kompetensi mahasiswa. " +
      "Hasil yang diharapkan berupa profil keterampilan, identifikasi kesenjangan kompetensi, dan rekomendasi pengembangan kemampuan; SkillProof diposisikan sebagai alat bantu perencanaan pengembangan kompetensi, bukan penentu layak-tidaknya seseorang diterima bekerja.",
    kataKunci: ["skill mapping", "bukti proyek", "Natural Language Processing", "Machine Learning", "skill gap analysis"],
    anggota: [
      { nama: "Muhammad Hafiz Zuhdi", nim: "" },
      { nama: "Angga Yudhistira", nim: "" },
      { nama: "Fahri Al Fahidi Husni", nim: "" },
      { nama: "Barra Kusuma Bakti", nim: "" },
      { nama: "Muhammad Zidan Fathurrahman", nim: "" },
      { nama: "Efraim Janitra Raditya", nim: "" },
      { nama: "Wizdan Fikra Rakansa", nim: "" },
      { nama: "Akhmad Hafiz", nim: "" },
      { nama: "Magalih Raditya Notonegoro", nim: "" },
      { nama: "Raffy Muhammad Athallah", nim: "" },
      { nama: "Iman Abdi Ilahi", nim: "" }
    ],
    paper: "papers/kelompok-19.pdf",
    luaran: [],
    dokumentasi: []
  },
  {
    no: 20, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Mikaela Rosa Febriani Linggi", nim: "" },
      { nama: "Nabila Nurul Alifah", nim: "" },
      { nama: "Dewa Gede Reksa Parama Aditya", nim: "" },
      { nama: "Muh Alif Fayyaz", nim: "" },
      { nama: "Arshanta Ayu Kusumaningtyas", nim: "" },
      { nama: "Radhia Farrel Rabbani", nim: "" },
      { nama: "Rizky Alvino Putra", nim: "" },
      { nama: "Farrel Raza Sigak Amrullah", nim: "" },
      { nama: "Sayyid Rahman Al-Azis", nim: "" },
      { nama: "Mochamad Dzikri Abbas", nim: "" },
      { nama: "Zhafran Atthaurrahman Alezaryan", nim: "" },
      { nama: "Muhammad Rabbani Al-Kautsar", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 21,
    bidang: "DSIS",
    judul: "Analisis Kesenjangan antara Persepsi Diri dan Kompetensi Aktual Mahasiswa dalam Pemrograman: Studi Literatur",
    abstrak:
      "Kemampuan pemrograman merupakan salah satu kompetensi penting bagi mahasiswa Informatika. " +
      "Namun, penilaian kemampuan secara mandiri belum tentu mencerminkan tingkat penguasaan keterampilan yang sebenarnya. " +
      "Kondisi ini dapat menimbulkan kesenjangan antara persepsi mahasiswa terhadap kemampuan dirinya dan kompetensi yang ditunjukkan melalui evaluasi. " +
      "Kesenjangan tersebut penting dikaji karena pemahaman yang kurang tepat terhadap kemampuan diri dapat memengaruhi proses belajar dan pengembangan keterampilan pemrograman. " +
      "Oleh karena itu, diperlukan analisis untuk memahami hubungan antara penilaian diri dan kompetensi aktual mahasiswa. " +
      "Penelitian ini menggunakan metode kajian literatur dengan mengumpulkan dan menganalisis penelitian terdahulu yang membahas penilaian kemampuan pemrograman secara mandiri serta pengukuran kompetensi melalui evaluasi atau tes praktik. " +
      "Hasil penelitian dibandingkan untuk mengidentifikasi pola kesenjangan dan faktor-faktor yang berkaitan dengannya. " +
      "Kajian ini diarahkan untuk mengidentifikasi kesesuaian antara persepsi kemampuan dan kompetensi aktual mahasiswa, serta faktor yang berpotensi memengaruhi perbedaannya. " +
      "Hasil penelitian diharapkan memberikan gambaran mengenai pentingnya evaluasi kemampuan yang objektif dalam proses pembelajaran pemrograman.",
    kataKunci: ["pemrograman", "persepsi diri", "kompetensi", "mahasiswa", "penilaian kemampuan", "kajian literatur"],
    anggota: [
      { nama: "Tifany Alisya Maharani", nim: "" },
      { nama: "Alif Fajar Sya'ban", nim: "" },
      { nama: "Moh. Qalbi Tryansyah", nim: "" },
      { nama: "Rizqy Putranto", nim: "" },
      { nama: "Syaira Luthfiyah Ilham", nim: "" }
    ],
    paper: "papers/kelompok-21.pdf",
    luaran: [],
    dokumentasi: []
  },
  {
    no: 22,
    bidang: "SEAL",
    judul: "Perancangan Aplikasi Berbasis Web Pencarian Kos (NgekosYuk)",
    abstrak:
      "Pencarian kos atau tempat tinggal sementara sering kali memakan waktu dan memberikan informasi yang tidak lengkap, yang membuat calon penghuni terkadang merasa kecewa atau kurang puas setelah melihat kos. " +
      "Masukan dari sistem ini berupa kata kunci pencarian, pengurutan harga, dan data ulasan. " +
      "Keluarannya berupa informasi detail kos meliputi foto, lokasi, harga, skor penilaian dari pengguna sebelumnya, jumlah ketersediaan kamar, dan tautan kontak WhatsApp pemilik. " +
      "Topik ini penting karena pencari kos sering kali kesulitan mengetahui kondisi fisik bangunan yang sebenarnya, transparansi harga yang terstruktur, kepastian ketersediaan kamar, dan penilaian atau ulasan jujur dari penghuni sebelumnya. " +
      "Kondisi ini menunjukkan adanya kesenjangan antara informasi lisan dengan kebutuhan sebuah platform tunggal yang menyediakan kredibilitas informasi berbasis ulasan komunitas. " +
      "Solusi yang dibangun berupa aplikasi web pencarian kos yang menyediakan antarmuka pencarian teks, algoritma pengurutan harga dari yang termahal ke yang termurah, modul interaktif untuk pengiriman ulasan dan penilaian bintang, serta integrasi tombol kontak ke WhatsApp pemilik. " +
      "Sistem ini mengimplementasikan basis data relasional untuk mengelola, menyortir, dan menampilkan detail properti secara dinamis berdasarkan parameter masukan pengguna. " +
      "Hasilnya, sistem mampu meningkatkan kepercayaan pengguna melalui fitur ulasan dan mempercepat proses pemilihan kos melalui fungsi pengurutan, serta terbukti berhasil menampilkan detail kos dan jumlah kamar yang tersedia, mengurutkan data harga secara akurat, menyimpan penilaian pengguna dengan presisi, dan mengarahkan pengguna ke WhatsApp pemilik kos.",
    kataKunci: ["pencarian kos", "pengurutan harga", "sistem informasi", "ulasan & penilaian pengguna", "web"],
    anggota: [
      { nama: "Rais Galang Saputra", nim: "" },
      { nama: "Dennis Christopher Maria Titirloloby", nim: "" },
      { nama: "Alessandro Zulfaqqar Harahap", nim: "" },
      { nama: "Iswahyudi Maulana", nim: "" },
      { nama: "Muhammad Affan Ramadhan", nim: "" },
      { nama: "Andhika Damar Cendikia Wibowo", nim: "" },
      { nama: "Steve Nathaniel Fritz Wilson", nim: "" },
      { nama: "Ardhian Galih Pratama", nim: "" },
      { nama: "Muhammad Zehan Royyan Wahyudi", nim: "" },
      { nama: "Aura Putri Davina Hippy", nim: "" },
      { nama: "Rainal Wibawa Hamara", nim: "" },
      { nama: "Saffana Hasna Nur Ramadani", nim: "" }
    ],
    paper: "papers/kelompok-22.pdf",
    luaran: [
      { label: "Dokumentasi kegiatan (Google Drive)", url: "https://drive.google.com/drive/folders/16oGjI1PcVioyjisABoFcV8MusAr4QMUR?usp=sharing" }
    ],
    dokumentasi: []
  },
  {
    no: 23,
    bidang: "ORMAWA",
    judul: "Perancangan Unit Kegiatan Mahasiswa BHUMI \"Bina Harmoni untuk Masyarakat dan Lingkungan\" sebagai Wadah Kolaborasi dalam Mewujudkan Keberlanjutan Lingkungan dan Pemberdayaan Sosial di Sekitar Telkom University",
    abstrak:
      "Permasalahan lingkungan dan sosial di kawasan Telkom University membutuhkan keterlibatan mahasiswa dan masyarakat. " +
      "Paper ini mengusulkan pembentukan UKM BHUMI (Bina Harmoni untuk Masyarakat dan Lingkungan) sebagai wadah kolaborasi dalam menjaga lingkungan dan memberdayakan masyarakat. " +
      "Organisasi ini memiliki empat divisi dengan program yang berfokus pada aksi lingkungan, pendampingan masyarakat, edukasi, serta pengembangan inovasi. " +
      "Implementasi program diwujudkan melalui Festival BHUMI yang menggabungkan aksi lapangan, lokakarya, dan pameran inovasi. " +
      "Keberhasilan kegiatan dievaluasi berdasarkan partisipasi, pelaksanaan program, serta dampak sosial dan lingkungan.",
    kataKunci: ["BHUMI", "UKM", "keberlanjutan lingkungan", "pemberdayaan masyarakat", "kolaborasi mahasiswa"],
    anggota: [
      { nama: "Pradiptha Arya Eka Prasetyo", nim: "" },
      { nama: "Fakhri Ihsan", nim: "" },
      { nama: "Naradipa Yogaswara", nim: "" },
      { nama: "Aura Agny Arkadiva Rawijanto Putri", nim: "" },
      { nama: "Andi Istilfa Hanifa", nim: "" },
      { nama: "I Putu Saka Putra Ardana", nim: "" },
      { nama: "Nadya Auradiva", nim: "" },
      { nama: "Haydar Errangga Ridwan", nim: "" },
      { nama: "Ahmad Kayla Wirananda", nim: "" },
      { nama: "Muhammed Syauqi Rizqullah", nim: "" },
      { nama: "Goldien Adhiyaksa Hasim Putra", nim: "" }
    ],
    paper: "papers/kelompok-23.pdf",
    luaran: [],
    dokumentasi: []
  },
  {
    no: 24, bidang: "", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Muhammad Bintang Nabeel", nim: "" },
      { nama: "Fauzan Rizky Fernanda", nim: "" },
      { nama: "Muhamad Sahruwardi", nim: "" },
      { nama: "Mochamad Basith Elangjava", nim: "" },
      { nama: "Hanifah Harnanda Tridianti", nim: "" },
      { nama: "Femalia Anindya Triazkamila", nim: "" },
      { nama: "Al Fathir Abimanyu Gazaali", nim: "" },
      { nama: "Gaza Raushan Fikri", nim: "" },
      { nama: "Rafi Putra Effendi", nim: "" },
      { nama: "Adra Athallah Octaviadi", nim: "" },
      { nama: "Aria Chrisna Bayu", nim: "" },
      { nama: "Renanda Dava Putra Rasyid", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 25,
    bidang: "ORMAWA",
    judul: "Perancangan Organisasi Kemahasiswaan Bidang Audio Engineering dan Music Technology (UKM TechSound Lab)",
    abstrak:
      "Perkembangan teknologi komputasi membuka peluang integrasi antara ilmu komputer dan seni audio kreatif. " +
      "Namun, mahasiswa Informatika kerap kesulitan menerapkan konsep teoretis seperti pemrosesan sinyal digital dan aljabar linier ke dalam karya nyata, karena organisasi kemahasiswaan terpolarisasi antara bidang teknologi konvensional dan seni musik tradisional. " +
      "Perancangan ini bertujuan membentuk UKM TechSound Lab sebagai wadah inkubasi kreativitas berbasis art-engineering integration di Telkom University, dengan metode studi literatur dan analisis perbandingan konseptual. " +
      "Hasilnya berupa kerangka organisasi lintas program studi dengan pengurus inti dan empat divisi teknisi: Logistik, Akustik & Peralatan; Riset & Pengembangan Software; Studio & Produksi; serta Event & Publikasi. " +
      "Kegiatan dijalankan melalui lima program unggulan berjenjang, yaitu pelatihan akustik, pengembangan plugin audio, automasi mixing, live coding musik, dan pameran inovasi, dengan alur proyek lima tahap yang terukur.",
    kataKunci: ["teknologi musik", "rekayasa audio", "pemrosesan sinyal digital", "komputasi kreatif", "organisasi mahasiswa"],
    anggota: [
      { nama: "Anjar Azzam Fadhilah", nim: "" },
      { nama: "Adnafika Hanina Ridwan", nim: "" },
      { nama: "Adrian Hermawan", nim: "" },
      { nama: "Andi Alraly Pasha Ramadhan", nim: "" },
      { nama: "Andika Restu Fathurochman", nim: "" },
      { nama: "Dimas Angga Prasetya", nim: "" },
      { nama: "Devano Muhammad Danu Nebukaneza", nim: "" },
      { nama: "Gradeckal Raihan Labib", nim: "" },
      { nama: "Kinasih Sekar Pertiwi", nim: "" },
      { nama: "Muhammad Fahlevi", nim: "" },
      { nama: "Nazifa Putri Ferika", nim: "" },
      { nama: "Radhitya Azka Putra Arosa", nim: "" }
    ],
    paper: "papers/kelompok-25.pdf",
    luaran: [
      { label: "Dokumentasi kelompok", url: "https://drive.google.com/drive/folders/1A0HDmfcy0bT1a1b_LerN8L_dQlU8TZ4h" }
    ],
    dokumentasi: []
  },
  {
    no: 26,
    bidang: "SEAL",
    judul: "Analisis Perbandingan Kecepatan Algoritma Bubble Sort, Selection Sort, dan Insertion Sort pada Berbagai Ukuran dan Kondisi Data",
    abstrak:
      "Bubble Sort, Selection Sort, dan Insertion Sort memiliki kompleksitas waktu rata-rata yang sama, yaitu O(n²), sehingga sering dianggap setara. " +
      "Penelitian ini mengukur dan membandingkan waktu eksekusi ketiga algoritma secara empiris dengan implementasi Python 3.12 pada data bilangan bulat acak berukuran 100 sampai 5.000 elemen, serta pada data terurut, acak, dan terbalik. " +
      "Hasilnya menunjukkan waktu eksekusi pada data acak tumbuh kuadratik sesuai O(n²), dengan Bubble Sort paling lambat: sekitar 2,5 kali lebih lama daripada Selection Sort dan 2,3 kali lebih lama daripada Insertion Sort pada n = 5.000. " +
      "Pada data terurut, Bubble Sort dengan penanda pertukaran dan Insertion Sort jauh lebih cepat karena berperilaku O(n), sedangkan Selection Sort tidak terpengaruh. " +
      "Pada data terbalik, Selection Sort menjadi yang tercepat karena jumlah pertukarannya paling sedikit, dan jumlah perbandingan yang terukur konsisten dengan perkiraan teoretis.",
    kataKunci: ["bubble sort", "selection sort", "insertion sort", "kompleksitas waktu", "waktu eksekusi", "analisis empiris"],
    anggota: [
      { nama: "Ahmad Dhani Nur Ridwan", nim: "" },
      { nama: "Aliyyah Huriyah Ilahi", nim: "" },
      { nama: "Aulia Mustika Makmur", nim: "" },
      { nama: "Kevin Aditya Pratama", nim: "" },
      { nama: "Made Ayesa Bagus Dwipayana", nim: "" },
      { nama: "Muhamad Hammam Misbah", nim: "" },
      { nama: "Muhammad Falih Rizki Prasetyo", nim: "" },
      { nama: "Muhammad Fauzi Ramadhan", nim: "" },
      { nama: "Nadhif Miftah Hibatullah", nim: "" },
      { nama: "Revan Putra Andrian", nim: "" },
      { nama: "Varrel Christian Wiranata", nim: "" }
    ],
    paper: "papers/kelompok-26.pdf",
    luaran: [
      { label: "Situs hasil pengujian", url: "https://tubesfortran.vercel.app/TUBES.html#hasil-pengujian" }
    ],
    dokumentasi: []
  },
  {
    no: 27,
    bidang: "ORMAWA",
    judul: "Eksistensi Mahasiswa di Era Digital: Antara Ketergantungan dan Alienasi Teknologi",
    abstrak:
      "Kemajuan teknologi digital memudahkan mahasiswa mengakses informasi dan berkomunikasi, tetapi pemakaian yang tak terkendali memicu dua persoalan yang saling berkaitan: ketergantungan pada gawai yang menurunkan fokus dan efisiensi studi, serta keterasingan sosial yang mengurangi interaksi langsung antarmahasiswa. " +
      "Riset terdahulu umumnya mengulas kedua masalah ini secara terpisah. " +
      "Studi ini menyusun kerangka analisis konseptual berbasis tinjauan pustaka yang menghubungkan keduanya melalui tiga lapis: adiksi terhadap perangkat, alienasi sosial akibat dominasi komunikasi virtual, dan perilaku phubbing sebagai titik temunya. " +
      "Temuan tiga penelitian sebelumnya dikelompokkan ke dalam matriks tematik dan dibandingkan untuk mencari kemiripan serta celah. " +
      "Hasilnya menunjukkan ketiga studi mengungkap dampak negatif penggunaan teknologi yang tidak terkendali, tetapi keterkaitan ketergantungan dan alienasi masih terbatas pada perilaku phubbing dan bersifat teoretis, sehingga pengujian empiris diperlukan pada kajian mendatang.",
    kataKunci: ["eksistensi mahasiswa", "era digital", "ketergantungan teknologi", "alienasi sosial", "phubbing", "kajian pustaka"],
    anggota: [
      { nama: "Nadia Evelyna Cahyarani", nim: "" },
      { nama: "Rillo Raihan Dwi Satria", nim: "" },
      { nama: "Khalif Raufa Ma'arif", nim: "" },
      { nama: "Dzaki Hisyam Morenho", nim: "" },
      { nama: "Nathaniel Darius Ahmad Raja Gukguk", nim: "" },
      { nama: "Syifa Khairunnisa", nim: "" },
      { nama: "Maulana Ade Fathurrozaqi", nim: "" },
      { nama: "Rajwa Naila Arkan", nim: "" },
      { nama: "Mario Satya Febrian", nim: "" },
      { nama: "M. Pasya Alfaridzi", nim: "" }
    ],
    paper: "papers/kelompok-27.pdf",
    luaran: [],
    dokumentasi: []
  },
  {
    no: 28,
    bidang: "DSIS",
    judul: "Visualisasi Tren Penyebaran Berita Hoaks di Indonesia Berbasis Dashboard Interaktif",
    abstrak:
      "Tingginya penyebaran hoaks di Indonesia menuntut pemahaman pola dinamika informasi secara visual, sementara studi terdahulu lebih berfokus pada klasifikasi otomatis dibandingkan eksplorasi tren waktu dan karakteristik narasi. " +
      "Penelitian ini menganalisis tren bulanan, distribusi jenis hoaks, perbandingan kata dominan, serta platform digital yang paling sering dikaitkan dengan hoaks, lalu menyajikannya dalam dashboard web interaktif. " +
      "Metodenya meliputi pengolahan 23.586 data bersih dari dataset Deteksi Berita Hoaks Indo (berita valid Kompas.com, Antaranews.com, Detik.com, dan artikel hoaks TurnBackHoax.id), pengambilan tanggal publikasi melalui web scraping pada artikel hoaks periode Februari 2024 hingga April 2026, serta pengembangan dashboard berbasis Streamlit. " +
      "Hasilnya menunjukkan rata-rata 417 artikel hoaks per bulan dengan puncak pada September 2024 sebanyak 617 artikel, serta dominasi kategori Salah/Hoaks sebesar 64,5%. " +
      "Artikel hoaks didominasi istilah penyebaran digital seperti \"akun\", \"video\", dan \"Facebook\", sedangkan berita valid berfokus pada isu sosial dan pemerintahan, dengan Facebook menjadi platform paling sering disebut (28,7%).",
    kataKunci: ["hoaks", "visualisasi data", "dashboard", "Streamlit", "TurnBackHoax"],
    anggota: [
      { nama: "Rayyan Nakhlah Prayata", nim: "" },
      { nama: "Tiara Shaila Callysta", nim: "" },
      { nama: "Nadya Aliyya Azahra", nim: "" },
      { nama: "Nabila Hanif Nurfitriya", nim: "" },
      { nama: "Fatih Akram Wicaksono", nim: "" },
      { nama: "Wildan Panji Maulana", nim: "" },
      { nama: "Muhammad Fadhil", nim: "" },
      { nama: "Tegar Sauma Ramdan Kurnia", nim: "" },
      { nama: "Naufal Rofif Jauhari", nim: "" },
      { nama: "Salsabila Ramadhina Danisti", nim: "" },
      { nama: "Ezzar Kaysan Gumilar", nim: "" },
      { nama: "Cattleya Rahmi Mauludin", nim: "" }
    ],
    paper: "papers/kelompok-28.pdf",
    luaran: [
      { label: "Dashboard Streamlit", url: "https://dashboard-tren-penyebaran-berita-hoaks-di-indonesia.streamlit.app/" },
      { label: "Website proyek", url: "https://kelompok28-fortran.vercel.app/" },
      { label: "Notebook & dataset", url: "https://drive.google.com/drive/folders/11FeB4sWJquzsUperry8i6ggoazB-uZqX?usp=drive_link" }
    ],
    dokumentasi: []
  },
  {
    no: 29,
    bidang: "TEKNOLOGI",
    judul: "Industri 4.0 dan Masa Depan Manufaktur Indonesia: Peran Teknologi, Tantangan, dan Strategi Penerapan",
    abstrak:
      "Kajian ini membahas penerapan teknologi Industri 4.0 pada sektor manufaktur di Indonesia, dengan masukan berupa literatur dan data sekunder, untuk menghasilkan gambaran peran teknologi, tantangan, dan strategi yang dapat dipakai. " +
      "Industri pengolahan menyumbang 19,07 persen terhadap PDB nasional pada 2025, tetapi penerapan teknologi digital di dalamnya belum merata: industri besar sudah bergerak lebih jauh, sedangkan industri kecil dan menengah masih terkendala kemampuan tenaga kerja, biaya investasi, dan keamanan siber. " +
      "Kajian dilakukan dengan studi literatur kualitatif deskriptif terhadap jurnal, data BPS, peta jalan Making Indonesia 4.0, studi kasus PT INKA, dan survei kesiapan pada 1.661 perusahaan industri, lalu dikelompokkan menjadi peran teknologi, tantangan, dan strategi. " +
      "Hasilnya menunjukkan bahwa hambatan penerapan lebih banyak berasal dari kesiapan organisasi daripada keterbatasan teknologi. " +
      "Penerapan bertahap sesuai skala industri, pelatihan tenaga kerja, dan keamanan digital sejak awal menjadi strategi yang disarankan.",
    kataKunci: ["industri 4.0", "manufaktur", "IoT", "AI", "cloud computing", "Making Indonesia 4.0"],
    anggota: [
      { nama: "Hairul Hakim Kusaeri", nim: "" },
      { nama: "Muhammad Fanny Adinata", nim: "" },
      { nama: "Raditya Riandika Irfani", nim: "" },
      { nama: "Najwa Calista Aqilah", nim: "" },
      { nama: "Maulana Akhtar Firmansyah", nim: "" },
      { nama: "Lus Nisrina Nazina Idrus", nim: "" },
      { nama: "Alfa Hanif Savero", nim: "" },
      { nama: "Ghulam Rasyiq Badra Ali", nim: "" },
      { nama: "Sherly Ardyna Dewy", nim: "" },
      { nama: "Muhammad Raehan Almadani", nim: "" },
      { nama: "Amelia Junita Sitohang", nim: "" }
    ],
    paper: "papers/kelompok-29.pdf",
    luaran: [],
    dokumentasi: []
  }
];
