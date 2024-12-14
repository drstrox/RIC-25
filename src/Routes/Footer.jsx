import React from 'react'; 
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const SOCIAL_LINKS = [
  { href: 'https://linkedin.com', icon: FaLinkedin },
  { href: 'https://instagram.com', icon: FaInstagram },
];

const Footer = () => {
  return (
    <footer className="bg-[#192230] text-white py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl sm:text-2xl font-bold mb-3 text-blue-300">
              Research & Industrial Conclave
            </h4>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              Bridging academia and industry through innovative research and collaborative solutions at IIT Indore.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-300 transition-transform transform hover:scale-110"
                >
                  <Icon size={30} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 text-blue-300">Contact Us</h4>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400 shrink-0" />
                <span className="text-gray-300 truncate">
                  IIT Indore, Simrol, Madhya Pradesh 453552
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400 shrink-0" />
                <a 
                  href="mailto:acad.council@iiti.ac.in" 
                  className="text-gray-300 hover:text-white transition-colors truncate"
                >
                  acad.council@iiti.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400 shrink-0" />
                <span className="text-gray-300">+91 99591 31509</span>
              </div>
            </div>
          </div>

          {/* OC Contact Section */}
          <div>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 text-blue-300">Overall Co-ordinators (OC)</h4>
            <div className="space-y-4 text-sm sm:text-base text-gray-300">
              <div>
                <h5 className="font-bold text-white">Mohit Tiwari</h5>
                <p className="text-gray-300">Position: OC-PG</p>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-400 shrink-0" />
                  <a 
                    href="mailto:ocpg@iitindore.ac.in" 
                    className="text-gray-300 hover:text-white transition-colors truncate"
                  >
                    mt2302105020@iiti.ac.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-400 shrink-0" />
                  <span className="text-gray-300">+91 76949 54133</span>
                </div>
              </div>
              <div>
                <h5 className="font-bold text-white">Keerthan Pragnay</h5>
                <p className="text-gray-300">Position: OC-UG</p>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-blue-400 shrink-0" />
                  <a 
                    href="mailto:ocug@iitindore.ac.in" 
                    className="text-gray-300 hover:text-white transition-colors truncate"
                  >
                    ce230004025@iiti.ac.in
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-400 shrink-0" />
                  <span className="text-gray-300">+91 88853 33459</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-xs sm:text-sm text-gray-300">
            © 2024 Research and Industrial Conclave, IIT Indore. All Rights Reserved.
          </p>
          <div className="mt-3 space-x-4 text-xs sm:text-sm">
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
