import React from 'react';
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

function App() {
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
