// import React, { useState, useEffect } from "react";

// const StickyServicesMobile = () => {
//   const sections = [
//     {
//       id: 1,
//       title: "MOBILE Elite Smile Design",
//       titleBgColor: "bg-[#e8e2d4]",
//       titleTextColor: "text-[#422f40]",
//       descriptionTextColor: "text-[#422f40]",
//       imageSrc: "../Assets/g3.png",
//       description:
//         "Aligned, bright white teeth. Using advanced techniques like veneers, crowns, and teeth whitening, it creates a flawless, natural-looking smile that radiates confidence and charm—just like your favorite stars!",
//     },
//     {
//       id: 2,
//       title: "Next-Gen Dental Technology",
//       titleBgColor: "bg-[#f496bf]",
//       titleTextColor: "text-[#422f40]",
//       descriptionTextColor: "text-[#422f40]",
//       imageSrc: "../Assets/tech.jpg",
//       description:
//         "We offer cutting-edge services like 3D scanning, laser dentistry, and digital imaging to ensure precise, painless, and efficient dental care tailored to your needs.",
//     },
//     {
//       id: 3,
//       title: "Smile Sparkle",
//       titleBgColor: "bg-[#f68b1f]",
//       titleTextColor: "text-[#422f40]",
//       descriptionTextColor: "text-[#422f40]",
//       imageSrc: "../Assets/g.webp",
//       description:
//         "Enhance your smile with a touch of elegance using our custom tooth jewels—designed to add a subtle sparkle and unique charm to your look.",
//     },
//   ];

//   const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsLandscape(window.innerWidth > window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="w-full">
//       {sections.map((section) => (
//         <div
//           key={section.id}
//           className="h-screen w-full flex flex-col sticky top-0"
//         >
//           {/* Title Section (Responsive height based on mode) */}
//           <div
//             className={`w-full ${isLandscape ? "h-[50vh]" : "h-[30vh]"} px-8 flex flex-col justify-center ${section.titleBgColor}`}
//           >
//             <h1
//               className={`${
//                 isLandscape ? "text-3xl" : "text-4xl"
//               } font-bold tracking-tighter ${section.titleTextColor}`}
//             >
//               {section.title}
//             </h1>
//             <p
//               className={`mt-2 ${
//                 isLandscape ? "text-sm" : "text-base"
//               } ${section.descriptionTextColor}`}
//             >
//               {section.description}
//             </p>
//           </div>

//           {/* Image Section (Responsive height) */}
//           <div className={`${isLandscape ? "h-[80vh]" : "h-[70vh]"} w-full`}>
//             <img
//               src={section.imageSrc}
//               alt={section.title}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StickyServicesMobile;





// import React, { useState, useEffect } from "react";

// const StickyServicesMobile = () => {
//   const sections = [
//     {
//       id: 1,
//       title: "Elite Smile Design",
//             titleBgColor: "bg-[#422f40]",
//       titleTextColor: "text-[#e8e2d4]",
//       descriptionTextColor: "text-[#e8e2d4]",
//       imageSrc: "../Assets/g3.png",
//       description:
//         "Aligned, bright white teeth. Using advanced techniques like veneers, crowns, and teeth whitening, it creates a flawless, natural-looking smile that radiates confidence and charm—just like your favorite stars!",
//     },
//     {
//       id: 2,
//       title: "Next-Gen Dental Technology",
//       titleBgColor: "bg-[#e8e2d4]",
//       titleTextColor: "text-[#422f40]",
//       descriptionTextColor: "text-[#422f40]",
//       imageSrc: "../Assets/tech.jpg",
//       description:
//         "We offer cutting-edge services like 3D scanning, laser dentistry, and digital imaging to ensure precise, painless, and efficient dental care tailored to your needs.",
//     },
//     {
//       id: 3,
//       title: "Smile Sparkle",
//       titleBgColor: "bg-[#f68b1f]",
//       titleTextColor: "text-[#422f40]",
//       descriptionTextColor: "text-[#422f40]",
//       imageSrc: "../Assets/g.webp",
//       description:
//         "Enhance your smile with a touch of elegance using our custom tooth jewels—designed to add a subtle sparkle and unique charm to your look.",
//     },
//   ];

