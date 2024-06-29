import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Carousel.css';
// import ExampleCarouselImage from '../User/Component';

const ComponentCarousel: React.FC = () => {
  return (
    <div className="CarouselBox">
      <Carousel>
        <Carousel.Item>
          <div id="card-carousel">
            <div className="">
              <img id="photoprofile" className="" src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1710307281/challenge-7/img_photo_fu5m9m.png" alt="" />
            </div>

            <div id="s4-carousel-content" className="content-center">
              <div className="carousel-rating justify-content-center">
                <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719496990/challenge-7/Rate_r8flv3_grifpa.svg" alt="" />
              </div>
              <p className="s4-carousel-content-body body-text m-0">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="m-0 title-body-text" style={{ paddingTop: '8px' }}>
                John Dee 32, Bromo
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div id="card-carousel" className="">
            {/* Photo Profile */}
            <div className="">
              <img id="photoprofile" className="" src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1710307281/challenge-7/img_photo_fu5m9m.png" alt="Profile" />
            </div>

            <div id="s4-carousel-content" className="content-center">
              <div className="carousel-rating justify-content-center">
                <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719496990/challenge-7/Rate_r8flv3_grifpa.svg" alt="Rating" />
              </div>
              <p className="s4-carousel-content-body body-text m-0">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="m-0 title-body-text" style={{ paddingTop: '8px' }}>
                John Dee 32, Bromo
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div id="card-carousel" className="">
            {/* Photo Profile */}
            <div className="">
              <img id="photoprofile" className="" src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1710307282/challenge-7/img_photo2_zmnalo.png" alt="Profile" />
            </div>

            <div id="s4-carousel-content" className="content-center">
              <div className="carousel-rating justify-content-center">
                <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719496990/challenge-7/Rate_r8flv3_grifpa.svg" alt="Rating" />
              </div>
              <p className="s4-carousel-content-body body-text m-0">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="m-0 title-body-text" style={{ paddingTop: '8px' }}>
                John Dee 32, Bromo
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ComponentCarousel;
