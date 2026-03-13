import './App.css'

const highlights = [
  'Custom sesuai ukuran bangunan',
  'Finishing rapi dan presisi',
  'Cocok untuk rumah, ruko, dan kantor',
]

const services = [
  {
    title: 'Pagar Custom',
    description:
      'Model minimalis, klasik, atau industrial dengan ukuran yang disesuaikan ke fasad bangunan.',
    detail: 'Bisa sliding, swing, dan kombinasi plat atau hollow.',
  },
  {
    title: 'Railing Balkon',
    description:
      'Tampilan aman dan bersih untuk balkon rumah, ruko, kos, dan bangunan bertingkat.',
    detail: 'Pilihan desain vertikal, horizontal, atau aksen laser cut.',
  },
  {
    title: 'Canopy Modern',
    description:
      'Pelindung teras, carport, atau area usaha dengan struktur rapi dan visual yang tetap ringan.',
    detail: 'Bisa disesuaikan dengan atap polycarbonate, spandek, atau kaca.',
  },
  {
    title: 'Railing Tangga',
    description:
      'Railing yang nyaman digenggam, proporsional dengan interior, dan tetap kuat untuk penggunaan harian.',
    detail: 'Cocok untuk tangga indoor maupun outdoor.',
  },
  {
    title: 'Pintu Garasi',
    description:
      'Pintu garasi besi yang kokoh dengan model lipat, dorong, atau desain custom sesuai bukaan.',
    detail: 'Fokus pada keamanan, tampilan, dan kelancaran pemakaian.',
  },
]

const showcaseItems = [
  {
    title: 'Pagar Minimalis Hollow',
    subtitle: 'Fasad rumah terlihat lebih rapi dan modern',
    specs: ['Garis tegas', 'Finishing bersih', 'Proporsi presisi'],
  },
  {
    title: 'Canopy Teras & Carport',
    subtitle: 'Perlindungan maksimal tanpa membuat tampilan berat',
    specs: ['Struktur stabil', 'Visual ringan', 'Material fleksibel'],
  },
  {
    title: 'Railing Balkon & Tangga',
    subtitle: 'Aman dipakai setiap hari dan tetap sedap dipandang',
    specs: ['Tinggi aman', 'Desain custom', 'Detail sambungan rapi'],
  },
]

const reasons = [
  'Bentuk, ukuran, dan ritme desain disesuaikan dengan karakter bangunan.',
  'Pilihan material dan finishing bisa diselaraskan dengan kebutuhan tampilan maupun budget.',
  'Pengerjaan difokuskan pada hasil yang presisi agar produk awet dan enak dilihat.',
  'Alur kerja dibuat jelas mulai dari konsultasi, ukur lapangan, produksi, sampai pemasangan.',
]

const materials = [
  'Besi hollow',
  'Galvanis',
  'Stainless',
  'Plat besi',
  'Cat finishing',
  'Powder coating',
]

const processSteps = [
  {
    title: 'Konsultasi Kebutuhan',
    description:
      'Anda kirim referensi model, ukuran kasar, atau foto lokasi untuk bahas arah desain.',
  },
  {
    title: 'Survey & Ukur',
    description:
      'Ukuran lapangan dicek supaya struktur, bukaan, dan detail pemasangan benar-benar pas.',
  },
  {
    title: 'Produksi Bengkel',
    description:
      'Material dipotong, dirakit, dan difinishing dengan fokus pada kekuatan dan kerapian.',
  },
  {
    title: 'Pemasangan Rapi',
    description:
      'Unit dipasang dengan penyesuaian akhir agar hasil akhirnya kokoh, aman, dan terlihat matang.',
  },
]

const faqs = [
  {
    question: 'Apakah model pagar atau railing bisa custom?',
    answer:
      'Bisa. Web ini memang diarahkan untuk jasa custom, jadi model, ukuran, dan detail visual bisa menyesuaikan bangunan maupun referensi yang Anda bawa.',
  },
  {
    question: 'Bisa konsultasi dulu sebelum produksi?',
    answer:
      'Bisa. Calon pelanggan dapat mulai dari diskusi kebutuhan, referensi desain, dan estimasi awal sebelum masuk tahap ukur lapangan dan produksi.',
  },
  {
    question: 'Finishing bisa disesuaikan?',
    answer:
      'Bisa. Finishing cat, warna, dan karakter visual dapat dipilih menyesuaikan konsep rumah atau bangunan agar hasil akhir lebih menyatu.',
  },
  {
    question: 'Web ini sudah siap untuk dipasang kontak asli?',
    answer:
      'Sudah. Struktur CTA, section kontak, dan alur konversinya sudah disiapkan sehingga tinggal mengganti nomor WhatsApp, area layanan, dan foto proyek asli klien.',
  },
]

