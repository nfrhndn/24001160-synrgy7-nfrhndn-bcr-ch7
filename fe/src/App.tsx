import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './User/LandingPage/LandingPage';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MyCarousel from './User/components/Carousel';
import FilterCar from './User/FilterCar/FitlerCarPage';
import LoginUser from './User/LoginPage/LoginPage';
import LoginAdmin from './Admin/AdminLoginPage';
import Dashboard from './Admin/Dashboard';
import RegisterUser from './User/Register/RegisterPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousel" element={<MyCarousel />} />
        <Route path="/filter" element={<FilterCar />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />

        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
