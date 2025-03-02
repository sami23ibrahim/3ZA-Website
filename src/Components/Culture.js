// import React, { useEffect, useState } from "react";


// const images = [
//   "https://picsum.photos/600/400", // Random image
//   "https://picsum.photos/400/600",
//   "https://picsum.photos/800/500",
//   "https://picsum.photos/500/800",
//   "https://picsum.photos/700/400",
//   "https://picsum.photos/600/700",
// ];


// const Culture = () => {
//   const [scrollOffset, setScrollOffset] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScrollOffset((prevOffset) => prevOffset + 0.5); // Slow upward movement
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   const handleScroll = () => {
//     setScrollOffset(0); // Reset the scroll offset when the user scrolls
//   };

//   return (
//     <div
//       className="relative overflow-hidden h-screen w-full bg-white text-black"
//       onScroll={handleScroll}
//     >
//       {/* Fixed Title */}
//       <div className="fixed top-0 left-0 right-0 z-1 text-center bg-opacity-0 py-4">
//         <h1 className="text-9xl md:text-9xl font-bold uppercase tracking-wide ">
//           Culture
//         </h1>
//       </div>

//       {/* Scrolling Images */}
//       <div
//         className="absolute inset-0 flex flex-col items-center"
//         style={{ transform: `translateY(-${scrollOffset}px)` }}
//       >
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="mb-6 flex justify-center"
//             style={{
//               width: index % 2 === 0 ? "80%" : "60%", // Alternate widths
//               height: `${40 + index * 10}vh`, // Varying heights
//             }}
//           >
//             <img
//               src={src}
//               alt={`Image ${index + 1}`}
//               className="w-full h-full object-cover rounded-lg shadow-lg  z-10"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Culture;



// import React, { useEffect, useState } from "react";

// const images = [
//   "https://picsum.photos/600/400", // Random image
//   "https://picsum.photos/400/600",
//   "https://picsum.photos/800/500",
//   "https://picsum.photos/500/800",
//   "https://picsum.photos/700/400",
//   "https://picsum.photos/600/700",
// ];

// const Culture = () => {
//   const [scrollOffset, setScrollOffset] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScrollOffset((prevOffset) => prevOffset + 0.5); // Slow upward movement
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   const handleScroll = () => {
//     setScrollOffset(0); // Reset the scroll offset when the user scrolls
//   };

//   return (
//     <div
//       className="relative overflow-hidden h-screen w-full bg-white text-black"
//       onScroll={handleScroll}
//     >
//       {/* Centered Title */}
//       <div className="fixed inset-0 flex items-center justify-center z-10">
//         <h1 className="text-7xl md:text-[8rem] font-bold uppercase tracking-wide text-center">
//           Our Services
//         </h1>
//       </div>

//       {/* Scrolling Images */}
//       <div
//         className="absolute inset-0 flex flex-wrap justify-center gap-6 pt-20"
//         style={{ transform: `translateY(-${scrollOffset}px)` }}
//       >
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="relative"
//             style={{
//               width: `${index % 2 === 0 ? 60 : 40}%`, // Alternate widths
//               height: `${index % 2 === 0 ? 40 : 50}vh`, // Alternate heights
//             }}
//           >
//             <img
//               src={src}
//               alt={`Image ${index + 1}`}
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Culture;

// import React from "react";

// const images = [
//   "https://picsum.photos/600/400", // Random image
//   "https://picsum.photos/400/600",
//   "https://picsum.photos/800/500",
//   "https://picsum.photos/500/800",
//   "https://picsum.photos/700/400",
//   "https://picsum.photos/600/700",
// ];

// const Culture = () => {
//   return (
//     <div className="relative w-full bg-white text-black">
//       {/* Centered Fixed Title */}
//       <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
//         <h1 className="text-7xl md:text-[8rem] font-bold uppercase tracking-wide text-center">
//           Our Services
//         </h1>
//       </div>

//       {/* Image Grid */}
//       <div className="relative z-0 pt-[100vh] grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`relative rounded-lg shadow-lg overflow-hidden ${
//               index % 2 === 0 ? "md:translate-x-[-10%]" : "md:translate-x-[10%]"
//             }`}
//           >
//             <img
//               src={src}
//               alt={`Image ${index + 1}`}
//               className="w-full h-full object-cover"
//               style={{ height: "50vh" }} // Adjust image height
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Culture;



// import React from "react";

// const images = [
//   "https://picsum.photos/id/1011/800/600",
//   "https://picsum.photos/id/1012/800/600",
//   "https://picsum.photos/id/1013/800/600",
//   "https://picsum.photos/id/1015/800/600",
//   "https://picsum.photos/id/1016/800/600",
//   "https://picsum.photos/id/1018/800/600",
//   "https://picsum.photos/id/1011/800/600",
//   "https://picsum.photos/id/1012/800/600",
//   "https://picsum.photos/id/1013/800/600",
//   "https://picsum.photos/id/1015/800/600",
//   "https://picsum.photos/id/1016/800/600",
//   "https://picsum.photos/id/1018/800/600",
// ];

// const Culture = () => {
//   return (
//     <div className="relative bg-white text-black">
//       {/* Fixed Centered Title */}
//       <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
//         <h1 className="text-7xl md:text-12xl font-bold  tracking-tight text-center">
//           Services
//         </h1>
//       </div>

//       {/* Image Layout */}
//       <div className="pt-[100vh] space-y-6 ">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`flex justify-${index % 2 === 0 ? "start" : "end"} px-4`}
//           >
//             <img
//               src={src}
//               alt={`Culture Image ${index + 1}`}
//               className="w-full md:w-1/2 h-auto object-cover  shadow-lg z-20"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Culture;



// import React from "react";

// const images = [
//   "https://picsum.photos/id/1011/800/600",
//   "https://picsum.photos/id/1012/800/600",
//   "https://picsum.photos/id/1013/800/600",
//   "https://picsum.photos/id/1015/800/600",
//   "https://picsum.photos/id/1016/800/600",
//   "https://picsum.photos/id/1018/800/600",
//   "https://picsum.photos/id/1011/800/600",
//   "https://picsum.photos/id/1012/800/600",
//   "https://picsum.photos/id/1013/800/600",
//   "https://picsum.photos/id/1015/800/600",
//   "https://picsum.photos/id/1016/800/600",
//   "https://picsum.photos/id/1018/800/600",
// ];

// const Culture = () => {
//   return (
//     <div className="relative bg-white text-black">
//       {/* Fixed Centered Title */}
//       <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
//         <h1 className="text-7xl md:text-12xl font-bold tracking-tight text-center">
//           Services
//         </h1>
//       </div>

//       {/* Image Layout */}
//       <div className="pt-[100vh]  pl-[10vh] space-y-32">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`flex justify-${index % 2 === 0 ? "start" : "end"} px-4 `}
//           >
//             <img
//               src={src}
//               alt={`Culture Image ${index + 1}`}
//               className={`${
//                 index % 2 === 0 ? "w-[40vw]" : "w-[20vw]"
//               } h-auto object-cover shadow-lg z-20`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Culture;



// import React from "react";

// // Image data with parameters
// const images = [
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[40vw]",
//     height: "h-auto",
//   },
//   {
//     src: "https://picsum.photos/id/1012/800/600",
//     width: "w-[20vw]",
//     height: "h-[300px]",
//     position: "top-0 left-0", // Custom position
//   },
//   {
//     src: "https://picsum.photos/id/1013/800/600",
//     width: "w-[30vw]",
//     height: "h-[200px]",
//   },
//   {
//     src: "https://picsum.photos/id/1015/800/600",
//     width: "w-[25vw]",
//     height: "h-auto",
//     position: "bottom-0 right-0", // Custom position
//   },
//   {
//     src: "https://picsum.photos/id/1016/800/600",
//     width: "w-[40vw]",
//     height: "h-auto",
//   },
//   {
//     src: "https://picsum.photos/id/1018/800/600",
//     width: "w-[20vw]",
//     height: "h-[250px]",
//   },
// ];

// const Culture = () => {
//   return (
//     <div className="relative bg-white text-black">
//       {/* Fixed Centered Title */}
//       <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
//         <h1 className="text-7xl md:text-12xl font-bold tracking-tight text-center">
//           Services
//         </h1>
//       </div>

//       {/* Grid Layout */}
//       <div className="pt-[100vh] grid grid-cols-2 gap-16">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative flex items-center justify-center"
//           >
//             <img
//               src={image.src}
//               alt={`Culture Image ${index + 1}`}
//               className={`${image.width} ${image.height} ${
//                 image.position ? `absolute ${image.position}` : ""
//               } object-cover shadow-lg`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Culture;



// import React from "react";

// // Image data with parameters
// const images = [
//   {
//     src: null, // No image, this cell will remain transparent
//     width: "",
//     height: "",
//   },
//   {
//     src: "https://picsum.photos/id/1011/800/600",
//     width: "w-[80%]",
//     height: "h-[100%]",
    
//   },
//   {
//     src: "https://picsum.photos/id/1012/800/600",
//     width: "w-[80%]",
//     height: "h-[95%]",
    
//   },
//   {
//     src: "https://picsum.photos/id/1015/800/600",
//     width: "w-[40%]",
//     height: "h-[60%]",
//   },
//   {
//     src: null, // No image, just empty cell
//     width: "",
//     height: "",
//   },
//   {
//     src: "https://picsum.photos/id/1016/800/600",
//     width: "w-[90%]",
//     height: "h-[100%]",
//     marginTop:"50px",
//   },
//   {
//     src: null, // No image, just empty cell
//     width: "",
//     height: "",
//   },
// ];

// const Culture = () => {
//   return (
//     <div className="relative bg-white text-black">
//       {/* Fixed Centered Title */}
//       <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
//         <h1 className="text-7xl md:text-12xl font-bold tracking-tight text-center">
//           Services
//         </h1>
//       </div>

//       {/* Grid Layout */}
//       <div className="pt-[70vh] grid grid-cols-2 gap-16">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className="relative w-full h-[800px] flex items-center justify-center bg-transparent border border-gray-500"
//           >
//             {/* Render the image only if `src` is provided */}
//             {image.src && (
//               <img
//                 src={image.src}
//                 alt={`Culture Image ${index + 1}`}
//                 className={`${image.width} ${image.height} object-cover`}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Culture;

import React from "react";

// Image data with parameters
const images = [
  {
    src: null, // No image, this cell will remain transparent
    width: "",
    height: "",
  },
  {
    src: "https://picsum.photos/id/1011/800/600",
    width: "w-[80%]",
    height: "h-[100%]",
    top: "10%", // Using percentage
    left: "5%", // Using percentage
  },
  {
    src: "https://picsum.photos/id/1012/800/600",
    width: "w-[80%]",
    height: "h-[95%]",
    top: "20%",
    left: "15%",
  },
  {
    src: "https://picsum.photos/id/1015/800/600",
    width: "w-[40%]",
    height: "h-[60%]",
    top: "30%",
    left: "30%",
  },
  {
    src: null, // No image, just empty cell
    width: "",
    height: "",
  },
  {
    src: "https://picsum.photos/id/1016/800/600",
    width: "w-[90%]",
    height: "h-[100%]",
    top: "5%",
    left: "0%",
  },
  {
    src: null, // No image, just empty cell
    width: "",
    height: "",
  },
];

const Culture = () => {
  return (
    <div className="relative bg-white text-black">
      {/* Fixed Centered Title */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
        <h1 className="text-7xl md:text-12xl font-bold tracking-tight text-center">
          Services
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="pt-[70vh] grid grid-cols-2 gap-16">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[800px] flex items-center justify-center bg-transparent border border-white"
          >
            {/* Render the image only if `src` is provided */}
            {image.src && (
              <img
                src={image.src}
                alt={`Culture Image ${index + 1}`}
                className={`${image.width} ${image.height} object-cover`}
                style={{
                  position: "absolute",
                  top: image.top || "auto",
                  left: image.left || "auto",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;
