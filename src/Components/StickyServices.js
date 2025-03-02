// import React from "react";

// const StickySections = () => {
//   const sections = [
//     { id: 1, content: "Section 1", bgColor: "bg-red-300" },
//     { id: 2, content: "Section 2", bgColor: "bg-yellow-300" },
//     { id: 3, content: "Section 3", bgColor: "bg-green-300" },
//   ];

//   return (
//     <div className="h-[300vh]">
//       {sections.map((section) => (
//         <div
//           key={section.id}
//           className={`h-screen ${section.bgColor} flex justify-center items-center sticky top-0`}
//         >
//           <h1 className="text-4xl font-bold text-gray-800">{section.content}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StickySections;




// import React from "react";

// const StickySections = () => {
//   const sections = [
//     {
//       id: 1,
//       title: "Smile Sparkle",
//       bgColor: "bg-orange-400",
//       imageSrc: "https://via.placeholder.com/600", // Replace with your image URL
//       description: "Enhance your smile with a touch of elegance using our custom tooth jewels.",
//     },
//     {
//       id: 2,
//       title: "Radiant Smile",
//       bgColor: "bg-blue-400",
//       imageSrc: "https://via.placeholder.com/600", // Replace with your image URL
//       description: "Glow with confidence through our radiant smile designs.",
//     },
//     {
//       id: 3,
//       title: "Unique Charm",
//       bgColor: "bg-green-400",
//       imageSrc: "https://via.placeholder.com/600", // Replace with your image URL
//       description: "Add a unique charm to your look with our innovative designs.",
//     },
//   ];

//   return (
//     <div className="h-[300vh]">
//       {sections.map((section) => (
//         <div
//           key={section.id}
//           className={`h-screen ${section.bgColor} flex flex-col justify-end items-center sticky top-0`}
//         >
//           <div className="absolute top-5 left-5 bg-white p-4 shadow-md">
//             <h1 className="text-5xl font-bold text-gray-800">{section.title}</h1>
//             <p className="mt-2 text-lg text-gray-700">{section.description}</p>
//           </div>
//           <img
//             src={section.imageSrc}
//             alt={section.title}
//             className="w-full h-auto max-h-[50vh] object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StickySections;



// import React from "react";

// const StickySections = () => {
//   const sections = [
//     {
//       id: 1,
//       title: "Hollywood smile",
//       titleBgColor: "bg-[#422f40]",
//       imageSrc: "../Assets/1.png", // Replace with your actual image URL
//       description: "aligned, bright white teeth. Using advanced techniques like veneers, crowns, and teeth whitening, it creates a flawless, natural-looking smile that radiates confidence and charm—just like your favorite stars!",
//     },
//     {
//       id: 2,
//       title: "Next-Gen Dental Technology",
//       titleBgColor: "bg-[#fffaed]",
//       imageSrc: "../Assets/2.png", // Replace with your actual image URL
//       description: "We offer cutting-edge services like 3D scanning, laser dentistry, and digital imaging to ensure precise, painless, and efficient dental care tailored to your needs.",
//     },
//     {
//       id: 3,
//       title: "Smile Sparkle",
//       titleBgColor: "bg-[#f68b1f]",
//       imageSrc: "../Assets/3.png", // Replace with your actual image URL
//       description: "Enhance your smile with a touch of elegance using our custom tooth jewels—designed to add a subtle sparkle and unique charm to your look.",
//     },
//   ];

//   return (
//     <div className="h-[300vh]">
//       {sections.map((section) => (
//         <div
//           key={section.id}
//           className={`h-screen flex flex-col justify-start items-center sticky top-0`}
//         >
//           {/* Title Section */}
//           <div className={`w-full p-10 h-[25vh] ${section.titleBgColor} text-white `}>
//             <h1 className="text-5xl font-bold tracking-tighter">{section.title}</h1>
//             <p className="mt-3 w-3/5 text-base">{section.description}</p>
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

