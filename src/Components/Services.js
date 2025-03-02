
// import React from "react";

// // Image data with parameters
// const images = [
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[74%]",
//     height: "h-[41%]",
//     top: "10%", // Using percentage
//     left: "15%", // Using percentag
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[61%]",
//     height: "h-[100%]",
//     top: "20%", // Using percentage
//     left: "15%", // Using percentage
//   },
//   {
//     src: "https://picsum.photos/id/1012/800/600",
//     width: "w-[61%]",
//     height: "h-[61%]",
//     top: "-10%",
//     left: "15%",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[74%]",
//     height: "h-[41%]",
//     top: "70%", // Using percentage
//     left: "15%", // Using percentag
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[74%]",
//     height: "h-[41%]",
//     top: "10%", // Using percentage
//     left: "15%", // Using percentag
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[61%]",
//     height: "h-[100%]",
//     top: "30%", // Using percentage
//     left: "15%", // Using percentage
//   },

// ];

// const Services = () => {
//   return (
//     <div className="relative bg-white text-black">
//       {/* Fixed Centered Title */}
//       <div className="fixed inset-0 flex items-start pl-[16vh] pt-[10vh]  justify-start z-0 pointer-events-none">
//         <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-center">
//          Our Services
//         </h1>
//       </div>

//       {/* Grid Layout */}
//       <div className="pt-[30vh]  grid grid-cols-2 gap-16">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full h-[800px] flex items-center justify-center bg-transparent border border-gray-700"
//           >
//             {/* Render the image only if `src` is provided */}
//             {image.src && (
//               <img
//                 src={image.src}
//                 alt={`Culture Image ${index + 1}`}
//                 className={`${image.width} ${image.height} object-cover`}
//                 style={{
//                   position: "absolute",
//                   top: image.top || "auto",
//                   left: image.left || "auto",
//                 }}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;




// import React from "react";

// // Image data with parameters
// const images = [
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[74%]",
//     height: "h-[41%]",
//     top: "10%", // Using percentage
//     left: "15%", // Using percentag
//     text: "Image 1 Description",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[61%]",
//     height: "h-[100%]",
//     top: "20%", // Using percentage
//     left: "15%", // Using percentage
//     text: "Image 2 Description",
//   },
//   {
//     src: "https://picsum.photos/id/1012/800/600",
//     width: "w-[61%]",
//     height: "h-[61%]",
//     top: "-10%",
//     left: "15%",
//     text: "Image 3 Description",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[74%]",
//     height: "h-[41%]",
//     top: "70%", // Using percentage
//     left: "15%", // Using percentag
//     text: "Image 4 Description",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[74%]",
//     height: "h-[41%]",
//     top: "10%", // Using percentage
//     left: "15%", // Using percentag
//     text: "Image 5 Description",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[61%]",
//     height: "h-[100%]",
//     top: "30%", // Using percentage
//     left: "15%", // Using percentage
//     text: "Image 6 Description",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="relative bg-white text-black">
//       {/* Fixed Centered Title */}
//       <div className="fixed inset-0 flex items-start pl-[16vh] pt-[10vh]  justify-start z-0 pointer-events-none">
//         <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-center">
//           Our Services
//         </h1>
//       </div>

//       {/* Grid Layout */}
//       <div className="pt-[30vh]  grid grid-cols-2 gap-16">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full h-[800px] flex items-center justify-center bg-transparent border border-gray-700"
//           >
//             {/* Render the image */}
//             {image.src && (
//               <img
//                 src={image.src}
//                 alt={`Culture Image ${index + 1}`}
//                 className={`${image.width} ${image.height} object-cover`}
//                 style={{
//                   position: "absolute",
//                   top: image.top || "auto",
//                   left: image.left || "auto",
//                 }}
//               />
//             )}
//             {/* Render the text below the image */}
//             {image.text && (
//               <div
//                 className="absolute text-center text-gray-900"
//                 style={{
//                   top: `calc(${image.top} + ${image.height}*2 )`,
//                   left: image.left || "auto",
//                 }}
//               >
//                 {image.text}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;





// import React from "react";

