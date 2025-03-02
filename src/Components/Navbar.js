// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // Scroll behavior logic
//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY) {
//       // Hide navbar on scroll down
//       setIsVisible(false);
//     } else {
//       // Show navbar on scroll up
//       setIsVisible(true);
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`fixed top-0 right-12 z-50 px-6 py-4 transition-transform duration-1000 ${
//         isVisible ? 'translate-y-5' : '-translate-y-full'
//       }`}
//     >
//       <ul className="flex gap-6 text-white font-semibold">
//         <li className="hover:text-gray-300 cursor-pointer">Home</li>
//         <li className="hover:text-gray-300 cursor-pointer">Services</li>
//         <li className="hover:text-gray-300 cursor-pointer">Team</li>
//         <li className="hover:text-gray-300 cursor-pointer">Contact</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 666);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Detect screen size change
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 666);
//       if (window.innerWidth >= 666) {
//         setMenuOpen(false); // Close menu when resizing to desktop
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Scroll behavior logic
//   const handleScroll = () => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY) {
//       setIsVisible(false); // Hide navbar on scroll down
//       setMenuOpen(false); // Close mobile menu when scrolling
//     } else {
//       setIsVisible(true); // Show navbar on scroll up
//     }
//     setLastScrollY(currentScrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-transform duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
//       <div className="flex justify-end items-center">
//         {/* Logo */}

//         {/* Hamburger Menu Button */}
//         {isMobile ? (
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="absolute top-6 right-8 text-5xl  text-white"
//           >
//             ☰
//           </button>
//         ) : (
//           <ul className="flex gap-6 text-white font-semibold">
//             <li className="hover:text-gray-300 cursor-pointer">Home</li>
//             <li className="hover:text-gray-300 cursor-pointer">Services</li>
//             <li className="hover:text-gray-300 cursor-pointer">Team</li>
//             <li className="hover:text-gray-300 cursor-pointer">Contact</li>
//           </ul>
//         )}
//       </div>