// const StickyServices = () => {
//   const sections = [
//     {
//       id: 1,
//       title: "Elite Smile Design",
//       titleBgColor: "bg-[#e8e2d4]",
//       titleTextColor: "text-[#422f40]", // Custom title color
//       descriptionTextColor: "text-[#422f40]", // Custom description color

//       imageSrc: "../Assets/g3.png",
//       description:
//         "Aligned, bright white teeth. Using advanced techniques like veneers, crowns, and teeth whitening, it creates a flawless, natural-looking smile that radiates confidence and charm—just like your favorite stars!",
//     },
//     {
//       id: 2,
//       title: "Next-Gen Dental Technology",
//       titleBgColor: "bg-[#f496bf]",
//       titleTextColor: "text-[#422f40]", // Custom title color
//       descriptionTextColor: "text-[#422f40]", // Custom description color

//       imageSrc: "../Assets/tech.jpg",
//       description:
//         "We offer cutting-edge services like 3D scanning, laser dentistry, and digital imaging to ensure precise, painless, and efficient dental care tailored to your needs.",
//     },
//     {
//       id: 3,
//       title: "Smile Sparkle",
//       titleBgColor: "bg-[#f68b1f]",
//       titleTextColor: "text-[#422f40]", // Custom title color
//       descriptionTextColor: "text-[#422f40]", // Custom description color
//       imageSrc: "../Assets/g.webp",
//       description:
//         "Enhance your smile with a touch of elegance using our custom tooth jewels—designed to add a subtle sparkle and unique charm to your look.",
//     },
//   ];

//   return (
//     <div className="h-[300vh]">
//       {sections.map((section) => (
//         <div
//           key={section.id}
//           className={`min-h-lvh flex flex-col justify-start items-center sticky top-0`}
//         >
//           {/* Title Section */}
//           <div
//             className={`w-full pl-12 pb-2 pt-2 h-[22vh] ${section.titleBgColor} `}
//           >
//             <h1
//               className={`text-7xl font-bold tracking-tighter ${section.titleTextColor}`}
//             >
//               {section.title}
//             </h1>
//             <p
//               className={`mt-2 w-4/5 text-xl ${section.descriptionTextColor}`}
//             >
//               {section.description}
//             </p>
//           </div>
//           {/* Image Section */}
//           <img
//             src={section.imageSrc}
//             alt={section.title}
//             className="w-full h-full max-h-screen object-cover"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StickyServices;



// import React from "react";

// const StickyServices = () => {
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

//   return (
//     <div className="w-full">
//       {sections.map((section) => (
//         <div
//           key={section.id}
//           className="h-screen w-full flex flex-col sticky top-0"
//         >
//           {/* Title Section */}
//           <div
//             className={`w-full h-[25vh] pl-12 pr-12 pt-0 pb-0 flex flex-col justify-center ${section.titleBgColor}`}
//           >
//             <h1 className={`mt-0 text-5xl font-bold tracking-tighter ${section.titleTextColor}`}>
//               {section.title}
//             </h1>
//             <p className={`mt-2 text-lg ${section.descriptionTextColor}`}>
//               {section.description}
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="h-[75vh] w-full">
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

// export default StickyServices;




import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const StickyServices = () => {
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

  return (
    <div className="w-full">
      {sections.map((section) => (
        <div
          key={section.id}
          className="h-screen w-full flex flex-col sticky top-0"
        >
          {/* Title Section */}
          <div
            className={`w-full h-[25vh] pl-12 pr-12 pt-0 pb-0 flex flex-col justify-center ${section.titleBgColor}`}
          >
            <h1 className={`mt-0 text-5xl font-bold tracking-tighter ${section.titleTextColor}`}>
              {section.title}
            </h1>
            <p className={`mt-2 text-lg ${section.descriptionTextColor}`}>
              {section.description}
            </p>
          </div>

          {/* Image Section */}
          <div className="h-[75vh] w-full">
            <img
              src={section.imageSrc}
              alt={section.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickyServices;
