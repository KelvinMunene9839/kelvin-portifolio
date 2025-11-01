import React from 'react';
import Navbar from './componenets/Navbar';
import Hero from './componenets/Hero';
import About from './componenets/About';
import Skills from './componenets/Skills';
import Portfolio from './componenets/portifolio';
import Contact from './componenets/Contact';
import Footer from './componenets/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
