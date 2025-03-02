// import React, { useEffect } from "react";
// import { gsap } from "gsap";

// const ScrollAnimationComponent = () => {
//   useEffect(() => {
//     // Select the rows
//     const rows = document.querySelectorAll(".scroll-row");

//     // Apply GSAP animation
//     window.addEventListener("scroll", () => {
//       const scrollY = window.scrollY;

//       rows.forEach((row, index) => {
//         const direction = index % 2 === 0 ? 1 : -1; // Alternate direction
//         gsap.to(row, { x: scrollY * 0.2 * direction, duration: 0.5, ease: "power1.out" });
//       });
//     });

//     return () => window.removeEventListener("scroll", () => {});
//   }, []);

//   return (
//     <div className="relative min-h-[200vh] bg-white overflow-hidden flex flex-col justify-center items-center">
//       {/* Container for scrolling rows */}
//       <div className="w-full max-w-screen-lg space-y-6">
//         {/* First Row (Moves Right on Scroll Down) */}
//         <div className="scroll-row flex space-x-4">
//           <div className="w-48 h-24 bg-gray-200 rounded-xl flex items-center justify-center">
//             <img src="./Assets/person1.jpg" alt="Person" className="rounded-xl object-cover" />
//           </div>
//           <h1 className="text-black text-6xl font-bold">Built</h1>
//         </div>

//         {/* Second Row (Moves Left on Scroll Down) */}
//         <div className="scroll-row flex space-x-4">
//           <h1 className="text-black text-6xl font-bold">by</h1>
//           <div className="w-48 h-24 bg-gray-200 rounded-xl flex items-center justify-center">
//             <img src="./Assets/person2.jpg" alt="Person" className="rounded-xl object-cover" />
//           </div>
//         </div>

//         {/* Third Row (Moves Right on Scroll Down) */}
//         <div className="scroll-row flex space-x-4">
//           <div className="w-48 h-24 bg-gray-200 rounded-xl flex items-center justify-center">
//             <img src="./Assets/person3.jpg" alt="Person" className="rounded-xl object-cover" />
//           </div>
//           <h1 className="text-black text-6xl font-bold">the</h1>
//         </div>

//         {/* Fourth Row (Moves Left on Scroll Down) */}
//         <div className="scroll-row flex space-x-4">
//           <h1 className="text-black text-6xl font-bold">ambitious</h1>
//           <div className="w-48 h-24 bg-gray-200 rounded-xl flex items-center justify-center">
//             <img src="./Assets/person4.jpg" alt="Person" className="rounded-xl object-cover" />
//           </div>
//         </div>
//       </div>

   
//     </div>
//   );
// };

// export default ScrollAnimationComponent;



// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const MovingGrid = () => {
//   const rowsRef = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
      
//       rowsRef.current.forEach((row, index) => {
//         if (row) {
//           const direction = index % 2 === 0 ? 1 : -1; // Alternate movement direction
//           gsap.to(row, {
//             x: scrollY * 0.2 * direction, // Move based on scroll position
//             duration: 0.5,
//             ease: "power1.out",
//           });
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Sample images (Replace with actual image URLs)
//   const images = [
//     "./Assets/face.png",
//     "./Assets/hak.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/hak.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//   ];

//   return (
//     <div className="relative min-h-[200vh] bg-white flex flex-col justify-center items-center  max-w-screen">
//       {/* Container for scrolling rows */}
//       <div className="w-full  max-w-screen space-y-6 py-4">
        
//         {/* First Row (Moves Right on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[0] = el)} className="flex w-full justify-center items-center gap-x-6 mt-0  max-w-screen">
//           {images.slice(0, 6).map((img, idx) => (
//             <div key={idx} className="!w-[310px] h-[140px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none">
//               <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//             </div>
//           ))}
//           <h1 className="text-black text-7xl font-bold whitespace-nowrap">ambitious</h1>
//         </div>

