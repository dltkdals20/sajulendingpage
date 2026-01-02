import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Methodology from './components/Methodology';
import Counselor from './components/Counselor';
import ProductLineup from './components/ProductLineup';
import Reviews from './components/Reviews';
import Process from './components/Process';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <Methodology />
      <Counselor />
      <ProductLineup />
      <Reviews />
      <Process />
      <FAQ />
    </div>
  )
}

export default App;
