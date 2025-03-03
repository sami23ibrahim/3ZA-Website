

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
      const isMobileDevice = width <= 500 ;//|| height <= 500

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
      if (rect.bottom < windowHeight+100) {
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
        backgroundColor: "#e8e2d4",
        transition: "background-color 1.5s ease",
        paddingBottom: "190px", // Adds space at the bottom
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
        <div className="absolute inset-0 bg-[#272626] bg-opacity-0"></div>

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
      {/* <div className="w-full text-center p-4 mt-24">
        <h2 className="text-[#e8e2d4] text-7xl font-bold text-center tracking-tighter">
          {t("new_full_screen_video.services_title")}
        </h2>
        <p className="text-xl text-[#e8e2d4] font-mono mt-2 mb-8 tracking-tighter">
          {t("new_full_screen_video.services_description")}
        </p>
      </div> */}

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


// import React, { useState, useEffect } from 'react';
// import { useTranslation } from "react-i18next";

// const NewFullScreenVideo = ({ videoSrc = "", mobileVideoSrc = "", posterImage = "" }) => {
//   const { t, i18n } = useTranslation();
//   const [currentVideoSrc, setCurrentVideoSrc] = useState(videoSrc || "");
//   const [videoPadding, setVideoPadding] = useState("0px");
//   const [isMobile, setIsMobile] = useState(false);
//   const isGerman = i18n.language === "de";

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;
//       const isMobileDevice = width <= 500 || height <= 500;
//       setCurrentVideoSrc(isMobileDevice ? mobileVideoSrc : videoSrc);
//       setIsMobile(isMobileDevice);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [videoSrc, mobileVideoSrc]);

//   // Ensure `currentVideoSrc` is always a string before checking `.includes()`
//   const isGoogleDrive = currentVideoSrc && typeof currentVideoSrc === "string" && currentVideoSrc.includes("drive.google.com");
//   const googleDriveEmbedUrl = isGoogleDrive
//     ? currentVideoSrc.replace("/uc?export=download&id=", "/file/d/") + "/preview"
//     : "";

//   return (
//     <div
//       id="full-screen-video"
//       className="relative w-full overflow-hidden transition-colors"
//       style={{
//         backgroundColor: "#e8e2d4",
//         transition: "background-color 1.5s ease",
//         paddingBottom: "190px",
//       }}
//     >
//       {/* Video Section */}
//       <div className="relative w-full h-screen">
//         {isGoogleDrive ? (
//           <iframe
//             src={googleDriveEmbedUrl}
//             width="100%"
//             height="500px"
//             allow="autoplay"
//             title="Google Drive Video"
//             muted

//           ></iframe>
      
//         ) : (
//           <video
//             className="w-full h-full object-cover"
//             src={currentVideoSrc}
//             poster={posterImage}
//             autoPlay
//             muted
//             loop
//             playsInline
//             style={{
//               borderTopLeftRadius: "0px",
//               borderTopRightRadius: "0px",
//               borderBottomLeftRadius: "20px",
//               borderBottomRightRadius: "20px",
//               width: isMobile ? "100%" : `calc(100% - ${videoPadding})`,
//               margin: "0 auto",
//               transition: "width 0.5s ease-in-out",
//             }}
//           >
//             Your browser does not support the video tag.
//           </video>
//         )}

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-[#272626] bg-opacity-0"></div>

//         {/* Text Content */}
//         <div className="absolute inset-0 flex items-center justify-start px-6 md:px-20 mt-12">
//           <div className="text-white max-w-2xl">
//             <h1
//               style={{
//                 fontWeight: 'bold',
//                 lineHeight: '1.2',
//                 marginBottom: '16px',
//                 marginLeft: '6px',
//                 fontSize: isGerman ? "clamp(32px, 4vw, 68px)" : "",
//                 wordBreak: isGerman ? "break-word" : "",
//               }}
//               className="responsive-heading"
//               dangerouslySetInnerHTML={{ __html: t("new_full_screen_video.heading") }}
//             ></h1>
//             <div className="mt-10">
//               <a 
//                 href="https://www.doctolib.de/zahnarztpraxis/berlin/die-drei-zahnaerzte/booking/specialities?profile_skipped=true&utm_source=die-drei-zahnaerzte-website-button&utm_medium=referral&utm_campaign=website-button&utm_content=option-8&bookingFunnelSource=external_referral" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 <button className="px-6 py-2 text-xl font-semibold border border-white rounded-3xl hover:bg-white hover:text-[#422f40] transition-all">
//                   {t("new_full_screen_video.book_button")}
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Responsive Styles */}
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
