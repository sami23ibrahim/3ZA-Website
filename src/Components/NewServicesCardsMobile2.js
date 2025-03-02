

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const NewServicesCardsMobile = () => {
  const { t, i18n } = useTranslation(); // Get translation function
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);
  const [minHeight, setMinHeight] = useState(isLandscape ? "500px" : "640px"); // Default minHeight

  const [cardDistance, setCardDistance] = useState(0);

  const firstCardRef = useRef(null);
  const lastCardRef = useRef(null);

  // Function to handle screen resize and adjust minHeight dynamically
  const handleResize = () => {
    const landscape = window.innerWidth > window.innerHeight;
    setIsLandscape(landscape);

    // Landscape always 500px, otherwise adjust based on activeCard state
    const newMinHeight = landscape ? "500px" : activeCard === null ? "640px" : "1300px";
    setMinHeight(newMinHeight);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Call handleResize once on mount to set correct initial height
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeCard]); // Re-run when activeCard changes

  useEffect(() => {
    const calculateDistance = () => {
      if (firstCardRef.current && lastCardRef.current) {
        const firstCardTop = firstCardRef.current.getBoundingClientRect().top + window.scrollY;
        const lastCardBottom = lastCardRef.current.getBoundingClientRect().bottom + window.scrollY;
        setCardDistance(lastCardBottom - firstCardTop);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, [isExpanded, activeCard, scrollY]);

  useEffect(() => {
    const triggerPoint = window.innerHeight * 0.5;
    if (scrollY > triggerPoint) {
      setIsExpanded(true);
    }
  }, [scrollY]);

  const handleCardClick = (index) => {
    if (index === cards.length - 1) {
      setActiveCard(null);
    } else {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  const cards = [
    { title: "Surgery", bg: "bg-[#f15a38]", img: "./Assets/smile2.png" },
    { title: "Veneers", bg: "bg-[#f496bf]", img: "./Assets/vid.png" },
    { title: "Implantology", bg: "bg-[#f68b1f]", img: "./Assets/vid2.png" },
    { title: "Surgery", bg: "bg-[#0c2646]", img: "./Assets/vid3.png" },
    { title: "Veneers", bg: "bg-[#f496bf]", img: "./Assets/vid4.png" },
    { title: "Pediatric Dentistry", bg: "bg-[#f68b1f]", img: "./Assets/smile2.png" },
  ];

  const cardHeight = isLandscape ? 220 : 340;
  const cardWidth = isLandscape ? "60%" : "80%";
  const spacing = 0;

  return (
    <div
      className="relative flex flex-col justify-items-start items-center bg-[#e8e2d4] overflow-visible max-w-screen"
      style={{ minHeight }}
    >
      <div className="w-full text-center p-4 mt-0">
        <h2 className="text-[#422f40] text-7xl font-bold text-center tracking-tighter">
          {t("new_full_screen_video.services_title")}
        </h2>
        <p className="text-xl text-[#422f40] font-mono mt-2 mb-8 tracking-tighter">
          {t("new_full_screen_video.services_description")}
        </p>
      </div>
      {/* Cards Stack */}
      <div
        className={`mt-0 relative flex flex-col items-center w-full overflow-visible bg-[#e8e2d4] ${
          isLandscape ? "min-h-[620px]" : "min-h-[720px]"
        }`}
      >
        {cards.map((card, index) => {
          let translateY = index * (isExpanded ? 80 : 20);
          let isActive = activeCard === index;

          if (activeCard !== null) {
            if (index < activeCard) {
              translateY = index * (cardHeight * 0.2);
            } else if (index === activeCard) {
              translateY = activeCard * (cardHeight * 0.2);
            } else {
              translateY =
                activeCard * (cardHeight * 0.2) +
                cardHeight +
                spacing +
                (index - activeCard - 1) * (cardHeight * 0.2);
            }
          }

          return (
            <div
              key={index}
              ref={index === 0 ? firstCardRef : index === cards.length - 1 ? lastCardRef : null} // Assign refs
              className={`absolute rounded-2xl shadow-sm shadow-[#e8e2d4] flex justify-center items-center transition-all duration-700 ease-in-out ${card.bg}`}
              style={{
                width: isActive ? `calc(${cardWidth} + 8%)` : cardWidth,
                height: isActive ? cardHeight * 1.1 : cardHeight,
                transform: `translateY(${translateY / 1.1}px)`,
                transition: "transform 0.2s ease-in-out, width 0.8s ease-in-out, height 0.8s ease-in-out",
                cursor: "pointer",
              }}
              onClick={() => handleCardClick(index)}
            >
              {/* <div className="relative w-full h-full flex flex-col p-4">
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={card.img}
                    alt={t(`services_mobile.items.${card.title}`)}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"                  />
                  <h3
                    className="absolute top-2 left-2 text-3xl font-bold text-[white] px-2 py-0 rounded"
                    style={{
                      fontSize: i18n.language === "de" ? "1.7rem" : "2rem", // Adjust German text size
                    }}
                  >
                    {t(`services_mobile.items.${card.title}`)}
                  </h3>
                </div>
              </div> */}
              <div className="relative w-full h-full flex flex-col p-2">
  {/* Title above the image */}
  <h3
    className="text-3xl font-bold text-[white] px-2 py-0 rounded mb-2"
    style={{
      fontSize: i18n.language === "de" ? "1.7rem" : "2rem",
    }}
  >
    {t(`services_mobile.items.${card.title}`)}
  </h3>

  {/* Image Container */}
  <div className="relative w-full h-full overflow-hidden rounded-lg">
    <img
      src={card.img}
      alt={t(`services_mobile.items.${card.title}`)}
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
</div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewServicesCardsMobile;
