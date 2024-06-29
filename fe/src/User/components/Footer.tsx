import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../LandingPage/LandingPage.css';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <footer className="d-flex justify-content-between" style={{ marginBottom: '100px' }}>
        <div style={{ width: '268px' }}>
          <p className="mb-3 body-text">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p className="mb-3 body-text">binarcarrental@gmail.com</p>
          <p className="mb-3 body-text">081-233-334-808</p>
        </div>
        <div style={{ gap: '16px' }}>
          <p className="mb-3 bold-text">Our services</p>
          <p className="mb-3 bold-text">Why Us</p>
          <p className="mb-3 bold-text">Testimonial</p>
          <p className="mb-3 bold-text">FAQ</p>
        </div>
        <div className="mb-3" style={{ width: '268px' }}>
          <p className="mb-3 body-text">Connect with us</p>
          <div className="d-flex" style={{ gap: '16px' }}>
            <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719636822/challenge-7/iv0pdtkn23p0lo7ljrly_nvcdja.svg" alt="Facebook" />
            <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719636855/challenge-7/oi6c7tsjjfcsie6csu2a_bu9s2b.svg" alt="Instagram" />
            <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719636869/challenge-7/s1zocgclry5v4gklowhm_dj5bsi.svg" alt="Twitter / X" />
            <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719636873/challenge-7/syiluw3dnfkidp4pgnkv_weakzz.svg" alt="Email" />
            <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719636956/challenge-7/dh95ouvhedlgcwmdgovz_i8arjz.svg" alt="Twitch" />
          </div>
        </div>
        <div style={{ width: 'fit-content' }}>
          <p className="mb-3 body-text">Copyright Binar 2022</p>
          <a className="footer-brand" href="/">
            <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1710307284/challenge-7/logo_eqj49y.png" alt="logo" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
