import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SOCIAL_LINKS = [
  { href: 'https://facebook.com', icon: FaFacebook },
  { href: 'https://twitter.com', icon: FaTwitter },
  { href: 'https://linkedin.com', icon: FaLinkedin },
  { href: 'https://instagram.com', icon: FaInstagram },
];


const Footer = () => {
 

  return (
    <footer className="bg-[#112240] py-12">
<div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
  
  <div>
    <h4 className="font-semibold text-xl mb-4">Connect</h4>
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          className="text-gray-400 hover:text-blue-300 transition"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  </div>
</div>
<div className="text-center mt-8 text-gray-400 border-t border-gray-700 pt-4">
  © 2024 Research and Industrial Conclave, IIT Indore
</div>
</footer>
  );
};

export { Footer };

