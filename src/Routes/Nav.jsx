import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const IconNameNavbar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(null);

  const NavItems = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'Team', path: '/team', key: 'team' },
    { name: 'Gallery', path: '/gallery', key: 'gallery' },
    { name: 'Merch', path: '/merch', key: 'merch' },
    { name: 'Brochure', path: '/calendar', key: 'calendar' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-30 backdrop-blur-md bg-[#112240] shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white tracking-wider 
            bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            RIC
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-8 items-center">
          {NavItems.map(({ name, path, key }) => (
            <Link 
              key={key} 
              to={path}
              className="relative group"
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