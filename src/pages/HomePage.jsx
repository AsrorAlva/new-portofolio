import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects showAll={false} limit={3} />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;