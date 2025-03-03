// import React from "react";

// const HighlightedCases = () => {
//   const cards = [
//     { title: "Patta", bg: "bg-[#d85c85]", img: "./Assets/vid5.png", translate: "-translate-x-[280px] -rotate-12 translate-y-[130px] z-20" },
//     { title: "The Good Roll", bg: "bg-[#0c2646]",  img: "./Assets/vid5.png", translate: "-translate-x-[500px] -rotate-6 -translate-y-[-30px] z-10" },
//     { title: "Wildride", bg: "bg-[#2255ff]",  img: "./Assets/vid5.png", translate: "translate-x-[490px] rotate-3 translate-y-[-10px] z-50" },
//     { title: "Tony's Chocolonely", bg: "bg-[#f1c85e]", img: "./Assets/vid5.png", translate: "translate-x-[260px] rotate-6 translate-y-[220px] z-40" },
//     { title: "Shaping New Tomorrow", bg: "bg-[#cd6b45]", img: "./Assets/vid5.png",  translate: "translate-x-[30px] -rotate-6 -translate-y-[30px] z-30" },
//   ];

//   return (
//     <div className="flex justify-center items-center min-h-[170vh] bg-[#e8e2d4] relative mt-0 ">
//       <div className="relative flex justify-center items-center">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`absolute w-[240px] md:w-[280px] lg:w-[390px] h-[340px] md:h-[320px] lg:h-[570px] ${card.bg} ${card.translate} rounded-3xl shadow-lg text-[#e8e2d4] p-4 flex flex-col justify-between transition-transform duration-300`}
//           >
//             <h2 className="font-bold text-sm md:text-4xl">{card.title}</h2>
//             <div className="relative w-full h-[270px] overflow-hidden rounded-lg">
//               <img
//                 src={card.img}
//                 alt={card.title}
//                 className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HighlightedCases;




// import React from "react";

// const HighlightedCases = () => {
//   const cards = [
//     { title: "Patta", bg: "bg-[#d85c85]", img: "./Assets/vid5.png", translate: "-translate-x-[280px] -rotate-12 translate-y-[130px] z-20" },
//     { title: "The Good Roll", bg: "bg-[#0c2646]", img: "./Assets/vid5.png", translate: "-translate-x-[500px] -rotate-6 -translate-y-[-10px] z-10" },
//     { title: "Wildride", bg: "bg-[#2255ff]", img: "./Assets/vid5.png", translate: "translate-x-[490px] rotate-3 translate-y-[-10px] z-50" },
//     { title: "Tony's Chocolonely", bg: "bg-[#f1c85e]", img: "./Assets/vid5.png", translate: "translate-x-[260px] rotate-6 translate-y-[220px] z-40" },
//     { title: "Shaping New Tomorrow", bg: "bg-[#cd6b45]", img: "./Assets/vid5.png", translate: "translate-x-[30px] -rotate-6 -translate-y-[30px] z-30" },
//   ];

//   return (
//     <div className="flex justify-center items-center min-h-[170vh] bg-[#e8e2d4] relative mt-0">
//       <div className="relative flex justify-center items-center">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`group absolute w-[240px] md:w-[280px] lg:w-[390px] h-[340px] md:h-[320px] lg:h-[570px] ${card.translate} rounded-3xl shadow-lg flex justify-center items-center transition-transform duration-300`}
//           >
//             {/* Background Div that expands */}
//             <div className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-300 group-hover:scale-105`} />

//             {/* Content (Text + Image) - Kept at original size */}
//             <div className="relative z-10 p-4 flex flex-col justify-between w-full h-full">
//               <h2 className="font-bold text-sm md:text-4xl text-[#e8e2d4]">{card.title}</h2>
//               <div className="relative w-full h-[270px] overflow-hidden rounded-lg">
//                 <img
//                   src={card.img}
//                   alt={card.title}
//                   className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HighlightedCases;




// import React from "react";

// const HighlightedCases = () => {
//   const cards = [
//     { title: "Patta", bg: "bg-[#0c2646]", img: "./Assets/vid5.png", translate: "-translate-x-[500px] -rotate-6 -translate-y-[-20px] z-10" },
//     { title: "The Good Roll", bg: "bg-[#d85c85]", img: "./Assets/vid5.png", translate: "-translate-x-[280px] -rotate-12 translate-y-[170px] z-20" },
//     { title: "Wildride", bg: "bg-[#cd6b45]", img: "./Assets/vid5.png", translate: "translate-x-[30px] -rotate-6 -translate-y-[30px] z-30" },
//     { title: "Tony's Chocolonely", bg: "bg-[#f1c85e]", img: "./Assets/vid5.png", translate: "translate-x-[260px] rotate-6 translate-y-[220px] z-40" },
//     { title: "Shaping New Tomorrow", bg: "bg-[#2255ff]", img: "./Assets/vid5.png", translate: "translate-x-[490px] rotate-3 translate-y--0px] z-50" },

//   ];

