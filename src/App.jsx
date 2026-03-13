import { useEffect } from 'react'
import './App.css'

const baseUrl = import.meta.env.BASE_URL

const highlights = [
  'Desain custom menyesuaikan fasad rumah atau bangunan',
  'Tampilan premium dengan struktur yang tetap kokoh',
  'Lebih meyakinkan untuk calon pelanggan yang lihat dari HP',
]

const marqueeItems = [
  'Pagar Custom',
  'Canopy Modern',
  'Railing Balkon',
  'Railing Tangga',
  'Pintu Garasi',
  'Finishing Rapi',
  'Survey & Ukur',
  'Pemasangan Presisi',
]

const services = [
  {
    title: 'Pagar Custom',
    description:
      'Pagar rumah yang dirancang untuk memberi rasa aman sekaligus memperkuat tampilan depan bangunan.',
    points: ['Model minimalis sampai klasik', 'Bukaan swing atau sliding', 'Proporsi rangka dan bilah lebih presisi'],
  },
  {
    title: 'Railing Balkon',
    description:
      'Railing balkon yang aman dipakai setiap hari tanpa membuat tampilan bangunan terasa berat.',
    points: ['Visual lebih bersih', 'Pilihan motif vertikal atau horizontal', 'Cocok untuk rumah, kos, dan ruko'],
  },
  {
    title: 'Canopy Modern',
    description:
      'Solusi pelindung teras atau carport yang tetap enak dilihat dari luar dan nyaman untuk aktivitas harian.',
    points: ['Rangka rapi', 'Cocok untuk area usaha dan rumah', 'Material atap bisa disesuaikan kebutuhan'],
  },
  {
    title: 'Railing Tangga',
    description:
      'Railing tangga indoor maupun outdoor yang fokus pada kenyamanan genggam, keamanan, dan detail akhir.',
    points: ['Aman untuk keluarga', 'Menyatu dengan interior', 'Finishing bisa dibuat lebih elegan'],
  },
  {
    title: 'Pintu Garasi',
    description:
      'Pintu garasi yang kuat, nyaman dipakai, dan tetap selaras dengan desain rumah di bagian depan.',
    points: ['Bisa lipat atau dorong', 'Lebih rapi untuk fasad depan', 'Menjaga area garasi terasa aman'],
  },
]

const galleryItems = [
  {
    category: 'Gerbang & Pagar',
    title: 'Visual gerbang yang tegas, modern, dan terasa mahal saat pertama dilihat.',
    description:
      'Kesan pertama rumah banyak ditentukan dari pagar dan gerbang. Karena itu, komposisi rangka, ritme bilah, dan finishing harus kelihatan matang sejak pandangan pertama.',
    image: `${baseUrl}images/gate-hero.jpg`,
    alt: 'Gerbang besi hitam pada rumah modern.',
  },
  {
    category: 'Railing Balkon',
    title: 'Railing yang aman dipakai, tapi tetap ringan secara visual di area atas rumah.',
    description:
      'Railing balkon yang bagus tidak hanya kuat, tetapi juga memberi kesan bersih dari kejauhan. Detail seperti tinggi railing dan pola sambungan sangat berpengaruh.',
    image: `${baseUrl}images/railing-showcase.jpg`,
    alt: 'Railing balkon besi hitam pada area luar rumah.',
  },
  {
    category: 'Pintu Garasi',
    title: 'Bidang pintu garasi yang rapi membuat fasad rumah terlihat lebih tertata.',
    description:
      'Untuk pintu garasi, orang biasanya mencari kombinasi antara keamanan, bukaan yang nyaman, dan tampilan yang tidak merusak desain bagian depan rumah.',
    image: `${baseUrl}images/garage-showcase.jpg`,
    alt: 'Pintu garasi sederhana pada area rumah.',
  },
]