//         {/* Second Row (Moves Left on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[1] = el)} className="flex w-full justify-center items-center gap-x-6  max-w-screen">
//           <h1 className="text-black text-7xl font-bold whitespace-nowrap">ambitious</h1>
//           {images.slice(7, 14).map((img, idx) => (
//             <div key={idx} className="!w-[310px] h-[140px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none">
//               <img src={img} alt={`Image ${idx + 4}`} className="w-full h-full object-cover" />
//             </div>
//           ))}
//         </div>

//         {/* Third Row (Moves Right on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[2] = el)} className="flex w-full justify-center items-center gap-x-6  max-w-screen">
//           {images.slice(0, 6).map((img, idx) => (
//             <div key={idx} className="!w-[310px] h-[140px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none">
//               <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//             </div>
//           ))}
//           <h1 className="text-black text-7xl font-bold whitespace-nowrap">ambitious</h1>
//         </div>

//         {/* Fourth Row (Moves Left on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[3] = el)} className="flex w-full justify-center items-center gap-x-6  max-w-screen">
//           <h1 className="text-black text-7xl font-bold whitespace-nowrap">ambitious</h1>
//           {images.slice(7,14).map((img, idx) => (
//             <div key={idx} className="!w-[310px] h-[140px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none">
//               <img src={img} alt={`Image ${idx + 4}`} className="w-full h-full object-cover" />
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MovingGrid;



// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const MovingGrid = () => {
//   const rowsRef = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
      
//       rowsRef.current.forEach((row, index) => {
//         if (row) {
//           const direction = index % 2 === 0 ? 1 : -1; // Alternate movement direction
//           gsap.to(row, {
//             x: scrollY * 0.2 * direction, // Move based on scroll position
//             duration: 0.5,
//             ease: "power1.out",
//           });
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Sample images (Replace with actual image URLs)
//   const images = [
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//   ];

//   return (
//     <div className="relative min-h-[110vh] bg-white flex flex-col justify-center items-center w-full overflow-hidden">
//       {/* Container for scrolling rows */}
//       <div className="w-full max-w-screen-xl space-y-6 py-4">
        
//         {/* First Row (Moves Right on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[0] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 1 ? (
//               <h1 key={idx} className="text-black text-9xl font-bold whitespace-nowrap tracking-tighter">Your</h1>
//             ) : (
//               <div key={idx} className="w-[310px] h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//         {/* Second Row (Moves Left on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[1] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 4 ? (
//               <h1 key={idx} className="text-black text-9xl font-bold whitespace-nowrap tracking-tighter">smile</h1>
//             ) : (
//               <div key={idx} className="w-[310px] h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//         {/* Third Row (Moves Right on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[2] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx ===1 ? (
//               <h1 key={idx} className="text-black text-9xl font-bold whitespace-nowrap tracking-tighter">our </h1>
//             ) : (
//               <div key={idx} className="w-[310px] h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//         {/* Fourth Row (Moves Left on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[3] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 4 ? (
//               <h1 key={idx} className="text-black text-9xl font-bold whitespace-nowrap tracking-tighter">mission</h1>
//             ) : (
//               <div key={idx} className="w-[310px] h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MovingGrid;



// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const MovingGrid = () => {
//   const rowsRef = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
      
//       rowsRef.current.forEach((row, index) => {
//         if (row) {
//           const direction = index % 2 === 0 ? 1 : -1; // Alternate movement direction
//           gsap.to(row, {
//             x: scrollY * 0.2 * direction, // Move based on scroll position
//             duration: 0.5,
//             ease: "power1.out",
//           });
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Sample images (Replace with actual image URLs)
//   const images = [
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//   ];

//   return (
//     <div className="relative min-h-[110vh] bg-[#e8e2d4] flex flex-col justify-center items-center w-full overflow-hidden">
//       {/* Container for scrolling rows */}
//       <div className="w-full max-w-screen-xl space-y-6 py-4">
        