//   return (
//     <div className="flex justify-center items-center min-h-[170vh] bg-white relative mt-0">
//       <div className="relative flex justify-center items-center">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`group absolute w-[240px] md:w-[280px] lg:w-[390px] h-[340px] md:h-[320px] lg:h-[570px] ${card.translate} rounded-3xl shadow-lg flex justify-center items-center transition-transform duration-500 `}
//           >
//             {/* Background Div that expands with bounce effect */}
//             <div
//               className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-500 group-hover:scale-105 `}
//               style={{
//                 transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)", // Bouncy effect
//               }}
//             />

//             {/* Content (Text + Image) - Kept at original size */}
//             <div className="relative z-10 p-4 flex flex-col justify-between w-full h-full">
//               <h2 className="font-bold text-sm md:text-4xl text-[#e8e2d4]">{card.title}</h2>
//               <div className="relative w-full h-[270px] overflow-hidden rounded-lg">
//                 <img
//                   src={card.img}
//                   alt={card.title}
//                   className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HighlightedCases;


// import React, { useState } from "react";

// const HighlightedCases = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered card index

//   const cards = [
//     { title: "Patta", bg: "bg-[#d85c85]", img: "./Assets/vid5.png", translate: "-translate-x-[280px] -rotate-12 translate-y-[130px] z-50" },
//     { title: "The Good Roll", bg: "bg-[#0c2646]", img: "./Assets/vid5.png", translate: "-translate-x-[500px] -rotate-6 -translate-y-[-30px] z-10" },
//     { title: "Wildride", bg: "bg-[#2255ff]", img: "./Assets/vid5.png", translate: "translate-x-[490px] rotate-3 translate-y-[-10px] z-50" },
//     { title: "Tony's Chocolonely", bg: "bg-[#f1c85e]", img: "./Assets/vid5.png", translate: "translate-x-[260px] rotate-6 translate-y-[220px] z-40" },
//     { title: "Shaping New Tomorrow", bg: "bg-[#cd6b45]", img: "./Assets/vid5.png", translate: "translate-x-[30px] -rotate-6 -translate-y-[30px] z-30" },
//   ];

//   return (
//     <div className="flex justify-center items-center min-h-[170vh] bg-[#e8e2d4] relative mt-0">
//       <div className="relative flex justify-center items-center">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => setHoveredIndex(index)}  // Set hovered card index
//             onMouseLeave={() => setHoveredIndex(null)}   // Reset when mouse leaves
//             className={`absolute w-[240px] md:w-[280px] lg:w-[390px] h-[340px] md:h-[320px] lg:h-[570px] ${card.translate} rounded-3xl shadow-lg flex justify-center items-center transition-transform duration-500`}
//             style={{
//               zIndex: hoveredIndex === index ? 70 : 30, // Dynamically change z-index
//             }}
//           >
//             {/* Background Div that expands with bounce effect */}
//             <div
//               className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-500`}
//               style={{
//                 transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)", // Expand on hover
//                 transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)", // Bouncy effect
//               }}
//             />

//             {/* Content (Text + Image) - Kept at original size */}
//             <div className="relative z-10 p-4 flex flex-col justify-between w-full h-full">
//               <h2 className="font-bold text-sm md:text-4xl text-[#e8e2d4]">{card.title}</h2>
//               <div className="relative w-full h-[270px] overflow-hidden rounded-lg">
//                 <img
//                   src={card.img}
//                   alt={card.title}
//                   className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HighlightedCases;




// import React, { useState } from "react";

// const HighlightedCases = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered card index

//    const cards = [
//     { title: "Patta", bg: "bg-[#0c2646]", img: "./Assets/11.webp", translate: "-translate-x-[500px] -rotate-6 -translate-y-[-20px] z-10" },
//     { title: "The Good Roll", bg: "bg-[#d85c85]", img: "./Assets/22.webp", translate: "-translate-x-[280px] -rotate-12 translate-y-[170px] z-20" },
//     { title: "Wildride", bg: "bg-[#cd6b45]", img: "./Assets/33.webp", translate: "translate-x-[30px] -rotate-6 -translate-y-[30px] z-30" },
//     { title: "Tony's Chocolonely", bg: "bg-white", img: "./Assets/44.webp", translate: "translate-x-[260px] rotate-6 translate-y-[220px] z-40" },
//     { title: "Shaping New Tomorrow", bg: "bg-[#2255ff]", img: "./Assets/55.webp", translate: "translate-x-[490px] rotate-3 translate-y--0px] z-50" },

//   ];

//   return (
//     <div className="flex justify-center items-center min-h-[170vh] bg-white relative mt-0">
//       <div className="relative flex justify-center items-center">
//         {cards.map((card, index) => {
//           // Extract original z-index from the "translate" property
//           const originalZIndex = parseInt(card.translate.match(/z-(\d+)/)?.[1] || "30");

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}  // Set hovered card index
//               onMouseLeave={() => setHoveredIndex(null)}   // Reset when mouse leaves
//               className={`absolute w-[240px] md:w-[280px] lg:w-[390px] h-[340px] md:h-[320px] lg:h-[570px] ${card.translate} rounded-3xl shadow-lg flex justify-center items-center transition-transform duration-500`}
//               style={{
//                 zIndex: hoveredIndex === index ? 70 : originalZIndex, // Preserve original z-index
//               }}
//             >
//               {/* Background Div that expands with bounce effect */}
//               <div
//                 className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-5000`}
//                 style={{
//                   transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)", // Expand on hover
//                   //  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)", // Bouncy effect
//                   transitionTimingFunction: "cubic-bezier(0.3, 2.5, 0.6, 1.8)",
//                   transitionDuration: "500ms",

