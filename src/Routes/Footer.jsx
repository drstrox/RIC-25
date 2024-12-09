import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, FaTwitter, FaLinkedin, FaInstagram, 
  FaEnvelope, FaPhone, FaMapMarkerAlt 
} from 'react-icons/fa';

const SOCIAL_LINKS = [
  { href: 'https://facebook.com', icon: FaFacebook },
  { href: 'https://twitter.com', icon: FaTwitter },
  { href: 'https://linkedin.com', icon: FaLinkedin },
  { href: 'https://instagram.com', icon: FaInstagram },
];

const QUICK_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
  { name: 'Calendar', path: '/calendar' },
];

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h4 className="text-xl sm:text-2xl font-bold mb-4 gradient-text">
              Research & Industrial Conclave
            </h4>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Bridging academia and industry through innovative research and collaborative solutions at IIT Indore.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <Icon size={40} className="sm:size-19" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 gradient-text">Quick Links</h4>
            <div className="space-y-2">
              {QUICK_LINKS.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="block text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Research Areas */}
          <div className="md:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 gradient-text">Research Focus</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>Robotics & AI</li>
              <li>Sustainable Technologies</li>
              <li>Industrial Automation</li>
              <li>Machine Learning</li>
              <li>Renewable Energy</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-1">
            <h4 className="text-lg sm:text-xl font-semibold mb-4 gradient-text">Contact Us</h4>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400 shrink-0" />
                <span className="text-gray-400 truncate">
                  IIT Indore, Simrol, Madhya Pradesh 453552
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400 shrink-0" />
                <a 
                  href="mailto:ric@iitindore.ac.in" 
                  className="text-gray-400 hover:text-white transition-colors truncate"
                >
                  ric@iitindore.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400 shrink-0" />
                <span className="text-gray-400">+91 (731) 660-2000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Additional Info */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2024 Research and Industrial Conclave, IIT Indore. 
            All Rights Reserved.
          </p>
          <div className="mt-2 space-x-4 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };