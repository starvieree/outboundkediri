# Panduan & Template Standar HTML Artikel Blog Outbound Kediri

Dokumen ini adalah panduan lengkap dan **template HTML standar** untuk membuat artikel blog baru di website **Outbound Kediri** (`outboundkediri.web.id`). 

Dengan menggunakan template ini, seluruh artikel blog baru yang dibuat setiap hari akan memiliki **struktur HTML, gaya visual, elemen SEO, dan tata letak UI yang 100% konsisten** dengan halaman `outbound-kediri.html`.

---

## 📋 Checklist Pembuatan Artikel Baru

Sebelum mempublikasikan artikel baru di folder `blog/[nama-slug].html`, pastikan Anda telah menyiapkan data berikut:

1. **Judul Artikel (H1):** Singkat, menarik, mengandung kata kunci utama.
2. **Meta Title & Description:** 
   - Title: Max 60-70 karakter.
   - Description: Max 150-160 karakter.
3. **Slug URL:** Contoh `/blog/cara-memilih-tempat-outbound-di-kediri`.
4. **Gambar Artikel:**
   - Hero Image (`/assets/img/[slug]-1.webp`) - Rasio 16:9 (`aspect-ratio: 16/9`).
   - Gambar pendukung (`/assets/img/[slug]-2.webp`) - Rasio 16:9 (`aspect-ratio: 16/9`, dibungkus `<div class="hero-art">` agar ukurannya di mobile dan desktop sama persis dengan gambar utama).
   - Alt Text untuk setiap gambar.
5. **Tanggal Rilis:** Format ISO `YYYY-MM-DD` untuk JSON-LD dan format teks `DD MMMM YYYY` untuk tampilan meta.
6. **Waktu Baca:** Estimasi waktu baca (misal `6 Menit Baca`).
7. **Daftar Isi (`#id` Anchor):** Setiap `<h2>` harus memiliki atribut `id="..."` yang sesuai dengan tautan di Daftar Isi.

---

## 📑 Template HTML Artikel Blog Baru (Siap Copas)

Salin kode HTML di bawah ini ke dalam file baru (misalnya: `blog/judul-artikel-baru.html`), lalu ganti teks di dalam tanda kurung siku `[SEPERTI INI]` sesuai konten artikel Anda.

