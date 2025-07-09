import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './login';
import Home from './home';
import Products from './products';
import Categories from './categories';
import AdminRoute from './admin';
import Vendor from './vender';
import Navbar from './navebar'; 
import ProtectedRoute from './protectedroute';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [loading, setLoading] = useState(true);

  // Load login state from localStorage on app start
  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
      setLoading(false);
  }, []);
   if (loading) return null; // <-- wait for localStorage check before rendering
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        
        {/* All these pages are protected: only visible after login */}
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/products" element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        } />

        <Route path="/categories" element={
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        } />

        {/* Admin-only Vendor page */}

          <Route
          path="/vendor"
          element={
            <AdminRoute>
              <Vendor />
            </AdminRoute>
          }
        />
          {/* Redirect all unknown routes to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
