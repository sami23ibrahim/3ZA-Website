// import React from 'react';

// const NewFullScreenVideo = ({ videoSrc, posterImage }) => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-[#f8f8f6]">
//       <div className="relative w-full h-full px-6 md:px-2 pb-6 pt-0">
//         {/* Video */}
//         <video
//           className="w-full h-full object-cover"
//           src={videoSrc}
//           poster={posterImage}
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             borderTopLeftRadius: '0px', // Subtle rounding for top-left
//             borderTopRightRadius: '0px', // Subtle rounding for top-right
//             borderBottomLeftRadius: '5px', // More pronounced rounding for bottom-left
//             borderBottomRightRadius: '5px', // More pronounced rounding for bottom-right
//           }}
//         >
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0  bg-[#272626] bg-opacity-0 rounded-lg px-6 md:px-2 pb-6 pt-0"></div>

//         {/* Text Content */}
//         <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20 mt-12">
//           <div className="text-white max-w-2xl">
//             <h1
//               style={{
//                 fontWeight: 'bold',
//                 lineHeight: '1.2',
//                 marginBottom: '16px',
//                 marginLeft: '6px',
//               }}
//               className="responsive-heading"
//             >
//               Let&apos;s make your 
//               <br /> dental health <br />
//               <span style={{ whiteSpace: 'nowrap' }}>a priority!</span>
//             </h1>
//             <div className="mt-24">
//               <button className="px-6 py-2 text-lg font-semibold border border-white rounded-3xl hover:bg-white hover:text-black transition-all">
//                 Book an Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           .responsive-heading {
//             font-size: 60px;
//           }
            
//           @media (max-width: 640px) {
//             .responsive-heading {
//               font-size: 70px;
//               max-width: 98%;
//               margin-left: 0%;
//               margin-right: 0%;
//               line-height: 1.1;
//             }
//           }
//           @media (min-width: 768px) {
//             .responsive-heading {
//               font-size: 55px;
//               line-height: 1.1;
//               margin-top: 20%;
//             }
//           }
//           @media (min-width: 1024px) {
//             .responsive-heading {
//               font-size: 76px;
//               line-height: 1.1;
//             }
//           }
//           @media (max-width: 401px) {
//             .responsive-heading {
//               margin-top: 20%;
//               line-height: 1.1;
//               font-size: 50px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default NewFullScreenVideo;



// import React, { useState, useEffect } from "react";

// const NewFullScreenVideo = ({ videoSrc, posterImage }) => {
//   const [bgColor, setBgColor] = useState("#f8f8f6"); // Initial background color

//   useEffect(() => {
//     const handleScroll = () => {
//       const component = document.getElementById("full-screen-video");
//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Check if the component is leaving the viewport
//       if (rect.bottom < windowHeight + 100) {
//         setBgColor("#272626"); // Change to dark background color
//       } else {
//         setBgColor("#f8f8f6"); // Reset to light background color
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id="full-screen-video"
//       className="relative w-full overflow-hidden transition-colors"
//       style={{
//         backgroundColor: bgColor,
//         transition: "background-color 1.5s ease",
//         paddingBottom: "300px", // Add some space at the bottom
//       }}
//     >
//       <div className="relative w-full h-screen px-6 md:px-0 pb-0 pt-0">
//         {/* Video */}
//         <video
//           className="w-full h-full object-cover"
//           src={videoSrc}
//           poster={posterImage}
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             borderTopLeftRadius: "0px", // Subtle rounding for top-left
//             borderTopRightRadius: "0px", // Subtle rounding for top-right
//             borderBottomLeftRadius: "5px", // More pronounced rounding for bottom-left
//             borderBottomRightRadius: "5px", // More pronounced rounding for bottom-right
//           }}
//         >
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#272626] bg-opacity-0 rounded-lg px-6 md:px-2 pb-6 pt-0"></div>

//         {/* Text Content */}
//         <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20 mt-12">
//           <div className="text-white max-w-2xl">
//             <h1
//               style={{
//                 fontWeight: "bold",
//                 lineHeight: "1.2",
//                 marginBottom: "16px",
//                 marginLeft: "6px",
//               }}
//               className="responsive-heading"
//             >
//               Let&apos;s make your <br /> dental health <br />
//               <span style={{ whiteSpace: "nowrap" }}>a priority!</span>
//             </h1>
//             <div className="mt-24">
//               <button className="px-6 py-2 text-lg font-semibold border border-white rounded-3xl hover:bg-white hover:text-black transition-all">
//                 Book an Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           .responsive-heading {
//             font-size: 60px;
//           }
            
//           @media (max-width: 640px) {
//             .responsive-heading {
//               font-size: 70px;
//               max-width: 98%;
//               margin-left: 0%;
//               margin-right: 0%;
//               line-height: 1.1;
//             }
//           }
//           @media (min-width: 768px) {
//             .responsive-heading {
//               font-size: 55px;
//               line-height: 1.1;
//               margin-top: 20%;
//             }
//           }
//           @media (min-width: 1024px) {
//             .responsive-heading {
//               font-size: 76px;
//               line-height: 1.1;
//             }
//           }
//           @media (max-width: 401px) {
//             .responsive-heading {
//               margin-top: 20%;
//               line-height: 1.1;
//               font-size: 50px;
//             }
//           }
//         `}
//       </style>


//        {/* Text Section Positioned Absolutely */}
//        <div
//         className="absolute bottom-24 w-full text-center p-4"

//       >
//         <h2 className="text-white text-5xl font-mono text-center tracking-tighter">
//        Our Services
//         </h2>
//         <p className="text-lg text-white font-mono mt-2 tracking-tighter">
//         We understand your needs and offer a wide range of services. You are in the best hands with us!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NewFullScreenVideo;



// import React, { useState, useEffect } from "react";

// const NewFullScreenVideo = ({ videoSrc, posterImage }) => {
//   const [videoPadding, setVideoPadding] = useState("0px"); // Initial padding for the video

//   useEffect(() => {
//     const handleScroll = () => {
//       const component = document.getElementById("full-screen-video");
//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Add padding when scrolling down
//       if (rect.bottom < windowHeight + 200) {
//         setVideoPadding("85px");
//       } else {
//         setVideoPadding("0px");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id="full-screen-video"
//       className="relative w-full overflow-hidden transition-colors"
//       style={{
//         backgroundColor: "#e8e2d4", // Always light background
//         transition: "background-color 1.5s ease",
//         paddingBottom: "0px", // Add some space at the bottom
//       }}
//     >
//       <div className="relative w-full h-screen px-6 md:px-0 pb-0 pt-0">
//         {/* Video */}
//         <video
//           className="w-full h-full object-cover"
//           src={videoSrc}
//           poster={posterImage}
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             borderTopLeftRadius: "0px",
//             borderTopRightRadius: "0px",
//             borderBottomLeftRadius: "20px",
//             borderBottomRightRadius: "20px",
//             width: `calc(100% - ${videoPadding})`,
//             margin: "0 auto",
//             transition: "width 1s ease", // Smooth transition
//           }}
//         >
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#272626] bg-opacity-0 px-6 md:px-2 pb-6 pt-0"></div>

//         {/* Text Content */}
//         <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20 mt-12">
//           <div className="text-white max-w-2xl">
//             <h1
//               style={{
//                 fontWeight: "bold",
//                 lineHeight: "1.2",
//                 marginBottom: "16px",
//                 marginLeft: "6px",
//               }}
//               className="responsive-heading"
//             >
//               Let&apos;s make your <br /> dental health <br />
//               <span style={{ whiteSpace: "nowrap" }}>a priority!</span>
//             </h1>
//             <div className="mt-24">
//               <button className="px-6 py-2 text-lg font-semibold border border-white rounded-3xl hover:bg-white hover:text-black transition-all">
//                 Book an Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           .responsive-heading {
//             font-size: 60px;
//           }
            
//           @media (max-width: 640px) {
//             .responsive-heading {
//               font-size: 70px;
//               max-width: 98%;
//               margin-left: 0%;
//               margin-right: 0%;
//               line-height: 1.1;
//             }
//           }
//           @media (min-width: 768px) {
//             .responsive-heading {
//               font-size: 55px;
//               line-height: 1.1;
//               margin-top: 20%;
//             }
//           }
//           @media (min-width: 1024px) {
//             .responsive-heading {
//               font-size: 76px;
//               line-height: 1.1;
//             }
//           }
//           @media (max-width: 401px) {
//             .responsive-heading {
//               margin-top: 20%;
//               line-height: 1.1;
//               font-size: 50px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default NewFullScreenVideo;







// import React, { useState, useEffect } from "react";

// const NewFullScreenVideo = ({ videoSrc, posterImage }) => {
//   const [bgColor, setBgColor] = useState("#272626"); // Initial background color
//   const [videoPadding, setVideoPadding] = useState("0px"); // Initial padding for the video

//   useEffect(() => {
//     const handleScroll = () => {
      
//       const component = document.getElementById("full-screen-video");
//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Check if the component is leaving the viewport
//       if (rect.bottom < windowHeight + 100) {
//         setBgColor("#272626"); // Change to dark background color
//        // setVideoPadding("70px"); // Add padding when scrolling down
//       } else {
//         setBgColor("#272626"); // Reset to light background color
//       //  setVideoPadding("0px"); // Remove padding when at the top
//       }
//       if (rect.bottom < windowHeight + 200) {
//         setVideoPadding("85px"); // Add padding when scrolling down
//       } else {
//         setVideoPadding("0px"); // Remove padding when at the top
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       id="full-screen-video"
//       className="relative w-full overflow-hidden transition-colors"
//       style={{
//         backgroundColor: bgColor,
//         transition: "background-color 1.5s ease",
//         paddingBottom: "300px", // Add some space at the bottom
     
        
//       }}
//     >
//       <div className="relative w-full h-screen px-6 md:px-0 pb-0 pt-0">
//         {/* Video */}
//         <video
//           className="w-full h-full object-cover"
//           src={videoSrc}
//           poster={posterImage}
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
            
//             borderTopLeftRadius: "0px",
//             borderTopRightRadius: "0px",
//             borderBottomLeftRadius: "20px",
//             borderBottomRightRadius: "20px",
//             width: `calc(100% - ${videoPadding})`,
//             margin: "0 auto",
            
//             transition: "width 1s ease", // Smooth transition
//           }}
//         >
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#272626] bg-opacity-0  px-6 md:px-2 pb-6 pt-0"></div>

//         {/* Text Content */}
//         <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20 mt-12"
//         >
//           <div className="text-white max-w-2xl">
//             <h1
//               style={{
//                 fontWeight: "bold",
//                 lineHeight: "1.2",
//                 marginBottom: "16px",
//                 marginLeft: "6px",
//               }}
//               className="responsive-heading"
//             >
//               Let&apos;s make your <br /> dental health <br />
//               <span style={{ whiteSpace: "nowrap" }}>a priority!</span>
//             </h1>
//             <div className="mt-24">
//               <button className="px-6 py-2 text-lg font-semibold border border-white rounded-3xl hover:bg-white hover:text-black transition-all">
//                 Book an Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           .responsive-heading {
//             font-size: 60px;
//           }
            
//           @media (max-width: 640px) {
//             .responsive-heading {
//               font-size: 70px;
//               max-width: 98%;
//               margin-left: 0%;
//               margin-right: 0%;
//               line-height: 1.1;
//             }
//           }
//           @media (min-width: 768px) {
//             .responsive-heading {
//               font-size: 55px;
//               line-height: 1.1;
//               margin-top: 20%;
//             }
//           }
//           @media (min-width: 1024px) {
//             .responsive-heading {
//               font-size: 76px;
//               line-height: 1.1;
//             }
//           }
//           @media (max-width: 401px) {
//             .responsive-heading {
//               margin-top: 20%;
//               line-height: 1.1;
//               font-size: 50px;
//             }
//           }
//         `}
//       </style>

//       {/* Text Section Positioned Absolutely */}
//       <div className="absolute bottom-24 w-full text-center p-4">
//         <h2 className="text-[#e8e2d4] text-5xl font-bold text-center tracking-tighter">
//           Our Services
//         </h2>
//         <p className="text-xl text-[#e8e2d4] font-mono mt-2 tracking-tighter">
//           We understand your needs and offer a wide range of services. You are
//           in the best hands with us!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default NewFullScreenVideo;


// import React, { useState, useEffect } from 'react';

// const NewFullScreenVideo = ({ videoSrc, mobileVideoSrc, posterImage }) => {
//   const [currentVideoSrc, setCurrentVideoSrc] = useState(videoSrc);
//   const [videoPadding, setVideoPadding] = useState("0px"); // Padding for shrinking effect
//   const [isMobile, setIsMobile] = useState(false); // Track if it's a mobile screen

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       const isMobileDevice = width <= 500 || height <= 500;

//       setCurrentVideoSrc(isMobileDevice ? mobileVideoSrc : videoSrc);
//       setIsMobile(isMobileDevice);
//     };

//     const handleScroll = () => {
//       if (isMobile) return; // No shrinking for mobile screens

//       const component = document.getElementById("full-screen-video");
//       if (!component) return;

//       const rect = component.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Shrink when scrolling down, reset when scrolling up
//       if (rect.bottom < windowHeight + 200) {
//         setVideoPadding("85px"); // Shrink effect
//       } else {
//         setVideoPadding("0px"); // Expand back to full width when scrolling up
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [videoSrc, mobileVideoSrc, isMobile]);

