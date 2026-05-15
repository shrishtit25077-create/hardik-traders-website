import React from 'react';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Products     from './components/Products';
import Brands       from './components/Brands';
import Stats        from './components/Stats';
import WhyChooseUs  from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact      from './components/Contact';
import Footer       from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)' }}>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <WhyChooseUs />
        <Brands />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
