import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;