//   return (
//     <div
//       id="full-screen-video"
//       className="relative w-full overflow-hidden transition-colors"
//       style={{
//         backgroundColor: "#272626",
//         transition: "background-color 1.5s ease",
//         paddingBottom: "0px", // Adds space at the bottom
//       }}
//     >
//       {/* Video Section */}
//       <div className="relative w-full h-screen">
//         <video
//           className="w-full h-full object-cover"
//           src={currentVideoSrc}
//           poster={posterImage}
//           autoPlay
//           muted
//           loop
//           playsInline
//           style={{
//             borderTopLeftRadius: "0px",
//             borderTopRightRadius: "0px",
//             borderBottomLeftRadius: "20px",
//             borderBottomRightRadius: "20px",
//             width: isMobile ? "100%" : `calc(100% - ${videoPadding})`,
//             margin: "0 auto",
//             transition: "width 0.5s ease-in-out",
//           }}
//         >
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#272626] bg-opacity-10"></div>

//         {/* Text Content */}
//         <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20 mt-12">
//           <div className="text-white max-w-2xl">
//             <h1
//               style={{
//                 fontWeight: 'bold',
//                 lineHeight: '1.2',
//                 marginBottom: '16px',
//                 marginLeft: '6px',
//               }}
//               className="responsive-heading"
//             >
//               Let&apos;s make your <br /> dental health <br />
//               <span style={{ whiteSpace: 'nowrap' }}>a priority!</span>
//             </h1>
//             <div className="mt-10">
//               <button className="px-6 py-2 text-xl font-semibold border border-white rounded-3xl hover:bg-white hover:text-[#422f40] transition-all">
//                 Book an Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Our Services Section */}
//       <div className="w-full text-center p-4 mt-24">
//         <h2 className="text-[#d8ccb5] text-7xl font-bold text-center tracking-tighter">
//           Our Services
//         </h2>
//         <p className="text-xl text-[#d8ccb5] font-mono mt-2 mb-8 tracking-tighter">
//           We understand your needs and offer a wide range of services. You are
//           in the best hands with us!
//         </p>
//       </div>