// // Image data with parameters
// const images = [
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%", // Using percentage
//     height: "41%", // Using percentage
//     top: "10%", // Using percentage
//     left: "15%", // Using percentage
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "20%",
//     left: "15%",
//     text: "Schonende, innovative Zahnimplantate für ein dauerhaftes Strahlen und starke Zähne. Mit dir gehen wir neue Wege zur Zahngesundheit.",
//   },
//   {
//     src: "https://picsum.photos/id/1012/800/600",
//     width: "61%",
//     height: "61%",
//     top: "-10%",
//     left: "15%",
//     text: "Makellos weißes Lächeln: Wir gestalten den Weg zu deinem Wohlfühl-Lächeln.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "70%",
//     left: "15%",
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "10%",
//     left: "15%",
//     text: "Image 5 Description",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "30%",
//     left: "15%",
//     text: "Image 6 Description",
//   },
// ];

// // Calculate `textHeight` dynamically for each image
// images.forEach((image) => {
//   // Convert percentages to numerical values
//   const top = parseFloat(image.top) +2|| 0;
//   const height = parseFloat(image.height) || 0;

//   // Calculate the `textHeight` as top + height
//   image.textHeight = top + height + "%"; // Combine as a percentage string
// });

// const Services = () => {
//   return (
//     <div className="relative bg-white text-black">
//       {/* Fixed Centered Title */}
//       <div className="fixed inset-0 flex items-start pl-[16vh] pt-[10vh] justify-start z-0 pointer-events-none">
//         <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-center">
//           Our Services
//         </h1>
//       </div>

//       {/* Grid Layout */}
//       <div className="pt-[30vh] grid grid-cols-2 gap-16">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full h-[800px] bg-transparent border border-gray-700"
//           >
//             {/* Render the image */}
//             {image.src && (
//               <img
//                 src={image.src}
//                 alt={`Culture Image ${index + 1}`}
//                 className="absolute object-cover"
//                 style={{
//                   width: image.width,
//                   height: image.height,
//                   top: image.top,
//                   left: image.left,
//                 }}
//               />
//             )}
//             {/* Render the text below the image */}
//             {image.text && (
//               <div
//                 className="absolute text-center text-gray-900"
//                 style={{
//                   top: image.textHeight, // Use calculated textHeight
//                   left: image.left || "auto",
//                 }}
//               >
//                 {image.text }
                
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;






// import React, { useEffect, useState } from "react";

// // Image data with parameters
// const images = [
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%", // Using percentage
//     height: "41%", // Using percentage
//     top: "10%", // Using percentage
//     left: "15%", // Using percentage
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "20%",
//     left: "15%",
//     text: "Schonende, innovative Zahnimplantate für ein dauerhaftes Strahlen und starke Zähne. Mit dir gehen wir neue Wege zur Zahngesundheit.",
//   },
//   {
//     src: "https://picsum.photos/id/1012/800/600",
//     width: "61%",
//     height: "61%",
//     top: "-10%",
//     left: "15%",
//     text: "Makellos weißes Lächeln: Wir gestalten den Weg zu deinem Wohlfühl-Lächeln.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "70%",
//     left: "15%",
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "10%",
//     left: "15%",
//     text: "Image 5 Description",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "30%",
//     left: "15%",
//     text: "Image 6 Description",
//   },
// ];

// // Calculate `textHeight` dynamically for each image
// images.forEach((image) => {
//   const top = parseFloat(image.top) + 2 || 0;
//   const height = parseFloat(image.height) || 0;
//   image.textHeight = top + height + "%";
// });

// const Services = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [positions, setPositions] = useState(images.map(() => 0));

//   useEffect(() => {
//     let scrollTimeout;

//     const handleScroll = () => {
//       setScrolling(true);
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         setScrolling(false);
//       }, 200);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (!scrolling) {
//       const interval = setInterval(() => {
//         setPositions((prevPositions) =>
//           prevPositions.map((pos) => pos - 0.5) // Move images up slowly
//         );
//       }, 50);

//       return () => clearInterval(interval);
//     }
//   }, [scrolling]);

//   return (
//     <div className="relative bg-white text-black">
//       {/* Fixed Centered Title */}
//       <div className="fixed inset-0 flex items-start pl-[16vh] pt-[10vh] justify-start z-0 pointer-events-none">
//         <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-center">
//           Our Services
//         </h1>
//       </div>

