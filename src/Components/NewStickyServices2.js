


import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const NewStickyServices2 = () => {
  const { t } = useTranslation(); // Get translation function

  const sections = [
    {
      id: 1,
      title: t("sticky_services.sections.elite_smile.title"),
      description: t("sticky_services.sections.elite_smile.description"),
      titleBgColor: "bg-[#e8e2d4]",
      titleTextColor: "text-[#422f40]",
      descriptionTextColor: "text-[#422f40]",
 
      imageSrc: "../Assets/g3.png",
    },
    {
      id: 2,
      title: t("sticky_services.sections.next_gen.title"),
      description: t("sticky_services.sections.next_gen.description"),
      titleBgColor: "bg-[#422f40]",
      titleTextColor: "text-[#e8e2d4]",
      descriptionTextColor: "text-[#e8e2d4]",
      imageSrc: "../Assets/tech.jpg",
    },
    {
      id: 3,
      title: t("sticky_services.sections.smile_sparkle.title"),
      description: t("sticky_services.sections.smile_sparkle.description"),
      titleBgColor: "bg-[#f496bf]",
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

export default NewStickyServices2;
