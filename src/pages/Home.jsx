import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Industries from '../components/home/Industries';
import Products from '../components/home/Products';
import Brands from '../components/home/Brands';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TechSupport from '../components/home/TechSupport';
import Contact from '../components/home/Contact';
import LocationMap from '../components/home/LocationMap';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-bg-900 min-h-screen text-[#081120] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <Products />
        <Brands />
        <WhyChooseUs />
        <TechSupport />
        <Contact />
        <LocationMap />
      </main>
      <Footer />
    </div>
  );
}