//         {/* First Row (Moves Right on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[0] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 1 ? (
//               <h1 key={idx} className="text-[#422f40] text-9xl font-bold whitespace-nowrap tracking-tighter">Your</h1>
//             ) : (
//               <div key={idx} className="w-[310px] h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//         {/* Second Row (Moves Left on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[1] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 4 ? (
//               <h1 key={idx} className="text-[#422f40] text-9xl font-bold whitespace-nowrap tracking-tighter">smile</h1>
//             ) : (
//               <div key={idx} className="w-[310px] h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//         {/* Third Row (Moves Right on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[2] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 1 ? (
//               <h1 key={idx} className="text-[#422f40] text-9xl font-bold whitespace-nowrap tracking-tighter">our</h1>
//             ) : (
//               <div key={idx} className="w-[310px] h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//         {/* Fourth Row (Moves Left on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[3] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 4 ? (
//               <h1 key={idx} className="text-[#422f40] text-9xl font-bold whitespace-nowrap tracking-tighter">mission</h1>
//             ) : (
//               <div key={idx} className="w-[310px] h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MovingGrid;





// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const MovingGrid = () => {
//   const rowsRef = useRef([]);

//   useEffect(() => {
//     rowsRef.current.forEach((row, index) => {
//       if (row) {
//         const direction = index % 2 === 0 ? 1 : -1; // Alternate movement direction

//         gsap.to(row, {
//           x: () => window.innerWidth * 0.1 * direction, // Move based on viewport width
//           duration: 1,
//           ease: "power1.out",
//           scrollTrigger: {
//             trigger: row,
//             start: "top bottom", // Start animation when row enters viewport
//             end: "bottom top", // Stop when it leaves
//             scrub: 1, // Smooth scrolling effect
//           },
//         });
//       }
//     });
//   }, []);

//   // Sample images (Replace with actual image URLs)
//   const images = [
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png","./Assets/face.png",
//   ];

//   return (

//     <div className="relative min-h-[700px] bg-[#e8e2d4] flex flex-col justify-center items-center w-full overflow-hidden">


//       {/* Container for scrolling rows */}
//       <div className="w-full max-w-screen-xl space-y-6 py-4">
        
//         {/* First Row (Moves Right on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[0] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 3 ? (
//               <h1 key={idx} className="text-[#422f40] text-8xl font-bold whitespace-nowrap tracking-tighter">Our </h1>
//             ) : (
            
//               <div key={idx} className="w-[210px] h-[100px] lg:w-[310px] lg:h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105">
//   <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
// </div>
//             )
//           ))}
//         </div>

//         {/* Second Row (Moves Left on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[1] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 5 ? (
//               <h1 key={idx} className="text-[#422f40] text-8xl font-bold whitespace-nowrap tracking-tighter">Smile</h1>
//             ) : (
         
// <div key={idx} className="w-[210px] h-[100px] lg:w-[310px] lg:h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105">
// <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
// </div>

//             )
//           ))}
//         </div>

//         {/* Third Row (Moves Right on Scroll Down) */}
//         <div ref={(el) => (rowsRef.current[2] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 3 ? (
//               <h1 key={idx} className="text-[#422f40] text-8xl font-bold whitespace-nowrap tracking-tighter">Gallery</h1>
//             ) : (
       
//               <div key={idx} className="w-[210px] h-[100px] lg:w-[310px] lg:h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105">
//               <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//             </div>
//             )
//           ))}
//         </div>

//         {/* Fourth Row (Moves Left on Scroll Down) */}
//         {/* <div ref={(el) => (rowsRef.current[3] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 4 ? (
//               <h1 key={idx} className="text-[#422f40] text-9xl font-bold whitespace-nowrap tracking-tighter">made</h1>
//             ) : (
//               <div key={idx} className="w-[310px] h-[135px] bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div> */}

//       </div>
//     </div>
//   );
// };

// export default MovingGrid;



// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollAnimationComponent = () => {
//   const rowsRef = useRef([]);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

//   // Effect to update state on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 500);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     rowsRef.current.forEach((row, index) => {
//       if (row) {
//         const direction = index % 2 === 0 ? 1 : -1;