//                 }}
//               />

//               {/* Content (Text + Image) - Kept at original size */}
//               <div className="relative z-10 p-4 flex flex-col justify-between w-full h-full">
//                 <h2 className="font-bold  text-sm md:text-4xl text-[#e8e2d4]">{card.title}</h2>
//                 <div className="relative w-full h-[270px] overflow-hidden rounded-lg">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HighlightedCases;



// import React, { useState } from "react";

// const HighlightedCases = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered card index
//   const [offset, setOffset] = useState({ x: 0, y: 0 }); // Parallax movement offset

//   const handleMouseMove = (e) => {
//     // Get normalized mouse position (-1 to 1)
//     const { innerWidth, innerHeight } = window;
//     const xOffset = (e.clientX / innerWidth - 0.9) *80; // Move opposite direction
//     const yOffset = (e.clientY / innerHeight - 0.9) * 80;

//     setOffset({ x: -xOffset, y: -yOffset });
//   };

//   const cards = [
//     { title: "Patta", bg: "bg-[#0c2646]", img: "./Assets/11.webp", translate: "-translate-x-[500px] -rotate-6 -translate-y-[-20px] z-10" },
//     { title: "The Good Roll", bg: "bg-[#d85c85]", img: "./Assets/22.webp", translate: "-translate-x-[280px] -rotate-12 translate-y-[170px] z-20" },
//     { title: "Wildride", bg: "bg-[#cd6b45]", img: "./Assets/33.webp", translate: "translate-x-[30px] -rotate-6 -translate-y-[30px] z-30" },
//     { title: "Tony's Chocolonely", bg: "bg-white", img: "./Assets/44.webp", translate: "translate-x-[260px] rotate-6 translate-y-[220px] z-40" },
//     { title: "Shaping New Tomorrow", bg: "bg-[#2255ff]", img: "./Assets/55.webp", translate: "translate-x-[490px] rotate-3 translate-y-[0px] z-50" },
//   ];

//   return (

    
//     <div
//       className="flex justify-center items-center min-h-[170vh] bg-white relative mt-0 overflow-hidden max-w-screen"
//       onMouseMove={handleMouseMove} // Track mouse movement
//     >




//       <div
//         className="relative flex justify-center items-center transition-transform duration-500"
//         style={{
//           transform: `translate(${offset.x}px, ${offset.y}px)`, // Apply parallax effect
//         }}
//       >
//         {cards.map((card, index) => {
//           const originalZIndex = parseInt(card.translate.match(/z-(\d+)/)?.[1] || "30");

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className={`absolute w-[240px] md:w-[280px] lg:w-[390px] h-[340px] md:h-[320px] lg:h-[570px] ${card.translate} rounded-3xl shadow-lg flex justify-center items-center transition-transform duration-500`}
//               style={{
//                 zIndex: hoveredIndex === index ? 70 : originalZIndex,
//               }}
//             >
//               {/* Background Div that expands with bounce effect */}
//               <div
//                 className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-500`}
//                 style={{
//                   transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
//                   transitionTimingFunction: "cubic-bezier(0.3, 2.5, 0.6, 1.8)",
//                   transitionDuration: "500ms",
//                 }}
//               />

//               {/* Content (Text + Image) - Kept at original size */}
//               <div className="relative z-10  flex flex-col justify-between w-full h-full p-2">
//                 <h2 className="p-2 font-bold text-sm md:text-4xl text-[#e8e2d4]">{card.title}</h2>
//                 <div className=" relative w-full h-[280px] overflow-hidden rounded-lg ">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HighlightedCases;





// import React, { useState } from "react";

// const ServicesCards = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const { innerWidth, innerHeight } = window;
  
//     // Calculate movement based on cursor position
//     let xOffset = (e.clientX / innerWidth - 0.5) * 100; 
//     let yOffset = (e.clientY / innerHeight - 0.5) * 100; 
  
//     // Limit the movement range (adjust values as needed)
//     const MAX_OFFSET = 10; // Maximum movement in pixels
  
//     xOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, xOffset));
//     yOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, yOffset));
  
//     setOffset({ x: -xOffset, y: -yOffset });
//   };
  





//   const cards = [
//     { title: "Patta", bg: "bg-[#0c2646]", img: "./Assets/11.webp", translate: "-translate-x-[500px] -rotate-6 -translate-y-[-20px] z-10" },
//     { title: "The Good Roll", bg: "bg-[#d85c85]", img: "./Assets/22.webp", translate: "-translate-x-[280px] -rotate-12 translate-y-[170px] z-20" },
//     { title: "Wildride", bg: "bg-[#cd6b45]", img: "./Assets/33.webp", translate: "translate-x-[30px] -rotate-6 -translate-y-[30px] z-30" },
//     { title: "Tony's Chocolonely", bg: "bg-[#422f40]", img: "./Assets/44.webp", translate: "translate-x-[260px] rotate-6 translate-y-[220px] z-50" },
//     { title: "Shaping New Tomorrow", bg: "bg-[#2255ff]", img: "./Assets/55.webp", translate: "translate-x-[490px] rotate-3 translate-y-[0px] z-40" },
//   ];

