// import React from "react";

// const HalfScreenVideo = () => {
//   return (
//     <section className="h-screen w-full flex bg-[#f496bf]">
//       {/* Left Side - Text Content */}
//       <div className="w-1/2 bg-[#f496bf] flex flex-col justify-center items-start p-16 ">
//         <h1 className="max-w-lg pl-12 text-5xl font-bold text-[#422f40]">Who We Are & What We Believe</h1>
//         <p className=" max-w-lg pl-12 text-lg text-[#422f40] mt-12">
//           Our team is dedicated to delivering exceptional care guided by a shared philosophy of trust, innovation, and compassion.
//         </p>
//         <button className="ml-12 mt-12 bg-[#422f40] text-[#e8e2d4] px-6 py-3 text-lg font-semibold rounded-md">BOOK AN APPOINTMENT</button>
//       </div>
      
//       {/* Right Side - Video */}
//       <div className="w-1/2 relative">
//         <video
//           className="absolute top-0 right-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//           src="./Assets/vid.mp4"
//         />
//       </div>
//     </section>
//   );
// };
// export default HalfScreenVideo;




// import React, { useState, useEffect } from "react";

// const HalfScreenVideo = () => {
//   const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsPortrait(window.innerWidth < window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className={`h-screen w-full flex ${isPortrait ? "flex-col" : "flex-row"} bg-[#f496bf]`}>
      
//       {/* Left Side - Text Content */}
//       <div 
//         className={`flex flex-col justify-center items-start
//         ${isPortrait ? "w-full p-[5%]" : "w-1/2 p-[5%]"} 
//         max-w-screen-md mx-auto`}
//       >
//         <h1 className="text-[#422f40] font-bold tracking-tighter 
//           text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
//           Who We Are & What We Believe
//         </h1>
        
//         <p className="text-[#422f40] mt-6 text-sm sm:text-base md:text-lg lg:text-xl">
//           Our team is dedicated to delivering exceptional care guided by a shared philosophy of trust, innovation, and compassion.
//         </p>

//         <button className="mt-6 bg-[#422f40] text-[#e8e2d4] px-2 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded-md">
//           BOOK AN APPOINTMENT
//         </button>
//       </div>

//       {/* Right Side - Video */}
//       <div className={`${isPortrait ? "w-full h-1/2" : "w-1/2 h-full"}`}>
//         <video 
//           className="w-full h-full object-cover"
//           autoPlay 
//           loop 
//           muted 
//           playsInline 
//           src="./Assets/vid.mp4"
//         />
//       </div>

//     </section>
//   );
// };

// export default HalfScreenVideo;





// import React, { useState, useEffect } from "react";

// const HalfScreenVideo = () => {
//   const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsPortrait(window.innerWidth < window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className={`h-screen w-full flex ${isPortrait ? "flex-col" : "flex-row"} bg-[#f496bf]`}>
      
//       {/* Left Side - Text Content */}
//       <div 
//         className={`flex flex-col justify-center items-start
//         ${isPortrait ? "w-full min-h-1/2 p-[5%]" : "w-1/2 p-[5%]"} 
//         max-w-screen-md mx-auto flex-1`}
//       >
//         <h1 className="text-[#422f40] font-bold tracking-tighter 
//           text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
//           Who We Are & What We Believe
//         </h1>
        
//         <p className="text-[#422f40] mt-6 text-sm sm:text-base md:text-lg lg:text-xl">
//           Our team is dedicated to delivering exceptional care guided by a shared philosophy of trust, innovation, and compassion.
//         </p>

//         <button className="mt-6 bg-[#422f40] text-[#e8e2d4] px-2 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold rounded-md">
//           BOOK AN APPOINTMENT
//         </button>
//       </div>

//       {/* Right Side - Video */}
//       <div className={`${isPortrait ? "w-full h-1/2 flex-1" : "w-1/2 h-full"}`}>
//         <video 
//           className="w-full h-full object-cover"
//           autoPlay 
//           loop 
//           muted 
//           playsInline 
//           src="./Assets/vid.mp4"
//         />
//       </div>

//     </section>
//   );
// };

// export default HalfScreenVideo;



// import React, { useState, useEffect } from "react";