//       {/* Grid Layout */}
//       <div className="pt-[30vh] grid grid-cols-2 gap-16">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full h-[800px] bg-transparent border border-gray-700"
//           >
//             {/* Render the image */}
//             {image.src && (
//               <img
//                 src={image.src}
//                 alt={`Culture Image ${index + 1}`}
//                 className="absolute object-cover"
//                 style={{
//                   width: image.width,
//                   height: image.height,
//                   top: `calc(${image.top} + ${positions[index]}px)`,
//                   left: image.left,
//                 }}
//               />
//             )}
//             {/* Render the text below the image */}
//             {image.text && (
//               <div
//                 className="absolute text-center text-gray-900"
//                 style={{
//                   top: `calc(${image.textHeight} + ${positions[index]}px)`,
//                   left: image.left || "auto",
//                 }}
//               >
//                 {image.text}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;



// import React, { useEffect, useState } from "react";

// // Image data with parameters
// const images = [
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%", // Using percentage
//     height: "41%", // Using percentage
//     top: "10%", // Using percentage
//     left: "15%", // Using percentage
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "20%",
//     left: "15%",
//     text: "Schonende, innovative Zahnimplantate für ein dauerhaftes Strahlen und starke Zähne. Mit dir gehen wir neue Wege zur Zahngesundheit.",
//   },
//   {
//     src: "https://picsum.photos/id/1012/800/600",
//     width: "61%",
//     height: "61%",
//     top: "-10%",
//     left: "15%",
//     text: "Makellos weißes Lächeln: Wir gestalten den Weg zu deinem Wohlfühl-Lächeln.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "70%",
//     left: "15%",
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "10%",
//     left: "15%",
//     text: "Image 5 Description",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "30%",
//     left: "15%",
//     text: "Image 6 Description",
//   },
// ];

// // Calculate `textHeight` dynamically for each image
// images.forEach((image) => {
//   const top = parseFloat(image.top) + 2 || 0;
//   const height = parseFloat(image.height) || 0;
//   image.textHeight = top + height + "%";
// });

// const Services = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [gridPosition, setGridPosition] = useState(0);

//   useEffect(() => {
//     let scrollTimeout;

//     const handleScroll = () => {
//       setScrolling(true);
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         setScrolling(false);
//       }, 200);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (!scrolling) {
//       const interval = setInterval(() => {
//         setGridPosition((prevPosition) => {
//           if (prevPosition <= -130) return prevPosition; // Stop moving when reaching 10px above the top
//           return prevPosition - 0.5; // Move grid up slowly
//         });
//       }, 50);

//       return () => clearInterval(interval);
//     }
//   }, [scrolling]);

//   return (
//     <div className="relative bg-[#e8e2d4] text-[#422f40]">
//       {/* Fixed Centered Title */}
//       <div className="fixed inset-0 flex items-start pl-[16vh] pt-[10vh] justify-start z-0 pointer-events-none">
//         <h1 className="text-7xl md:text-7xl font-bold tracking-tighter text-center">
//         Unsere Leistungen
//         </h1>
//       </div>

//       {/* Grid Layout */}
//       <div
//         className="pt-[30vh] grid grid-cols-2 gap-16"
//         style={{ transform: `translateY(${gridPosition}px)` }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full h-[800px] bg-transparent border-transparent "
//           >
//             {/* Render the image */}
//             {image.src && (
//               <img
//                 src={image.src}
//                 alt={`Culture Image ${index + 1}`}
//                 className="absolute object-cover"
//                 style={{
//                   width: image.width,
//                   height: image.height,
//                   top: image.top,
//                   left: image.left,
//                 }}
//               />
//             )}
//             {/* Render the text below the image */}
//             {image.text && (
//               <div
//                 className="absolute text-center text-[#422f40]"
//                 style={{
//                   top: image.textHeight,
//                   left: image.left || "auto",
//                 }}
//               >
//                 {image.text}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;




// import React, { useEffect, useState } from "react";