//   return (
//     <div
//       className="relative flex flex-col justify-center items-center min-h-[170vh] bg-[#e8e2d4] overflow-hidden max-w-screen"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Title Fixed at the Top */}
//       <h1 className="absolute top-10 text-8xl font-bold text-[#422f40] text-center z-50 tracking-tighter">
//       Our Services
//       </h1>

//       {/* Cards Container - Moves Separately */}
//       <div
//         className="relative flex justify-center items-center transition-transform duration-500"
//         style={{
//           transform: `translate(${offset.x}px, ${offset.y}px)`,
//           transition: "transform 0.1s ease-out", // Faster and smoother transition
//         }}
//       >
//         {cards.map((card, index) => {
//           const originalZIndex = parseInt(card.translate.match(/z-(\d+)/)?.[1] || "30");

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className={`absolute w-[240px] md:w-[280px] lg:w-[390px] h-[340px] md:h-[320px] lg:h-[570px] ${card.translate} rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-500`}
//               style={{
//                 zIndex: hoveredIndex === index ? 70 : originalZIndex,
//               }}
//             >
//               {/* Background */}
//               <div
//                 className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-500`}
//                 style={{
//                   transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
//                   transitionTimingFunction: "cubic-bezier(0.3, 2.5, 0.6, 1.8)",
//                   transitionDuration: "500ms",
//                 }}
//               />

//               {/* Card Content */}
//               <div className="relative z-10 flex flex-col justify-between w-full h-full p-2">
//                 <h2 className="p-2 font-bold text-sm md:text-4xl text-white">{card.title}</h2>
//                 <div className="relative w-full h-[280px] overflow-hidden rounded-lg">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ServicesCards;














// import React, { useState, useEffect } from "react";

// const ServicesCards = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [scrollProgress, setScrollProgress] = useState(0);

//   // Handle Mouse Move Effect
//   const handleMouseMove = (e) => {
//     const { innerWidth, innerHeight } = window;
  
//     let xOffset = (e.clientX / innerWidth - 0.5) * 150; 
//     let yOffset = (e.clientY / innerHeight - 0.5) * 150; 
  
//     const MAX_OFFSET = 10;
//     xOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, xOffset));
//     yOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, yOffset));
  
//     setOffset({ x: -xOffset, y: -yOffset });
//   };

//   // Handle Scroll Effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const startPoint = windowHeight * 0.6; // Start effect at 50% of viewport
//       const endPoint = windowHeight * 0.7; // End effect at 150% viewport

//       // Normalize scroll progress between 0 (start) and 1 (end)
//       const progress = Math.min(1, Math.max(0, (scrollY - startPoint) / (endPoint - startPoint)));

//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
 
//   const cards = [
//     { title: "Patta", bg: "bg-[#0c2646]", img: "./Assets/11.webp", startX: 0, startY: 0, targetX: -500, targetY: -20, rotate: -6, zIndex: 10 },
//     { title: "The Good Roll", bg: "bg-[#f15a38]", img: "./Assets/22.webp", startX: 0, startY: 0, targetX: -280, targetY: 170, rotate: -12, zIndex: 20 },
//     { title: "Wildride", bg: "bg-[#f496bf]", img: "./Assets/33.webp", startX: 0, startY: 0, targetX: 30, targetY: -30, rotate: -6, zIndex: 30 },
//     { title: "Tony's Chocolonely", bg: "bg-[#f68b1f]", img: "./Assets/44.webp", startX: 0, startY: 0, targetX: 260, targetY: 220, rotate: 6, zIndex: 40 },
//     { title: "Shaping New Tomorrow", bg: "bg-[#422f40]", img: "./Assets/55.webp", startX: 0, startY: 0, targetX: 490, targetY: 0, rotate: 3, zIndex: 50 },
//   ];

//   return (
//     <div
//       className="relative flex flex-col justify-center items-center min-h-[170vh] bg-[#e8e2d4] overflow-hidden max-w-screen"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Title Fixed at the Top */}
//       <h1 className="absolute top-10 text-8xl font-bold text-[#422f40] text-center z-50 tracking-tighter">
//         Our Services
//       </h1>

