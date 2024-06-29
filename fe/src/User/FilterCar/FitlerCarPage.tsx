import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './FilterCarPage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

interface Car {
  id: string;
  driver: string;
  available_at: string;
  capacity: number;
  manufacture: string;
  model: string;
  rentPerDay: number;
  description: string;
  transmission: string;
  year: number;
  image: string; // For other properties
}

const FilterCar: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [driverType, setDriverType] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [pickupTime, setPickupTime] = useState<string>('');
  const [passengers, setPassengers] = useState<string>('');
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://localhost:3000/cars/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCars(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Cek apakah ketiga kondisi (driverType, date, pickupTime) telah terpenuhi
    if (driverType && date && pickupTime) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [driverType, date, pickupTime]);

  const filterCars = () => {
    const filtered = cars.filter((car) => {
      const availableFrom = new Date(car.available_at);
      const selectedDate = new Date(date);
      const selectedTime = pickupTime ? new Date(`${date}T${pickupTime}`) : null;

      return (
        (!driverType || car.driver === driverType) &&
        (!date || availableFrom.toDateString() === selectedDate.toDateString()) &&
        (!pickupTime || (selectedTime && availableFrom <= selectedTime)) &&
        (!passengers || car.capacity >= parseInt(passengers))
      );
    });
    console.log('Filtered Cars:', filtered); // Tambahkan ini untuk melihat hasil filtering di console
    setFilteredCars(filtered);
  };

  return (
    <div>
      <NavBar />

      <section id="section-1" className="p-l" style={{ background: 'rgba(241, 243, 255, 1)' }}>
        <div id="content-hero">
          <p id="title-hero" className="m-0 title1">
            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
          </p>
          <p id="desc-hero" className="text-warp body-text">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
          </p>
        </div>
        <div className="bmw-car">
          <img src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1710307281/challenge-7/img_car_qhu6m6.png" alt="BMW Car" style={{ width: '100%' }} />
        </div>
      </section>

      <section id="filter-section">
        <div id="filterbox">
          <div id="filter">
            <div className="filter-field">
              <p className="title-field">Tipe Driver</p>
              <select className="form-select select-driver layout-field" id="type-driver" onChange={(e) => setDriverType(e.target.value)}>
                <option disabled selected hidden style={{ color: 'grey' }}>
                  Pilih Tipe Driver
                </option>
                <option value="with_driver">Dengan supir</option>
                <option value="without_driver">Tanpa Sopir Lepas Kunci</option>
              </select>
            </div>
            <div className="filter-field">
              <p className="title-field">Tanggal</p>
              <input type="date" id="datetime" className="layout-field" onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="filter-field">
              <p className="title-field">Waktu Jemput/Ambil</p>
              <select className="select-time layout-field" id="pickup-time" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}>
                <option disabled hidden value="">
                  Pilih Waktu
                </option>
                <option value="07:00:00">7.00</option>
                <option value="08:00:00">8.00</option>
                <option value="09:00:00">9.00</option>
                <option value="10:00:00">10.00</option>
              </select>
            </div>
            <div className="filter-field">
              <p className="title-field">Jumlah Penumpang (optional)</p>
              <input className="select-person layout-field" type="text" id="passenger" placeholder="Jumlah Penumpang" onChange={(e) => setPassengers(e.target.value)} />
            </div>
            <button id="search-button" className="button" onClick={filterCars} disabled={!isButtonActive}>
              Cari Mobil
            </button>
          </div>
        </div>
      </section>

      <section id="section-2">
        <div className="container text-left">
          <div className="row" id="list-car">
            {filteredCars.map((car) => (
              <div key={car.id} className="col mb-4">
                <div className="card">
                  <div className="card-img-top" style={{ backgroundImage: `url(${car.image})` }}></div>
                  <div className="card-body">
                    <h6 className="card-title" id="name">
                      {car.manufacture} {car.model}
                    </h6>
                    <h5 id="rent">Rp.{car.rentPerDay} /hari</h5>
                    <p className="card-text">{car.description}</p>
                    <div className="mt-3 gap-2 row">
                      <div className="icon-card">
                        <i className="fa-solid fa-user-group fa-lg"></i>
                        <p>{car.capacity} Orang</p>
                      </div>
                      <div className="icon-card">
                        <i className="fa-solid fa-gear fa-lg"></i>
                        <p>{car.transmission}</p>
                      </div>
                      <div className="icon-card">
                        <i className="fa-solid fa-calendar fa-lg"></i>
                        <p>Tahun {car.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FilterCar;
