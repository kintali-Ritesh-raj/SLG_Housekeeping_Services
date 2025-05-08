import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Logo />
              <span className="ml-2 text-xl font-bold">SLG Housekeeping Services</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional cleaning services in Visakhapatnam. Quality work, satisfaction guaranteed.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 h-1 w-10 bg-cyan-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Clients', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 h-1 w-10 bg-cyan-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {[
                'Flat Cleaning',
                'Villa Cleaning',
                'Bathroom Cleaning',
                'Sofa Cleaning',
                'Water Tank Cleaning',
                'Commercial Cleaning'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 h-1 w-10 bg-cyan-600 -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-3 text-cyan-500">
                  <Mail size={18} />
                </div>
                <a href="mailto:slghousekeepingservices@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  slghousekeepingservices@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 text-cyan-500">
                  <Phone size={18} />
                </div>
                <a href="tel:+919949191912" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  +91 99491 91912
                </a>
              </li>
              <li className="text-gray-400">
                <div className="mt-1 mr-3 text-cyan-500 float-left">
                  <svg 
                    className="h-[18px] w-[18px]" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <address className="not-italic ml-6">
                  39-9-100/A near Skating Park, Murali Nagar, Visakhapatnam.
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} SLG Housekeeping Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;