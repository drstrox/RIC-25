import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const IconNameNavbar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavItems = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'Team', path: '/team', key: 'team' },
    { name: 'Gallery', path: '/gallery', key: 'gallery' },
    { name: 'Merch', path: '/merch', key: 'merch' },
    { name: 'Brochure', path: '/calendar', key: 'calendar' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-30 backdrop-blur-md bg-[#0a192f] shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-white tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            RIC
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`
            md:flex md:space-x-8 md:items-center
            ${isMobileMenuOpen ? 'block' : 'hidden'}
            absolute md:static top-full left-0 right-0 bg-[#0a192f] md:bg-transparent p-4 md:p-0
            transition-all duration-300 ease-in-out
          `}
        >
          {NavItems.map(({ name, path, key }) => (
            <Link
              key={key}
              to={path}
              className="relative group block md:inline-block"
              onMouseEnter={() => setIsHovered(key)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <span
                className={`
                  transition-all duration-300 ease-in-out
                  ${location.pathname === path || isHovered === key
                    ? 'text-white scale-110'
                    : 'text-gray-400'}
                  hover:text-white hover:scale-110
                `}
              >
                {name}
              </span>

              {/* Active/Hover Indicator */}
              <div
                className={`
                  absolute -bottom-2 left-1/2 transform -translate-x-1/2
                  w-1.5 h-1.5 rounded-full
                  transition-all duration-300 ease-in-out
                  ${location.pathname === path || isHovered === key
                    ? 'bg-gradient-to-r from-blue-400 to-purple-600 opacity-100 scale-100'
                    : 'opacity-0 scale-0'}
                `}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export { IconNameNavbar };
