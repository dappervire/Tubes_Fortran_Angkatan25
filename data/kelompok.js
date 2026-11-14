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
    no: 2, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Athala Nabih Salman", nim: "" },
      { nama: "Rafly Depinda", nim: "" },
      { nama: "Arbani Ihsan", nim: "" },
      { nama: "Alfandi Hassan", nim: "" },
      { nama: "Muhammad Andhika Bagaskoro", nim: "" },
      { nama: "Ahmad Radhin Praditya", nim: "" },
      { nama: "Muhammad Al Farel", nim: "" },
      { nama: "Dylan Setyawan Ekapraja", nim: "" },
      { nama: "Diego Fortuna", nim: "" },
      { nama: "Aulya Zhalzhabilah", nim: "" },
      { nama: "Cayseya Galeno Bilal Pratama", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
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
    no: 5, bidang: "", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Muhammad Raihan Nurtoha", nim: "" },
      { nama: "Muhammad Dzia Ilhaqi", nim: "" },
      { nama: "Melvin Ivander", nim: "" },
      { nama: "Qhikiza Alicia", nim: "" },
      { nama: "Rethiesalya Eliyanta Putri", nim: "" },
      { nama: "Dwi Hania Irfani", nim: "" },
      { nama: "Fanujiya Kidna Khasal", nim: "" },
      { nama: "Thania Evelina Munte", nim: "" },
      { nama: "Rionaldo Hutabarat", nim: "" },
      { nama: "Akhrom Goniun Syakir", nim: "" },
      { nama: "Raden Ishaq Malqi Ramadhan Alfriadi", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
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
    no: 7, bidang: "DSIS", judul: "", abstrak: "", kataKunci: [],
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
      { nama: "Ferry Zaky Anwar Zain", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
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
    no: 9, bidang: "DSIS", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Fayza Khalisha Rahma", nim: "" },
      { nama: "Charles Nathan Marcelino Tambunan", nim: "" },
      { nama: "Kevin Yudha Darinding", nim: "" },
      { nama: "Farrel Adi Irfani", nim: "" },
      { nama: "Nazla Zaskya Mouzha Harahap", nim: "" },
      { nama: "Muhammad Rifkhy Fazriyan", nim: "" },
      { nama: "Fahmi Aufa", nim: "" },
      { nama: "Muhammad Rakan Arami", nim: "" },
      { nama: "Julian Ferdiyanto", nim: "" },
      { nama: "Rio Nugraha Zain Assyarif", nim: "" },
      { nama: "I Putu Axel Tristan Wirya Atmaja", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
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
    no: 13, bidang: "TEKNOLOGI", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Afdhal Zikron Abrar", nim: "" },
      { nama: "Felix Felizio", nim: "" },
      { nama: "Keysha Renata Aniqa", nim: "" },
      { nama: "Fakhri Muhammad Dzakwan", nim: "" },
      { nama: "Rafi Ahmad Muzzaki", nim: "" },
      { nama: "Faiz Ramdlan Anshori", nim: "" },
      { nama: "Ahsanul Hadi Fauzi", nim: "" },
      { nama: "Mochammad Fikri", nim: "" },
      { nama: "Adam Ferdyan", nim: "" },
      { nama: "Muhammad Thoriq Rahita", nim: "" },
      { nama: "Muhammad Fadhlurrahman Safar", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
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
    no: 15, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [],
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
    paper: "", luaran: [], dokumentasi: []
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
    no: 18, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Lukman Hakim", nim: "" },
      { nama: "Muhammad Naufal Faiq Aljizrawi", nim: "" },
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
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 19, bidang: "ORMAWA", judul: "", abstrak: "", kataKunci: [],
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
    paper: "", luaran: [], dokumentasi: []
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
      { nama: "Zhafran Atthaurrahman Alezaryan", nim: "" }
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
    no: 23, bidang: "ORMAWA", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Fakhri Ihsan", nim: "" },
      { nama: "Naradipa Yogaswara", nim: "" },
      { nama: "Aura Agny Arkadiva Rawijanto Putri", nim: "" },
      { nama: "Pradiptha Arya Eka Prasetyo", nim: "" },
      { nama: "Andi Istilfa Hanifa", nim: "" },
      { nama: "I Putu Saka Putra Ardana", nim: "" },
      { nama: "Nadya Auradiva", nim: "" },
      { nama: "Haydar Errangga Ridwan", nim: "" },
      { nama: "Ahmad Kayla Wirananda", nim: "" },
      { nama: "Muhammed Syauqi Rizqullah", nim: "" },
      { nama: "Goldien Adhiyaksa Hasim Putra", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
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
      { nama: "Aria Chrisna Bayu", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 25, bidang: "ORMAWA", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Anjar Azzam Fadhilah", nim: "" },
      { nama: "Radhitya Azka Putra Arosa", nim: "" },
      { nama: "Muhammad Fahlevi", nim: "" },
      { nama: "Nazifa Putri Ferika", nim: "" },
      { nama: "Gradeckal Raihan Labib", nim: "" },
      { nama: "Andi Alraly Pasha Rahadhan", nim: "" },
      { nama: "Adrian Hermawan", nim: "" },
      { nama: "Adnafika Hanina Ridwan", nim: "" },
      { nama: "Kinasih Sekar Pertiwi", nim: "" },
      { nama: "Andika Restu Fathurochman", nim: "" },
      { nama: "Devano Muhammad Danu Nebukaneza", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 26, bidang: "", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Muhamad Hammam Misbah", nim: "" },
      { nama: "Muhammad Fauzi Ramadhan", nim: "" },
      { nama: "Muhammad Falih Rizki Prasetyo", nim: "" },
      { nama: "Made Ayesa Bagus Dwipayana", nim: "" },
      { nama: "Nadhif Miftah Hibatullah", nim: "" },
      { nama: "Varrel Christian Wiranata", nim: "" },
      { nama: "Aulia Mustika Makmur", nim: "" },
      { nama: "Revan Putra Andrian", nim: "" },
      { nama: "Ahmad Dhani Nur Ridwan", nim: "" },
      { nama: "Aliyyah Huriyah Ilahi", nim: "" },
      { nama: "Kevin Aditya Pratama", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 27, bidang: "ORMAWA", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Rillo Raihan Dwi Satria", nim: "" },
      { nama: "Mario Satya Febrian", nim: "" },
      { nama: "Rajwa Naila Arkan", nim: "" },
      { nama: "M. Pasya Alfaridzi", nim: "" },
      { nama: "Nadia Evelyna Cahyarani", nim: "" },
      { nama: "Syifa Khairunnisa", nim: "" },
      { nama: "Maulana Ade Fathurrozaqi", nim: "" },
      { nama: "Dimas Angga Prasetya", nim: "" },
      { nama: "Dzaki Hisyam Morenho", nim: "" },
      { nama: "Khalif Raufa Ma'arif", nim: "" },
      { nama: "Nathaniel Darius Ahmad Raja Gukguk", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  },
  {
    no: 28,
    bidang: "DSIS",
    judul: "Visualisasi Tren Penyebaran Berita Hoaks di Indonesia Berbasis Dashboard Interaktif",
    abstrak:
      "Kelompok ini memvisualisasikan tren penyebaran berita hoaks di Indonesia menggunakan data TurnBackHoax. " +
      "Data dibersihkan dan diolah, lalu disajikan dalam dashboard interaktif berbasis Streamlit. " +
      "(Ganti paragraf ini dengan abstrak dari mini paper.)",
    kataKunci: ["hoaks", "visualisasi data", "dashboard", "Streamlit", "TurnBackHoax"],
    anggota: [
      { nama: "Salsabila Ramadhina Danisti", nim: "" },
      { nama: "Ezzar Kaysan Gumilar", nim: "" },
      { nama: "Tiara Shaila Callysta", nim: "" },
      { nama: "Fatih Akram Wicaksono", nim: "" },
      { nama: "Wildan Panji Maulana", nim: "" },
      { nama: "Tegar Sauma Ramdan Kurnia", nim: "" },
      { nama: "Nabila Hanif Nurfitriya", nim: "" },
      { nama: "Cattleya Rahmi Mauludin", nim: "" },
      { nama: "Nadya Aliyya Azahra", nim: "" },
      { nama: "Rayyan Nakhlah Prayata", nim: "" },
      { nama: "Naufal Rofif Jauhari", nim: "" }
    ],
    paper: "", // contoh: "papers/kelompok-28.pdf"
    luaran: [
      // { label: "Dashboard Streamlit", url: "https://....streamlit.app" }
    ],
    dokumentasi: [
      // { src: "dokumentasi/kelompok-28/1.jpg", caption: "Diskusi pembagian jobdesk" }
    ]
  },
  {
    no: 29, bidang: "TEKNOLOGI", judul: "", abstrak: "", kataKunci: [],
    anggota: [
      { nama: "Muhammad Raehan Almadani", nim: "" },
      { nama: "Muhammad Fanny Adinata", nim: "" },
      { nama: "Amelia Junita Sitohang", nim: "" },
      { nama: "Muhammad Teguh Triyanugraha", nim: "" },
      { nama: "Raditya Riandika Irfani", nim: "" },
      { nama: "Sherly Ardyna Dewy", nim: "" },
      { nama: "Lus Nisrina Nazina Idrus", nim: "" },
      { nama: "Najwa Calista Aqilah", nim: "" },
      { nama: "Ghulam Rasyiq Badra Ali", nim: "" },
      { nama: "Hairul Hakim Kusaeri", nim: "" },
      { nama: "Alfa Hanif Savero", nim: "" }
    ],
    paper: "", luaran: [], dokumentasi: []
  }
];