//       {/* Cards Container - Moves Separately */}
//       <div
//         className="relative flex justify-center items-center transition-transform duration-500"
//         style={{
//           transform: `translate(${offset.x}px, ${offset.y}px)`,
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         {cards.map((card, index) => {
//           // Calculate position based on scroll progress
//           const translateX = card.startX + (card.targetX - card.startX) * scrollProgress;
//           const translateY = card.startY + (card.targetY - card.startY) * scrollProgress;
//           const rotate = (1 - scrollProgress) * 10 + card.rotate; // Add slight rotation effect

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="absolute w-[240px] md:w-[280px] lg:w-[390px] h-[340px] md:h-[320px] lg:h-[570px] rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-500"
//               style={{
//                 zIndex: hoveredIndex === index ? 70 : card.zIndex,
//                 transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
//               //  opacity: Math.max(0.3, scrollProgress), // Cards fade in gradually
//                 transition: "transform 0.6s ease-out, opacity 0.5s ease-in-out",
//               }}
//             >
//               {/* Background */}
//               <div
//                 className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-500`}
//                 style={{
//                   transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
//                   transitionTimingFunction: "cubic-bezier(0.3, 2.5, 0.6, 1.8)",
//                   transitionDuration: "500ms",
//                 }}
//               />

//               {/* Card Content */}
//               <div className="relative z-10 flex flex-col justify-between w-full h-full p-2">
//                 <h2 className="p-2 font-bold text-sm md:text-4xl text-white">{card.title}</h2>
//                 <div className="relative w-full h-[280px] overflow-hidden rounded-lg">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ServicesCards;





// import React, { useState, useEffect } from "react";

// const ServicesCards = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   // Update screen width on resize
//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Handle Mouse Move Effect
//   const handleMouseMove = (e) => {
//     const { innerWidth, innerHeight } = window;
  
//     let xOffset = (e.clientX / innerWidth - 0.5) * 150; 
//     let yOffset = (e.clientY / innerHeight - 0.5) * 150; 
  
//     const MAX_OFFSET = 10;
//     xOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, xOffset));
//     yOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, yOffset));
  
//     setOffset({ x: -xOffset, y: -yOffset });
//   };

//   // Handle Scroll Effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const startPoint = windowHeight * 0.6; 
//       const endPoint = windowHeight * 0.7; 

//       const progress = Math.min(1, Math.max(0, (scrollY - startPoint) / (endPoint - startPoint)));

//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scale positions dynamically based on screen width
//   const scaleFactor = screenWidth / 1920; // Assuming 1920px is the original design width

//   const cards = [
//     { title: "Patta", bg: "bg-[#0c2646]", img: "./Assets/11.webp", targetX: -500, targetY: -20, rotate: -6, zIndex: 10 },
//     { title: "The Good Roll", bg: "bg-[#f15a38]", img: "./Assets/22.webp", targetX: -280, targetY: 170, rotate: -12, zIndex: 20 },
//     { title: "Wildride", bg: "bg-[#f496bf]", img: "./Assets/33.webp", targetX: 30, targetY: -30, rotate: -6, zIndex: 30 },
//     { title: "Tony's Chocolonely", bg: "bg-[#f68b1f]", img: "./Assets/44.webp", targetX: 260, targetY: 250, rotate: 6, zIndex: 50 },
//     { title: "Shaping New Tomorrow", bg: "bg-[#422f40]", img: "./Assets/55.webp", targetX: 490, targetY: 0, rotate: 3, zIndex: 40 },
//   ].map(card => ({
//     ...card,
//     targetX: card.targetX * scaleFactor, // Adjust X position based on screen width
//     targetY: card.targetY * scaleFactor, // Adjust Y position based on screen width
//   }));

//   return (
//     <div
//     className={`relative flex flex-col justify-center items-center 
//       bg-[#e8e2d4] overflow-hidden max-w-screen 
//       ${screenWidth >= 1025 ? "min-h-[170vh]" : "min-h-screen"}`}
//      //className="relative flex flex-col justify-center items-center min-h-[170vh] bg-[#e8e2d4] overflow-hidden max-w-screen"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Title Fixed at the Top */}
//       <h1 className=" absolute top-10 text-8xl font-bold text-[#422f40] text-center z-50 tracking-tighter">
//         Our Services
//       </h1>




// {/* Window Dimensions Debugging */}
// {/* <div className="absolute inset-0 flex justify-center items-center z-50">
//   <div className="text-black text-6xl font-bold bg-white p-4 rounded-lg shadow-lg">
//     {screenWidth} x {window.innerHeight}
//   </div>
// </div> */}




//       {/* Cards Container - Moves Separately */}
//       <div
//         className="relative flex justify-center  items-center transition-transform duration-500"
//         style={{
//           transform: `translate(${offset.x}px, ${offset.y}px)`,
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         {cards.map((card, index) => {
//           // Calculate position based on scroll progress
//           const translateX = card.targetX * scrollProgress;
//           const translateY = card.targetY * scrollProgress;
//           const rotate = (1 - scrollProgress) * 10 + card.rotate;

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               // className="absolute w-[28vw] md:w-[32vw] lg:w-[28vw] h-[50vh] md:h-[65vh] lg:h-[85vh] rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-500"

//               className="absolute w-[30vw] md:w-[32vw] lg:w-[28vw] 
//               h-[50vh] md:h-[65vh] lg:h-[85vh] 
//               max-h-[calc(1.9_*_28vw)] md:max-h-[calc(1.9_*_32vw)] lg:max-h-[calc(1.6_*_28vw)] 
//               rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-500"
   


//               style={{
//                 zIndex: hoveredIndex === index ? 70 : card.zIndex,
//                 transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
//                 transition: "transform 0.6s ease-out, opacity 0.5s ease-in-out",
//               }}
//             >


//               {/* Background */}
//               <div
//                 className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-500`}
//                 style={{
//                   transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
//                   transitionTimingFunction: "cubic-bezier(0.3, 2.5, 0.6, 1.8)",
//                   transitionDuration: "500ms",
//                 }}
//               />

//               {/* Card Content */}
//               <div className="relative z-10 flex flex-col justify-between w-full h-full p-2">
//                 <h2 className="p-2 font-bold text-sm md:text-4xl text-white">{card.title}</h2>
//                 <div className="relative w-full h-[70%] overflow-hidden rounded-lg">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ServicesCards;



// import React, { useState, useEffect } from "react";

// const ServicesCards = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMouseMove = (e) => {
//     const { innerWidth, innerHeight } = window;
//     let xOffset = (e.clientX / innerWidth - 0.5) * 150;
//     let yOffset = (e.clientY / innerHeight - 0.5) * 150;

//     const MAX_OFFSET = 10;
//     xOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, xOffset));
//     yOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, yOffset));

//     setOffset({ x: -xOffset, y: -yOffset });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const startPoint = windowHeight * 0.6;
//       const endPoint = windowHeight * 0.7;
//       const progress = Math.min(1, Math.max(0, (scrollY - startPoint) / (endPoint - startPoint)));
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scaleFactor = screenWidth / 1920;

//   const cards = [
//     { title: "Anxiety Patients", bg: "bg-[#0c2646]", img: "./Assets/smile2.png", video: "./Assets/smile.mp4", targetX: -500, targetY: -20, rotate: -6, zIndex: 10 },
//     { title: "Oral Surgery", bg: "bg-[#f15a38]", img: "./Assets/vid.png", video: "./Assets/vid.mp4", targetX: -280, targetY: 170, rotate: -12, zIndex: 20 },
//     { title: "Veneers", bg: "bg-[#f496bf]", img: "./Assets/vid2.png", video: "./Assets/vid2.mp4", targetX: 30, targetY: -30, rotate: -6, zIndex: 30 },
//     { title: "Root Canal Treatment's Chocolonely", bg: "bg-[#f68b1f]", img: "./Assets/vid3.png", video: "./Assets/vid3.mp4", targetX: 260, targetY: 250, rotate: 6, zIndex: 50 },
//     { title: "Invisalign", bg: "bg-[#422f40]", img: "./Assets/vid4.png", video: "./Assets/vid4.mp4", targetX: 490, targetY: 0, rotate: 3, zIndex: 40 },
//   ].map(card => ({
//     ...card,
//     targetX: card.targetX * scaleFactor,
//     targetY: card.targetY * scaleFactor,
//   }));

//   return (
//     <div
//       className={`relative flex flex-col justify-center items-center 
//       bg-[#e8e2d4] overflow-hidden max-w-screen 
//       ${screenWidth >= 1025 ? "min-h-[170vh]" : "min-h-screen"}`}
//       onMouseMove={handleMouseMove}
//     >
//       <h1 className="absolute top-10 text-8xl font-bold text-[#422f40] text-center z-5 tracking-tighter">
//         Our Services
//       </h1>

//       <div
//         className="relative flex justify-center items-center transition-transform duration-500"
//         style={{
//           transform: `translate(${offset.x}px, ${offset.y}px)`,
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         {cards.map((card, index) => {
//           const translateX = card.targetX * scrollProgress;
//           const translateY = card.targetY * scrollProgress;
//           const rotate = (1 - scrollProgress) * 10 + card.rotate;

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="absolute w-[30vw] md:w-[32vw] lg:w-[28vw] 
//               h-[50vh] md:h-[65vh] lg:h-[85vh] 
//               max-h-[calc(1.9_*_28vw)] md:max-h-[calc(1.9_*_32vw)] lg:max-h-[calc(1.6_*_28vw)] 
//               rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-500"
//               style={{
//                 zIndex: hoveredIndex === index ? 70 : card.zIndex,
//                 transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
//                 transition: "transform 0.6s ease-out, opacity 0.5s ease-in-out",
//               }}
//             >
//               {/* Background */}
//               <div
//                 className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-500`}
//                 style={{
//                   transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
//                   transitionTimingFunction: "cubic-bezier(0.3, 2.5, 0.6, 1.8)",
//                   transitionDuration: "500ms",
//                 }}
//               />

//               {/* Card Content */}
//               <div className="relative z-10 flex flex-col justify-between w-full h-full p-2">
//                 <h2 className="p-2 font-bold text-sm md:text-4xl text-white">{card.title}</h2>
//                 <div className="relative w-full h-[70%] overflow-hidden rounded-lg">
//                   {hoveredIndex === index ? (
//                     <video
//                       src={card.video}
//                       className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                       muted
//                       loop
//                       autoPlay
//                       playsInline
//                     />
//                   ) : (
//                     <img
//                       src={card.img}
//                       alt={card.title}
//                       className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ServicesCards;




import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const ServicesCards = () => {
  const { t } = useTranslation(); // Get translation function
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    let xOffset = (e.clientX / innerWidth - 0.5) * 150;
    let yOffset = (e.clientY / innerHeight - 0.5) * 150;

    const MAX_OFFSET = 10;
    xOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, xOffset));
    yOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, yOffset));

    setOffset({ x: -xOffset, y: -yOffset });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const startPoint = windowHeight * 0.6;
      const endPoint = windowHeight * 0.7;
      const progress = Math.min(1, Math.max(0, (scrollY - startPoint) / (endPoint - startPoint)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scaleFactor = screenWidth / 1920;

  const cards = [
    // { title: t("services.cards.anxiety"), bg: "bg-[#0c2646]", img: "./Assets/smile2.png", video: "./Assets/smile.mp4", targetX: -500, targetY: -20, rotate: -6, zIndex: 10 },
    // { title: t("services.cards.surgery"), bg: "bg-[#f15a38]", img: "./Assets/vid.png", video: "./Assets/vid.mp4", targetX: -280, targetY: 170, rotate: -12, zIndex: 20 },
    // { title: t("services.cards.veneers"), bg: "bg-[#f496bf]", img: "./Assets/vid2.png", video: "https://res.cloudinary.com/dgx6edsad/video/upload/v1741028075/vid2_wyvmnj.mp4", targetX: 30, targetY: -30, rotate: -6, zIndex: 30 },
    // { title: t("services.cards.root_canal"), bg: "bg-[#f68b1f]", img: "./Assets/vid3.png", video: "./Assets/vid3.mp4", targetX: 260, targetY: 250, rotate: 6, zIndex: 50 },
    // { title: t("services.cards.invisalign"), bg: "bg-[#422f40]", img: "./Assets/vid4.png", video: "./Assets/vid4.mp4", targetX: 490, targetY: 0, rotate: 3, zIndex: 40 },
  
    { title: t("services.cards.anxiety"), bg: "bg-[#0c2646]", img: "./Assets/smile2.png", video: "https://res.cloudinary.com/dgx6edsad/video/upload/v1741028004/smile_iqqqjs.mp4", targetX: -500, targetY: -20, rotate: -6, zIndex: 10 },
    { title: t("services.cards.surgery"), bg: "bg-[#f15a38]", img: "./Assets/vid.png", video: "https://res.cloudinary.com/dgx6edsad/video/upload/v1741028078/vid4_zzlyk8.mp4", targetX: -280, targetY: 170, rotate: -12, zIndex: 20 },
    { title: t("services.cards.veneers"), bg: "bg-[#f496bf]", img: "./Assets/vid2.png", video: "https://res.cloudinary.com/dgx6edsad/video/upload/v1741028080/vid3_y4jdga.mp4", targetX: 30, targetY: -30, rotate: -6, zIndex: 30 },
    { title: t("services.cards.root_canal"), bg: "bg-[#f68b1f]", img: "./Assets/vid3.png", video: "https://res.cloudinary.com/dgx6edsad/video/upload/v1741028004/smile_iqqqjs.mp4", targetX: 260, targetY: 250, rotate: 6, zIndex: 50 },
    { title: t("services.cards.invisalign"), bg: "bg-[#422f40]", img: "./Assets/vid4.png", video: "https://res.cloudinary.com/dgx6edsad/video/upload/v1741028078/vid4_zzlyk8.mp4", targetX: 490, targetY: 0, rotate: 3, zIndex: 40 },
  
  
  
  
  
  ].map(card => ({
    ...card,
    targetX: card.targetX * scaleFactor,
    targetY: card.targetY * scaleFactor,
  }));

  return (
    <div
      className={`relative flex flex-col justify-center items-center 
      bg-[#e8e2d4] overflow-hidden max-w-screen 
      ${screenWidth >= 1025 ? "min-h-[170vh]" : "min-h-screen"}`}
      onMouseMove={handleMouseMove}
    >
      <h1 className="absolute top-10 text-8xl font-bold text-[#422f40] text-center z-5 tracking-tighter">
        {t("services.title")}
      </h1>

      <div
        className="relative flex justify-center items-center transition-transform duration-500"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {cards.map((card, index) => {
          const translateX = card.targetX * scrollProgress;
          const translateY = card.targetY * scrollProgress;
          const rotate = (1 - scrollProgress) * 10 + card.rotate;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="absolute w-[30vw] md:w-[32vw] lg:w-[28vw] 
              h-[50vh] md:h-[65vh] lg:h-[85vh] 
              max-h-[calc(1.9_*_28vw)] md:max-h-[calc(1.9_*_32vw)] lg:max-h-[calc(1.6_*_28vw)] 
              rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-500"
              style={{
                zIndex: hoveredIndex === index ? 70 : card.zIndex,
                transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
                transition: "transform 0.6s ease-out, opacity 0.5s ease-in-out",
              }}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-500`}
                style={{
                  transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
                  transitionTimingFunction: "cubic-bezier(0.3, 2.5, 0.6, 1.8)",
                  transitionDuration: "500ms",
                }}
              />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col justify-between w-full h-full p-2">
                <h2 className="p-2 font-bold text-sm md:text-4xl text-white">{card.title}</h2>
                <div className="relative w-full h-[70%] overflow-hidden rounded-lg">
                  {hoveredIndex === index ? (
                    <video
                      src={card.video}
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  ) : (
                    <img
                      src={card.img}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCards;



// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next"; // Import translation hook

// const ServicesCards = () => {
//   const { t } = useTranslation(); // Get translation function
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [offset, setOffset] = useState({ x: 0, y: 0 });
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleMouseMove = (e) => {
//     const { innerWidth, innerHeight } = window;
//     let xOffset = (e.clientX / innerWidth - 0.5) * 150;
//     let yOffset = (e.clientY / innerHeight - 0.5) * 150;

//     const MAX_OFFSET = 10;
//     xOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, xOffset));
//     yOffset = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, yOffset));

//     setOffset({ x: -xOffset, y: -yOffset });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const startPoint = windowHeight * 0.6;
//       const endPoint = windowHeight * 0.7;
//       const progress = Math.min(1, Math.max(0, (scrollY - startPoint) / (endPoint - startPoint)));
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scaleFactor = screenWidth / 1920;

//   const cards = [
//     { 
//       title: t("services.cards.anxiety"), 
//       bg: "bg-[#0c2646]", 
//       img: "./Assets/smile2.png", 
//       video: " https://res.cloudinary.com/dgx6edsad/video/upload/v1741028004/smile_iqqqjs.mp4", 
     
//       targetX: -500, 
//       targetY: -20, 
//       rotate: -6, 
//       zIndex: 10 
//     },
//     { 
//       title: t("services.cards.surgery"), 
//       bg: "bg-[#f15a38]", 
//       img: "./Assets/vid.png", 
//       video: "https://res.cloudinary.com/dgx6edsad/video/upload/v1741026275/docs_vvxs93.mp4", 
//       targetX: -280, 
//       targetY: 170, 
//       rotate: -12, 
//       zIndex: 20 
//     },
//     { 
//       title: t("services.cards.veneers"), 
//       bg: "bg-[#f496bf]", 
//       img: "./Assets/vid2.png", 
//       video: "https://res.cloudinary.com/dgx6edsad/video/upload/v1741028075/vid2_wyvmnj.mp4", 
//       targetX: 30, 
//       targetY: -30, 
//       rotate: -6, 
//       zIndex: 30 
//     },
//     { 
//       title: t("services.cards.root_canal"), 
//       bg: "bg-[#f68b1f]", 
//       img: "./Assets/vid3.png", 
//       video: "https://res.cloudinary.com/dgx6edsad/video/upload/v1741026275/vid3.mp4", 
//       targetX: 260, 
//       targetY: 250, 
//       rotate: 6, 
//       zIndex: 50 
//     },
//     { 
//       title: t("services.cards.invisalign"), 
//       bg: "bg-[#422f40]", 
//       img: "./Assets/vid4.png", 
//       video: "https://res.cloudinary.com/dgx6edsad/video/upload/v1741026275/docs_vvxs93.mp4", 
//       targetX: 490, 
//       targetY: 0, 
//       rotate: 3, 
//       zIndex: 40 
//     }
//   ].map(card => ({
//     ...card,
//     targetX: card.targetX * scaleFactor,
//     targetY: card.targetY * scaleFactor,
//   }));

//   return (
//     <div
//       className={`relative flex flex-col justify-center items-center 
//       bg-[#e8e2d4] overflow-hidden max-w-screen 
//       ${screenWidth >= 1025 ? "min-h-[170vh]" : "min-h-screen"}`}
//       onMouseMove={handleMouseMove}
//     >
//       <h1 className="absolute top-10 text-8xl font-bold text-[#422f40] text-center z-5 tracking-tighter">
//         {t("services.title")}
//       </h1>

//       <div
//         className="relative flex justify-center items-center transition-transform duration-500"
//         style={{
//           transform: `translate(${offset.x}px, ${offset.y}px)`,
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         {cards.map((card, index) => {
//           const translateX = card.targetX * scrollProgress;
//           const translateY = card.targetY * scrollProgress;
//           const rotate = (1 - scrollProgress) * 10 + card.rotate;

//           console.log(`Card ${index} Video URL:`, card.video); // Debug log

//           return (
//             <div
//               key={index}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               className="absolute w-[30vw] md:w-[32vw] lg:w-[28vw] 
//               h-[50vh] md:h-[65vh] lg:h-[85vh] 
//               max-h-[calc(1.9_*_28vw)] md:max-h-[calc(1.9_*_32vw)] lg:max-h-[calc(1.6_*_28vw)] 
//               rounded-2xl shadow-lg flex justify-center items-center transition-transform duration-500"
//               style={{
//                 zIndex: hoveredIndex === index ? 70 : card.zIndex,
//                 transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
//                 transition: "transform 0.6s ease-out, opacity 0.5s ease-in-out",
//               }}
//             >
//               {/* Background */}
//               <div
//                 className={`absolute inset-0 ${card.bg} rounded-3xl transition-transform duration-500`}
//                 style={{
//                   transform: hoveredIndex === index ? "scale(1.03)" : "scale(1)",
//                   transitionTimingFunction: "cubic-bezier(0.3, 2.5, 0.6, 1.8)",
//                   transitionDuration: "500ms",
//                 }}
//               />

//               {/* Card Content */}
//               <div className="relative z-10 flex flex-col justify-between w-full h-full p-2">
//                 <h2 className="p-2 font-bold text-sm md:text-4xl text-white">{card.title}</h2>
//                 <div className="relative w-full h-[70%] overflow-hidden rounded-lg">
//                   {hoveredIndex === index ? (
//                     <video
//                       src={card.video}
//                       className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                       muted
//                       loop
//                       autoPlay
//                       playsInline
//                       controls
//                     />
//                   ) : (
//                     <img
//                       src={card.img}
//                       alt={card.title}
//                       className="absolute inset-0 w-full h-full object-cover rounded-3xl"
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ServicesCards;
