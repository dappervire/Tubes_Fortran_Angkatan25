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
  { no: 1, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 2, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 3, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 4, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 5, bidang: "", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 6, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 7, bidang: "DSIS", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 8, bidang: "TEKNOLOGI", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 9, bidang: "DSIS", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 10, bidang: "", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 11, bidang: "ORMAWA", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 12, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 13, bidang: "TEKNOLOGI", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 14, bidang: "DSIS", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 15, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 16, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 17, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 18, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 19, bidang: "ORMAWA", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 20, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 21, bidang: "", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 22, bidang: "SEAL", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 23, bidang: "ORMAWA", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 24, bidang: "", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 25, bidang: "ORMAWA", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 26, bidang: "", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
  { no: 27, bidang: "ORMAWA", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] },
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
      { nama: "Fatih Akram Wicaksono", nim: "103012500318" }
      // TODO: tambahkan anggota lainnya
    ],
    paper: "", // contoh: "papers/kelompok-28.pdf"
    luaran: [
      // { label: "Dashboard Streamlit", url: "https://....streamlit.app" }
    ],
    dokumentasi: [
      // { src: "dokumentasi/kelompok-28/1.jpg", caption: "Diskusi pembagian jobdesk" }
    ]
  },
  { no: 29, bidang: "TEKNOLOGI", judul: "", abstrak: "", kataKunci: [], anggota: [], paper: "", luaran: [], dokumentasi: [] }
];