function App() {
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
            <a href="#portfolio">Showcase</a>
            <a href="#process">Proses</a>
            <a href="#contact">Kontak</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Bengkel Las Modern untuk Rumah, Ruko, dan Bangunan Komersial</p>
              <h1>Pembuatan Pagar, Canopy, dan Railing Custom yang Rapi, Kokoh, dan Modern</h1>
              <p className="hero-text">
                Lestari Las membantu menghadirkan produk besi yang bukan cuma kuat, tetapi juga
                memperindah tampilan bangunan. Fokus kami ada pada desain yang pas, ukuran yang
                presisi, dan finishing yang terlihat matang.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Konsultasi Proyek
                </a>
                <a className="button button-secondary" href="#services">
                  Lihat Layanan
                </a>
              </div>

              <ul className="hero-highlights" aria-label="Keunggulan utama">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-frame">
                <span className="frame-label">Custom Made</span>

                <div className="frame-panel frame-panel-primary">
                  <p>Spesialis Utama</p>
                  <h2>Pagar, canopy, railing, dan pintu garasi dengan karakter modern.</h2>
                  <span>Desain tajam, sambungan rapi, hasil terlihat premium.</span>
                </div>

                <div className="frame-stack">
                  <article className="frame-card">
                    <strong>Visual</strong>
                    <p>Garis bersih dan proporsi yang enak dilihat dari depan rumah.</p>
                  </article>
                  <article className="frame-card">
                    <strong>Fungsi</strong>
                    <p>Aman dipakai harian dengan struktur yang dibuat untuk tahan lama.</p>
                  </article>
                  <article className="frame-card frame-card-accent">
                    <strong>Finishing</strong>
                    <p>Warna dan lapisan akhir bisa menyesuaikan karakter bangunan Anda.</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-section">
          <div className="container trust-grid">
            <article>
              <strong>Desain menyesuaikan bangunan</strong>
              <p>Tidak sekadar pasang, tetapi dibentuk supaya serasi dengan fasad dan sirkulasi.</p>
            </article>
            <article>
              <strong>Pilihan material fleksibel</strong>
              <p>Bisa menyesuaikan kebutuhan tampilan, ketahanan, dan anggaran proyek.</p>
            </article>
            <article>
              <strong>Siap untuk proyek hunian hingga usaha</strong>
              <p>Cocok untuk rumah tinggal, kos, ruko, kantor, hingga renovasi bangunan.</p>
            </article>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Layanan Utama</p>
              <h2>Fokus pada produk besi yang paling sering dicari untuk hunian dan bangunan usaha</h2>
              <p>
                Semua layanan di bawah ini bisa disesuaikan model, ukuran, detail rangka, dan
                finishing-nya agar hasil akhir tidak terasa generik.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="service-index">{service.title.slice(0, 2).toUpperCase()}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <small>{service.detail}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section showcase-section" id="portfolio">
          <div className="container showcase-layout">
            <div className="showcase-intro">
              <p className="section-kicker">Arah Desain</p>
              <h2>Tampilan yang diusulkan untuk web ini: tegas, premium, dan tetap bersih.</h2>
              <p>
                Karena bisnis seperti ini sangat mengandalkan kepercayaan visual, halaman dibuat
                dengan nuansa industrial modern yang cocok untuk menampilkan foto proyek asli nanti.
              </p>
            </div>

            <div className="showcase-grid">
              {showcaseItems.map((item) => (
                <article className="showcase-card" key={item.title}>
                  <div className="showcase-overlay" />
                  <p>{item.subtitle}</p>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section value-section">
          <div className="container value-layout">
            <div className="value-copy">
              <p className="section-kicker">Kenapa Pilih Lestari Las</p>
              <h2>Web ini dibangun untuk menonjolkan kualitas kerja, bukan cuma daftar jasa.</h2>
              <ul className="reason-list">
                {reasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>

            <aside className="materials-card">
              <p className="materials-label">Pilihan material & finishing</p>
              <div className="materials-list">
                {materials.map((material) => (
                  <span key={material}>{material}</span>
                ))}
              </div>
              <strong>Siap disesuaikan dengan karakter rumah dan kebutuhan proyek.</strong>
            </aside>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading">
              <p className="section-kicker">Alur Kerja</p>
              <h2>Proses yang jelas supaya calon pelanggan tahu apa yang akan mereka dapatkan</h2>
            </div>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article className="process-card" key={step.title}>
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
            <div className="faq-copy">
              <p className="section-kicker">Pertanyaan Umum</p>
              <h2>Struktur konten sudah disiapkan supaya mudah diarahkan ke closing.</h2>
              <p>
                Bagian FAQ ini membantu menjawab pertanyaan dasar calon pelanggan sebelum mereka
                lanjut menghubungi Anda.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-card">
            <div className="contact-copy">
              <p className="section-kicker">Siap Diisi Data Final Klien</p>
              <h2>Landing page sudah siap untuk dipasang nomor WhatsApp, foto proyek, dan area layanan.</h2>
              <p>
                Untuk versi awal ini, struktur penjualan dan desain visualnya sudah jadi. Langkah
                berikutnya tinggal mengganti detail kontak klien, menambahkan galeri proyek asli,
                lalu publish ke domain atau GitHub Pages.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href="#top">
                Lihat Hero Lagi
              </a>
              <a className="button button-secondary" href="#portfolio">
                Review Showcase
              </a>
            </div>

            <div className="contact-notes" aria-label="Catatan finalisasi">
              <article>
                <strong>Kontak</strong>
                <p>Masukkan nomor WhatsApp aktif dan akun sosial media bila ada.</p>
              </article>
              <article>
                <strong>Portfolio</strong>
                <p>Ganti kartu showcase dengan foto proyek asli untuk menaikkan trust.</p>
              </article>
              <article>
                <strong>Area Layanan</strong>
                <p>Tambahkan kota operasional agar SEO lokal dan CTA-nya lebih kuat.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Lestari Las. Website company profile modern untuk jasa pagar, canopy, railing, dan pintu garasi.</p>
          <a href="#top">Kembali ke atas</a>
        </div>
      </footer>
    </div>
  )
}

export default App
