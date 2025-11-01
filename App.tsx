import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LevelChecker from './components/LevelChecker';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="bg-brand-gray text-brand-black font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <LevelChecker />
        <VideoSection />
        <Testimonials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
