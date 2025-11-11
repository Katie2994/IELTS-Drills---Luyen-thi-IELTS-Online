import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import LevelChecker from './components/LevelChecker';
import VideoSection from './components/VideoSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import ReadingPractice from './components/ReadingPractice';
import ListeningPractice from './components/ListeningPractice';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import SpeakingTopics from './components/SpeakingTopics';
import CaseStudy from './components/CaseStudy';
import TransformationJourney from './components/TransformationJourney';
import Methodology from './components/Methodology';
import AboutUs from './components/AboutUs';
import PlacementTest from './components/PlacementTest';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Default to dark mode, unless the user has explicitly chosen light mode.
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('theme');
      if (storedPrefs === 'light') {
        return 'light';
      }
    }
    return 'dark';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <div className="bg-brand-gray text-brand-black font-sans antialiased dark:bg-gray-900 dark:text-gray-300">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="isolate">
        <Hero />
        <SocialProof />
        <Features />
        <ReadingPractice />
        <ListeningPractice />
        <Methodology />
        <SpeakingTopics />
        <CaseStudy />
        <TransformationJourney />
        <VideoSection />
        <LevelChecker />
        <PlacementTest />
        <Testimonials />
        <Pricing />
        <Faq />
        <AboutUs />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;