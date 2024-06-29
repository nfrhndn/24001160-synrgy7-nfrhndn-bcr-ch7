import React, { useState } from 'react';
import './AdminLoginPage.css';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginUser: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const loginData = { email, password }; // Menggunakan email dan password untuk data login

    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);
        localStorage.setItem('token', result.token);

        if (result.role === 'admin' || result.role === 'superadmin') {
          navigate('/dashboard');
        } else {
          setError('You do not have permission to access the dashboard.');
          navigate('/');
        }
      } else {
        const error = await response.json();
        console.error('Login failed:', error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="body">
      <div className="imagecars">
        <img className="carsimage" src="https://res.cloudinary.com/dnw1qkqei/image/upload/v1719496691/challenge-7/image_2_suc4xt.jpg" alt="Cars" />
      </div>
      <div className="inputlogin">
        <div className="rectangle"></div>
        <div>
          <p className="titledashboard">Welcome, Admin BCR</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Input Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Mengubah setUsername menjadi setEmail
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Input Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          <button className="login-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginUser;
