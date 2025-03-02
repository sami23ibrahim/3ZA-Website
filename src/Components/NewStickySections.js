
// import React from "react";

// const StickySections = () => {
//   const sections = [
    
//     {
//       id: 1,
//       title: "Next-Gen Dental Technology",
//       titleBgColor: "bg-[#f8f8f6]",
//       titleTextColor: "text-[#272626]", // Custom title color
//       descriptionTextColor: "text-[#272626]", // Custom description color
//       imageSrc: "../Assets/advanced.png",
//       description:
//         "We offer cutting-edge services like 3D scanning, laser dentistry, and digital imaging to ensure precise, painless, and efficient dental care tailored to your needs.",
//     },
//     {
//         id: 2,
//         title: "Hollywood Smile",
//         titleBgColor: "bg-[#f8f8f6]",
//         titleTextColor: "text-[#272626]", // Custom title color
//         descriptionTextColor: "text-[#272626]", // Custom description color
//         imageSrc: "../Assets/smile.jpg",
//         description:
//           "Aligned, bright white teeth. Using advanced techniques like veneers, crowns, and teeth whitening, it creates a flawless, natural-looking smile that radiates confidence and charm—just like your favorite stars!",
//       },
//     {
//       id: 3,
//       title: "Smile Sparkle",
//       titleBgColor: "bg-[#f8f8f6]",
//       titleTextColor: "text-[#272626]", // Custom title color
//       descriptionTextColor: "text-[#272626]", // Custom description color
//       imageSrc: "../Assets/smile2.jpg",
//       description:
//         "Enhance your smile with a touch of elegance using our custom tooth jewels—designed to add a subtle sparkle and unique charm to your look.",
//     },
//   ];

//   return (
//     <div >
//       {sections.map((section) => (
//         <div
//           key={section.id}
//           className={`h-screen flex flex-col justify-start items-center sticky top-0 bg-[#f8f8f6]  px-6`}
//         >
//           {/* Title Section */}
//           <div
//             className={`w-full p-6 h-[25vh] ${section.titleBgColor} `}
//           >
//             <h1
//               className={`text-4xl ml-10 font-bold tracking-tighter ${section.titleTextColor}`}
//             >
//               {section.title}
//             </h1>
//             <p
//               className={`ml-10 mt-1 w-3/5 text-base ${section.descriptionTextColor}`}
//             >
//               {section.description}
//             </p>
//           </div>
//           {/* Image Section */}
//           <img
//             src={section.imageSrc}
//             alt={section.title}
//             className="w-full h-auto max-h-[100vh] object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StickySections;




// import React from "react";

// const NewStickySections = () => {
//   const sections = [
//     {
//       id: 1,
//       title: "Next-Gen Dental Technology",
//       titleBgColor: "bg-[#e8e2d4]",
//       titleTextColor: "text-[#422f40]", // Custom title color
//       descriptionTextColor: "text-[#422f40]", // Custom description color
//       imageSrc: "../Assets/advanced.png",
//       description:
//         "We offer cutting-edge services like 3D scanning, laser dentistry, and digital imaging to ensure precise, painless, and efficient dental care tailored to your needs.",
//     },
//     {
//       id: 2,
//       title: "Hollywood Smile",
//       titleBgColor: "bg-[#e8e2d4]",
//       titleTextColor: "text-[#422f40]", // Custom title color
//       descriptionTextColor: "text-[#422f40]", // Custom description color
//       imageSrc: "../Assets/g3.png",
//       description:
//         "Aligned, bright white teeth. Using advanced techniques like veneers, crowns, and teeth whitening, it creates a flawless, natural-looking smile that radiates confidence and charm—just like your favorite stars!",
//     },
//     {
//       id: 3,
//       title: "Smile Sparkle",
//       titleBgColor: "bg-[#e8e2d4]",
//       titleTextColor: "text-[#422f40]", // Custom title color
//       descriptionTextColor: "text-[#422f40]", // Custom description color
//       imageSrc: "../Assets/g.webp",
//       description:
//         "Enhance your smile with a touch of elegance using our custom tooth jewels—designed to add a subtle sparkle and unique charm to your look.",
//     },
//   ];

//   return (
//     <div>

//  {/* Sticky Header Section */}
//  <div
//         className="sticky top-0  bg-[#e8e2d4] py-4 z-10 mb-32"
//         style={{  }}
//       >
//                 <h2 className="text-[#422f40] text-7xl font-bold text-center tracking-tighter">
//         Our Specialties
//         </h2>
//       </div>




