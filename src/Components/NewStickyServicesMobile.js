


// import React, { useState, useEffect } from "react";

// const NewStickyServicesMobile = () => {
//   const sections = [
//     {
//       id: 1,
//       title: "Elite Smile Design",
//             titleBgColor: "bg-[#272626]",
//       titleTextColor: "text-[#e8e2d4]",
//       descriptionTextColor: "text-[#e8e2d4]",
//       imageSrc: "../Assets/g3.png",
//       description:
//         "Aligned, bright white teeth. Using advanced techniques like veneers, crowns, and teeth whitening, it creates a flawless, natural-looking smile that radiates confidence and charm—just like your favorite stars!",
//     },
//     {
//       id: 2,
//       title: "Next-Gen Dental Technology",
//       titleBgColor: "bg-[#272626]",
//       titleTextColor: "text-[#e8e2d4]",
//       descriptionTextColor: "text-[#e8e2d4]",
//       imageSrc: "../Assets/tech.jpg",
//       description:
//         "We offer cutting-edge services like 3D scanning, laser dentistry, and digital imaging to ensure precise, painless, and efficient dental care tailored to your needs.",
//     },
//     {
//       id: 3,
//       title: "Smile Sparkle",
//       titleBgColor: "bg-[#272626]",
//       titleTextColor: "text-[#e8e2d4]",
//       descriptionTextColor: "text-[#e8e2d4]",
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

// export default NewStickyServicesMobile;



import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const NewStickyServicesMobile = () => {
  const { t, i18n } = useTranslation(); // Get translation function

  const sections = [
    {
      id: 1,
      title: "Hollywood Smile",
      titleBgColor: "bg-[#272626]",
      titleTextColor: "text-[#e8e2d4]",
      descriptionTextColor: "text-[#e8e2d4]",
      imageSrc: "../Assets/g3.png",
      description: "Aligned, bright white teeth. Using advanced techniques like veneers, crowns, and teeth whitening, it creates a flawless, natural-looking smile that radiates confidence and charm—just like your favorite stars!",
    },
    {
      id: 2,
      title: "Next-Gen Dental Technology",
      titleBgColor: "bg-[#272626]",
      titleTextColor: "text-[#e8e2d4]",
      descriptionTextColor: "text-[#e8e2d4]",
      imageSrc: "../Assets/tech.jpg",
      description: "We offer cutting-edge services like 3D scanning, laser dentistry, and digital imaging to ensure precise, painless, and efficient dental care tailored to your needs.",
    },
    {
      id: 3,
      title: "Smile Sparkle",
      titleBgColor: "bg-[#272626]",
      titleTextColor: "text-[#e8e2d4]",
      descriptionTextColor: "text-[#e8e2d4]",
      imageSrc: "../Assets/g.webp",
      description: "Enhance your smile with a touch of elegance using our custom tooth jewels—designed to add a subtle sparkle and unique charm to your look.",
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
            className={`w-full ${isLandscape ? "h-[35vh]" : "h-[30vh]"} px-8 flex flex-col justify-center ${section.titleBgColor}`}
          >
            <h1
              className={`font-bold tracking-tighter ${section.titleTextColor}`}
              style={{
                fontSize: i18n.language === "de" ? "1.7rem" : "2rem", // Adjust German text size
              }}
            >
              {t(`new_sticky_sections.items.${section.title}`)}
            </h1>
            <p className={`mt-2 ${section.descriptionTextColor}`}>
              {t(`new_sticky_sections.items.${section.title}_desc`)}
            </p>
          </div>

          {/* Image Section (Responsive height) */}
          <div className={`${isLandscape ? "h-[65vh]" : "h-[70vh]"} w-full`}>
            <img src={section.imageSrc} alt={t(`new_sticky_sections.items.${section.title}`)} className="w-full h-full object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewStickyServicesMobile;
