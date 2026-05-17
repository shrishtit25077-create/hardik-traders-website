import React, { useState, useEffect } from 'react';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import Stats         from './components/Stats';
import About         from './components/About';
import Products      from './components/Products';
import TrustSection  from './components/TrustSection';
import Industries    from './components/Industries';
import Brands        from './components/Brands';
import Testimonials  from './components/Testimonials';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import QuickContact  from './components/QuickContact';
import AdminLogin    from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';

// Simple hash-based routing for admin panel (no React Router needed)
const isAdminPath = () => window.location.pathname === '/admin';

function App() {
  const [page, setPage]        = useState(isAdminPath() ? 'admin' : 'home');
  const [authed, setAuthed]    = useState(!!localStorage.getItem('ht_token'));

  // Keep URL in sync
  useEffect(() => {
    const handler = () => setPage(isAdminPath() ? 'admin' : 'home');
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  const handleLogin = () => setAuthed(true);
  const handleLogout = () => {
    localStorage.removeItem('ht_token');
    localStorage.removeItem('ht_admin');
    setAuthed(false);
  };

  // ─── Admin route ────────────────────────────────────────────────────────
  if (page === 'admin') {
    if (!authed) return <AdminLogin onLogin={handleLogin} />;
    return <AdminDashboard onLogout={handleLogout} />;
  }

  // ─── Public site ────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <TrustSection />
        <Industries />
        <Brands />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <QuickContact />
    </div>
  );
}

export default App;
