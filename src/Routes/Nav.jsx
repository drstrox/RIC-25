import React, { useState } from 'react';

const IconNameNavbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const NavItems = [
    { name: 'Home', key: 'home' },
    { name: 'Team', key: 'team' },
    { name: 'Projects', key: 'projects' },
    { name: 'Settings', key: 'settings' },
    { name: 'Calendar', key: 'calendar' },
  ];

  const handleLinkClick = (key) => {
    setActiveLink(activeLink === key ? null : key); // Toggle active link
  };

  return (
    <nav className="bg-black top-0 z-10 flex justify-center items-center space-x-12 p-4 rounded-full shadow-md">
      <p className="text-xl font-bold" style={{ userSelect: 'none' }}>RIC</p>
      {NavItems.map(({ name, key }) => (
        <div
          key={key}
          className="relative group cursor-pointer"
          onClick={() => handleLinkClick(key)}
        >
          <div className="relative flex items-center">
            <span
              className={`transition-all duration-500 ease-in-out transform ${
                activeLink === key ? 'text-orange-400 scale-110 translate-y-[-5px]' : 'text-white'
              } group-hover:text-white group-hover:translate-y-[-5px] group-hover:scale-110`}
              style={{ userSelect: 'none' }} // Disable text selection
            >
              {name}
            </span>
            <div
              className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out
                ${activeLink === key ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
                group-hover:opacity-100 group-hover:scale-100 group-hover:delay-200`} // Added delay to the hover effect
              style={{
                width: '5px', // Size of the point
                height: '5px', // Size of the point
                borderRadius: '50%', // Circular point
                backgroundColor: activeLink === key ? 'orange' : 'white', // Point color (orange when active)
              }}
            />
          </div>
        </div>
      ))}
    </nav>
  );
};

export { IconNameNavbar };
