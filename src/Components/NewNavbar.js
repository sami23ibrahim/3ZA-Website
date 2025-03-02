import React, { useState } from 'react';

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <nav
      className="fixed top-10 inset-x-0 mx-auto z-50 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-gray-500"
      style={{ width: 'fit-content' }}
    >
      <ul className="flex gap-6 text-white font-semibold">
        {['Home', 'About Us', 'Services', 'Projects', 'News'].map(
          (item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`cursor-pointer transition-colors duration-300 ${
                hoveredIndex === index
                  ? 'text-white'
                  : hoveredIndex !== null
                  ? 'text-gray-400'
                  : 'text-white'
              }`}
            >
              {item}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
