


import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationComponent = () => {
  const rowsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  // Effect to update state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    rowsRef.current.forEach((row, index) => {
      if (row) {
        const direction = index % 2 === 0 ? 1 : -1;

        gsap.to(row, {
          x: () => window.innerWidth * 0.1 * direction,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });
  }, []);

  // Sample images (Replace with actual image URLs)
  const images = [
    "./Assets/face.png",
    "./Assets/face.png",
    "./Assets/face.png",
    "./Assets/face.png",
    "./Assets/face.png",
    "./Assets/face.png",
    "./Assets/face.png",
    "./Assets/face.png",
  ];

  return (
    <div className="relative min-h-[600px] sm:min-h-[700px] bg-[#272626] flex flex-col justify-center items-center w-full overflow-hidden">
      
      {/* Title (Only Visible for Mobile Screens) */}
      {isMobile && (
        <h1 className="block text-center text-6xl font-bold text-[#E8DCC6] mb-04 mt-1">
          Our Smile Gallery
        </h1>
      )}

      <div className="w-full max-w-screen-xl space-y-6 py-4">
        
        {/* First Row */}
        <div ref={(el) => (rowsRef.current[0] = el)} className="flex w-full justify-center items-center gap-x-6">
          {images.map((img, idx) => (
            idx === 3 && !isMobile ? (
              <h1 key={idx} className="text-[#422f40] text-8xl font-bold whitespace-nowrap tracking-tighter">
                Our
              </h1>
            ) : (
              <div key={idx} 
                className="bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105 
                w-[160px] h-[100px] sm:w-[210px] sm:h-[100px] lg:w-[310px] lg:h-[135px]">
                <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            )
          ))}
        </div>

        {/* Second Row */}
        <div ref={(el) => (rowsRef.current[1] = el)} className="flex w-full justify-center items-center gap-x-6">
          {images.map((img, idx) => (
            idx === 5 && !isMobile  ? (
              <h1 key={idx} className="text-[#422f40] text-8xl font-bold whitespace-nowrap tracking-tighter">
                Smile
              </h1>
            ) : (
              <div key={idx} 
                className="bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105 
                w-[160px] h-[100px] sm:w-[210px] c lg:w-[310px] lg:h-[135px]">
                <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            )
          ))}
        </div>

        {/* Third Row */}
        <div ref={(el) => (rowsRef.current[2] = el)} className="flex w-full justify-center items-center gap-x-6">
          {images.map((img, idx) => (
            idx === 3 && !isMobile ? (
              <h1 key={idx} className="text-[#422f40] text-8xl font-bold whitespace-nowrap tracking-tighter">
                Gallery
              </h1>
            ) : (
              <div key={idx} 
                className="bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105 
                w-[160px] h-[100px] sm:w-[210px] sm:h-[100px] lg:w-[310px] lg:h-[135px]">
                <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            )
          ))}
        </div>

      </div>
    </div>
  );
};

export default ScrollAnimationComponent;