const projectFits = [
  {
    title: 'Rumah Baru',
    description:
      'Cocok untuk pemilik rumah yang ingin semua elemen besi tampil seragam dari gerbang sampai railing tangga.',
  },
  {
    title: 'Renovasi Fasad',
    description:
      'Pas untuk rumah lama yang butuh wajah baru agar tampilan depan terasa lebih modern, bersih, dan meyakinkan.',
  },
  {
    title: 'Kos, Ruko, dan Kantor',
    description:
      'Ideal untuk bangunan usaha yang butuh kombinasi visual profesional, keamanan, dan daya tahan penggunaan harian.',
  },
]

const processSteps = [
  {
    title: 'Kirim Referensi atau Foto Lokasi',
    description:
      'Calon pelanggan bisa mulai dari kirim inspirasi model, ukuran kasar, atau foto bangunan agar arahnya cepat terbaca.',
  },
  {
    title: 'Survey dan Ukur Lapangan',
    description:
      'Tahap ini penting supaya semua detail seperti tinggi, bukaan, kemiringan, dan titik pemasangan benar-benar pas.',
  },
  {
    title: 'Produksi dengan Detail yang Rapi',
    description:
      'Rangka, sambungan, dan finishing dikerjakan agar hasil tidak terlihat asal jadi, terutama saat dilihat dari dekat.',
  },
  {
    title: 'Pemasangan dan Finishing Akhir',
    description:
      'Setelah terpasang, hasil akhir disesuaikan lagi supaya terlihat solid, nyaman digunakan, dan enak dipandang.',
  },
]

const faqs = [
  {
    question: 'Kenapa isi website ini sekarang lebih banyak bacaan?',
    answer:
      'Karena bisnis seperti bengkel las butuh trust. Copy yang lebih kaya membantu calon pelanggan memahami kualitas pengerjaan, alur kerja, dan jenis proyek yang bisa ditangani tanpa harus banyak menebak.',
  },
  {
    question: 'Animasinya aman untuk pengguna Android?',
    answer:
      'Aman. Aku pakai animasi masuk yang ringan, transisi lembut, dan gerakan dekoratif sederhana supaya terasa hidup tanpa bikin loading terasa berat.',
  },
  {
    question: 'Foto yang dipakai sekarang dari mana?',
    answer:
      'Foto sementara diambil dari internet sebagai visual tematik yang masih relevan dengan pagar, railing, pintu garasi, dan eksterior rumah. Nanti paling bagus tetap diganti foto proyek asli klien.',
  },
  {
    question: 'Kalau nanti ada foto proyek asli, bisa diganti cepat?',
    answer:
      'Bisa cepat. Struktur layout gallery dan hero sudah dibuat supaya tinggal ganti file gambar dan teks pendeknya saja.',
  },
]

