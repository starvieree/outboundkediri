# Outbound Kediri Petualang Nusantara

Website resmi untuk **Outbound Kediri Petualang Nusantara**, provider layanan outbound, team building, capacity building, family gathering, rafting, dan paintball yang berlisensi BNSP di kawasan lereng Gunung Wilis, Kediri.

🔗 **Live Website:** [https://domain-anda.com](https://domain-anda.com)

---

## 📋 Daftar Isi
- [Fitur Utama](#-fitur-utama)
- [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
- [Struktur Direktori](#-struktur-direktori)
- [Panduan Pengembangan Lokal](#-panduan-pengembangan-lokal)
- [Panduan Deployment (Vercel)](#-panduan-deployment-vercel)
- [SEO & Performa](#-seo--performa)
- [Kontak & Dukungan](#-kontak--dukungan)

---

## ✨ Fitur Utama
- **Desain Responsif:** Tampilan yang optimal di berbagai perangkat (Desktop, Tablet, Mobile).
- **Katalog Paket Lengkap:** Informasi detail mengenai paket Corporate Team Building, Family Gathering, Rafting & Paintball, serta LDKS Sekolah.
- **Direktori Venue:** Daftar lokasi outbound terbaik di Kediri beserta fasilitasnya.
- **Blog & Artikel:** Tips dan wawasan seputar kegiatan outbound dan team building.
- **Network Popup:** Navigasi cepat ke jaringan provider outbound di kota-kota lain di Jawa Timur.
- **Integrasi WhatsApp:** Tombol floating CTA untuk konsultasi langsung via WhatsApp.
- **SEO Optimized:** Dilengkapi dengan Meta Tags, Open Graph, Twitter Cards, dan Schema Markup (JSON-LD).

---

## 🛠 Teknologi yang Digunakan
Website ini dibangun menggunakan teknologi web statis modern tanpa framework berat untuk memastikan kecepatan muat yang maksimal:
- **HTML5** (Semantic HTML)
- **CSS3** (Custom properties/variables, Flexbox, CSS Grid)
- **Vanilla JavaScript** (Interaktivitas DOM, Popup, Accordion, Scroll to top)
- **Vercel** (Hosting & Deployment)

---

## 📂 Struktur Direktori

```text
outboundkediri/
├── assets/
│   ├── css/
│   │   └── style.css          # File styling utama
│   ├── img/                   # Aset gambar (format WebP untuk performa)
│   └── js/
│       └── main.js            # Script interaktivitas website
├── blog/
│   └── 7-kesalahan-fatal...   # Artikel blog individual
├── paket/
│   ├── paket-edukasi.html     # Detail paket LDKS
│   ├── paket-family.html      # Detail paket Family Gathering
│   ├── paket-outbound.html    # Detail paket Corporate
│   └── rafting-paintball.html # Detail paket Rafting & Paintball
├── index.html                 # Halaman Utama (Beranda)
├── tentang.html               # Halaman Profil Perusahaan
├── lokasi-venue.html          # Halaman Direktori Lokasi
├── galeri.html                # Halaman Galeri Foto
├── blog.html                  # Halaman Daftar Artikel Blog
├── robots.txt                 # Aturan crawling untuk Search Engine
├── sitemap.xml                # Peta situs untuk indexing Google
├── vercel.json                # Konfigurasi deployment Vercel (Clean URLs & Headers)
└── README.md                  # Dokumentasi proyek ini
```

---

## 💻 Panduan Pengembangan Lokal

Karena website ini menggunakan HTML, CSS, dan JS murni, Anda tidak perlu menginstal dependensi Node.js (seperti `npm install`).

1. **Clone repositori ini** (jika menggunakan Git):
   ```bash
   git clone <url-repo-anda>
   ```
2. **Buka folder proyek** di Code Editor pilihan Anda (misalnya VS Code).
3. **Jalankan Local Server**:
   Sangat disarankan menggunakan ekstensi seperti **Live Server** di VS Code agar path absolut (seperti `/assets/...`) dapat dimuat dengan benar.
   - Klik kanan pada `index.html` -> Pilih **"Open with Live Server"**.

---

## 🚀 Panduan Deployment (Vercel)

Website ini telah dikonfigurasi secara khusus untuk di-deploy menggunakan **Vercel**. File `vercel.json` memastikan bahwa URL website bersih dari ekstensi `.html` (Clean URLs) dan memiliki header keamanan serta caching yang optimal.

**Langkah Deployment:**
1. Buat akun atau login ke [Vercel](https://vercel.com/).
2. Hubungkan akun GitHub/GitLab/Bitbucket Anda.
3. Klik **"Add New..."** -> **"Project"**.
4. Import repositori yang berisi kode website ini.
5. Pada bagian *Framework Preset*, biarkan sebagai **Other**.
6. Klik **Deploy**.

Vercel akan secara otomatis membaca file `vercel.json` dan menerapkan aturan routing:
- `https://domain-anda.com/tentang.html` ➡️ `https://domain-anda.com/tentang`

---

## 🔍 SEO & Performa

Website ini dirancang dengan memprioritaskan SEO (Search Engine Optimization):
- **Clean URLs:** Ekstensi `.html` dihilangkan untuk URL yang lebih ramah pengguna dan mesin pencari.
- **Schema Markup (JSON-LD):** Menggunakan skema `LocalBusiness`, `WebPage`, `Service`, `OfferCatalog`, dan `FAQPage` untuk memberikan konteks yang kaya kepada Google.
- **Meta Tags Lengkap:** Title, Description, Keywords, Canonical URL, Open Graph (Facebook/WhatsApp), dan Twitter Cards.
- **Sitemap & Robots.txt:** Memudahkan Googlebot untuk merayapi dan mengindeks seluruh halaman.
- **Format Gambar WebP:** Semua gambar menggunakan format `.webp` dengan atribut `loading="lazy"` untuk mempercepat waktu muat halaman (PageSpeed).

---

## 📞 Kontak & Dukungan

Jika ada pertanyaan terkait pengembangan website ini atau ingin melakukan pembaruan konten, silakan hubungi:

- **WhatsApp:** [Nomor WhatsApp Anda]
- **Alamat:** Kawasan Lereng Gunung Wilis, Kediri, Jawa Timur
- **Jam Operasional:** Setiap hari 07.30 - 21.00 WIB

---
*© 2026 Outbound Kediri Petualang Nusantara. Hak Cipta Dilindungi.*