//       {/* Styles */}
//       <style>
//         {`
//           .responsive-heading {
//             font-size: 60px;
//           }
//           @media (max-width: 640px) {
//             .responsive-heading {
//               font-size: 70px;
//               max-width: 98%;
//               margin-left: 0%;
//               margin-right: 0%;
//               line-height: 1.1;
//             }
//           }
//           @media (min-width: 768px) {
//             .responsive-heading {
//               font-size: 55px;
//               line-height: 1.1;
//               margin-top: 20%;
//             }
//           }
//           @media (min-width: 1024px) {
//             .responsive-heading {
//               font-size: 76px;
//               line-height: 1.1;
//             }
//           }
//           @media (max-width: 401px) {
//             .responsive-heading {
//               margin-top: 20%;
//               line-height: 1.1;
//               font-size: 50px;
//             }
//           }
//           @media (min-width: 665px) and (max-height: 500px) {
//             .responsive-heading {
//               font-size: 29px;
//               line-height: 1.1;
//               margin-top: 40%;
//               max-width: 98%;
//             }
//             .landscape-button {
//               margin-top: 12px !important;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default NewFullScreenVideo;



import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next"; // Import translation hook

const NewFullScreenVideo = ({ videoSrc, mobileVideoSrc, posterImage }) => {
  const { t, i18n } = useTranslation(); // Get translation function
  const [currentVideoSrc, setCurrentVideoSrc] = useState(videoSrc);
  const [videoPadding, setVideoPadding] = useState("0px"); // Padding for shrinking effect
  const [isMobile, setIsMobile] = useState(false); // Track if it's a mobile screen
  const isGerman = i18n.language === "de"; // Check if German is active

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobileDevice = width <= 500 || height <= 500;

      setCurrentVideoSrc(isMobileDevice ? mobileVideoSrc : videoSrc);
      setIsMobile(isMobileDevice);
    };

    const handleScroll = () => {
      if (isMobile) return; // No shrinking for mobile screens

      const component = document.getElementById("full-screen-video");
      if (!component) return;

      const rect = component.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Shrink when scrolling down, reset when scrolling up
      if (rect.bottom < windowHeight + 200) {
        setVideoPadding("85px"); // Shrink effect
      } else {
        setVideoPadding("0px"); // Expand back to full width when scrolling up
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoSrc, mobileVideoSrc, isMobile]);

  return (
    <div
      id="full-screen-video"
      className="relative w-full overflow-hidden transition-colors"
      style={{
        backgroundColor: "#272626",
        transition: "background-color 1.5s ease",
        paddingBottom: "0px", // Adds space at the bottom
      }}
    >
      {/* Video Section */}
      <div className="relative w-full h-screen">
        <video
          className="w-full h-full object-cover"
          src={currentVideoSrc}
          poster={posterImage}
          autoPlay
          muted
          loop
          playsInline
          style={{
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            width: isMobile ? "100%" : `calc(100% - ${videoPadding})`,
            margin: "0 auto",
            transition: "width 0.5s ease-in-out",
          }}
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#272626] bg-opacity-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20 mt-12">
          <div className="text-white max-w-2xl">
            <h1
              style={{
                fontWeight: 'bold',
                lineHeight: '1.2',
                marginBottom: '16px',
                marginLeft: '6px',
                fontSize: isGerman ? "clamp(32px, 4vw, 68px)" : "", // Reduce font size only for German
                wordBreak: isGerman ? "break-word" : "", // Ensures German words wrap correctly
              }}
              className="responsive-heading"
              dangerouslySetInnerHTML={{ __html: t("new_full_screen_video.heading") }}
            ></h1>
            <div className="mt-10">
            <a href="https://www.doctolib.de/zahnarztpraxis/berlin/die-drei-zahnaerzte/booking/specialities?profile_skipped=true&utm_source=die-drei-zahnaerzte-website-button&utm_medium=referral&utm_campaign=website-button&utm_content=option-8&bookingFunnelSource=external_referral" target="_blank" rel="noopener noreferrer">
  <button className="px-6 py-2 text-xl font-semibold border border-white rounded-3xl hover:bg-white hover:text-[#422f40] transition-all">
    {t("new_full_screen_video.book_button")}
  </button>
</a>

            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="w-full text-center p-4 mt-24">
        <h2 className="text-[#e8e2d4] text-7xl font-bold text-center tracking-tighter">
          {t("new_full_screen_video.services_title")}
        </h2>
        <p className="text-xl text-[#e8e2d4] font-mono mt-2 mb-8 tracking-tighter">
          {t("new_full_screen_video.services_description")}
        </p>
      </div>

      {/* Styles */}
      <style>
        {`
          .responsive-heading {
            font-size: 60px;
          }
          @media (max-width: 640px) {
            .responsive-heading {
              font-size: 70px;
              max-width: 98%;
              margin-left: 0%;
              margin-right: 0%;
              line-height: 1.1;
            }
          }
          @media (min-width: 768px) {
            .responsive-heading {
              font-size: 55px;
              line-height: 1.1;
              margin-top: 20%;
            }
          }
          @media (min-width: 1024px) {
            .responsive-heading {
              font-size: 76px;
              line-height: 1.1;
            }
          }
          @media (max-width: 401px) {
            .responsive-heading {
              margin-top: 20%;
              line-height: 1.1;
              font-size: 50px;
            }
          }
          @media (min-width: 665px) and (max-height: 500px) {
            .responsive-heading {
              font-size: 29px;
              line-height: 1.1;
              margin-top: 40%;
              max-width: 98%;
            }
            .landscape-button {
              margin-top: 12px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NewFullScreenVideo;
