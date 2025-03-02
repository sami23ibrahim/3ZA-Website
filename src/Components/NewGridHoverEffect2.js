

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const NewGridHoverEffect2 = () => {
  const { t, i18n } = useTranslation(); // Get translation function
  const [hoveredIndex, setHoveredIndex] = useState(null); // State for hover functionality
  const [bgColor, setBgColor] = useState("#e8e2d4"); // Initial background color

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
        setBgColor("#e8e2d4"); // Reset to dark background color
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
      className="relative flex flex-col gap-4 p-0 w-full mt-0 pt-0 pl-10 pr-10 transition-colors"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1.2s ease",
        paddingBottom: "180px", // Keeps existing spacing
        paddingTop: "10px", // Keeps existing spacing
      }}
    >



 {/* Our Services Section */}
 <div className="w-full text-center p-0 mt-0">
        <h2 className="text-[#422f40] text-7xl font-bold text-center tracking-tighter">
          {t("new_full_screen_video.services_title")}
        </h2>
        <p className="text-xl text-[#422f40] font-mono mt-2 mb-8 tracking-tighter">
          {t("new_full_screen_video.services_description")}
        </p>
      </div>



      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap gap-1 ">
          {row.map((item, index) => {
            const globalIndex = index + rowIndex * 3; // Unique index across all rows
            return (
              <div
                key={globalIndex}
                className={`relative overflow-hidden rounded-lg transition-all duration-700  shadow-2xl ${
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

export default NewGridHoverEffect2;