//         gsap.to(row, {
//           x: () => window.innerWidth * 0.1 * direction,
//           duration: 1,
//           ease: "power1.out",
//           scrollTrigger: {
//             trigger: row,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1,
//           },
//         });
//       }
//     });
//   }, []);

//   // Sample images (Replace with actual image URLs)
//   const images = [
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//     "./Assets/face.png",
//   ];

//   return (
//     <div className="relative min-h-[600px] sm:min-h-[700px] bg-[#e8e2d4] flex flex-col justify-center items-center w-full overflow-hidden">
      
//       {/* Title (Only Visible for Mobile Screens) */}
//       {isMobile && (
//         <h1 className="block text-center text-6xl font-bold text-[#422f40] mb-04 mt-1">
//           Our Smile Gallery
//         </h1>
//       )}

//       <div className="w-full max-w-screen-xl space-y-6 py-4">
        
//         {/* First Row */}
//         <div ref={(el) => (rowsRef.current[0] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 3 && !isMobile ? (
//               <h1 key={idx} className="text-[#422f40] text-8xl font-bold whitespace-nowrap tracking-tighter">
//                 Our
//               </h1>
//             ) : (
//               <div key={idx} 
//                 className="bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105 
//                 w-[160px] h-[100px] sm:w-[210px] sm:h-[100px] lg:w-[310px] lg:h-[135px]">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//         {/* Second Row */}
//         <div ref={(el) => (rowsRef.current[1] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 5 && !isMobile  ? (
//               <h1 key={idx} className="text-[#422f40] text-8xl font-bold whitespace-nowrap tracking-tighter">
//                 Smile
//               </h1>
//             ) : (
//               <div key={idx} 
//                 className="bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105 
//                 w-[160px] h-[100px] sm:w-[210px] c lg:w-[310px] lg:h-[135px]">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//         {/* Third Row */}
//         <div ref={(el) => (rowsRef.current[2] = el)} className="flex w-full justify-center items-center gap-x-6">
//           {images.map((img, idx) => (
//             idx === 3 && !isMobile ? (
//               <h1 key={idx} className="text-[#422f40] text-8xl font-bold whitespace-nowrap tracking-tighter">
//                 Gallery
//               </h1>
//             ) : (
//               <div key={idx} 
//                 className="bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-105 
//                 w-[160px] h-[100px] sm:w-[210px] sm:h-[100px] lg:w-[310px] lg:h-[135px]">
//                 <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
//               </div>
//             )
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ScrollAnimationComponent;





import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimationComponent = () => {
  const { t } = useTranslation(); // Get translation function
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
    <div className="relative min-h-[600px] sm:min-h-[700px] bg-[#e8e2d4] flex flex-col justify-center items-center w-full overflow-hidden">
      
      {/* Title (Only Visible for Mobile Screens) */}
      {isMobile && (
        <h1 className="block text-center text-6xl font-bold text-[#422f40] mb-04 mt-1">
          {t("smile_gallery.title")}
        </h1>
      )}

      <div className="w-full max-w-screen-xl space-y-6 py-4">
        
        {/* First Row */}
        <div ref={(el) => (rowsRef.current[0] = el)} className="flex w-full justify-center items-center gap-x-6">
          {images.map((img, idx) => (
            idx === 3 && !isMobile ? (
              <h1 key={idx} className="text-[#422f40] text-8xl font-bold whitespace-nowrap tracking-tighter">
                {t("smile_gallery.words.our")}
              </h1>
            ) : (
              <div key={idx} 
                className="bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-120 
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
                {t("smile_gallery.words.smile")}
              </h1>
            ) : (
              <div key={idx} 
                className="bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-110 
                w-[160px] h-[100px] sm:w-[210px] sm:h-[100px] lg:w-[310px] lg:h-[135px]">
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
                {t("smile_gallery.words.gallery")}
              </h1>
            ) : (
              <div key={idx} 
                className="bg-[#E8DCC6] rounded-xl overflow-hidden flex-none group transition-transform duration-300 hover:scale-120 
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
