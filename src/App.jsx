import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Admin Components
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';

// Pages
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductCategories from './pages/ProductCategories';
import DynamicCategory from './pages/DynamicCategory';
import GetQuote from './pages/GetQuote';
import ContactUs from './pages/ContactUs';
import FloatingContact from './components/layout/FloatingContact';

function App() {
  const [authed, setAuthed] = useState(!!localStorage.getItem('ht_token'));

  const handleLogin = () => setAuthed(true);
  const handleLogout = () => {
    localStorage.removeItem('ht_token');
    localStorage.removeItem('ht_admin');
    setAuthed(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/products" element={<Navigate to="/" replace />} />
        <Route path="/products/categories" element={<ProductCategories />} />

        {/* Dynamic Category Route */}
        <Route path="/products/category/:slug" element={<DynamicCategory />} />

        {/* Redirect old category routes to the new dynamic format or home if obsolete */}
        <Route path="/products/ball-bearings" element={<Navigate to="/products/category/bearings" replace />} />
        <Route path="/products/roller-bearings" element={<Navigate to="/products/category/bearings" replace />} />
        <Route path="/products/linear-bearings" element={<Navigate to="/products/category/bearings" replace />} />
        <Route path="/products/pneumatics" element={<Navigate to="/products/category/pneumatics" replace />} />
        <Route path="/products/automation" element={<Navigate to="/" replace />} />
        <Route path="/products/measuring-instruments" element={<Navigate to="/products/category/measuring-instruments" replace />} />
        <Route path="/products/hydraulics" element={<Navigate to="/" replace />} />
        <Route path="/products/electricals" element={<Navigate to="/products/category/electricals-electronics" replace />} />
        <Route path="/products/lubricants" element={<Navigate to="/products/category/lubricants-greases" replace />} />
        <Route path="/products/industrial-seals" element={<Navigate to="/products/category/bearings" replace />} />

        <Route path="/product-detail/:sku" element={<ProductDetail />} />
        <Route path="/catalog" element={<Navigate to="/" replace />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route
          path="/admin"
          element={authed ? <AdminDashboard onLogout={handleLogout} /> : <AdminLogin onLogin={handleLogin} />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingContact />
    </>
  );
}

export default App;