// // Image data with parameters
// const images = [
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%", // Using percentage
//     height: "41%", // Using percentage
//     top: "10%", // Using percentage
//     left: "15%", // Using percentage
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "20%",
//     left: "15%",
//     text: "Schonende, innovative Zahnimplantate für ein dauerhaftes Strahlen und starke Zähne. Mit dir gehen wir neue Wege zur Zahngesundheit.",
//   },
//   {
//     src: "https://picsum.photos/id/1012/800/600",
//     width: "61%",
//     height: "61%",
//     top: "-10%",
//     left: "15%",
//     text: "Makellos weißes Lächeln: Wir gestalten den Weg zu deinem Wohlfühl-Lächeln.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "70%",
//     left: "15%",
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "10%",
//     left: "15%",
//     text: "Image 5 Description",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "30%",
//     left: "15%",
//     text: "Image 6 Description",
//   },
// ];

// // Calculate `textHeight` dynamically for each image
// images.forEach((image) => {
//   const top = parseFloat(image.top) + 2 || 0;
//   const height = parseFloat(image.height) || 0;
//   image.textHeight = top + height + "%";
// });

// const Services = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [gridPosition, setGridPosition] = useState(0);

//   useEffect(() => {
//     let scrollTimeout;

//     const handleScroll = () => {
//       setScrolling(true);
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         setScrolling(false);
//       }, 200);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (!scrolling) {
//       const interval = setInterval(() => {
//         setGridPosition((prevPosition) => {
//           const gridStopPosition = -window.innerHeight + 570; // Stop when the grid reaches 10px above the viewport
//           if (prevPosition <= gridStopPosition) return prevPosition; // Stop moving if the condition is met
//           return prevPosition - 0.5; // Move grid up slowly
//         });
//       }, 50);

//       return () => clearInterval(interval);
//     }
//   }, [scrolling]);

//   return (
//     <div className="relative bg-[#e8e2d4] text-[#422f40]">
//       {/* Fixed Centered Title */}
//       <div className="fixed inset-0 flex items-start pl-[16vh] pt-[10vh] justify-start z-0 pointer-events-none">
//         <h1 className="text-7xl md:text-7xl font-bold tracking-tighter text-center">
//         Unsere Leistungen
//         </h1>
//       </div>

//       {/* Grid Layout */}
//       <div
//         className="pt-[30vh] grid grid-cols-2 gap-16"
//         style={{ transform: `translateY(${gridPosition}px)` }}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full h-[800px] bg-transparent border border-transparent"
//           >
//             {/* Render the image */}
//             {image.src && (
//               <img
//                 src={image.src}
//                 alt={`Culture Image ${index + 1}`}
//                 className="absolute object-cover"
//                 style={{
//                   width: image.width,
//                   height: image.height,
//                   top: image.top,
//                   left: image.left,
//                 }}
//               />
//             )}
//             {/* Render the text below the image */}
//             {image.text && (
//               <div
//                 className="absolute text-left text-gray-900  p-2"
//                 style={{
//                   width: image.width,
//                   top: `calc(${image.top} + ${parseFloat(image.height) + 2}%)`,
//                   left: image.left,
//                 }}
//               >
//                 <h3 className="font-bold mb-1">Wurzelkanalbehandlung</h3>
//                 <p>{image.text}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;



// import React, { useEffect, useState } from "react";

// const images = [
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "10%",
//     left: "15%",
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//     name: "Wurzelkanalbehandlung",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "20%",
//     left: "15%",
//     text: "Schonende, innovative Zahnimplantate für ein dauerhaftes Strahlen und starke Zähne. Mit dir gehen wir neue Wege zur Zahngesundheit.",
//     name: "Implantologie",
//   },
//   {
//     src: "https://picsum.photos/id/1012/800/600",
//     width: "61%",
//     height: "61%",
//     top: "-10%",
//     left: "15%",
//     text: "Makellos weißes Lächeln: Wir gestalten den Weg zu deinem Wohlfühl-Lächeln.",
//     name: "Bleaching",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "70%",
//     left: "15%",
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//     name: "Wurzelkanalbehandlung",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "10%",
//     left: "15%",
//     text: "Image 5 Description",
//     name: "Prophylaxe",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "30%",
//     left: "15%",
//     text: "Image 6 Description",
//     name: "Chirurgische Eingriffe",
//   },
// ];

// // Calculate `textHeight` dynamically for each image
// images.forEach((image) => {
//   const top = parseFloat(image.top) + 2 || 0;
//   const height = parseFloat(image.height) || 0;
//   image.textHeight = top + height + "%";
// });

