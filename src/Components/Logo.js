// import React from 'react';

// const Logo = ({ logoSrc, altText }) => {
//   return (
//     <div className="absolute top-10 left-6 md:left-20 z-10">
//       <img
//         src={logoSrc}
//         alt={altText}
//         className="w-28 md:w-28 lg:w-28 transition-transform duration-300 ease-in-out hover:scale-110"
//       />
//     </div>
//   );
// };

// export default Logo;



import React, { useState, useEffect } from "react";

const Logo = ({ logoSrc, altText }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide logo on scroll down
      } else {
        setIsVisible(true); // Show logo on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-6 md:left-20 z-50 transition-transform duration-1000 pt-5 ${
        isVisible ? "translate-y-1 opacity-100" : "-translate-y-full "
      }`}
    >
      <img
        src={logoSrc}
        alt={altText}
        className="w-28 md:w-32 lg:w-32 transition-transform duration-1000 ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default Logo;
