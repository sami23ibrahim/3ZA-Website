// import React, { useState } from "react";

// const data = [
//   {
//     title: "Robotics & Automation",
//     image: "/Assets/Tree.png", // Replace with your image paths
//   },
//   {
//     title: "AI-driven Farming Operations",
//     image: "/Assets/Tree.png", // Replace with your image paths
//   },
//   {
//     title: "Proprietary Shelf Life Extension",
//     image: "/Assets/Tree.png", // Replace with your image paths
//   },

// ];

// const NewGridHoverEffect = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);
  
//     return (
//         <div className="flex flex-wrap gap-4 p-8 bg-gray-900 w-full">

//       {/* <div className="flex flex-wrap gap-4 p-8 bg-gray-900 w-full max-w-screen-xl mx-auto"> */}
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
//               Math.floor(index / 3) === Math.floor(hoveredIndex / 3)
//                 ? hoveredIndex === index
//                   ? "flex-[1.2] z-10" // Expand hovered card more
//                   : hoveredIndex !== null
//                   ? "flex-[0.9]" // Shrink other cards more
//                   : "flex-1"
//                 : "flex-1"
//             }`}
//             style={{
//               height: "350px", // Fixed height
//             }}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             {/* Image */}
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-full object-cover"
//             />
  
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
//               <h3 className="text-white text-lg font-semibold text-center px-4">
//                 {item.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default NewGridHoverEffect;
  


// import React, { useState } from "react";

// const NewGridHoverEffect = ({ data }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="flex flex-wrap gap-1 p-4 bg-gray-900 w-full mt-0 pt-0 ">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
//             Math.floor(index / 3) === Math.floor(hoveredIndex / 3)
//               ? hoveredIndex === index
//                 ? "flex-[1.2] z-10" // Expand hovered card more
//                 : hoveredIndex !== null
//                 ? "flex-[0.9]" // Shrink other cards more
//                 : "flex-1"
//               : "flex-1"
//           }`}
//           style={{
//             height: "310px", // Fixed height
//             marginLeft:"10px",
//           }}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           {/* Image */}
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-full object-cover"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity ">
//             <h3 className="text-white text-lg font-semibold text-start px-4">
//               {item.title}
//             </h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewGridHoverEffect;


// import React, { useState } from "react";

// const NewGridHoverEffect = ({ data }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="flex flex-wrap gap-1 p-4 bg-gray-900 w-full mt-0 pt-0 pl-10 pr-10">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
//             Math.floor(index / 3) === Math.floor(hoveredIndex / 3)
//               ? hoveredIndex === index
//                 ? "flex-[1.2] z-10"
//                 : hoveredIndex !== null
//                 ? "flex-[0.9]"
//                 : "flex-1"
//               : "flex-1"
//           }`}
//           style={{
//             height: "340px",
//             marginLeft: "10px",
//           }}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           {hoveredIndex === index ? (
//             <video
//               src={item.video}
//               className="w-full h-full object-cover"
//               muted
//               loop
//               autoPlay
//               playsInline
//             />
//           ) : (
//             <div className="w-full h-full flex items-center justify-center bg-gray-800">
//               <h3 className="text-white text-lg font-semibold">{item.title}</h3>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewGridHoverEffect;



// import React, { useState } from "react";