// const Services = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [gridPosition, setGridPosition] = useState(0);

//   useEffect(() => {
//     let scrollTimeout;

//     const handleScroll = () => {
//       setScrolling(true);
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         setScrolling(false);
//       }, 200);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (!scrolling) {
//       const interval = setInterval(() => {
//         setGridPosition((prevPosition) => {
//           const gridStopPosition = -window.innerHeight + 570; // Stop when the grid reaches 10px above the viewport
//           if (prevPosition <= gridStopPosition) return prevPosition; // Stop moving if the condition is met
//           return prevPosition - 0.5; // Move grid up slowly
//         });
//       }, 50);

//       return () => clearInterval(interval);
//     }
//   }, [scrolling]);

//   return (
//     <div className="relative bg-[#e8e2d4] text-[#422f40]">


//       {/* Second Component: Services */}
//       <div className="relative">
//         {/* Fixed Centered Title within the bounds of the second component */}
//         {/* <div className="sticky top-0 bg-[#e8e2d4] z-0 flex items-start pl-[16vh] pt-[10vh] justify-start">
//           <h1 className="text-7xl md:text-7xl font-bold tracking-tighter text-center">
//             Unsere Leistungen
//           </h1>
//         </div> */}




// <div className="sticky top-0 bg-[#e8e2d4] z-0 flex flex-col items-start pl-[16vh] pt-[10vh] justify-start">
//   <h1 className="text-7xl md:text-7xl font-bold tracking-tight text-center">
//     Unsere Leistungen
//   </h1>
//   <p className="text-base mt-4 text-left max-w-[40%]">
//     Wir verstehen deine Bedürfnisse und bieten eine breite Palette von Leistungen an. 
//     Egal, ob du Prophylaxe, chirurgische Eingriffe, Implantologie, Wurzelkanalbehandlung oder Bleaching benötigst, bei uns bist du in besten Händen.
//   </p>
// </div>






//         {/* Grid Layout */}
//         <div
//           className="pt-[30vh] grid grid-cols-2 gap-16"
//           style={{ transform: `translateY(${gridPosition}px)` }}
//         >
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="relative w-full h-[800px] bg-transparent border border-transparent"
//             >
//               {/* Render the image */}
//               {image.src && (
//                 <img
//                   src={image.src}
//                   alt={`Culture Image ${index + 1}`}
//                   className="absolute object-cover"
//                   style={{
//                     width: image.width,
//                     height: image.height,
//                     top: image.top,
//                     left: image.left,
//                   }}
//                 />
//               )}
//               {/* Render the text below the image */}
//               {/* {image.text && (
//                 <div
//                   className="absolute text-left text-[#422f40] p-2"
//                   style={{
//                     width: image.width,
//                     top: `calc(${image.top} + ${parseFloat(image.height) + 2}%)`,
//                     left: image.left,
//                   }}
//                 >
//                   <h3 className="font-bold text-[#422f40] mb-1 ">Wurzelkanalbehandlung</h3>
//                   <p>{image.text}</p>
//                 </div>
//               )} */}




// {image.text && (
//   <div
//     className="absolute text-left text-[#422f40] p-2"
//     style={{
//       width: image.width,
//       top: `calc(${image.top} + ${parseFloat(image.height) + 2}%)`,
//       left: image.left,
//     }}
//   >
//     <h3 className="font-bold text-[#422f40] mb-1">{image.name}</h3>
//     <p>{image.text}</p>
//   </div>
// )}

//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;








// import React, { useEffect, useState } from "react";



// const images = [
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "10%",
//     left: "15%",
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//     name: "Wurzelkanalbehandlung",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "20%",
//     left: "15%",
//     text: "Schonende, innovative Zahnimplantate für ein dauerhaftes Strahlen und starke Zähne. Mit dir gehen wir neue Wege zur Zahngesundheit.",
//     name: "Implantologie",
//   },
//   {
//     src: "https://picsum.photos/id/1012/800/600",
//     width: "61%",
//     height: "61%",
//     top: "-10%",
//     left: "15%",
//     text: "Makellos weißes Lächeln: Wir gestalten den Weg zu deinem Wohlfühl-Lächeln.",
//     name: "Bleaching",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "70%",
//     left: "15%",
//     text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
//     name: "Wurzelkanalbehandlung",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "74%",
//     height: "41%",
//     top: "10%",
//     left: "15%",
//     text: "Image 5 Description",
//     name: "Prophylaxe",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "61%",
//     height: "100%",
//     top: "30%",
//     left: "15%",
//     text: "Image 6 Description",
//     name: "Chirurgische Eingriffe",
//   },
// ];