```html
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Judul Artikel Lengkap SEO - Outbound Kediri]</title>
<meta name="description" content="[Deskripsi singkat artikel untuk meta description, maksimal 150-160 karakter.]">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="geo.region" content="ID-JI">
<meta name="geo.placename" content="Kediri">
<meta name="geo.position" content="-7.8140;111.9887">
<meta name="ICBM" content="-7.8140, 111.9887">
<link rel="canonical" href="https://outboundkediri.web.id/blog/[nama-slug-artikel]">
<link rel="icon" href="/assets/img/logo.webp" type="image/webp">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Outbound Kediri">
<meta property="og:title" content="[Judul Artikel Lengkap SEO]">
<meta property="og:description" content="[Deskripsi singkat artikel untuk OpenGraph.]">
<meta property="og:url" content="https://outboundkediri.web.id/blog/[nama-slug-artikel]">
<meta property="og:locale" content="id_ID">
<meta property="og:image" content="https://outboundkediri.web.id/assets/img/[nama-slug-artikel]-1.webp">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Judul Artikel Lengkap SEO]">
<meta name="twitter:description" content="[Deskripsi singkat artikel untuk Twitter.]">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
<link rel="stylesheet" href="/assets/css/style.css" media="print" onload="this.media='all'">
<noscript>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/style.css">
</noscript>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Judul Artikel Lengkap SEO]",
  "description": "[Deskripsi singkat artikel untuk Schema.org JSON-LD.]",
  "author": {"@type": "Person", "name": "Arinda Zakia", "jobTitle": "Penulis"},
  "publisher": {"@id": "https://outboundkediri.web.id/#organization"},
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "mainEntityOfPage": "https://outboundkediri.web.id/blog/[nama-slug-artikel]",
  "image": "https://outboundkediri.web.id/assets/img/[nama-slug-artikel]-1.webp"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Beranda","item":"https://outboundkediri.web.id/"},
    {"@type":"ListItem","position":2,"name":"Blog & Panduan Edukatif","item":"https://outboundkediri.web.id/blog"},
    {"@type":"ListItem","position":3,"name":"[Judul Singkat Breadcrumb]","item":"https://outboundkediri.web.id/blog/[nama-slug-artikel]"}
  ]
}
</script>
</head>
<body class="no-animate">

<header class="site-header">
  <nav class="nav-bar" aria-label="Navigasi utama">
    <a href="/" class="brand" aria-label="Outbound Kediri - Beranda">
      <img src="/assets/img/logo.webp" alt="Logo Outbound Kediri" width="42" height="42" fetchpriority="high" style="border-radius: 4px;">
      <span class="brand-text"><strong>Outbound Kediri</strong><span>Lereng Gunung Wilis</span></span>
    </a>
    <div class="nav-right">
      <ul class="nav-menu">
        <li><a href="/" class="nav-link ">Beranda</a></li>
        <li><a href="/tentang" class="nav-link ">Tentang</a></li>
        <li class="has-dropdown">
            <a href="#" class="nav-link " aria-haspopup="true">Paket <span class="caret"></span></a>
          <div class="dropdown-panel" role="menu">
            <a href="/paket/paket-outbound" role="menuitem">Corporate Team Building Kediri</a>
            <a href="/paket/paket-family" role="menuitem">Employee &amp; Family Gathering</a>
            <a href="/paket/rafting-paintball" role="menuitem">Rafting &amp; Paintball Wargame</a>
            <a href="/paket/paket-edukasi" role="menuitem">School Character Building &amp; LDKS</a>
          </div>
        </li>
        <li><a href="/lokasi-venue" class="nav-link ">Wahana</a></li>
        <li><a href="/galeri" class="nav-link ">Galeri</a></li>
        <li><a href="/blog" class="nav-link active">Blog</a></li>
      </ul>
      <a href="https://wa.me/6282211221909" class="btn btn-primary cta-desktop">Konsultasi Gratis</a>
      <button class="hamburger" id="hamburgerBtn" aria-label="Buka menu navigasi" aria-expanded="false" aria-controls="mobileMenu"><span></span><span></span><span></span></button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <div class="wrap">
      <a href="/" class="mobile-link">Beranda</a>
      <a href="/tentang" class="mobile-link">Tentang</a>
      <div class="mobile-accordion" id="mobileAccordion">
        <button class="mobile-link" id="mobileDropdownBtn" style="width:100%; text-align:left;" aria-expanded="false">Paket <span class="caret"></span></button>
        <div class="mobile-sub">
          <a href="/paket/paket-outbound">Corporate Team Building Kediri</a>
          <a href="/paket/paket-family">Employee &amp; Family Gathering</a>
          <a href="/paket/rafting-paintball">Rafting &amp; Paintball Wargame</a>
          <a href="/paket/paket-edukasi">School Character Building &amp; LDKS</a>
        </div>
      </div>
      <a href="/lokasi-venue" class="mobile-link">Wahana</a>
      <a href="/galeri" class="mobile-link">Galeri</a>
      <a href="/blog" class="mobile-link">Blog</a>
      <div class="mobile-cta"><a href="https://wa.me/6282211221909" class="btn btn-primary btn-block">Konsultasi Gratis</a></div>
    </div>
  </div>
</header>

<main>
<div class="wrap"><div class="breadcrumb"><a href="/">Beranda</a><span>/</span><a href="/blog">Blog &amp; Panduan Edukatif</a><span>/</span>[Judul Singkat Breadcrumb]</div></div>

<section class="section tight" style="padding-top: 16px;">
  <div class="wrap">
    <span class="tag-pill">[Kategori Artikel, misal: Panduan Outbound / Team Building / Venue]</span>
    <h1 style="margin:14px 0 16px; max-width:24ch;">[Judul Artikel Utama H1]</h1>
    <div class="blog-meta" style="margin-bottom:0; display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
      <span style="display:flex; align-items:center; gap:6px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Arinda Zakia</span>
      <span style="display:flex; align-items:center; gap:6px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> [X] Menit Baca</span>
      <span style="display:flex; align-items:center; gap:6px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> [DD MMMM YYYY]</span>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0;">
  <div class="wrap article-layout">
    <div class="article-body">
      <!-- Hero Image (Gambar 1 Utama) -->
      <div class="hero-art" style="aspect-ratio:16/9; margin-bottom: 8px; max-width: 1200px; margin-left: auto; margin-right: auto;">
        <img class="ph-img" src="/assets/img/[nama-slug-artikel]-1.webp" alt="[Deskripsi gambar utama]" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg);">
      </div>
      <p style="font-size: 0.85rem; color: var(--ink-500); text-align: center; font-style: italic; margin-bottom: 0;">[Keterangan/Caption gambar utama.]</p>

      <!-- Ringkasan / Callout Box -->
      <div class="callout-box" style="margin-top: 24px;">
        <strong>Ringkasan</strong><br>
        <strong>[Kata Kunci Utama]</strong> [Penjelasan umum 1-2 kalimat mengenai topik artikel ini].
        <ul style="margin-top: 12px; margin-bottom: 0; list-style-type: disc; padding-left: 20px;">
          <li>[Poin ringkasan 1]</li>
          <li>[Poin ringkasan 2]</li>
          <li>[Poin ringkasan 3]</li>
          <li>[Poin ringkasan 4]</li>
          <li>[Poin ringkasan 5]</li>
        </ul>
      </div>

      <!-- Daftar Isi (Table of Contents) -->
      <details class="toc-box" style="margin-top:32px; margin-bottom:32px; position:static;" open>
        <summary style="cursor:pointer; font-size:1.05rem; font-weight:600; color:var(--dark-green); border-bottom:2px solid var(--green-700); padding-bottom:8px; display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; list-style:none;">
          <span>Daftar Isi</span>
          <svg class="toc-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease;"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </summary>
        <style>
          .toc-box summary::-webkit-details-marker { display: none; }
          .toc-box[open] .toc-icon { transform: rotate(180deg); }
        </style>
        <ol>
          <li><a href="#subjudul-1">[Judul Sub-Bab 1]</a></li>
          <li><a href="#subjudul-2">[Judul Sub-Bab 2]</a></li>
          <li><a href="#subjudul-3">[Judul Sub-Bab 3]</a></li>
          <li><a href="#faq">FAQ [Topik Artikel]</a></li>
        </ol>
      </details>

      <!-- ISI KONTEN UTAMA ARTIKEL -->

      <h2 id="subjudul-1">[Judul Sub-Bab 1]</h2>
      <p>[Paragraf pembuka sub-bab 1. Gunakan bahasa yang lugas, edukatif, dan ramah pembaca.]</p>
      <p>[Paragraf tambahan penjelasan.]</p>

      <h2 id="subjudul-2">[Judul Sub-Bab 2]</h2>
      <p>[Paragraf penjelasan sub-bab 2.]</p>
      
      <ul style="list-style-type: disc; padding-left: 20px;">
        <li><strong>[Poin 1]:</strong> [Penjelasan poin 1].</li>
        <li><strong>[Poin 2]:</strong> [Penjelasan poin 2].</li>
        <li><strong>[Poin 3]:</strong> [Penjelasan poin 3].</li>
      </ul>

      <!-- Gambar Pendukung (Gambar 2) di Tengah Artikel - Menggunakan .hero-art agar responsive 1:1 dengan Gambar 1 -->
      <div class="hero-art" style="aspect-ratio:16/9; margin: 32px 0 8px; max-width: 1200px; margin-left: auto; margin-right: auto;">
        <img class="ph-img" src="/assets/img/[nama-slug-artikel]-2.webp" alt="[Deskripsi gambar pendukung]" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg);" width="884" height="494">
      </div>
      <p style="font-size: 0.85rem; color: var(--ink-500); text-align: center; font-style: italic; margin-bottom: 0;">[Caption gambar pendukung.]</p>

      <!-- Internal Link / Baca Juga (Tepat di Tengah Artikel - Sesuaikan URL & Judul Artikel Terkait) -->
      <div class="callout-box">
        <strong>Baca Juga:</strong> <a href="/blog/[slug-artikel-terkait]" style="color: var(--green-700); text-decoration: none; font-weight: normal;">[Judul Artikel Terkait]</a>
      </div>

      <h2 id="subjudul-3">[Judul Sub-Bab 3]</h2>
      <p>[Paragraf penjelasan sub-bab 3.]</p>

      <!-- Tabel jika diperlukan -->
      <div class="table-scroll" style="margin: 24px 0;">
        <table style="width:100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="background-color: var(--green-50); border-bottom: 2px solid var(--green-200);">
              <th style="padding: 12px; border: 1px solid var(--line);">Kolom 1</th>
              <th style="padding: 12px; border: 1px solid var(--line);">Kolom 2</th>
              <th style="padding: 12px; border: 1px solid var(--line);">Kolom 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border: 1px solid var(--line);">Data A1</td>
              <td style="padding: 12px; border: 1px solid var(--line);">Data A2</td>
              <td style="padding: 12px; border: 1px solid var(--line);">Data A3</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid var(--line);">Data B1</td>
              <td style="padding: 12px; border: 1px solid var(--line);">Data B2</td>
              <td style="padding: 12px; border: 1px solid var(--line);">Data B3</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- FAQ Accordion -->
      <h2 id="faq">FAQ [Topik Artikel]</h2>
      <p>Berikut adalah jawaban atas pertanyaan umum terkait [topik artikel].</p>
      
      <div class="faq-accordion" style="display: flex; flex-direction: column; gap: 12px; margin-top: 24px;">
        <details style="background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden;" open>
          <summary style="padding: 16px 20px; font-weight: 600; color: var(--dark-green); cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; background: var(--green-50);">
            [Pertanyaan FAQ 1?]
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease;"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </summary>
          <div style="padding: 16px 20px; border-top: 1px solid var(--line);">
            <p style="margin: 0;">[Jawaban lengkap FAQ 1.]</p>
          </div>
        </details>

        <details style="background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden;">
          <summary style="padding: 16px 20px; font-weight: 600; color: var(--dark-green); cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; background: var(--green-50);">
            [Pertanyaan FAQ 2?]
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease;"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </summary>
          <div style="padding: 16px 20px; border-top: 1px solid var(--line);">
            <p style="margin: 0;">[Jawaban lengkap FAQ 2.]</p>
          </div>
        </details>

        <details style="background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-md); overflow: hidden;">
          <summary style="padding: 16px 20px; font-weight: 600; color: var(--dark-green); cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; background: var(--green-50);">
            [Pertanyaan FAQ 3?]
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.3s ease;"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </summary>
          <div style="padding: 16px 20px; border-top: 1px solid var(--line);">
            <p style="margin: 0;">[Jawaban lengkap FAQ 3.]</p>
          </div>
        </details>
      </div>
      
      <style>
        .faq-accordion details summary::-webkit-details-marker { display: none; }
        .faq-accordion details[open] summary svg { transform: rotate(180deg); }
      </style>

      <!-- Kesimpulan Box -->
      <div class="callout-box" style="margin-top: 32px;">
        <strong>Kesimpulan</strong><br>
        <strong>[Kata Kunci Utama]</strong> [Ringkasan kesimpulan artikel].
        <ul style="margin-top: 12px; margin-bottom: 0; list-style-type: disc; padding-left: 20px;">
          <li>[Poin kesimpulan 1]</li>
          <li>[Poin kesimpulan 2]</li>
          <li>[Poin kesimpulan 3]</li>
        </ul>
      </div>

      <!-- Tombol Bagikan Social Media -->
      <div class="share-box" style="margin: 40px 0 20px; padding-top: 20px; border-top: 1px solid var(--line); display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        <strong style="font-size: .9rem; color: var(--ink-700);">Bagikan Artikel:</strong>
        <a href="https://api.whatsapp.com/send?text=[Judul%20Artikel]%20https://outboundkediri.web.id/blog/[nama-slug-artikel]" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: #25D366; color: white; text-decoration: none;" aria-label="Bagikan ke WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://outboundkediri.web.id/blog/[nama-slug-artikel]" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: #1877F2; color: white; text-decoration: none;" aria-label="Bagikan ke Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>
        <a href="https://twitter.com/intent/tweet?text=[Judul%20Artikel]&url=https://outboundkediri.web.id/blog/[nama-slug-artikel]" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: #000000; color: white; text-decoration: none;" aria-label="Bagikan ke X (Twitter)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://outboundkediri.web.id/blog/[nama-slug-artikel]&title=[Judul%20Artikel]" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: #0A66C2; color: white; text-decoration: none;" aria-label="Bagikan ke LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>

      <!-- Author Box -->
      <div class="author-box" style="display: flex; flex-direction: column; align-items: flex-start; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div class="author-avatar" style="overflow: hidden;"><img src="/assets/img/arinda-zakia.webp" alt="Arinda Zakia" style="width: 100%; height: 100%; object-fit: cover;"></div>
          <div style="display: flex; flex-direction: column;">
            <strong>Arinda Zakia</strong>
            <span style="font-size: .8rem; color: var(--ink-500);">Corporate Event Consultant &amp; Penulis</span>
          </div>
        </div>
        <div><p style="margin:0; font-size:.84rem;">Praktisi komunikasi korporat dan konsultan <em>event management</em> yang berfokus pada perancangan program <em>experiential learning</em>. Aktif menulis panduan strategis seputar <em>team building</em>, pengembangan kapasitas SDM, dan manajemen kegiatan luar ruang untuk instansi serta perusahaan.</p></div>
      </div>
    </div>

    <!-- SIDEBAR KANAN (PILLAR CARDS) -->
    <aside>
      <!-- Widget Toolkit -->
      <div class="pillar-card" style="padding: 0; background: linear-gradient(135deg, var(--green-50), var(--white)); border: 1px solid var(--green-200); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-soft); margin-bottom: 24px; position: relative; display: flex; flex-direction: column;">
        <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="font-size:1.05rem; color: var(--dark-green); margin-bottom: 12px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--gold-500);"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            Toolkit Panitia 2026
          </h3>
          <p style="font-size:.85rem; color: var(--ink-700); margin-bottom: 16px; flex-grow: 1;">Free Template RAB &amp; Rundown Outbound. Paket file (.xlsx &amp; .docx) berisi timeline D-30, checklist logistik medis, skenario pembagian tim, dan contoh form evaluasi kepuasan peserta.</p>
          <a href="https://wa.me/6282211221909" class="btn btn-primary btn-sm btn-block" style="padding: 10px; font-size: 0.85rem;">Download Gratis Template RAB</a>
        </div>
      </div>

      <!-- Widget Konsultasi Vendor -->
      <div class="pillar-card" style="padding: 0; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-soft); margin-bottom: 24px; position: relative; display: flex; flex-direction: column;">
        <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="font-size:1.05rem; color: var(--dark-green); margin-bottom: 12px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--green-700);"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            Ragu Menilai Penawaran Vendor Anda?
          </h3>
          <p style="font-size:.85rem; color: var(--ink-700); margin-bottom: 16px; flex-grow: 1;">Kirimkan proposal penawaran vendor lain ke tim kita, kami bantu telaah kelengkapan legalitas SOP keselamatan dan kewajaran anggaran secara netral &amp; gratis.</p>
          <a href="https://wa.me/6282211221909" class="btn btn-outline btn-sm btn-block" style="padding: 10px; font-size: 0.85rem;">Konsultasi WA Gratis</a>
        </div>
      </div>

      <!-- Promo Paket Corporate -->
      <div class="pillar-card" style="padding: 0; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-soft); margin-bottom: 24px; position: relative; display: flex; flex-direction: column;">
        <span style="position:absolute; top:12px; left:12px; background:var(--gold-500); color:var(--dark-green); font-size:.7rem; font-weight:700; padding:5px 12px; border-radius:999px; z-index:2;">Best Seller Perusahaan</span>
        <img src="/assets/img/corporate-gathering-team-building-kediri.webp" alt="Corporate Gathering &amp; Team Building" style="width: 100%; height: 160px; object-fit: cover; display: block;">
        <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="font-size:1.05rem; color: var(--dark-green); margin-bottom: 8px; margin-top: 0;">Corporate Gathering &amp; Team Building</h3>
          <p style="font-size:.85rem; color: var(--ink-700); margin-bottom: 16px; flex-grow: 1;">Simulasi kepemimpinan &amp; sinergi tim kerja problem solving ala Experiential Learning.</p>
          <a href="/paket/paket-outbound" class="btn btn-outline btn-sm btn-block" style="padding: 10px; font-size: 0.85rem;">Lihat Detail Paket</a>
        </div>
      </div>

      <!-- Promo Paket Sekolah -->
      <div class="pillar-card" style="padding: 0; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-soft); margin-bottom: 24px; position: relative; display: flex; flex-direction: column;">
        <span style="position:absolute; top:12px; left:12px; background:var(--gold-500); color:var(--dark-green); font-size:.7rem; font-weight:700; padding:5px 12px; border-radius:999px; z-index:2;">Ramah Anak &amp; Anti-Bentakan</span>
        <img src="/assets/img/outbound-edukasi-sekolah-kediri-ldks.webp" alt="Outbound Edukasi &amp; LDKS Sekolah" style="width: 100%; height: 160px; object-fit: cover; display: block;">
        <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="font-size:1.05rem; color: var(--dark-green); margin-bottom: 8px; margin-top: 0;">Outbound Edukasi &amp; LDKS Sekolah</h3>
          <p style="font-size:.85rem; color: var(--ink-700); margin-bottom: 16px; flex-grow: 1;">Character building, kepanduan pramuka ceria, pembelajaran kemandirian &amp; kekompakan motorik outdoor.</p>
          <a href="/paket/paket-edukasi" class="btn btn-outline btn-sm btn-block" style="padding: 10px; font-size: 0.85rem;">Lihat Detail Paket</a>
        </div>
      </div>

      <!-- Promo Paket Family -->
      <div class="pillar-card" style="padding: 0; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-soft); margin-bottom: 24px; position: relative; display: flex; flex-direction: column;">
        <span style="position:absolute; top:12px; left:12px; background:var(--gold-500); color:var(--dark-green); font-size:.7rem; font-weight:700; padding:5px 12px; border-radius:999px; z-index:2;">Semua Usia (Balita - Lansia)</span>
        <img src="/assets/img/family-gathering-fun-outbound-kediri.webp" alt="Fun Outbound &amp; Family Gathering" style="width: 100%; height: 160px; object-fit: cover; display: block;">
        <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="font-size:1.05rem; color: var(--dark-green); margin-bottom: 8px; margin-top: 0;">Fun Outbound &amp; Family Gathering</h3>
          <p style="font-size:.85rem; color: var(--ink-700); margin-bottom: 16px; flex-grow: 1;">Rekreasi kebersamaan tanpa kontak fisik berat, ramah lintas usia balita sampai lansia.</p>
          <a href="/paket/paket-family" class="btn btn-outline btn-sm btn-block" style="padding: 10px; font-size: 0.85rem;">Lihat Detail Paket</a>
        </div>
      </div>

      <!-- Promo Paket Rafting Paintball -->
      <div class="pillar-card" style="padding: 0; background: var(--white); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-soft); position: relative; display: flex; flex-direction: column;">
        <span style="position:absolute; top:12px; left:12px; background:var(--gold-500); color:var(--dark-green); font-size:.7rem; font-weight:700; padding:5px 12px; border-radius:999px; z-index:2;">Sensasi Petualangan Adrenalin</span>
        <img src="/assets/img/wisata-rafting-jeram-kediri-paintball.webp" alt="Rafting Jeram &amp; Paintball Battle" style="width: 100%; height: 160px; object-fit: cover; display: block;">
        <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="font-size:1.05rem; color: var(--dark-green); margin-bottom: 8px; margin-top: 0;">Rafting Jeram &amp; Paintball Battle</h3>
          <p style="font-size:.85rem; color: var(--ink-700); margin-bottom: 16px; flex-grow: 1;">Jeram seru alami Sungai Konto &amp; adu strategi pertempuran paintball di rimbunnya hutan pinus.</p>
          <a href="/paket/rafting-paintball" class="btn btn-outline btn-sm btn-block" style="padding: 10px; font-size: 0.85rem;">Lihat Detail Paket</a>
        </div>
      </div>
    </aside>
  </div>
</section>

<!-- ARTIKEL TERKAIT (GRID 4 CARD) -->
<section class="section alt-bg">
  <div class="wrap">
    <div class="section-head center"><span class="eyebrow">Artikel &amp; Panduan Terkait Lainnya</span><h2>Artikel Terkait</h2></div>
    <div class="blog-grid">
      <article class="blog-card">
        <div class="blog-thumb"><img src="/assets/img/rundown-team-building-1-hari-kediri-1.webp" alt="Contoh Rundown Team Building 1 Hari di Kediri" loading="lazy" width="634" height="354"></div>
        <div class="blog-body"><span class="tag-pill">Team Building</span><h3 style="margin-top:8px;">Contoh Rundown Team Building 1 Hari di Kediri</h3><a href="/blog/rundown-team-building-1-hari-kediri" class="blog-link">Baca Selengkapnya...</a></div>
      </article>
      <article class="blog-card">
        <div class="blog-thumb"><img src="/assets/img/ide-games-team-building-outdoor-1.webp" alt="Ide Games Team Building Outdoor untuk 20-100 Peserta" loading="lazy" width="634" height="354"></div>
        <div class="blog-body"><span class="tag-pill">Team Building</span><h3 style="margin-top:8px;">Ide Games Team Building Outdoor untuk 20-100 Peserta</h3><a href="/blog/ide-games-team-building-outdoor" class="blog-link">Baca Selengkapnya...</a></div>
      </article>
      <article class="blog-card">
        <div class="blog-thumb"><img src="/assets/img/team-building-kediri-1.webp" alt="Team Building Kediri: Program Berbasis Tujuan Tim" loading="lazy" width="634" height="354"></div>
        <div class="blog-body"><span class="tag-pill">Team Building</span><h3 style="margin-top:8px;">Team Building Kediri: Program Berbasis Tujuan Tim</h3><a href="/blog/team-building-kediri" class="blog-link">Baca Selengkapnya...</a></div>
      </article>
      <article class="blog-card">
        <div class="blog-thumb"><img src="/assets/img/program-outbound-kediri-perusahaan-sekolah-komunitas-1.webp" alt="Program Outbound Kediri untuk Perusahaan, Sekolah, dan Komunitas" loading="lazy" width="634" height="354"></div>
        <div class="blog-body"><span class="tag-pill">Program Outbound</span><h3 style="margin-top:8px;">Program Outbound Kediri untuk Perusahaan, Sekolah, dan Komunitas</h3><a href="/blog/program-outbound-kediri-perusahaan-sekolah-komunitas" class="blog-link">Baca Selengkapnya...</a></div>
      </article>
    </div>
  </div>
</section>

<!-- BANNER CTA UTAMA -->
<section class="section" style="padding: 40px 0;">
  <div class="wrap">
    <div class="cta-banner">
      <div><h2>Ingin Mengundang Tim Lead Facilitator Membawakan Materi Team Building di Kantor Anda?</h2><p>Tim kami siap hadir untuk presentasi proposal, kurikulum experiential learning terarah, maupun dijadwalkan pembekalan pelatihan internal instansi Anda.</p></div>
      <div class="cta-actions"><a href="https://wa.me/6282211221909" class="btn btn-light">Minta Atur Jadwal</a></div>
    </div>
  </div>
</section>
</main>

<!-- FOOTER -->
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <div style="margin-bottom: 12px;">
        <a href="/" style="display: flex; align-items: center; gap: 10px; text-decoration: none; color: inherit;">
          <img src="/assets/img/logo.webp" alt="Logo Outbound Kediri" width="42" height="42" loading="lazy" style="border-radius: 4px;">
          <div style="display: flex; flex-direction: column;">
            <strong style="font-size: 1.2rem; line-height: 1.2;">Outbound Kediri</strong>
            <span style="font-size: .8rem; color: var(--ink-500);">Lereng Gunung Wilis</span>
          </div>
        </a>
      </div>
      <p>Provider resmi penyelenggara outbound, team building, capacity building, family gathering, rafting, dan paintball berlisensi BNSP di kawasan lereng Gunung Wilis, Kediri.</p>
    </div>
    <div class="footer-col"><h3>Layanan &amp; Paket</h3><ul><li><a href="/paket/paket-outbound">Corporate Team Building</a></li><li><a href="/paket/paket-family">Family Gathering</a></li><li><a href="/paket/rafting-paintball">Rafting &amp; Paintball</a></li><li><a href="/paket/paket-edukasi">LDKS &amp; Sekolah</a></li></ul></div>
    <div class="footer-col"><h3>Direktori Venue</h3><ul><li><a href="/lokasi-venue">Kawasan Wisata Besuki &amp; Dolo</a></li><li><a href="/lokasi-venue">Area Wisata Sumber Ubalan</a></li><li><a href="/lokasi-venue">Bukit Gandrung Tanggulasi</a></li></ul></div>
    <div class="footer-col"><h3>Sekretariat &amp; Reservasi</h3><ul><li>Kawasan Lereng Gunung Wilis, Kediri</li><li>WhatsApp: +62 822-1122-1909</li><li>Setiap hari 07.30 - 21.00 WIB</li>
      <li style="margin-top: 12px;">
        <button id="networkBtn" style="background: none; border: none; color: var(--white); font-size: .85rem; cursor: pointer; display: flex; align-items: center; gap: 6px; padding: 0; opacity: 0.9; transition: opacity 0.2s ease;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.9'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          Our Network
        </button>
      </li>
    </ul></div>
  </div>
  <div class="wrap footer-bottom"><span>© 2026 Outbound Kediri. Hak Cipta Dilindungi. Provider Berlisensi BNSP Republik Indonesia.</span></div>
</footer>

<!-- Network Popup -->
<div id="networkPopup" class="network-popup">
  <div class="network-popup-content">
    <div class="network-popup-header">
      <h3>Our Network</h3>
      <button id="closeNetworkBtn" aria-label="Close">&times;</button>
    </div>
    <ul class="network-list">
      <li><a href="https://provideroutbound.web.id" target="_blank" rel="noopener noreferrer">Provider Outbound</a></li>
      <li><a href="https://outboundbatumalang.web.id" target="_blank" rel="noopener noreferrer">Outbound Batu Malang</a></li>
      <li><a href="https://outboundmalang.web.id" target="_blank" rel="noopener noreferrer">Outbound Malang</a></li>
      <li><a href="https://paketoutboundmalang.web.id" target="_blank" rel="noopener noreferrer">Paket Outbound Malang</a></li>
      <li><a href="https://vendoroutboundmalang.web.id" target="_blank" rel="noopener noreferrer">Vendor Outbound Malang</a></li>
      <li><a href="https://offroad.web.id" target="_blank" rel="noopener noreferrer">Offroad</a></li>
      <li><a href="https://paintball.web.id" target="_blank" rel="noopener noreferrer">Paintball</a></li>
      <li><a href="https://rafting.web.id" target="_blank" rel="noopener noreferrer">Rafting</a></li>
      <li><a href="https://outboundpantai.web.id" target="_blank" rel="noopener noreferrer">Outbound Pantai</a></li>
      <li><a href="https://paintballbatumalang.web.id" target="_blank" rel="noopener noreferrer">Paintball Batu Malang</a></li>
      <li><a href="https://cobanrondo.web.id" target="_blank" rel="noopener noreferrer">Coban Rondo</a></li>
      <li><a href="https://malangtraveler.web.id" target="_blank" rel="noopener noreferrer">Malang Traveler</a></li>
      <li><a href="https://pantaimalangselatan.web.id" target="_blank" rel="noopener noreferrer">Pantai Malang Selatan</a></li>
      <li><a href="https://jasaoutboundmalang.web.id" target="_blank" rel="noopener noreferrer">Jasa Outbound Malang</a></li>
      <li><a href="https://indonesiaoutbound.web.id" target="_blank" rel="noopener noreferrer">Indonesia Outbound</a></li>
      <li><a href="https://gemilangkatunoutbound.web.id" target="_blank" rel="noopener noreferrer">Gemilang Katun Outbound</a></li>
      <li><a href="https://outboundjatim.web.id" target="_blank" rel="noopener noreferrer">Outbound Jatim</a></li>
      <li><a href="https://outboundindonesia.web.id" target="_blank" rel="noopener noreferrer">Outbound Indonesia</a></li>
    </ul>
  </div>
</div>
<a href="#" class="scroll-top" aria-label="Kembali ke atas" id="scrollTopBtn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg></a>
<script src="/assets/js/main.js" defer></script>
</body>
</html>