//       {sections.map((section) => (
//         <div
//           key={section.id}
//           className={`h-screen flex flex-col sticky top-[110px] bg-[#e8e2d4] px-6 z-40`}
//         >





          
//           {/* Black Line at the Top */}
//           <div className=" w-full h-[1.5px] bg-[#422f40] absolute top-0 left-0"></div>

//           {/* Title Section */}
//           <div className={`w-[full] pl-6 pt-0 ${section.titleBgColor} flex`}>
//             {/* Text Content */}
//             <div className="w-1/2 p-6">
//               <h1
//                 className={`text-4xl font-bold tracking-tighter ${section.titleTextColor}`}
//               >
//                 {section.title}
//               </h1>
//               <p className={`text-lg text-[#422f40] font-mono mt-2 tracking-tighter ${section.descriptionTextColor}`}>
//                 {section.description}
//               </p>
//             </div>
//             {/* Image Section */}
//             <div className={`w-1/2 flex items-center justify-center`}>
//   <img
//     src={section.imageSrc}
//     alt={section.title}
//     className="w-[80%] h-[calc(100vh-5vh)] pt-2 object-cover rounded-lg"
//     style={{ marginLeft: "20px" ,
//       filter: "brightness(0.9) hue-rotate(10deg)", // Adds a subtle color effect

//     }} // Moves the image further to the right
//   />
// </div>

//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewStickySections;


import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const NewStickySections = () => {
  const { t, i18n } = useTranslation(); // Get translation function

  const sections = [
    {
      id: 1,
      title: "Next-Gen Dental Technology",
      titleBgColor: "bg-[#e8e2d4]",
      titleTextColor: "text-[#422f40]", 
      descriptionTextColor: "text-[#422f40]", 
      imageSrc: "../Assets/advanced.png",
      description: "We offer cutting-edge services like 3D scanning, laser dentistry, and digital imaging to ensure precise, painless, and efficient dental care tailored to your needs.",
    },
    {
      id: 2,
      title: "Hollywood Smile",
      titleBgColor: "bg-[#e8e2d4]",
      titleTextColor: "text-[#422f40]", 
      descriptionTextColor: "text-[#422f40]", 
      imageSrc: "../Assets/g3.png",
      description: "Aligned, bright white teeth. Using advanced techniques like veneers, crowns, and teeth whitening, it creates a flawless, natural-looking smile that radiates confidence and charm—just like your favorite stars!",
    },
    {
      id: 3,
      title: "Smile Sparkle",
      titleBgColor: "bg-[#e8e2d4]",
      titleTextColor: "text-[#422f40]", 
      descriptionTextColor: "text-[#422f40]", 
      imageSrc: "../Assets/g.webp",
      description: "Enhance your smile with a touch of elegance using our custom tooth jewels—designed to add a subtle sparkle and unique charm to your look.",
    },
  ];

  return (
    <div>
      {/* Sticky Header Section */}
      <div className="sticky top-0 bg-[#e8e2d4] py-4 z-10 mb-32">
        <h2 className="text-[#422f40] text-7xl font-bold text-center tracking-tighter">
          {t("new_sticky_sections.heading")}
        </h2>
      </div>

      {sections.map((section) => (
        <div
          key={section.id}
          className={`h-screen flex flex-col sticky top-[110px] bg-[#e8e2d4] px-6 z-40`}
        >
          {/* Black Line at the Top */}
          <div className="w-full h-[1.5px] bg-[#422f40] absolute top-0 left-0"></div>

          {/* Title Section */}
          <div className={`w-[full] pl-6 pt-0 ${section.titleBgColor} flex`}>
            {/* Text Content */}
            <div className="w-1/2 p-6">
              <h1
                className={`text-4xl font-bold tracking-tighter ${section.titleTextColor}`}
                style={{
                  fontSize: i18n.language === "de" ? "1.7rem" : "2rem", // Adjust German text size
                }}
              >
                {t(`new_sticky_sections.items.${section.title}`)}
              </h1>
              <p className={`text-lg font-mono mt-2 tracking-tighter ${section.descriptionTextColor}`}>
                {t(`new_sticky_sections.items.${section.title}_desc`)}
              </p>
            </div>

            {/* Image Section */}
            <div className={`w-1/2 flex items-center justify-center`}>
              <img
                src={section.imageSrc}
                alt={t(`new_sticky_sections.items.${section.title}`)}
                className="w-[80%] h-[calc(100vh-5vh)] pt-2 object-cover rounded-lg"
                style={{
                  marginLeft: "20px",
                  filter: "brightness(0.9) hue-rotate(10deg)", // Adds a subtle color effect
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewStickySections;