// const NewGridHoverEffect = ({ data }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="flex flex-wrap gap-1 p-4 bg-[#272626] w-full mt-0 pt-0 pl-10 pr-10">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
//             Math.floor(index / 3) === Math.floor(hoveredIndex / 3)
//               ? hoveredIndex === index
//                 ? "flex-[1.2] z-10"
//                 : hoveredIndex !== null
//                 ? "flex-[0.9]"
//                 : "flex-1"
//               : "flex-1"
//           }`}
//           style={{
//             height: "350px",
//             marginLeft: "10px",
//           }}
//           onMouseEnter={() => setHoveredIndex(index)}
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           {hoveredIndex === index ? (
//             <video
//               src={item.video}
//               className="w-full h-full object-cover"
//               muted
//               loop
//               autoPlay
//               playsInline
//             />
//           ) : (
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-full object-cover"
//             />
//           )}
//           {/* Overlay */}
//           <div className="absolute inset-0 flex items-start justify-start mt-4 ml-8">
//             <h3 className="text-white text-xl font-mono">{item.title}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewGridHoverEffect;









// import React, { useState, useEffect } from "react";

// const NewGridHoverEffect = ({ data }) => {
//   const [bgColor, setBgColor] = useState("#272626"); // Initial background color

//   useEffect(() => {
//     const handleScroll = () => {
//       const component = document.getElementById("new-grid-hover");
//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Check if the component is leaving the viewport
//       if (rect.bottom < windowHeight / 8) {
//         setBgColor("#f8f8f6"); // Set light background color
//       } else {
//         setBgColor("#272626"); // Reset to dark background color
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id="new-grid-hover"
//       className="flex flex-wrap gap-1 p-4 w-full mt-0 pt-0 pl-10 pr-10 transition-colors duration-500"
//       style={{ backgroundColor: bgColor }}
//     >
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className="relative overflow-hidden rounded-lg transition-all duration-700 flex-1"
//           style={{
//             height: "350px",
//             marginLeft: "10px",
//           }}
//         >
//           {item.video ? (
//             <video
//               src={item.video}
//               className="w-full h-full object-cover"
//               muted
//               loop
//               autoPlay
//               playsInline
//             />
//           ) : (
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-full object-cover"
//             />
//           )}
//           {/* Overlay */}
//           <div className="absolute inset-0 flex items-start justify-start mt-4 ml-8">
//             <h3 className="text-white text-xl font-mono">{item.title}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewGridHoverEffect;






// import React, { useState, useEffect } from "react";

// const NewGridHoverEffect = ({ data }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null); // State for hover functionality
//   const [bgColor, setBgColor] = useState("#272626"); // Initial background color

//   useEffect(() => {
//     const handleScroll = () => {
//       const component = document.getElementById("new-grid-hover");
//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Check if the component is leaving the viewport
//       if (rect.bottom < windowHeight / 8) {
//         setBgColor("#f8f8f6"); // Set light background color
//       } else {
//         setBgColor("#272626"); // Reset to dark background color
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id="new-grid-hover"
//       className="flex flex-wrap gap-1 p-4 w-full mt-0 pt-0 pl-10 pr-10 transition-colors "
//       style={{
//         backgroundColor: bgColor,
//         transition: "background-color 2s ease", // 3 seconds transition
//       }}
    
//     >
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
//             Math.floor(index / 3) === Math.floor(hoveredIndex / 3)
//               ? hoveredIndex === index
//                 ? "flex-[1.2] z-10"
//                 : hoveredIndex !== null
//                 ? "flex-[0.9]"
//                 : "flex-1"
//               : "flex-1"
//           }`}
//           style={{
//             height: "350px",
//             marginLeft: "10px",
//           }}
//           onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
//           onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
//         >
//           {hoveredIndex === index ? (
//             <video
//               src={item.video}
//               className="w-full h-full object-cover"
//               muted
//               loop
//               autoPlay
//               playsInline
//             />
//           ) : (
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-full object-cover"
//             />
//           )}
//           {/* Overlay */}
//           <div className="absolute inset-0 flex items-start justify-start mt-4 ml-8">
//             <h3 className="text-white text-xl font-mono">{item.title}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewGridHoverEffect;



// import React, { useState, useEffect } from "react";

// const NewGridHoverEffect = ({ data }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null); // State for hover functionality
//   const [bgColor, setBgColor] = useState("#272626"); // Initial background color

//   useEffect(() => {
//     const handleScroll = () => {
//       const component = document.getElementById("new-grid-hover");
//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Check if the component is leaving the viewport
//       if (rect.bottom < (windowHeight)+200 ) {
//         setBgColor("#f8f8f6"); // Set light background color
//       } else {
//         setBgColor("#272626"); // Reset to dark background color
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Split the data into chunks of 3 for each row
//   const rows = [];
//   for (let i = 0; i < data.length; i += 3) {
//     rows.push(data.slice(i, i + 3));
//   }

//   return (
//     <div
//       id="new-grid-hover"
//       className="flex flex-col gap-4 p-4 w-full mt-0 pt-0 pl-10 pr-10 transition-colors"
//       style={{
//         backgroundColor: bgColor,
//         transition: "background-color 1.5s ease",
//         paddingBottom: "400px",
//       }}
//     >
//       {rows.map((row, rowIndex) => (
//         <div key={rowIndex} className="flex flex-wrap gap-1">
//           {row.map((item, index) => {
//             const globalIndex = index + rowIndex * 3; // Unique index across all rows
//             return (
//               <div
//                 key={globalIndex}
//                 className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
//                   Math.floor(globalIndex / 3) === Math.floor(hoveredIndex / 3)
//                     ? hoveredIndex === globalIndex
//                       ? "flex-[1.2] z-10"
//                       : hoveredIndex !== null
//                       ? "flex-[0.9]"
//                       : "flex-1"
//                     : "flex-1"
//                 }`}
//                 style={{
//                   height: "350px",
//                   marginLeft: "10px",
//                 }}
//                 onMouseEnter={() => setHoveredIndex(globalIndex)} // Set the unique index
//                 onMouseLeave={() => setHoveredIndex(null)} // Reset hover state
//               >
//                 {hoveredIndex === globalIndex ? (
//                   <video
//                     src={item.video}
//                     className="w-full h-full object-cover"
//                     muted
//                     loop
//                     autoPlay
//                     playsInline
//                   />
//                 ) : (
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                 )}
//                 {/* Overlay */}
//                 <div className="absolute inset-0 flex items-start justify-start mt-4 ml-8">
//                   <h3 className="text-white text-xl font-mono">{item.title}</h3>
//                 </div>
//               </div>
//             );
//           })}
          
