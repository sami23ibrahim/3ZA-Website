import React, { useState, useEffect } from "react";

const NewLogo = () => {
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
        isVisible ? "translate-y-1 opacity-100" : "-translate-y-full"
      }`}
    >
      <div
        className="relative w-28 md:w-32 lg:w-32 h-28 md:h-32 lg:h-32"
        style={{
          WebkitMaskImage: "url('/Assets/logo.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "contain",
          maskImage: "url('/Assets/logo.svg')",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "contain",
        }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out hover:scale-110"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Assets/logo-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default NewLogo;