// const HalfScreenVideo = () => {
//   const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);
//   const [isTabletPortrait, setIsTabletPortrait] = useState(
//     window.innerWidth >= 600 && window.innerWidth < 1024 && window.innerHeight > window.innerWidth
//   );

//   useEffect(() => {
//     const handleResize = () => {
//       setIsPortrait(window.innerWidth < window.innerHeight);
//       setIsTabletPortrait(
//         window.innerWidth >= 600 && window.innerWidth < 1024 && window.innerHeight > window.innerWidth
//       );
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className={`h-screen w-full flex ${isPortrait ? "flex-col" : "flex-row"} bg-[#f496bf]`}>
      
//       {/* Left Side - Text Content */}
//       <div 
//         className={`flex flex-col justify-center items-start
//         ${
//           isPortrait
//             ? "w-full min-h-1/2 p-[5%]"
//             : isTabletPortrait
//             ? "w-1/2 h-[40vh] p-[5%]" // Reduce height for tablet portrait
//             : "w-1/2 p-[5%] flex-1"
//         } 
//         max-w-screen-md mx-auto`}
//       >
//         <h1 className="mt-2 text-[#422f40] font-bold tracking-tighter 
//           text-3xl sm:text-2xl md:text-4xl lg:text-6xl">
//           Who We Are & What We Believe
//         </h1>
        
//         <p className="text-[#422f40] mt-[10%] text-base sm:text-base md:text-lg lg:text-xl">
//           Our team is dedicated to delivering exceptional care guided by a shared philosophy of trust, innovation, and compassion.
//         </p>

//         <button className="mt-[8%] bg-[#422f40] text-[#e8e2d4] px-2 sm:px-6 py-3 sm:py-2 text-sm sm:text-lg font-semibold rounded-md">
//           BOOK AN APPOINTMENT
//         </button>
//       </div>

//       {/* Right Side - Video */}
//       <div className={`
//         ${isPortrait ? "w-full h-1/2 flex-1" : isTabletPortrait ? "w-1/2 h-[60vh]" : "w-1/2 h-full"}
//       `}>
//         <video 
//           className="w-full h-full object-cover"
//           autoPlay 
//           loop 
//           muted 
//           playsInline 
//           src="./Assets/vid.mp4"
//         />
//       </div>

//     </section>
//   );
// };

// export default HalfScreenVideo;



import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const HalfScreenVideo = () => {
  const { t } = useTranslation(); // Get translation function
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);
  const [isTabletPortrait, setIsTabletPortrait] = useState(
    window.innerWidth >= 600 && window.innerWidth < 1024 && window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth < window.innerHeight);
      setIsTabletPortrait(
        window.innerWidth >= 600 && window.innerWidth < 1024 && window.innerHeight > window.innerWidth
      );
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`h-screen w-full flex ${isPortrait ? "flex-col" : "flex-row"} bg-[#f496bf]`}>
      
      {/* Left Side - Text Content */}
      <div 
        className={`flex flex-col justify-center items-start
        ${
          isPortrait
            ? "w-full min-h-1/2 p-[5%]"
            : isTabletPortrait
            ? "w-1/2 h-[40vh] p-[5%]" // Reduce height for tablet portrait
            : "w-1/2 p-[5%] flex-1"
        } 
        max-w-screen-md mx-auto`}
      >
        <h1 className="mt-2 text-[#422f40] font-bold tracking-tighter 
          text-3xl sm:text-2xl md:text-4xl lg:text-6xl">
          {t("half_screen_video.title")}
        </h1>
        
        <p className="text-[#422f40] mt-[10%] text-base sm:text-base md:text-lg lg:text-xl">
          {t("half_screen_video.description")}
        </p>

        <button className="mt-[8%] bg-[#422f40] text-[#e8e2d4] px-2 sm:px-6 py-3 sm:py-2 text-sm sm:text-lg font-semibold rounded-md">
          {t("half_screen_video.book_button")}
        </button>
      </div>

      {/* Right Side - Video */}
      <div className={`
        ${isPortrait ? "w-full h-1/2 flex-1" : isTabletPortrait ? "w-1/2 h-[60vh]" : "w-1/2 h-full"}
      `}>
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline 
          src="./Assets/vid.mp4"
        />
      </div>

    </section>
  );
};

export default HalfScreenVideo;
