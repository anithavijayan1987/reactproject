import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LayoutFixer from './components/LayoutFixer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Gallerysingle from './pages/Gallerysingle';

import { Routes, Route } from 'react-router-dom';
import Gallerydigital from './pages/Gallerydigital';
import Galleryapp from './pages/Galleryapp';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <LayoutFixer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/websites/:id" element={<Gallerysingle />} />
        <Route path="/digitalmarketing/:id" element={<Gallerydigital />} />
        <Route path="/app" element={<Galleryapp />} />
      
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
