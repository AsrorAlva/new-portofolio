import React from 'react';
import { Button } from './ui/button';
import { Download, Mail } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Hero = () => {
  const { personal, hero } = portfolioData;

  const handleDownloadResume = (url) => {
    if (!url) return;
    const link = document.createElement('a');
    link.href = url;
    link.download = url.includes('NonIt')
      ? `${personal.fullName.replace(' ', '_')}_Resume_NonIT.pdf`
      : `${personal.fullName.replace(' ', '_')}_Resume_IT.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const handleContactScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div className="relative mx-auto w-56 h-56 mb-8">
          <img
            src={personal.profileImage}
            alt={personal.fullName}
            className="w-full h-full rounded-full object-cover shadow-lg ring-4 ring-white "
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
        </div>

        {/* Greeting and Name */}
        <div className="space-y-4">
          <p className="text-lg text-slate-600 font-medium tracking-wide">
            {hero.greeting}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">
            <span className="text-blue-600">{personal.fullName.split(' ')[0]}</span>{' '}
            <span>{personal.fullName.split(' ')[1]}</span>
          </h1>
        </div>

        {/* Role */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
            {personal.role}
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-600 leading-relaxed">
            {hero.description}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">

          {/* Contact Me */}
          <Button
            variant="outline"
            onClick={handleContactScroll}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;