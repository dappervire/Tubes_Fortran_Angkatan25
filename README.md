# Meja Bundar FORTRAN 2026

Website pameran daring tugas besar kaderisasi FORTRAN 2026 (*Crown of Iron: The Oath of Camelot*).
Frontend saja: HTML, CSS, dan JavaScript tanpa backend, database, maupun proses build.

## Isi folder

```
index.html                 halaman utama (beranda, tentang, bidang, arsip, detail kelompok)
assets/css/style.css       tampilan
assets/js/app.js           logika: meja bundar, filter, pencarian, detail, galeri
data/kelompok.js           ← SATU-SATUNYA FILE YANG PERLU DIISI
papers/                    PDF mini paper  (kelompok-01.pdf … kelompok-29.pdf)
dokumentasi/               foto per kelompok (dokumentasi/kelompok-07/1.jpg, …)
admin/konverter.html       alat panitia: CSV (Google Form/Sheet) → data/kelompok.js
template-pengumpulan.csv   contoh format kolom
```

## Mengisi data

Setiap kelompok punya satu objek di `window.KELOMPOK` (file `data/kelompok.js`). Kelompok yang judulnya
masih kosong otomatis tampil sebagai **"Naskah belum diunggah"**, jadi website sudah bisa online
walaupun belum semua kelompok mengumpulkan.

```js
{
  no: 7,
  bidang: "DSIS",                       // SEAL | DSIS | CITI | ORMAWA | TEKNOLOGI | "" (belum ditentukan)
  judul: "Judul mini paper",
  abstrak: "Satu paragraf ringkasan.",
  kataKunci: ["kata", "kunci"],
  anggota: [{ nama: "Nama Lengkap", nim: "1030125xxxxx" }],   // nim boleh dikosongkan
  paper: "papers/kelompok-07.pdf",      // atau link Google Drive
  luaran: [{ label: "Dashboard", url: "https://..." }],
  dokumentasi: [{ src: "dokumentasi/kelompok-07/1.jpg", caption: "Diskusi kelompok" }]
}
```

Bidang yang belum dipakai kelompok mana pun (saat ini CITI) otomatis disembunyikan.

### Cara tercepat: Google Form → CSV → konverter

1. Buat Google Form dengan pertanyaan berikut (judul pertanyaan boleh diubah selama kata kuncinya tetap ada):

   | Pertanyaan | Tipe | Contoh isi |
   |---|---|---|
   | Nomor kelompok | Dropdown 1–29 | 7 |
   | Topik / bidang | Pilihan ganda | DSIS |
   | Judul mini paper | Jawaban singkat | |
   | Abstrak | Paragraf | |
   | Kata kunci (pisahkan dengan koma) | Jawaban singkat | hoaks, dashboard |
   | Daftar anggota (satu per baris, format `Nama - NIM`) | Paragraf | Budi Santoso - 1030125… |
   | Upload paper (PDF) | Upload file, 1 file, PDF | |
   | Tautan luaran (format `Label \| URL`, satu per baris) | Paragraf | Dashboard \| https://… |
   | Foto dokumentasi | Upload file, maks 5 gambar | |

2. Setelah kelompok mengisi: buka Sheet hasil form → **File → Download → CSV**.
3. Buka `admin/konverter.html` (bisa langsung dari website yang sudah online, misalnya `domainmu/admin/konverter.html`),
   pilih file CSV, periksa tabelnya, lalu **Unduh kelompok.js** dan timpa `data/kelompok.js`.
4. Upload ulang/deploy ulang website.

Kalau satu kelompok mengisi form dua kali, kiriman terakhir yang dipakai.

**Penting untuk file dari Google Form:** file upload tersimpan di Drive pemilik form dan defaultnya privat.
Buka folder jawaban form di Drive → Bagikan → **Siapa saja yang memiliki link: Viewer**. Tanpa ini PDF dan
foto tidak akan tampil untuk pengunjung. Website otomatis mengubah link Drive menjadi penampil PDF dan gambar.

### Cara manual

Taruh PDF di `papers/` dan foto di `dokumentasi/kelompok-XX/`, lalu edit `data/kelompok.js` langsung.
Ini lebih cepat dimuat daripada Drive dan tidak bergantung pada izin berbagi.

Tips ukuran: kompres PDF di bawah ±5 MB, dan perkecil foto ke lebar ±1600 px (JPG kualitas 80) supaya halaman
tetap ringan di HP.

## Mencoba di laptop

Buka `index.html` langsung di browser (klik dua kali). Kalau PDF lokal tidak muncul di penampil,
jalankan server kecil dari folder ini:

```bash
python -m http.server 8000
# lalu buka http://localhost:8000
```

## Deploy (pilih salah satu)

**Netlify Drop (paling cepat, tanpa akun Git):** buka https://app.netlify.com/drop lalu seret seluruh folder ini.
Untuk update, seret lagi folder yang sudah diperbarui ke halaman deploy situs tersebut.

**Vercel:** `npm i -g vercel` → jalankan `vercel` di folder ini → ikuti pertanyaannya (framework: *Other*, tanpa build command).
Update dengan `vercel --prod`.

**GitHub Pages:** push folder ini ke repo → Settings → Pages → Branch `main`, folder `/root`.
Semua path di website sudah relatif, jadi aman di sub-path `username.github.io/nama-repo/`.

## Fitur

- Meja bundar interaktif: satu kursi per kelompok, warna sesuai bidang; kursi putus-putus = belum unggah.
- Arsip dengan pencarian (judul, nomor, anggota, kata kunci), filter bidang, urutan, dan opsi "hanya yang sudah unggah".
- Halaman detail tiap kelompok dengan tautan yang bisa dibagikan, misalnya `…/#kelompok-07`.
- PDF dibaca langsung di halaman (desktop) atau dibuka di tab baru (HP); galeri dokumentasi dengan lightbox.
- Navigasi keyboard: ← → pindah kelompok di halaman detail, Esc untuk menutup.

## Sebelum dibagikan

- [ ] `modeContoh: false` di `data/kelompok.js`
- [ ] Semua komentar `TODO` sudah diganti
- [ ] Coba buka 2–3 halaman kelompok di HP
- [ ] Tidak ada nomor HP atau data pribadi lain di data (NIM bersifat opsional)