//         </div>
//       ))}
      
//     </div>
//   );
// };

// export default NewGridHoverEffect;



















// import React, { useState, useEffect } from "react";

// const NewGridHoverEffect = ({ data }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null); // State for hover functionality
//   const [bgColor, setBgColor] = useState("#272626"); // Initial background color

//   useEffect(() => {
//     const handleScroll = () => {
//       const component = document.getElementById("new-grid-hover");
//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Check if the component is leaving the viewport
//       if (rect.bottom < (windowHeight + 200)) {
//         setBgColor("#e8e2d4"); // Set light background color
//       } else {
//         setBgColor("#272626"); // Reset to dark background colortext-[#422f40]
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Split the data into chunks of 3 for each row
//   const rows = [];
//   for (let i = 0; i < data.length; i += 3) {
//     rows.push(data.slice(i, i + 3));
//   }

//   return (
//     <div
//       id="new-grid-hover"
//       className="relative flex flex-col gap-4 p-4 w-full mt-0 pt-0 pl-10 pr-10 transition-colors"
//       style={{
//         backgroundColor: bgColor,
//         transition: "background-color 1.2s ease",
//         paddingBottom: "220px", // Keeps existing spacing
//       }}
//     >
//       {rows.map((row, rowIndex) => (
//         <div key={rowIndex} className="flex flex-wrap gap-1">
//           {row.map((item, index) => {
//             const globalIndex = index + rowIndex * 3; // Unique index across all rows
//             return (
//               <div
//                 key={globalIndex}
//                 className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
//                   Math.floor(globalIndex / 3) === Math.floor(hoveredIndex / 3)
//                     ? hoveredIndex === globalIndex
//                       ? "flex-[1.2] z-10"
//                       : hoveredIndex !== null
//                       ? "flex-[0.9]"
//                       : "flex-1"
//                     : "flex-1"
//                 }`}
//                 style={{
//                   height: "350px",
//                   marginLeft: "10px",
//                 }}
//                 onMouseEnter={() => setHoveredIndex(globalIndex)} // Set the unique index
//                 onMouseLeave={() => setHoveredIndex(null)} // Reset hover state
//               >
//                 {hoveredIndex === globalIndex ? (
//                   <video
//                     src={item.video}
//                     className="w-full h-full object-cover"
//                     muted
//                     loop
//                     autoPlay
//                     playsInline
//                   />
//                 ) : (
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                   />
//                 )}
//                 {/* Overlay */}
//                 <div className="absolute inset-0 flex items-start justify-start mt-4 ml-8">
//                   <h3 className="text-[white] text-2xl font-bold">{item.title}</h3>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ))}

//     </div>
//   );
// };

// export default NewGridHoverEffect;



// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next"; // Import translation hook

// const NewGridHoverEffect = ({ data }) => {
//   const { t, i18n } = useTranslation(); // Get translation function
//   const [hoveredIndex, setHoveredIndex] = useState(null); // State for hover functionality
//   const [bgColor, setBgColor] = useState("#272626"); // Initial background color

//   useEffect(() => {
//     const handleScroll = () => {
//       const component = document.getElementById("new-grid-hover");
//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Check if the component is leaving the viewport
//       if (rect.bottom < windowHeight + 10) {
//         setBgColor("#e8e2d4"); // Set light background color
//       } else {
//         setBgColor("#272626"); // Reset to dark background color
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Split the data into chunks of 3 for each row
//   const rows = [];
//   for (let i = 0; i < data.length; i += 3) {
//     rows.push(data.slice(i, i + 3));
//   }

//   return (
//     <div
//       id="new-grid-hover"
//       className="relative flex flex-col gap-4 p-4 w-full mt-0 pt-0 pl-10 pr-10 transition-colors"
//       style={{
//         backgroundColor: bgColor,
//         transition: "background-color 1.2s ease",
//         paddingBottom: "180px", // Keeps existing spacing
//         paddingTop: "10px", // Keeps existing spacing

