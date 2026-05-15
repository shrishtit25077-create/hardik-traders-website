import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Brands from './components/Brands';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Brands />
        <Stats />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
