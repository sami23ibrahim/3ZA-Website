// import React, { useState, useEffect } from "react";

// const ServicesCardsMobile = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const triggerPoint = window.innerHeight * 0.9; // Trigger animation when 30% of the viewport height is scrolled
//     if (scrollY > triggerPoint) {
//       setIsExpanded(true);
//     }
//   }, [scrollY]);

//   const cards = [
//     { title: "Mr Marvis", bg: "bg-[#ffcc00]", img: "./Assets/11.webp" },
//     { title: "Patta", bg: "bg-[#0c2646]", img: "./Assets/11.webp" },
//     { title: "Tony's Chocolonely", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//     { title: "Mr Marvis", bg: "bg-[#ffcc00]", img: "./Assets/11.webp" },
//     { title: "Patta", bg: "bg-[#0c2646]", img: "./Assets/11.webp" },
//     { title: "Tony's Chocolonely", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//   ];

//   return (
//     <div className="relative flex flex-col justify-items-start items-center bg-[#e8e2d4] overflow-hidden max-w-screen min-h-screen">
//       {/* Debugging Info */}
//       <div className="fixed top-0 left-0 p-3 bg-white text-black z-50">
//         ScrollY: {scrollY} | Expanded: {isExpanded ? "Yes" : "No"}
//       </div>

//       {/* Title */}
//       <h1 className="text-4xl font-bold text-[#422f40] text-center my-6">Success Stories</h1>
      
//       {/* Cards Stack */}
//       <div className="relative flex flex-col items-center w-full overflow-visible">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`absolute w-[80%] h-[240px] rounded-2xl shadow-lg flex justify-center items-center transition-all duration-600 ease-in-out ${card.bg}`}
//             style={{
//               transform: isExpanded
//                 ? `translateY(${index * 90}px) scale(1)`
//                 : `translateY(${index * 50}px) scale(0.95)`,
//               zIndex: cards.length + index,
//             }}
//           >
//             <div className="relative w-full h-full flex flex-col p-2">
//               <h3 className="text-2xl text-center font-bold text-white">{card.title}</h3>
//               <div className="relative w-full h-[80%] overflow-hidden rounded-lg mt-2">
//                 <img
//                   src={card.img}
//                   alt={card.title}
//                   className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServicesCardsMobile;








// import React, { useState, useEffect } from "react";

// const ServicesCardsMobile = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [activeCard, setActiveCard] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const triggerPoint = window.innerHeight * 0.5;
//     if (scrollY > triggerPoint) {
//       setIsExpanded(true);
//     }
//   }, [scrollY]);

//   const handleCardClick = (index) => {
//     setActiveCard(activeCard === index ? null : index);
//   };

//   const cards = [
//     { title: "Surgery", bg: "bg-[#f15a38]", img: "./Assets/11.webp" },
//     { title: "Veneers", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "implantology", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//     { title: "dentures", bg: "bg-[#0c2646]", img: "./Assets/11.webp" },
//     { title: "Bleaching", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "pediatric dentistry", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//   ];

//   const cardHeight = 350; // Height of each card
//   const spacing = -90; // Spacing between cards when expanded

//   return (
//     <div className="relative flex flex-col justify-items-start items-center bg-[#e8e2d4] overflow-visible max-w-screen min-h-[130vh] ">
//       {/* Debugging Info */}
//       <div className="fixed top-0 left-0 p-3 bg-white text-black z-50">
//         ScrollY: {scrollY} | Expanded: {isExpanded ? "Yes" : "No"} | Active: {activeCard !== null ? activeCard : "None"}
//       </div>

//       {/* Title */}
//       <h1 className="text-4xl font-bold text-[#422f40] text-center mt-10 mb-1">Our Services</h1>

//       {/* Cards Stack */}
//       <div className="mt-10 relative flex flex-col items-center w-full min-h-screen overflow-visible bg-[#3a25ad]">
// {cards.map((card, index) => {
//   let translateY = index * (isExpanded ? 90 : 20); // Default stacked position
//   let isActive = activeCard === index;

//   if (activeCard !== null) {
//     if (index < activeCard) {
//       translateY = index * (cardHeight * 0.2);
//     } else if (index === activeCard) {
//       translateY = activeCard * (cardHeight * 0.2);
//     } else {
//       translateY = activeCard * (cardHeight * 0.2) + cardHeight + spacing + (index - activeCard - 1) * (cardHeight * 0.2);
//     }
//   }

