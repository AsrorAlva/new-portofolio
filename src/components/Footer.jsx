import React from 'react';
import { Heart } from 'lucide-react';
import * as Icons from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Footer = () => {
  const { footer, socialMedia, personal } = portfolioData;

const getIcon = (iconName) => {
  // Kalau path diawali dengan "/" → render gambar dari /public
  if (iconName && iconName.startsWith("/")) {
    return (
      <img
        src={iconName}
        alt={iconName}
        className="w-6 h-6 object-contain"
      />
    );
  }

  // Kalau bukan → pakai lucide-react
  const IconComponent = Icons[iconName];
  return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
};

  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      const element = document.getElementById(href.substring(2));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              {personal.fullName.split(' ')[0]} <span className="text-blue-400">{personal.fullName.split(' ')[1]}</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {personal.role}
            </p>
            <p className="text-slate-400 text-sm">
              Transforming data into insights, one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {footer.navigation.map((link, index) => (
                <div key={index}>
                  {link.href.startsWith('/projects') || link.href.startsWith('/resume') || link.href.startsWith('/blog') || link.href.startsWith('/cheetsheet') ? (
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href={`mailto:${personal.email}`}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
              >
                {personal.email}
              </a>
              <a 
                href={`tel:${personal.phone}`}
                className="text-slate-400 hover:text-blue-400 transition-colors duration-300 block"
              >
                {personal.phone}
              </a>
              <p className="text-slate-400">{personal.location}</p>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 pt-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <div className="text-slate-400 group-hover:text-white transition-colors">
                    {getIcon(social.icon)}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              {footer.copyright}
            </p>
            
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>React+Vite, Tailwind, and Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;