// // Calculate `textHeight` dynamically for each image
// images.forEach((image) => {
//   const top = parseFloat(image.top) + 2 || 0;
//   const height = parseFloat(image.height) || 0;
//   image.textHeight = top + height + "%";
// });



// const Services = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [gridPosition, setGridPosition] = useState(0);
//   const [showText, setShowText] = useState(true); // State to control text visibility

//   useEffect(() => {
//     let scrollTimeout;

//     const handleScroll = () => {
//       setScrolling(true);
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         setScrolling(false);
//       }, 200);

//       // Check if the title is close to the top of the screen
//       const titleElement = document.getElementById("title");
//       if (titleElement) {
//         const rect = titleElement.getBoundingClientRect();
//         if (rect.top <= 20) {
//           setShowText(false); // Hide text
//         } else {
//           setShowText(true); // Show text
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (!scrolling) {
//       const interval = setInterval(() => {
//         setGridPosition((prevPosition) => {
//           const gridStopPosition = -window.innerHeight + 570;
//           if (prevPosition <= gridStopPosition) return prevPosition;
//           return prevPosition - 0.5;
//         });
//       }, 50);

//       return () => clearInterval(interval);
//     }
//   }, [scrolling]);

//   return (
//     <div className="relative bg-[#e8e2d4] text-[#422f40]">
//       {/* Second Component: Services */}
//       <div className="relative">
//         {/* Fixed Centered Title within the bounds of the second component */}
//         <div
//           id="title"
//           className="sticky top-0 bg-[#e8e2d4] z-0 flex flex-col items-start pl-[16vh] pt-[10vh] justify-start"
//         >
//           <h1 className="text-7xl md:text-7xl font-bold tracking-tight text-center">
//             Unsere Leistungen
//           </h1>
//           {showText && (
//             <p className="text-base mt-4 text-left max-w-[40%]">
//               Wir verstehen deine Bedürfnisse und bieten eine breite Palette von
//               Leistungen an. Egal, ob du Prophylaxe, chirurgische Eingriffe,
//               Implantologie, Wurzelkanalbehandlung oder Bleaching benötigst, bei
//               uns bist du in besten Händen.
//             </p>
//           )}
//         </div>

//         {/* Grid Layout */}
//         <div
//           className="pt-[30vh] grid grid-cols-2 gap-16"
//           style={{ transform: `translateY(${gridPosition}px)` }}
//         >
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="relative w-full h-[800px] bg-transparent border border-transparent"
//             >
//               {image.src && (
//                 <img
//                   src={image.src}
//                   alt={`Culture Image ${index + 1}`}
//                   className="absolute object-cover"
//                   style={{
//                     width: image.width,
//                     height: image.height,
//                     top: image.top,
//                     left: image.left,
//                   }}
//                 />
//               )}
//               {image.text && (
//                 <div
//                   className="absolute text-left text-[#422f40] p-2"
//                   style={{
//                     width: image.width,
//                     top: `calc(${image.top} + ${parseFloat(image.height) + 2}%)`,
//                     left: image.left,
//                   }}
//                 >
//                   <h3 className="font-bold text-[#422f40] mb-1">
//                     {image.name}
//                   </h3>
//                   <p>{image.text}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;



import React, { useEffect, useState } from "react";

const images = [
  {
    src: "https://picsum.photos/id/1011/800/600",
    width: "74%",
    height: "41%",
    top: "10%",
    left: "15%",
    text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
    name: "Wurzelkanalbehandlung",
  },
  {
    src: "https://picsum.photos/id/1011/800/600",
    width: "61%",
    height: "100%",
    top: "20%",
    left: "15%",
    text: "Schonende, innovative Zahnimplantate für ein dauerhaftes Strahlen und starke Zähne. Mit dir gehen wir neue Wege zur Zahngesundheit.",
    name: "Implantologie",
  },
  {
    src: "https://picsum.photos/id/1012/800/600",
    width: "61%",
    height: "61%",
    top: "-10%",
    left: "15%",
    text: "Makellos weißes Lächeln: Wir gestalten den Weg zu deinem Wohlfühl-Lächeln.",
    name: "Bleaching",
  },
  {
    src: "https://picsum.photos/id/1011/800/600",
    width: "74%",
    height: "41%",
    top: "70%",
    left: "15%",
    text: "Schmerzfreie & Effiziente Mikroskopbehandlung – Denn deine Zahngesundheit liegt uns am Herzen.",
    name: "Wurzelkanalbehandlung",
  },
  {
    src: "https://picsum.photos/id/1011/800/600",
    width: "74%",
    height: "41%",
    top: "10%",
    left: "15%",
    text: "Image 5 Description",
    name: "Prophylaxe",
  },
  {
    src: "https://picsum.photos/id/1011/800/600",
    width: "61%",
    height: "100%",
    top: "30%",
    left: "15%",
    text: "Image 6 Description",
    name: "Chirurgische Eingriffe",
  },
];

// Calculate `textHeight` dynamically for each image
images.forEach((image) => {
  const top = parseFloat(image.top) + 2 || 0;
  const height = parseFloat(image.height) || 0;
  image.textHeight = top + height + "%";
});

const Services = () => {
  const [scrolling, setScrolling] = useState(false);
  const [gridPosition, setGridPosition] = useState(0);
  const [opacity, setOpacity] = useState(1); // State to control text opacity

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrolling(false);
      }, 200);

    // Check if the title is close to the top of the screen