//       {/* Fullscreen Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center text-white text-2xl space-y-6 transition-all duration-500">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-6 right-8 text-4xl"
//           >
//             ✖
//           </button>
//           <ul className="flex flex-col gap-6 text-center">
//             <li className="hover:text-gray-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Home</li>
//             <li className="hover:text-gray-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Services</li>
//             <li className="hover:text-gray-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Team</li>
//             <li className="hover:text-gray-400 cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import LanguageSwitcher from "./LanguageSwitcher";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 666);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Detect screen size change
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 666);
//       if (window.innerWidth >= 666) {
//         setMenuOpen(false); // Close menu when resizing to desktop
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Scroll behavior logic (Hide/Show Navbar like Logo)
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY) {
//         setIsVisible(false); // Move navbar up on scroll down
//         setMenuOpen(false); // Close mobile menu when scrolling
//       } else {
//         setIsVisible(true); // Move navbar down on scroll up
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//     className={` fixed top-0 left-0 w-full z-50 transition-transform duration-1000 ${
//       isVisible ? "translate-y-0" : "-translate-y-[150%]"
//     }`}
    
    
//     >
//       <div className="flex justify-end items-center relative">
//         {/* Hamburger Menu Button */}
//         {isMobile ? (
//       <div className="relative w-full flex justify-end right-6 top-6">
//       <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="text-5xl text-white transition-opacity duration-700"
//       >
//           ☰
//       </button>
//   </div>
//         ) : (
//           <ul className="flex gap-6 text-white font-semibold text-xl mt-4 mr-8">
//             <li className="hover:text-gray-300 cursor-pointer">Home</li>
//             <li className="hover:text-gray-300 cursor-pointer">Services</li>
//             <li className="hover:text-gray-300 cursor-pointer">Team</li>
//             <li className="hover:text-gray-300 cursor-pointer">Appointment</li>

//           </ul>
//         )}
//       </div>

//       {/* Fullscreen Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-0 left-0 w-full h-screen bg-[#272626] bg-opacity-95 flex flex-col items-center justify-center text-[#e8e2d4] text-5xl space-y-12 transition-all duration-3000">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-6 right-8 text-5xl"
//           >
//             ✖
//           </button>
//           <ul className="flex flex-col gap-6 text-center">
//             <li className="text-5xl font-bold text-center tracking-tighter" onClick={() => setMenuOpen(false)}>Home</li>
//             <li className="text-5xl font-bold text-center tracking-tighter" onClick={() => setMenuOpen(false)}>Services</li>
//             <li className="text-5xl font-bold text-center tracking-tighter" onClick={() => setMenuOpen(false)}>Team</li>
//             <li className="mt-2 text-5xl font-bold text-center tracking-tighter " 
//     onClick={() => setMenuOpen(false)}>
//   Appointment
// </li>
//          </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next"; // Import translation hook
// import LanguageSwitcher from "./LanguageSwitcher";

// const Navbar = () => {
//   const { t } = useTranslation(); // Get translation function
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 666);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Detect screen size change
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 666);
//       if (window.innerWidth >= 666) {
//         setMenuOpen(false); // Close menu when resizing to desktop
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Scroll behavior logic (Hide/Show Navbar like Logo)
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY) {
//         setIsVisible(false); // Move navbar up on scroll down
//         setMenuOpen(false); // Close mobile menu when scrolling
//       } else {
//         setIsVisible(true); // Move navbar down on scroll up
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-transform duration-1000 ${
//         isVisible ? "translate-y-0" : "-translate-y-[150%]"
//       }`}
//     >
//       <div className="flex justify-end items-center relative">
//         {/* Hamburger Menu Button */}
//         {isMobile ? (
//           <div className="relative w-full flex justify-end right-6 top-6">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-5xl text-white transition-opacity duration-700"
//             >
//               ☰
//             </button>
//           </div>
//         ) : (
//           <ul className="flex gap-6 text-white font-semibold text-xl mt-4 mr-8">
//             <li className="hover:text-gray-300 cursor-pointer">{t("navbar.home")}</li>
//             <li className="hover:text-gray-300 cursor-pointer">{t("navbar.services")}</li>
//             <li className="hover:text-gray-300 cursor-pointer">{t("navbar.team")}</li>
//             <li className="hover:text-gray-300 cursor-pointer">{t("navbar.appointment")}</li>

     

//           </ul>
//         )}
//       </div>

//       {/* Fullscreen Mobile Menu */}
//       {menuOpen && (
//         <div className="absolute top-0 left-0 w-full h-screen bg-[#e8e2d4] bg-opacity-99 flex flex-col items-center justify-center text-[#422f40] text-5xl space-y-12 transition-all duration-3000">
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="absolute top-6 right-8 text-5xl"
//           >
//             ✖
//           </button>
//           <ul className="flex flex-col gap-6 text-center">
//             <li className="text-5xl font-bold text-center tracking-tighter" onClick={() => setMenuOpen(false)}>
//               {t("navbar.home")}
//             </li>
//             <li className="text-5xl font-bold text-center tracking-tighter" onClick={() => setMenuOpen(false)}>
//               {t("navbar.services")}
//             </li>
//             <li className="text-5xl font-bold text-center tracking-tighter" onClick={() => setMenuOpen(false)}>
//               {t("navbar.team")}
//             </li>
//             <li className="mt-2 text-5xl font-bold text-center tracking-tighter" onClick={() => setMenuOpen(false)}>
//               {t("navbar.appointment")}
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 666);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 666);
      if (window.innerWidth >= 666) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Function to handle smooth scrolling
  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     window.scrollTo({
  //       top: element.offsetTop , // Adjust for navbar height
  //       behavior: "smooth",
  //     });
  //     setMenuOpen(false);
  //   }
  // };
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      let offset = element.offsetTop;
  
      // Adjust scroll for navbar height only for landing-page
      if (sectionId === "landing-page") {
        offset = 0; // Scroll to absolute top
      }
  
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
  
      setMenuOpen(false);
    }
  };
  
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-1000 ${
        isVisible ? "translate-y-0" : "-translate-y-[150%]"
      }`}
    >
      <div className="flex justify-end items-center relative">
        {isMobile ? (
          <div className="relative w-full flex justify-end right-6 top-6">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-5xl text-white transition-opacity duration-700"
            >
              ☰
            </button>
          </div>
        ) : (
          <ul className="flex gap-6 text-white font-semibold text-xl mt-4 mr-8">
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => scrollToSection("landing-page")}
            >
              {t("navbar.home")}
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => scrollToSection("services")}
            >
              {t("navbar.services")}
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => scrollToSection("team")}
            >
              {t("navbar.team")}
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
  <a href="https://www.doctolib.de/zahnarztpraxis/berlin/die-drei-zahnaerzte/booking/specialities?profile_skipped=true&utm_source=die-drei-zahnaerzte-website-button&utm_medium=referral&utm_campaign=website-button&utm_content=option-8&bookingFunnelSource=external_referral" target="_blank" rel="noopener noreferrer">
    {t("navbar.appointment")}
  </a>
</li>

          </ul>
        )}
       
      </div>

      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#e8e2d4] bg-opacity-99 flex flex-col items-center justify-center text-[#422f40] text-5xl space-y-12 transition-all duration-3000">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-8 text-5xl"
          >
            ✖
          </button>
          <ul className="flex flex-col gap-6 text-center">
            <li
              className="text-5xl font-bold text-center tracking-tighter"
              onClick={() => scrollToSection("landing-page")}
            >
              {t("navbar.home")}
            </li>
            <li
              className="text-5xl font-bold text-center tracking-tighter"
              onClick={() => scrollToSection("services")}
            >
              {t("navbar.services")}
            </li>
            <li
              className="text-5xl font-bold text-center tracking-tighter"
              onClick={() => scrollToSection("team")}
            >
              {t("navbar.team")}
            </li>
            <li className="mt-2 text-5xl font-bold text-center tracking-tighter">
  <a href="https://www.doctolib.de/zahnarztpraxis/berlin/die-drei-zahnaerzte/booking/specialities?bookingFunnelSource=profile" target="_blank" rel="noopener noreferrer">
    {t("navbar.appointment")}
  </a>
</li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
