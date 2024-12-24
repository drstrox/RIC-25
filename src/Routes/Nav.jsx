import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const IconNameNavbar = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const NavItems = [
    { name: 'Home', path: '/', key: 'home' },
    { name: 'Events', path: '/events', key: 'events' },
    { name: 'Team', path: '/team', key: 'team' },
    { name: 'Gallery', path: '/gallery', key: 'gallery' },
    { name: 'Sponsors', path: '/sponsers', key: 'sponsors'},
    { name: 'Merch', path: '/merch', key: 'merch' },
    { 
      name: 'Brochure', 
      path: 'https://drive.google.com/file/d/1p-mQA-5x3pxThtmdamCEymI8ixn04KeS/view?usp=sharing', 
      key: 'calendar', 
      isDownload: true 
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setIsMobileMenuOpen(false);
        setMenuItemsVisible(false);
      }
    };

    window.addEventListener('resize', handleResize);

    let timer;
    if (isMobileMenuOpen) {
      timer = setTimeout(() => {
        setMenuItemsVisible(true);
      }, 50);
    } else {
      setMenuItemsVisible(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timer) clearTimeout(timer);
    };
  }, [isMobileMenuOpen]);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleBrochureClick = (url) => {
    window.open(url, '_blank');
  };

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
        {isMobile && (
          <div>
            <button
              onClick={handleMenuToggle}
              className="text-white focus:outline-none transform transition-transform duration-300 active:scale-90 hover:scale-110"
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
        )}

        {/* Navigation Links - Responsive */}
        <div
          className={`
            ${isMobile 
              ? `absolute top-full left-0 right-0 
                 bg-[#0a192f] p-4
                 ${isMobileMenuOpen ? 'block' : 'hidden'}` 
              : 'md:flex md:space-x-8 md:items-center'}
            transition-all duration-300 ease-in-out
          `}
        >
          {NavItems.map(({ name, path, key, isDownload }, index) => (
            <div 
              key={key}
              className={`
                transform transition-all duration-500 ease-out
                ${isMobile && menuItemsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-100 translate-y-0'}
              `}
              style={{
                transitionDelay: isMobile && menuItemsVisible 
                  ? `${index * 100}ms` 
                  : '0ms'
              }}
            >
              {isDownload ? (
                <button
                  onClick={() => handleBrochureClick(path)}
                  className="relative group block md:inline-block my-4 md:my-0 text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
                >
                  {name}
                </button>
              ) : (
                <Link
                  to={path}
                  className="relative group block md:inline-block my-4 md:my-0"
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

                  {/* Active/Hover Indicator - Hidden on Mobile */}
                  <div
                    className={`
                      absolute -bottom-2 left-1/2 transform -translate-x-1/2
                      w-1.5 h-1.5 rounded-full
                      transition-all duration-300 ease-in-out
                      hidden md:block
                      ${location.pathname === path || isHovered === key
                        ? 'bg-gradient-to-r from-blue-400 to-purple-600 opacity-100 scale-100'
                        : 'opacity-0 scale-0'}
                    `}
                  />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export { IconNameNavbar };