const prepItems = [
  'Nomor WhatsApp bisnis yang aktif',
  'Area layanan yang ingin ditonjolkan',
  '5 sampai 10 foto proyek asli terbaik',
  'Kalimat singkat tentang keunggulan bengkel',
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <a className="floating-cta" href="#contact">
        Minta Estimasi
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Lestari Las">
            <span className="brand-mark">LL</span>
            <span>
              <strong>Lestari Las</strong>
              <small>Pagar, canopy, railing, pintu garasi</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Navigasi utama">
            <a href="#services">Layanan</a>
            <a href="#portfolio">Galeri</a>
            <a href="#process">Proses</a>
            <a href="#contact">Kontak</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Website Bengkel Las yang Dibikin Lebih Hidup, Lebih Penuh, dan Lebih Meyakinkan</p>
              <h1>Pagar, Canopy, Railing, dan Pintu Garasi yang Kelihatan Rapi Sejak Scroll Pertama</h1>
              <p className="hero-text">
                Halaman ini sekarang dibuat lebih kaya isi dan visual supaya calon pelanggan tidak
                cuma melihat daftar jasa, tetapi langsung merasakan kualitas pengerjaan, gaya
                desain, dan keseriusan brand sejak mereka membuka website dari Android atau HP
                biasa sekalipun.
              </p>
              <p className="hero-subtext">
                Fokusnya bukan sekadar cantik, tetapi membuat orang berhenti sebentar, membaca,
                lalu merasa bahwa bengkel ini memang layak diajak konsultasi.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Konsultasi Proyek
                </a>
                <a className="button button-secondary" href="#portfolio">
                  Lihat Galeri
                </a>
              </div>

              <ul className="hero-highlights" aria-label="Keunggulan utama">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero-visual-cluster">
              <figure className="hero-media hero-media-primary" data-reveal style={{ '--delay': '80ms' }}>
                <img src={galleryItems[0].image} alt={galleryItems[0].alt} fetchPriority="high" />
                <figcaption>
                  <span>Hero Visual</span>
                  <strong>Gerbang custom untuk fasad rumah yang ingin tampil lebih kuat.</strong>
                </figcaption>
              </figure>

              <figure className="hero-media hero-media-secondary" data-reveal style={{ '--delay': '180ms' }}>
                <img src={galleryItems[1].image} alt={galleryItems[1].alt} loading="lazy" />
                <figcaption>Railing balkon yang aman dan tetap ringan dilihat.</figcaption>
              </figure>

              <figure className="hero-media hero-media-tertiary" data-reveal style={{ '--delay': '260ms' }}>
                <img src={`${baseUrl}images/exterior-showcase.jpg`} alt="Eksterior rumah modern dengan pagar." loading="lazy" />
                <figcaption>Nuansa rumah modern yang lebih clean dan premium.</figcaption>
              </figure>

              <aside className="hero-note-card" data-reveal style={{ '--delay': '320ms' }}>
                <p>Built for mobile wow</p>
                <h2>Animasi masuk, layer gambar, dan copy yang lebih kaya bikin landing page terasa jauh lebih hidup.</h2>
                <span>Ringan dibuka, tetapi tetap terasa niat.</span>
              </aside>
            </div>
          </div>
        </section>

        <section className="marquee-section" aria-label="Marquee layanan">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section story-section">
          <div className="container story-layout">
            <div className="story-copy" data-reveal>
              <p className="section-kicker">Kenapa Dirombak Lebih Penuh</p>
              <h2>Website bengkel las lebih kuat kalau tidak terasa kosong.</h2>
              <p>
                Banyak website jasa berhenti di daftar layanan dan satu tombol kontak. Padahal untuk
                jasa pagar, canopy, railing, dan pintu garasi, orang butuh lebih dari itu. Mereka
                ingin melihat rasa, kualitas, dan karakter hasil kerja sebelum memutuskan untuk chat.
              </p>
              <p>
                Karena itu aku tambahkan bacaan yang lebih kaya, ritme section yang lebih variatif,
                dan foto-foto tematik agar calon pelanggan punya lebih banyak alasan untuk percaya.
                Hasilnya terasa lebih profesional, lebih niat, dan tidak seperti landing page template
                yang terlalu polos.
              </p>
            </div>

            <article className="story-card" data-reveal style={{ '--delay': '120ms' }}>
              <img src={galleryItems[2].image} alt={galleryItems[2].alt} loading="lazy" />
              <div className="story-card-body">
                <p className="section-kicker">Spotlight Detail</p>
                <h3>Pintu garasi yang rapi bisa langsung mengangkat tampilan depan rumah.</h3>
                <p>
                  Visual yang bersih, ukuran yang pas, dan bukaan yang nyaman sering jadi pembeda
                  antara pengerjaan biasa dan hasil yang terasa lebih matang.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Layanan Utama</p>
              <h2>Setiap layanan ditulis lebih detail supaya pengunjung langsung paham apa yang ditawarkan.</h2>
              <p>
                Bukan sekadar nama jasa, tetapi juga gambaran manfaat, model, dan karakter hasil yang
                dicari pelanggan saat mereka sedang membangun atau merenovasi rumah.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
                  <span className="service-index">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cinematic-section">
          <div className="container">
            <article className="cinematic-panel" data-reveal>
              <img src={`${baseUrl}images/exterior-showcase.jpg`} alt="Rumah modern dengan pagar dan area luar rapi." loading="lazy" />
              <div className="cinematic-overlay">
                <p className="section-kicker">Visual Atmosfer</p>
                <h2>Ketika gambar, copy, dan motion nyambung, website jasa terasa jauh lebih mahal.</h2>
                <p>
                  Section seperti ini membantu memberi jeda visual dan membuat pengalaman scroll di HP
                  terasa lebih sinematik, bukan cuma kumpulan kotak dan teks.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Galeri Inspirasi</p>
              <h2>Foto tematik dari internet dipakai sementara supaya halaman tidak terasa kosong.</h2>
              <p>
                Ini bukan foto proyek asli klien, tetapi cukup relevan untuk memberi mood visual yang
                tepat sambil menunggu foto real dari hasil pengerjaan bengkel.
              </p>
            </div>

            <div className="portfolio-grid">
              {galleryItems.map((item, index) => (
                <article className="portfolio-card" key={item.title} data-reveal style={{ '--delay': `${index * 120}ms` }}>
                  <div className="portfolio-image-wrap">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="portfolio-content">
                    <p>{item.category}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fit-section">
          <div className="container fit-layout">
            <div className="fit-copy" data-reveal>
              <p className="section-kicker">Cocok Untuk</p>
              <h2>Website ini sekarang lebih mudah dipakai untuk mengarahkan berbagai tipe calon pelanggan.</h2>
              <p>
                Baik yang sedang bangun rumah dari nol, renovasi tampak depan, maupun butuh
                pengerjaan untuk bangunan usaha, semuanya bisa merasa bahwa jasa ini relevan buat
                kebutuhan mereka.
              </p>
            </div>

            <div className="fit-cards">
              {projectFits.map((item, index) => (
                <article className="fit-card" key={item.title} data-reveal style={{ '--delay': `${index * 100}ms` }}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Alur Kerja</p>
              <h2>Penjelasan proses dibuat lebih lengkap supaya orang merasa alurnya jelas dan aman.</h2>
            </div>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article className="process-card" key={step.title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
                  <span className="process-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-layout">
            <div className="faq-copy" data-reveal>
              <p className="section-kicker">Pertanyaan Umum</p>
              <h2>Bagian FAQ ikut diperkaya supaya pengunjung dapat lebih banyak jawaban sebelum chat.</h2>
              <p>
                Ini berguna untuk mengurangi rasa ragu, terutama saat pengunjung baru pertama kali
                menemukan brand dan belum kenal kualitas kerjanya secara langsung.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} data-reveal style={{ '--delay': `${index * 80}ms` }}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-card" data-reveal>
            <div className="contact-copy">
              <p className="section-kicker">Langkah Final Biar Makin Nendang</p>
              <h2>Strukturnya sudah lebih wah. Tinggal isi data asli klien supaya siap buat closing.</h2>
              <p>
                Setelah nomor WhatsApp, area layanan, dan foto proyek asli dimasukkan, landing page
                ini bakal terasa jauh lebih kuat karena visual dan narasinya sudah siap menopang
                trust dari awal sampai akhir.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href="#top">
                Lihat Hero Lagi
              </a>
              <a className="button button-secondary" href="#portfolio">
                Cek Galeri
              </a>
            </div>

            <div className="prep-list" aria-label="Data final yang dibutuhkan">
              {prepItems.map((item, index) => (
                <article key={item} data-reveal style={{ '--delay': `${index * 70}ms` }}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Lestari Las. Landing page modern dengan visual tematik, motion ringan, dan copy yang lebih meyakinkan.</p>
          <a href="#top">Kembali ke atas</a>
        </div>
      </footer>
    </div>
  )
}

export default App
