// Navbar.jsx
import { Link } from 'react-router-dom';
import './App.css'; 

function Navbar() {
   const user = JSON.parse(localStorage.getItem('user') || 'null');
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/categories" className="nav-link">Categories</Link>
       <Link to="/vendor" className="nav-link">Vendor</Link>
      
    </nav>
  );
}

export default Navbar;