//   return (
//     <div
//       key={index}
//       className={`absolute rounded-2xl shadow-lg flex justify-center items-center transition-all duration-700 ease-in-out ${card.bg}`}
//       style={{
//         width: isActive ? "84%" : "80%", // Increase width for active card
//         height: isActive ? "48%" : "45%", // Increase height for active card
//         transform: `translateY(${translateY / 1.2}px)`,
//         transition: "transform 0.2s ease-in-out, width 0.8s ease-in-out, height 0.8s ease-in-out",
//         cursor: "pointer",
//       //  zIndex: isActive ? 10 : 5, // Bring active card to the front
//       }}
//       onClick={() => handleCardClick(index)}
//     >
//       <div className="relative w-full h-full flex flex-col p-2">
//         <h3 className="text-2xl text-center font-bold text-white">{card.title}</h3>
//         <div className="relative w-full h-[80%] overflow-visible rounded-lg mt-2">
//           <img
//             src={card.img}
//             alt={card.title}
//             className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// })}

//       </div>
//     </div>
//   );
// };

// export default ServicesCardsMobile;


// import React, { useState, useEffect } from "react";

// const ServicesCardsMobile = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [activeCard, setActiveCard] = useState(null);
//   const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
//   const [minHeight, setMinHeight] = useState(isLandscape ? "199vh" : "130vh");

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     const handleResize = () => {
//       const landscape = window.innerWidth > window.innerHeight;
//       setIsLandscape(landscape);
//       const newMinHeight = landscape ? "199vh" : "130vh"; // Ensure minHeight updates correctly
//       setMinHeight(newMinHeight);
//       console.log("Updated minHeight:", newMinHeight);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const triggerPoint = window.innerHeight * 0.5;
//     if (scrollY > triggerPoint) {
//       setIsExpanded(true);
//     }
//   }, [scrollY]);

//   const handleCardClick = (index) => {
//     setActiveCard(activeCard === index ? null : index);
//   };

//   const cards = [
//     { title: "Surgery", bg: "bg-[#f15a38]", img: "./Assets/11.webp" },
//     { title: "Veneers", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "Implantology", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//     { title: "Dentures", bg: "bg-[#0c2646]", img: "./Assets/11.webp" },
//     { title: "Bleaching", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "Pediatric Dentistry", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//   ];

//   const cardHeight = isLandscape ? 220 : 340;
//   const cardWidth = isLandscape ? "60%" : "80%";
//   const spacing = 30;

//   return (
//     <div
//       className={`relative flex flex-col justify-items-start items-center bg-[#e8e2d4] overflow-visible max-w-screen`}
//       style={{ minHeight }}
//     >
//       {/* Debugging Info */}
//       <div className="fixed top-0 left-0 p-3 bg-white text-black z-50">
//         ScrollY: {scrollY} | Expanded: {isExpanded ? "Yes" : "No"} | Active: {activeCard !== null ? activeCard : "None"} | 
//         Landscape: {isLandscape ? "Yes" : "No"} | MinHeight: {minHeight}
//       </div>

//       {/* Title */}
//       <h1 className="text-4xl font-bold text-[#422f40] text-center mt-10 mb-1">Our Services</h1>

//       {/* Cards Stack */}
//       <div className="mt-10 relative flex flex-col items-center w-full min-h-screen overflow-visible bg-[#3a25ad]">
//         {cards.map((card, index) => {
//           let translateY = index * (isExpanded ? 80 : 20);
//           let isActive = activeCard === index;

//           if (activeCard !== null) {
//             if (index < activeCard) {
//               translateY = index * (cardHeight * 0.2);
//             } else if (index === activeCard) {
//               translateY = activeCard * (cardHeight * 0.2);
//             } else {
//               translateY =
//                 activeCard * (cardHeight * 0.2) +
//                 cardHeight +
//                 spacing +
//                 (index - activeCard - 1) * (cardHeight * 0.2);
//             }
//           }

//           return (
//             <div
//               key={index}
//               className={`absolute rounded-2xl shadow-lg flex justify-center items-center transition-all duration-700 ease-in-out ${card.bg}`}
//               style={{
//                 width: isActive ? `calc(${cardWidth} + 4%)` : cardWidth,
//                 height: isActive ? cardHeight * 1.1 : cardHeight,
//                 transform: `translateY(${translateY / 1.2}px)`,
//                 transition: "transform 0.2s ease-in-out, width 0.8s ease-in-out, height 0.8s ease-in-out",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleCardClick(index)}
//             >
//               <div className="relative w-full h-full flex flex-col p-2">
//                 <h3 className="text-2xl text-center font-bold text-white">{card.title}</h3>
//                 <div className="relative w-full h-[80%] overflow-visible rounded-lg mt-2">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-2xl"
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

// export default ServicesCardsMobile;



// import React, { useState, useEffect, useRef } from "react";

// const ServicesCardsMobile = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [activeCard, setActiveCard] = useState(null);
//   const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
//   const [minHeight, setMinHeight] = useState(isLandscape ? "199vh" : "130vh");
  
//   const firstCardRef = useRef(null);
//   const lastCardRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     const handleResize = () => {
//       const landscape = window.innerWidth > window.innerHeight;
//       setIsLandscape(landscape);
//       const newMinHeight = landscape ? "199vh" : "130vh";
//       setMinHeight(newMinHeight);
//     };



//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const triggerPoint = window.innerHeight * 0.5;
//     if (scrollY > triggerPoint) {
//       setIsExpanded(true);
//     }
//   }, [scrollY]);

//   const handleCardClick = (index) => {
//     if (index === cards.length - 1) {
//       setActiveCard(null);
//     } else {
//       setActiveCard(activeCard === index ? null : index);
//     }
//   };

//   const cards = [
//     { title: "Surgery", bg: "bg-[#f15a38]", img: "./Assets/11.webp" },
//     { title: "Veneers", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "Implantology", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//     { title: "Dentures", bg: "bg-[#0c2646]", img: "./Assets/11.webp" },
//     { title: "Bleaching", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "Pediatric Dentistry", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//   ];

//   const cardHeight = isLandscape ? 220 : 340;
//   const cardWidth = isLandscape ? "60%" : "80%";
//   const spacing = 30;

//   return (
//     <div
//       className="relative flex flex-col justify-items-start items-center bg-[#e8e2d4] overflow-visible max-w-screen"
//       style={{ minHeight }}
//     >
//       {/* Debugging Info */}
//       <div className="fixed top-0 left-0 p-3 bg-white text-black z-50">
//       Expanded: {isExpanded ? "Yes" : "No"} | Active: {activeCard !== null ? activeCard : "None"} | 
//         Landscape: {isLandscape ? "Yes" : "No"} | MinHeight: {minHeight} 
//       </div>

//       {/* Title */}
//       <h1 className="text-4xl font-bold text-[#422f40] text-center mt-10 mb-1">Our Services</h1>

//       {/* Cards Stack */}
//       <div className="mt-10 relative flex flex-col items-center w-full min-h-screen overflow-visible bg-[#3a25ad]">
//         {cards.map((card, index) => {
//           let translateY = index * (isExpanded ? 80 : 20);
//           let isActive = activeCard === index;

//           if (activeCard !== null) {
//             if (index < activeCard) {
//               translateY = index * (cardHeight * 0.2);
//             } else if (index === activeCard) {
//               translateY = activeCard * (cardHeight * 0.2);
//             } else {
//               translateY =
//                 activeCard * (cardHeight * 0.2) +
//                 cardHeight +
//                 spacing +
//                 (index - activeCard - 1) * (cardHeight * 0.2);
//             }
//           }

//           return (
//             <div
//               key={index}
//               ref={index === 0 ? firstCardRef : index === cards.length - 1 ? lastCardRef : null} // Assign refs to first and last cards
//               className={`absolute rounded-2xl shadow-lg flex justify-center items-center transition-all duration-700 ease-in-out ${card.bg}`}
//               style={{
//                 width: isActive ? `calc(${cardWidth} + 4%)` : cardWidth,
//                 height: isActive ? cardHeight * 1.1 : cardHeight,
//                 transform: `translateY(${translateY / 1.2}px)`,
//                 transition: "transform 0.2s ease-in-out, width 0.8s ease-in-out, height 0.8s ease-in-out",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleCardClick(index)}
//             >
//               <div className="relative w-full h-full flex flex-col p-2">
//                 <h3 className="text-2xl text-center font-bold text-white">{card.title}</h3>
//                 <div className="relative w-full h-[80%] overflow-visible rounded-lg mt-2">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-2xl"
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

// export default ServicesCardsMobile;












// import React, { useState, useEffect, useRef } from "react";

// const ServicesCardsMobile = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [activeCard, setActiveCard] = useState(null);
//   const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
//  // const [minHeight, setMinHeight] = useState(isLandscape ? "199vh" : "130vh");
//     const [minHeight, setMinHeight] = useState(isLandscape ?"750px" : "1050px");

//   const [cardDistance, setCardDistance] = useState(0);

//   const firstCardRef = useRef(null);
//   const lastCardRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     const handleResize = () => {
//       const landscape = window.innerWidth > window.innerHeight;
//       setIsLandscape(landscape);
//       const newMinHeight = landscape ? " 750px" : "1050px";

//      // const newMinHeight = landscape ? "199vh" : "130vh";
//       setMinHeight(newMinHeight);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const calculateDistance = () => {
//       if (firstCardRef.current && lastCardRef.current) {
//         const firstCardTop = firstCardRef.current.getBoundingClientRect().top + window.scrollY;
//         const lastCardBottom = lastCardRef.current.getBoundingClientRect().bottom + window.scrollY;
//         setCardDistance(lastCardBottom - firstCardTop);
//       }
//     };

//     calculateDistance();
//     window.addEventListener("resize", calculateDistance);
//     return () => window.removeEventListener("resize", calculateDistance);
//   }, [isExpanded, activeCard, scrollY]);

//   useEffect(() => {
//     const triggerPoint = window.innerHeight * 0.5;
//     if (scrollY > triggerPoint) {
//       setIsExpanded(true);
//     }
//   }, [scrollY]);

//   const handleCardClick = (index) => {
//     if (index === cards.length - 1) {
//       setActiveCard(null);
//     } else {
//       setActiveCard(activeCard === index ? null : index);
//     }
//   };

//   const cards = [
//     { title: "Surgery", bg: "bg-[#f15a38]", img: "./Assets/11.webp" },
//     { title: "Veneers", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "Implantology", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//     { title: "Dentures", bg: "bg-[#0c2646]", img: "./Assets/11.webp" },
//     { title: "Bleaching", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "Pediatric Dentistry", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//   ];

//   const cardHeight = isLandscape ? 220 : 340;
//   const cardWidth = isLandscape ? "60%" : "80%";
//   const spacing = 0;

//   return (
//     <div
//       className="relative flex flex-col justify-items-start items-center bg-[#e8e2d4] overflow-visible max-w-screen"
//       style={{ minHeight }}
//     >
//       {/* Debugging Info */}
//       {/* <div className="fixed top-0 left-0 p-3 bg-white text-black z-50">
//         Expanded: {isExpanded ? "Yes" : "No"} | Active: {activeCard !== null ? activeCard : "None"} | 
//         Landscape: {isLandscape ? "Yes" : "No"} | MinHeight: {minHeight} | 
//         Distance: {cardDistance}px
//       </div> */}

//       {/* Title */}
//       <h1 className="text-4xl font-bold text-[#422f40] text-center mt-10 mb-1">Our Services</h1>

//       {/* Cards Stack */}
//       <div className="mt-10 relative flex flex-col items-center w-full min-h-screen overflow-visible bg-[#e8e2d4]">
//         {cards.map((card, index) => {
//           let translateY = index * (isExpanded ? 80 : 20);
//           let isActive = activeCard === index;

//           if (activeCard !== null) {
//             if (index < activeCard) {
//               translateY = index * (cardHeight * 0.2);
//             } else if (index === activeCard) {
//               translateY = activeCard * (cardHeight * 0.2);
//             } else {
//               translateY =
//                 activeCard * (cardHeight * 0.2) +
//                 cardHeight +
//                 spacing +
//                 (index - activeCard - 1) * (cardHeight * 0.2);
//             }
//           }

//           return (
//             <div
//               key={index}
//               ref={index === 0 ? firstCardRef : index === cards.length - 1 ? lastCardRef : null} // Assign refs
//               className={`absolute rounded-2xl shadow-lg flex justify-center items-center transition-all duration-700 ease-in-out ${card.bg}`}
//               style={{
//                 width: isActive ? `calc(${cardWidth} + 8%)` : cardWidth,
//                 height: isActive ? cardHeight * 1.1 : cardHeight,
//                 transform: `translateY(${translateY / 1.1}px)`,
//                 transition: "transform 0.2s ease-in-out, width 0.8s ease-in-out, height 0.8s ease-in-out",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleCardClick(index)}
//             >
//               <div className="relative w-full h-full flex flex-col p-2">
//                 <h3 className="text-2xl text-center font-bold text-white">{card.title}</h3>
//                 <div className="relative w-full h-[80%] overflow-visible rounded-lg mt-2">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-2xl"
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

// export default ServicesCardsMobile;










// import React, { useState, useEffect, useRef } from "react";

// const ServicesCardsMobile = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [activeCard, setActiveCard] = useState(null);
//   const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
//   const [minHeight, setMinHeight] = useState("640px"); // Default minHeight

//   const [cardDistance, setCardDistance] = useState(0);

//   const firstCardRef = useRef(null);
//   const lastCardRef = useRef(null);

//   // Function to handle screen resize and adjust minHeight dynamically
//   const handleResize = () => {
//     const landscape = window.innerWidth > window.innerHeight;
//     setIsLandscape(landscape);

//     // Dynamically adjust minHeight based on activeCard state
//     const newMinHeight = activeCard === null ? "640px" : "1050px";
//     setMinHeight(newMinHeight);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     // Call handleResize once on mount to set correct initial height
//     handleResize();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [activeCard]); // Re-run when activeCard changes

//   useEffect(() => {
//     const calculateDistance = () => {
//       if (firstCardRef.current && lastCardRef.current) {
//         const firstCardTop = firstCardRef.current.getBoundingClientRect().top + window.scrollY;
//         const lastCardBottom = lastCardRef.current.getBoundingClientRect().bottom + window.scrollY;
//         setCardDistance(lastCardBottom - firstCardTop);
//       }
//     };

//     calculateDistance();
//     window.addEventListener("resize", calculateDistance);
//     return () => window.removeEventListener("resize", calculateDistance);
//   }, [isExpanded, activeCard, scrollY]);

//   useEffect(() => {
//     const triggerPoint = window.innerHeight * 0.5;
//     if (scrollY > triggerPoint) {
//       setIsExpanded(true);
//     }
//   }, [scrollY]);

//   const handleCardClick = (index) => {
//     if (index === cards.length - 1) {
//       setActiveCard(null);
//     } else {
//       setActiveCard(activeCard === index ? null : index);
//     }
//   };

//   const cards = [
//     { title: "Surgery", bg: "bg-[#f15a38]", img: "./Assets/11.webp" },
//     { title: "Veneers", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "Implantology", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//     { title: "Dentures", bg: "bg-[#0c2646]", img: "./Assets/11.webp" },
//     { title: "Bleaching", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "Pediatric Dentistry", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//   ];

//   const cardHeight = isLandscape ? 220 : 340;
//   const cardWidth = isLandscape ? "60%" : "80%";
//   const spacing = 0;

//   return (
//     <div
//       className="relative flex flex-col justify-items-start items-center bg-[#e8e2d4] overflow-visible max-w-screen"
//       style={{ minHeight }}
//     >
//       {/* Debugging Info */}
//       {/* <div className="fixed top-0 left-0 p-3 bg-white text-black z-50">
//         Expanded: {isExpanded ? "Yes" : "No"} | Active: {activeCard !== null ? activeCard : "None"} | 
//         Landscape: {isLandscape ? "Yes" : "No"} | MinHeight: {minHeight} | 
//         Distance: {cardDistance}px
//       </div> */}

//       {/* Title */}
//       <h1 className="text-4xl font-bold text-[#422f40] text-center mt-10 mb-1">Our Services</h1>

//       {/* Cards Stack */}
//       <div className="mt-10 relative flex flex-col items-center w-full min-h-[720px] overflow-visible bg-[#6ba12d]">
//         {cards.map((card, index) => {
//           let translateY = index * (isExpanded ? 80 : 20);
//           let isActive = activeCard === index;

//           if (activeCard !== null) {
//             if (index < activeCard) {
//               translateY = index * (cardHeight * 0.2);
//             } else if (index === activeCard) {
//               translateY = activeCard * (cardHeight * 0.2);
//             } else {
//               translateY =
//                 activeCard * (cardHeight * 0.2) +
//                 cardHeight +
//                 spacing +
//                 (index - activeCard - 1) * (cardHeight * 0.2);
//             }
//           }

//           return (
//             <div
//               key={index}
//               ref={index === 0 ? firstCardRef : index === cards.length - 1 ? lastCardRef : null} // Assign refs
//               className={`absolute rounded-2xl shadow-lg flex justify-center items-center transition-all duration-700 ease-in-out ${card.bg}`}
//               style={{
//                 width: isActive ? `calc(${cardWidth} + 8%)` : cardWidth,
//                 height: isActive ? cardHeight * 1.1 : cardHeight,
//                 transform: `translateY(${translateY / 1.1}px)`,
//                 transition: "transform 0.2s ease-in-out, width 0.8s ease-in-out, height 0.8s ease-in-out",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleCardClick(index)}
//             >
//               <div className="relative w-full h-full flex flex-col p-2">
//                 <h3 className="text-2xl text-center font-bold text-white">{card.title}</h3>
//                 <div className="relative w-full h-[80%] overflow-visible rounded-lg mt-2">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-2xl"
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

// export default ServicesCardsMobile;



// import React, { useState, useEffect, useRef } from "react";

// const ServicesCardsMobile = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [activeCard, setActiveCard] = useState(null);
//   const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
//   const [minHeight, setMinHeight] = useState(isLandscape ? "300px" : "640px"); // Default minHeight

//   const [cardDistance, setCardDistance] = useState(0);

//   const firstCardRef = useRef(null);
//   const lastCardRef = useRef(null);

//   // Function to handle screen resize and adjust minHeight dynamically
//   const handleResize = () => {
//     const landscape = window.innerWidth > window.innerHeight;
//     setIsLandscape(landscape);

//     // Landscape always 500px, otherwise adjust based on activeCard state
//     const newMinHeight = landscape ? "300px" : activeCard === null ? "640px" : "1050px";
//     setMinHeight(newMinHeight);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     // Call handleResize once on mount to set correct initial height
//     handleResize();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [activeCard]); // Re-run when activeCard changes

//   useEffect(() => {
//     const calculateDistance = () => {
//       if (firstCardRef.current && lastCardRef.current) {
//         const firstCardTop = firstCardRef.current.getBoundingClientRect().top + window.scrollY;
//         const lastCardBottom = lastCardRef.current.getBoundingClientRect().bottom + window.scrollY;
//         setCardDistance(lastCardBottom - firstCardTop);
//       }
//     };

//     calculateDistance();
//     window.addEventListener("resize", calculateDistance);
//     return () => window.removeEventListener("resize", calculateDistance);
//   }, [isExpanded, activeCard, scrollY]);

//   useEffect(() => {
//     const triggerPoint = window.innerHeight * 0.5;
//     if (scrollY > triggerPoint) {
//       setIsExpanded(true);
//     }
//   }, [scrollY]);

//   const handleCardClick = (index) => {
//     if (index === cards.length - 1) {
//       setActiveCard(null);
//     } else {
//       setActiveCard(activeCard === index ? null : index);
//     }
//   };

//   const cards = [
//     { title: "Surgery", bg: "bg-[#f15a38]", img: "./Assets/11.webp" },
//     { title: "Veneers", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "Implantology", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//     { title: "Dentures", bg: "bg-[#0c2646]", img: "./Assets/11.webp" },
//     { title: "Bleaching", bg: "bg-[#f496bf]", img: "./Assets/11.webp" },
//     { title: "Pediatric Dentistry", bg: "bg-[#f68b1f]", img: "./Assets/11.webp" },
//   ];

//   const cardHeight = isLandscape ? 220 : 340;
//   const cardWidth = isLandscape ? "60%" : "80%";
//   const spacing = 0;

//   return (
//     <div
//       className="relative flex flex-col justify-items-start items-center bg-[#e8e2d4] overflow-visible max-w-screen"
//       style={{ minHeight }}
//     >
//       {/* Debugging Info */}
//       {/* <div className="fixed top-0 left-0 p-3 bg-white text-black z-50">
//         Expanded: {isExpanded ? "Yes" : "No"} | Active: {activeCard !== null ? activeCard : "None"} | 
//         Landscape: {isLandscape ? "Yes" : "No"} | MinHeight: {minHeight} | 
//         Distance: {cardDistance}px
//       </div> */}

//       {/* Title */}
//       <h1 className="text-4xl font-bold text-[#422f40] text-center mt-10 mb-1">Our Services</h1>

//       {/* Cards Stack */}
//       <div className="mt-10 relative flex flex-col items-center w-full min-h-[720px] overflow-visible bg-[#6ba12d]">
//         {cards.map((card, index) => {
//           let translateY = index * (isExpanded ? 80 : 20);
//           let isActive = activeCard === index;

//           if (activeCard !== null) {
//             if (index < activeCard) {
//               translateY = index * (cardHeight * 0.2);
//             } else if (index === activeCard) {
//               translateY = activeCard * (cardHeight * 0.2);
//             } else {
//               translateY =
//                 activeCard * (cardHeight * 0.2) +
//                 cardHeight +
//                 spacing +
//                 (index - activeCard - 1) * (cardHeight * 0.2);
//             }
//           }

//           return (
//             <div
//               key={index}
//               ref={index === 0 ? firstCardRef : index === cards.length - 1 ? lastCardRef : null} // Assign refs
//               className={`absolute rounded-2xl shadow-lg flex justify-center items-center transition-all duration-700 ease-in-out ${card.bg}`}
//               style={{
//                 width: isActive ? `calc(${cardWidth} + 8%)` : cardWidth,
//                 height: isActive ? cardHeight * 1.1 : cardHeight,
//                 transform: `translateY(${translateY / 1.1}px)`,
//                 transition: "transform 0.2s ease-in-out, width 0.8s ease-in-out, height 0.8s ease-in-out",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleCardClick(index)}
//             >
//               <div className="relative w-full h-full flex flex-col p-2">
//                 <h3 className="text-2xl text-center font-bold text-white">{card.title}</h3>
//                 <div className="relative w-full h-[80%] overflow-visible rounded-lg mt-2">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-2xl"
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

// export default ServicesCardsMobile;



// import React, { useState, useEffect, useRef } from "react";

// const ServicesCardsMobile = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [activeCard, setActiveCard] = useState(null);
//   const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
//   const [minHeight, setMinHeight] = useState(isLandscape ? "500px" : "640px"); // Default minHeight

//   const [cardDistance, setCardDistance] = useState(0);

//   const firstCardRef = useRef(null);
//   const lastCardRef = useRef(null);

//   // Function to handle screen resize and adjust minHeight dynamically
//   const handleResize = () => {
//     const landscape = window.innerWidth > window.innerHeight;
//     setIsLandscape(landscape);

//     // Landscape always 500px, otherwise adjust based on activeCard state
//     const newMinHeight = landscape ? "500px" : activeCard === null ? "640px" : "1200px";
//     setMinHeight(newMinHeight);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     // Call handleResize once on mount to set correct initial height
//     handleResize();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [activeCard]); // Re-run when activeCard changes

//   useEffect(() => {
//     const calculateDistance = () => {
//       if (firstCardRef.current && lastCardRef.current) {
//         const firstCardTop = firstCardRef.current.getBoundingClientRect().top + window.scrollY;
//         const lastCardBottom = lastCardRef.current.getBoundingClientRect().bottom + window.scrollY;
//         setCardDistance(lastCardBottom - firstCardTop);
//       }
//     };

//     calculateDistance();
//     window.addEventListener("resize", calculateDistance);
//     return () => window.removeEventListener("resize", calculateDistance);
//   }, [isExpanded, activeCard, scrollY]);

//   useEffect(() => {
//     const triggerPoint = window.innerHeight * 0.5;
//     if (scrollY > triggerPoint) {
//       setIsExpanded(true);
//     }
//   }, [scrollY]);

//   const handleCardClick = (index) => {
//     if (index === cards.length - 1) {
//       setActiveCard(null);
//     } else {
//       setActiveCard(activeCard === index ? null : index);
//     }
//   };

//   const cards = [
//     { title: "Surgery", bg: "bg-[#f15a38]", img: "./Assets/smile2.png" },
//     { title: "Veneers", bg: "bg-[#f496bf]", img: "./Assets/vid.png" },
//     { title: "Implantology", bg: "bg-[#f68b1f]", img: "./Assets/vid2.png" },
//     { title: "Dentures", bg: "bg-[#0c2646]", img: "./Assets/vid3.png" },
//     { title: "Bleaching", bg: "bg-[#f496bf]", img: "./Assets/vid4.png" },
//     { title: "Pediatric Dentistry", bg: "bg-[#f68b1f]", img: "./Assets/smile2.png" },
//   ];

//   const cardHeight = isLandscape ? 220 : 340;
//   const cardWidth = isLandscape ? "60%" : "80%";
//   const spacing = 0;

//   return (
//     <div
//       className="relative flex flex-col justify-items-start items-center bg-[#e8e2d4] overflow-visible max-w-screen"
//       style={{ minHeight }}
//     >
//       {/* Debugging Info */}
//       {/* <div className="fixed top-0 left-0 p-3 bg-white text-black z-50">
//         Expanded: {isExpanded ? "Yes" : "No"} | Active: {activeCard !== null ? activeCard : "None"} | 
//         Landscape: {isLandscape ? "Yes" : "No"} | MinHeight: {minHeight} | 
//         Distance: {cardDistance}px
//       </div> */}

//       {/* Title */}
//       {/* <h1 className="text-6xl font-bold text-[#422f40] text-center mt-10 mb-1">Our Services</h1> */}
//       <h1 className="mt-7 text-6xl font-bold text-[#422f40] text-center z-5 tracking-tighter whitespace-pre-line  leading-none">
//   Our{"\n"}Services
// </h1>

//       {/* Cards Stack */}
//       <div
//         className={`mt-10 relative flex flex-col items-center w-full overflow-visible bg-[#e8e2d4] ${
//           isLandscape ? "min-h-[620px]" : "min-h-[720px]"
//         }`}
//       >
//         {cards.map((card, index) => {
//           let translateY = index * (isExpanded ? 80 : 20);
//           let isActive = activeCard === index;

//           if (activeCard !== null) {
//             if (index < activeCard) {
//               translateY = index * (cardHeight * 0.2);
//             } else if (index === activeCard) {
//               translateY = activeCard * (cardHeight * 0.2);
//             } else {
//               translateY =
//                 activeCard * (cardHeight * 0.2) +
//                 cardHeight +
//                 spacing +
//                 (index - activeCard - 1) * (cardHeight * 0.2);
//             }
//           }

//           return (
//             <div
//               key={index}
//               ref={index === 0 ? firstCardRef : index === cards.length - 1 ? lastCardRef : null} // Assign refs
//               className={`absolute rounded-2xl shadow-lg flex justify-center items-center transition-all duration-700 ease-in-out ${card.bg}`}
//               style={{
//                 width: isActive ? `calc(${cardWidth} + 8%)` : cardWidth,
//                 height: isActive ? cardHeight * 1.1 : cardHeight,
//                 transform: `translateY(${translateY / 1.1}px)`,
//                 transition: "transform 0.2s ease-in-out, width 0.8s ease-in-out, height 0.8s ease-in-out",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleCardClick(index)}
//             >
//               <div className="relative w-full h-full flex flex-col p-2">
//                 <h3 className="text-2xl text-center font-bold text-[#e8e2d4]">{card.title}</h3>
//                 <div className="relative w-full h-[80%] overflow-visible rounded-lg mt-2">
//                   <img
//                     src={card.img}
//                     alt={card.title}
//                     className="absolute inset-0 w-full h-full object-cover rounded-2xl"
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

// export default ServicesCardsMobile;





import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const ServicesCardsMobile = () => {
  const { t } = useTranslation(); // Get translation function
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  const [minHeight, setMinHeight] = useState(isLandscape ? "500px" : "640px"); // Default minHeight
  const [cardDistance, setCardDistance] = useState(0);

  const firstCardRef = useRef(null);
  const lastCardRef = useRef(null);

  const handleResize = () => {
    const landscape = window.innerWidth > window.innerHeight;
    setIsLandscape(landscape);
    const newMinHeight = landscape ? "500px" : activeCard === null ? "640px" : "1200px";
    setMinHeight(newMinHeight);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeCard]);

  useEffect(() => {
    const calculateDistance = () => {
      if (firstCardRef.current && lastCardRef.current) {
        const firstCardTop = firstCardRef.current.getBoundingClientRect().top + window.scrollY;
        const lastCardBottom = lastCardRef.current.getBoundingClientRect().bottom + window.scrollY;
        setCardDistance(lastCardBottom - firstCardTop);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, [isExpanded, activeCard, scrollY]);

  useEffect(() => {
    const triggerPoint = window.innerHeight * 0.5;
    if (scrollY > triggerPoint) {
      setIsExpanded(true);
    }
  }, [scrollY]);

  const handleCardClick = (index) => {
    if (index === cards.length - 1) {
      setActiveCard(null);
    } else {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  const cards = [
    { title: t("services.cards.surgery"), bg: "bg-[#f15a38]", img: "./Assets/smile2.png" },
    { title: t("services.cards.veneers"), bg: "bg-[#f496bf]", img: "./Assets/vid.png" },
    { title: t("services.cards.anxiety"), bg: "bg-[#f68b1f]", img: "./Assets/vid2.png" },
    { title: t("services.cards.invisalign"), bg: "bg-[#0c2646]", img: "./Assets/vid3.png" },
    { title: t("services.cards.root_canal"), bg: "bg-[#f496bf]", img: "./Assets/vid4.png" },
    { title: t("services.cards.root_canal"), bg: "bg-[#f68b1f]", img: "./Assets/smile2.png" },
  ];

  const cardHeight = isLandscape ? 220 : 340;
  const cardWidth = isLandscape ? "60%" : "80%";
  const spacing = 0;

  return (
    <div
      className="relative flex flex-col justify-items-start items-center bg-[#e8e2d4] overflow-visible max-w-screen"
      style={{ minHeight }}
    >
      {/* Title */}
      <h1 className="mt-7 text-6xl font-bold text-[#422f40] text-center z-5 tracking-tighter whitespace-pre-line leading-none">
        {t("services-mobile.title")}
      </h1>

      {/* Cards Stack */}
      <div
        className={`mt-10 relative flex flex-col items-center w-full overflow-visible bg-[#e8e2d4] ${
          isLandscape ? "min-h-[620px]" : "min-h-[720px]"
        }`}
      >
        {cards.map((card, index) => {
          let translateY = index * (isExpanded ? 80 : 20);
          let isActive = activeCard === index;

          if (activeCard !== null) {
            if (index < activeCard) {
              translateY = index * (cardHeight * 0.2);
            } else if (index === activeCard) {
              translateY = activeCard * (cardHeight * 0.2);
            } else {
              translateY =
                activeCard * (cardHeight * 0.2) +
                cardHeight +
                spacing +
                (index - activeCard - 1) * (cardHeight * 0.2);
            }
          }

          return (
            <div
              key={index}
              ref={index === 0 ? firstCardRef : index === cards.length - 1 ? lastCardRef : null}
              className={`absolute rounded-2xl shadow-lg flex justify-center items-center transition-all duration-700 ease-in-out ${card.bg}`}
              style={{
                width: isActive ? `calc(${cardWidth} + 8%)` : cardWidth,
                height: isActive ? cardHeight * 1.1 : cardHeight,
                transform: `translateY(${translateY / 1.1}px)`,
                transition: "transform 0.2s ease-in-out, width 0.8s ease-in-out, height 0.8s ease-in-out",
                cursor: "pointer",
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="relative w-full h-full flex flex-col p-2">
                <h3 className="text-2xl text-center font-bold text-[#e8e2d4]">{card.title}</h3>
                <div className="relative w-full h-[80%] overflow-visible rounded-lg mt-2">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCardsMobile;