const titleElement = document.getElementById("title");
if (titleElement) {
  const rect = titleElement.getBoundingClientRect();
  
  if (rect.top <= 1) { // Start fading when title is 200px from the top
    setOpacity(0); // Fully faded out
  } else if (rect.top > 200 && rect.top <= 300) { // Adjust the fading range
    // Calculate opacity based on scroll position
    setOpacity((rect.top - 200) / 100); // Fade from 1 to 0 as rect.top decreases
  } else {
    setOpacity(1); // Fully visible
  }
}

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!scrolling) {
      const interval = setInterval(() => {
        setGridPosition((prevPosition) => {
          const gridStopPosition = -window.innerHeight + 400;
          if (prevPosition <= gridStopPosition) return prevPosition;
          return prevPosition - 0.5;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [scrolling]);

  return (
    <div className="relative bg-[#e8e2d4] text-[#422f40]">
      {/* Second Component: Services */}
      <div className="relative">
        {/* Fixed Centered Title within the bounds of the second component */}
        <div
          id="title"
          className="sticky top-0 bg-[#e8e2d4] z-0 flex flex-col items-start pl-[16vh] pt-[10vh] justify-start"
        >
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-center">
            Unsere Leistungen
          </h1>
          <p
            className="text-base mt-4 text-left max-w-[40%] transition-opacity duration-500"
            style={{ opacity }}
          >
            Wir verstehen deine Bedürfnisse und bieten eine breite Palette von
            Leistungen an. Egal, ob du Prophylaxe, chirurgische Eingriffe,
            Implantologie, Wurzelkanalbehandlung oder Bleaching benötigst, bei
            uns bist du in besten Händen.
          </p>
        </div>

        {/* Grid Layout */}
        <div
          className="pt-[30vh] grid grid-cols-2 gap-16"
          style={{ transform: `translateY(${gridPosition}px)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[800px] bg-transparent border border-transparent"
            >
              {image.src && (
                <img
                  src={image.src}
                  alt={`Culture Image ${index + 1}`}
                  className="absolute object-cover"
                  style={{
                    width: image.width,
                    height: image.height,
                    top: image.top,
                    left: image.left,
                  }}
                />
              )}
              {image.text && (
                <div
                  className="absolute text-left text-[#422f40] p-2"
                  style={{
                    width: image.width,
                    top: `calc(${image.top} + ${parseFloat(image.height) + 2}%)`,
                    left: image.left,
                  }}
                >
                  <h3 className="font-bold text-[#422f40] mb-1">
                    {image.name}
                  </h3>
                  <p>{image.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