//       }}
//     >
//       {rows.map((row, rowIndex) => (
//         <div key={rowIndex} className="flex flex-wrap gap-1">
//           {row.map((item, index) => {
//             const globalIndex = index + rowIndex * 3; // Unique index across all rows
//             return (
//               <div
//                 key={globalIndex}
//                 className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
//                   Math.floor(globalIndex / 3) === Math.floor(hoveredIndex / 3)
//                     ? hoveredIndex === globalIndex
//                       ? "flex-[1.2] z-10"
//                       : hoveredIndex !== null
//                       ? "flex-[0.9]"
//                       : "flex-1"
//                     : "flex-1"
//                 }`}
//                 style={{
//                   height: "270px",
//                   marginLeft: "10px",
//                 }}
//                 onMouseEnter={() => setHoveredIndex(globalIndex)} // Set the unique index
//                 onMouseLeave={() => setHoveredIndex(null)} // Reset hover state
//               >
//                 {hoveredIndex === globalIndex ? (
//                   <video
//                     src={item.video}
//                     className="w-full h-full object-cover"
//                     muted
//                     loop
//                     autoPlay
//                     playsInline
//                   />
//                 ) : (
//                   <img
//                     src={item.image}
//                     alt={t(`grid_hover.items.${item.title}`)}
//                     className="w-full h-full object-cover"
//                   />
//                 )}
//                 {/* Overlay */}
//                 <div className="absolute inset-0 flex items-start justify-start mt-4 ml-8">
//                   <h3
//                     className="text-[white] text-2xl font-bold"
//                     style={{
//                       fontSize: i18n.language === "de" ? "1.7rem" : "2rem", // Adjust German text size
//                     }}
//                   >
//                     {t(`grid_hover.items.${item.title}`)}
//                   </h3>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewGridHoverEffect;



import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const NewGridHoverEffect = () => {
  const { t, i18n } = useTranslation(); // Get translation function
  const [hoveredIndex, setHoveredIndex] = useState(null); // State for hover functionality
  const [bgColor, setBgColor] = useState("#272626"); // Initial background color

  // Define the data inside the component
  const data2 = [
    {
      title: "Anxiety Patients",
      image: "/Assets/smile2.png",
      video: "/Assets/smile.mp4",
    },
    {
      title: "Oral Surgery",
      image: "/Assets/vid.png",
      video: "/Assets/vid.mp4",
    },
    {
      title: "Veneers",
      image: "/Assets/vid2.png",
      video: "/Assets/vid2.mp4",
    },
    {
      title: "Root Canal Treatment",
      image: "/Assets/vid3.png",
      video: "/Assets/vid3.mp4",
    },
    {
      title: "Invisalign",
      image: "/Assets/vid4.png",
      video: "/Assets/vid4.mp4",
    },
    {
      title: "Veneers",
      image: "/Assets/vid5.png",
      video: "/Assets/vid5.mp4",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const component = document.getElementById("new-grid-hover");
      const rect = component.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the component is leaving the viewport
      if (rect.bottom < windowHeight + 10) {
        setBgColor("#e8e2d4"); // Set light background color
      } else {
        setBgColor("#272626"); // Reset to dark background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Split the data into chunks of 3 for each row
  const rows = [];
  for (let i = 0; i < data2.length; i += 3) {
    rows.push(data2.slice(i, i + 3));
  }

  return (
    <div
      id="new-grid-hover"
      className="relative flex flex-col gap-4 p-4 w-full mt-0 pt-0 pl-10 pr-10 transition-colors"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1.2s ease",
        paddingBottom: "180px", // Keeps existing spacing
        paddingTop: "10px", // Keeps existing spacing
      }}
    >
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap gap-1">
          {row.map((item, index) => {
            const globalIndex = index + rowIndex * 3; // Unique index across all rows
            return (
              <div
                key={globalIndex}
                className={`relative overflow-hidden rounded-lg transition-all duration-700 ${
                  Math.floor(globalIndex / 3) === Math.floor(hoveredIndex / 3)
                    ? hoveredIndex === globalIndex
                      ? "flex-[1.2] z-10"
                      : hoveredIndex !== null
                      ? "flex-[0.9]"
                      : "flex-1"
                    : "flex-1"
                }`}
                style={{
                  height: "270px",
                  marginLeft: "10px",
                }}
                onMouseEnter={() => setHoveredIndex(globalIndex)} // Set the unique index
                onMouseLeave={() => setHoveredIndex(null)} // Reset hover state
              >
                {hoveredIndex === globalIndex ? (
                  <video
                    src={item.video}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={item.image}
                    alt={t(`grid_hover.items.${item.title}`)}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 flex items-start justify-start mt-4 ml-8">
                  <h3
                    className="text-[white] text-2xl font-bold"
                    style={{
                      fontSize: i18n.language === "de" ? "1.7rem" : "2rem", // Adjust German text size
                    }}
                  >
                    {t(`grid_hover.items.${item.title}`)}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default NewGridHoverEffect;