//   const getOrientation = () => window.innerWidth > window.innerHeight;

//   const [isLandscape, setIsLandscape] = useState(getOrientation());

//   useEffect(() => {
//     const handleResize = () => {
//       setIsLandscape(getOrientation());
//     };

//     // Listen for window resize and orientation change
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("orientationchange", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("orientationchange", handleResize);
//     };
//   }, []);

//   return (
//     <div className="w-full">
//       {sections.map((section) => (
//         <div key={section.id} className="h-screen w-full flex flex-col sticky top-0">
//           {/* Title Section (Responsive height based on mode) */}
//           <div
//             className={`w-full ${
//               isLandscape ? "h-[35vh]" : "h-[30vh]"
//             } px-8 flex flex-col justify-center ${section.titleBgColor}`}
//           >
//             <h1
//               className={`${
//                 isLandscape ? "text-4xl" : "text-4xl"
//               } font-bold tracking-tighter ${section.titleTextColor}`}
//             >
//               {section.title}
//             </h1>
//             <p className={`mt-2 ${isLandscape ? "text-base" : "text-base"} ${section.descriptionTextColor}`}>
//               {section.description}
//             </p>
//           </div>

//           {/* Image Section (Responsive height) */}
//           <div className={`${isLandscape ? "h-[65vh]" : "h-[70vh]"} w-full`}>
//             <img src={section.imageSrc} alt={section.title} className="w-full h-full object-cover" />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StickyServicesMobile;



import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const StickyServicesMobile = () => {
  const { t } = useTranslation(); // Get translation function

  const sections = [
    {
      id: 1,
      title: t("sticky_services.sections.elite_smile.title"),
      description: t("sticky_services.sections.elite_smile.description"),
      titleBgColor: "bg-[#422f40]",
      titleTextColor: "text-[#e8e2d4]",
      descriptionTextColor: "text-[#e8e2d4]",
      imageSrc: "../Assets/g3.png",
    },
    {
      id: 2,
      title: t("sticky_services.sections.next_gen.title"),
      description: t("sticky_services.sections.next_gen.description"),
      titleBgColor: "bg-[#e8e2d4]",
      titleTextColor: "text-[#422f40]",
      descriptionTextColor: "text-[#422f40]",
      imageSrc: "../Assets/tech.jpg",
    },
    {
      id: 3,
      title: t("sticky_services.sections.smile_sparkle.title"),
      description: t("sticky_services.sections.smile_sparkle.description"),
      titleBgColor: "bg-[#f68b1f]",
      titleTextColor: "text-[#422f40]",
      descriptionTextColor: "text-[#422f40]",
      imageSrc: "../Assets/g.webp",
    },
  ];

  const getOrientation = () => window.innerWidth > window.innerHeight;
  const [isLandscape, setIsLandscape] = useState(getOrientation());

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(getOrientation());
    };

    // Listen for window resize and orientation change
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      {sections.map((section) => (
        <div key={section.id} className="h-screen w-full flex flex-col sticky top-0">
          {/* Title Section (Responsive height based on mode) */}
          <div
            className={`w-full ${
              isLandscape ? "h-[35vh]" : "h-[30vh]"
            } px-8 flex flex-col justify-center ${section.titleBgColor}`}
          >
            <h1
              className={`${
                isLandscape ? "text-4xl" : "text-4xl"
              } font-bold tracking-tighter ${section.titleTextColor}`}
            >
              {section.title}
            </h1>
            <p className={`mt-2 ${isLandscape ? "text-base" : "text-base"} ${section.descriptionTextColor}`}>
              {section.description}
            </p>
          </div>

          {/* Image Section (Responsive height) */}
          <div className={`${isLandscape ? "h-[65vh]" : "h-[70vh]"} w-full`}>
            <img src={section.imageSrc} alt={section.title} className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyServicesMobile;
