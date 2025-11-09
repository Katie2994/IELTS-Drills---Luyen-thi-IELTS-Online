import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import LevelChecker from './components/LevelChecker';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import SpeakingTopics from './components/SpeakingTopics';
import CaseStudy from './components/CaseStudy';
import TransformationJourney from './components/TransformationJourney';
import Methodology from './components/Methodology';

function App() {
  return (
    <div className="bg-brand-gray text-brand-black font-sans antialiased">
      <Header />
      <main className="isolate">
        <Hero />
        <SocialProof />
        <Features />
        <Methodology />
        <SpeakingTopics />
        <CaseStudy />
        <TransformationJourney />
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