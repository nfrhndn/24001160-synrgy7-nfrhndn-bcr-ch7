import React, { useState } from 'react';
import './RegisterPage.css';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegisterUser: React.FC = () => {
  const [name, setName] = useState(''); // Mengubah fullName menjadi name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const registerData = { name, email, password }; // Menggunakan name, email, dan password untuk data registrasi

    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Registration successful:', result);
        // Implementasi setelah registrasi sukses, misalnya menyimpan token atau mengarahkan ke halaman lain
        navigate('/login');
      } else {
        const error = await response.json();
        console.error('Registration failed:', error);
        // Menampilkan pesan error ke pengguna
      }
    } catch (error) {
      console.error('Error:', error);
      // Menampilkan pesan error ke pengguna
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <div className="body">
      <div className="imagecars">
        <img className="carsimage" src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719496691/challenge-7/image_2_suc4xt.jpg" alt="Cars" />
      </div>
      <div className="inputlogin">
        <div className="rectangle"></div>
        <div>
          <p className="titledashboard">Welcome to Binar Car Rental</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Input Your Full Name"
              value={name} // Mengubah value menjadi name
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Input Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Input Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          <button className="regis-button" type="submit">
            Register
          </button>
          <button className="loginuser-button" onClick={handleLoginClick}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
