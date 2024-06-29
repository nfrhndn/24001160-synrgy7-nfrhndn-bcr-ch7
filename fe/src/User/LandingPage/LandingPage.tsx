import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './LandingPage.css';
import ComponentCarousel from '../components/Carousel';

import HeroSection from '../components/Hero';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Section 1 */}
      <HeroSection />

      {/* Section 2 */}
      <section id="section-2" className="padding-left-right">
        <div className="box-women-picture">
          <img className="women-picture" src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1710307283/challenge-7/img_service_gwacll.png" alt="" />
        </div>
        <div className="section-2-text" style={{ margin: 'auto', height: 'fit-content' }}>
          <p className="m-0" style={{ fontWeight: 'bold', fontSize: '24px' }}>
            Best Car Rental for any kind of trip in (Lokasimu)!
          </p>
          <div style={{ paddingTop: '24px' }}>
            <p className="m-0 text-warp">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <div>
              <div className="d-flex" style={{ paddingTop: '16px' }}>
                <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719637218/challenge-7/kss0g7na5w57q6hsqnbo_bxonfh.svg" alt="" />
                <p className="m-0" style={{ paddingLeft: '16px' }}>
                  {' '}
                  Sewa Mobil Dengan Supir di Bali 12 Jam{' '}
                </p>
              </div>
              <div className="d-flex" style={{ paddingTop: '16px' }}>
                <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719637218/challenge-7/kss0g7na5w57q6hsqnbo_bxonfh.svg" alt="" />
                <p className="m-0" style={{ paddingLeft: '16px' }}>
                  {' '}
                  Sewa Mobil Lepas Kunci di Bali 24 Jam{' '}
                </p>
              </div>
              <div className="d-flex" style={{ paddingTop: '16px' }}>
                <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719637218/challenge-7/kss0g7na5w57q6hsqnbo_bxonfh.svg" alt="" />
                <p className="m-0" style={{ paddingLeft: '16px' }}>
                  {' '}
                  Sewa Mobil Jangka Panjang Bulanan{' '}
                </p>
              </div>
              <div className="d-flex" style={{ paddingTop: '16px' }}>
                <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719637218/challenge-7/kss0g7na5w57q6hsqnbo_bxonfh.svg" alt="" />
                <p className="m-0" style={{ paddingLeft: '16px' }}>
                  {' '}
                  Gratis Antar - Jemput Mobil di Bandara{' '}
                </p>
              </div>
              <div className="d-flex" style={{ paddingTop: '16px' }}>
                <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719637218/challenge-7/kss0g7na5w57q6hsqnbo_bxonfh.svg" alt="" />
                <p className="m-0" style={{ paddingLeft: '16px' }}>
                  {' '}
                  Layanan Airport Transfer / Drop In Out{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 Why Us? */}
      <section id="section-3">
        <div style={{ paddingBottom: '40px' }}>
          <p id="section-3-title" className="m-0 title2" style={{ paddingBottom: '16px' }}>
            Why Us?
          </p>
          <p id="section-3-body" className="m-0">
            Mengapa harus pilih Binar Car Rental?
          </p>
        </div>
        <div id="section-3-content" className="justify-content-between">
          <div id="card" style={{ padding: '24px' }}>
            <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719637337/challenge-7/icon_complete_okch8c_rcb81t.svg" alt="" />
            <p className="m-0 title-body-text" style={{ paddingTop: '16px' }}>
              Mobil Lengkap
            </p>
            <p className="m-0 s3-card-body-text" style={{ paddingTop: '16px' }}>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
            </p>
          </div>
          <div id="card" style={{ padding: '24px' }}>
            <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719637459/challenge-7/icon_price_hpwnfb_rhddp4.svg" alt="" />
            <p className="m-0 title-body-text" style={{ paddingTop: '16px' }}>
              Harga Murah
            </p>
            <p className="m-0 s3-card-body-text" style={{ paddingTop: '16px' }}>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
            </p>
          </div>
          <div id="card" style={{ padding: '24px' }}>
            <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719638025/challenge-7/icon_24hrs_ab2xf7_edsnrm.svg" alt="" />
            <p className="m-0 title-body-text" style={{ paddingTop: '16px' }}>
              Layanan 24 Jam
            </p>
            <p className="m-0 s3-card-body-text" style={{ paddingTop: '16px' }}>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
            </p>
          </div>
          <div id="card" style={{ padding: '24px' }}>
            <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719638030/challenge-7/icon_professional_tcy36l_d7a88i.svg" alt="" />
            <p className="m-0 title-body-text" style={{ paddingTop: '16px' }}>
              Sopir Profesional
            </p>
            <p className="m-0 s3-card-body-text" style={{ paddingTop: '16px' }}>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="section-4">
        <div>
          <p id="section-4-title" className="m-0 title2" style={{ paddingBottom: '16px' }}>
            Testimonial
          </p>
          <p id="section-4-body" className="m-0 pb-4">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>

        <div>
          <ComponentCarousel />
        </div>
      </section>

      {/* Section 5 */}
      <section id="section-5" className="p-lr">
        <div style={{ background: '#0d28a6', borderRadius: '13px' }}>
          <div className="text-center s5-head">
            <p className="m-0 text-s5-head" style={{ color: '#ffffff', paddingBottom: '16px' }}>
              Sewa Mobil di (Lokasimu) Sekarang
            </p>
            <div className="s5-body">
              <p className="m-0 text-s5-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button className="button">Mulai Sewa Mobil</button>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section id="section-faq" className="p-lr justify-content-between">
        <div id="head-faq">
          <p className="m-0 title2" style={{ paddingBottom: '16px' }}>
            Frequently Asked Question
          </p>
          <p className="m-0 body-text text-xxl-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div id="body-faq">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Apa saja syarat yang dibutuhkan?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Syarat Penyewaan</strong> <br />
                  Harap memperhatikan persyaratan penyewa yang perlu dipenuhi, Penyewa harus memiliki SIM dan KTP yang masih berlaku serta berusia minimal 21 tahun. Mobil hanya boleh digunakan di wilayah yang disepakati.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Berapa hari minimal sewa mobil lepas kunci?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Minimum Durasi Sewa</strong>
                  <br />
                  Adapun durasi sewa mobil lepas kunci, kami menetapkan durasi sewa minimal adalah 24 jam.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Berapa hari sebelumnya sebaiknya booking sewa mobil?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Waktu Booking</strong> <br />
                  Sebaiknya lakukan pemesanan mobil beberapa hari sebelum akan digunakan untuk memastikan ketersediaan mobil dan usahakan tidak terlalu mepet.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Apakah Ada biaya antar-jemput?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Biaya Antar-Jemput</strong> <br />
                  Kami menyediakan layanan antar-jemput, namun mengenai biaya tambahan kami menentukan berdasarkan lokasi penjemputan dan pengantaran dari penyewa.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Bagaimana jika terjadi kecelakaan
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>Penanganan Kecelakaan</strong> <br />
                  Jika terjadi kecelakaan pada mobil yang disewa, penyewa harus segera menghubungi layanan pelanggan kami untuk melaporkan insiden tersebut. Penyewa bertanggung jawab atas biaya perbaikan, serta wajib bekerja sama dalam
                  proses klaim asuransi jika diperlukan.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
