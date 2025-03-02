// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const StickyCards = () => {
//   const cards = [
//     {
//       id: 1,
//       title: "Card 1",
//       description: "This is the description for Card 1.",
//       bgColor: "bg-red-500",
//     },
//     {
//       id: 2,
//       title: "Card 2",
//       description: "This is the description for Card 2.",
//       bgColor: "bg-blue-500",
//     },
//     {
//       id: 3,
//       title: "Card 3",
//       description: "This is the description for Card 3.",
//       bgColor: "bg-green-500",
//     },
//     {
//       id: 1,
//       title: "Card 4",
//       description: "This is the description for Card 1.",
//       bgColor: "bg-red-500",
//     },
//   ];

//   return (
//     <div className="relative">
//       {/* Cards */}
//       {cards.map((card, index) => (
//         <Card
//           key={card.id}
//           title={card.title}
//           description={card.description}
//           bgColor={card.bgColor}
//           index={index}
//           totalCards={cards.length}
//         />
//       ))}
//     </div>
//   );
// };

// const Card = ({ title, description, bgColor, index, totalCards }) => {
//   const containerRef = React.useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "start start"],
//   });

//   // Slide up without shrinking
//   const translateY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100px"]);

//   // Shrink after reaching the sticky point
//   const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

//   return (
//     <motion.div
//       ref={containerRef}
//       className={`h-screen sticky top-[100px] flex items-center justify-center z-[${totalCards - index}]`}
//       style={{
//         translateY,
//       }}
//     >
//       <motion.div
//         className={`w-[80%] h-[70vh] rounded-xl shadow-lg flex flex-col items-center justify-center text-white ${bgColor}`}
//         style={{
//           scale,
//         }}
//       >
//         <h1 className="text-5xl font-bold">{title}</h1>
//         <p className="mt-4 text-lg">{description}</p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default StickyCards;












// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const StickyCards = () => {
//   const cards = [
//     {
//       id: 1,
//       title: "Card 1",
//       description: "This is the description for Card 1.",
//       bgColor: "bg-red-500",
//     },
//     {
//       id: 2,
//       title: "Card 2",
//       description: "This is the description for Card 2.",
//       bgColor: "bg-blue-500",
//     },
//     {
//       id: 3,
//       title: "Card 3",
//       description: "This is the description for Card 3.",
//       bgColor: "bg-green-500",
//     },
//     {
//       id: 4,
//       title: "Card 4",
//       description: "This is the description for Card 4.",
//       bgColor: "bg-yellow-500",
//     },
//   ];

//   return (
//     <div className="relative">
//       {/* Cards */}
//       {cards.map((card, index) => (
//         <Card
//           key={card.id}
//           title={card.title}
//           description={card.description}
//           bgColor={card.bgColor}
//           index={index}
//           totalCards={cards.length}
//         />
//       ))}
//     </div>
//   );
// };

// const Card = ({ title, description, bgColor, index, totalCards }) => {
//   const containerRef = React.useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "start start"],
//   });

//   // Base translateY with dynamic offset for each card
//   const translateY = useTransform(
//     scrollYProgress,
//     [0, 0.5, 1],
//     [
//       `${index * 30}px`, // At start, offset by index * 30px
//       `${index * 30 - 100}px`, // Mid-point
//       `${index * 30 - 200}px`, // End-point
//     ]
//   );

//   // Shrink after reaching the sticky point
//   const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

//   return (
//     <motion.div
//       ref={containerRef}
//       className={`h-screen sticky top-[160px] flex items-center justify-center z-[${totalCards - index}]`}
//       style={{
//         translateY,
//       }}
//     >
//       <motion.div
//         className={`w-[80%] h-[70vh] rounded-xl shadow-lg flex flex-col items-center justify-center text-white ${bgColor}`}
//         style={{
//           scale,
//         }}
//       >
//         <h1 className="text-5xl font-bold">{title}</h1>
//         <p className="mt-4 text-lg">{description}</p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default StickyCards;


import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StickyCards = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the description for Card 1.",
      bgColor: "bg-red-500",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the description for Card 2.",
      bgColor: "bg-blue-500",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the description for Card 3.",
      bgColor: "bg-green-500",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the description for Card 4.",
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <div className="relative">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          bgColor={card.bgColor}
          index={index}
          totalCards={cards.length}
        />
      ))}
    </div>
  );
};

const Card = ({ title, description, bgColor, index, totalCards }) => {
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // Transformations for each card
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [`${index * 40}px`, `${index * 40 - 200}px`]
  );

  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <motion.div
      ref={containerRef}
      className={`h-screen sticky top-[160px] flex items-center justify-center z-[${totalCards - index}]`}
      style={{
        translateY,
      }}
    >
      <motion.div
        className={`w-[80%] h-[70vh] rounded-xl shadow-lg flex flex-col items-center justify-center text-white ${bgColor}`}
        style={{
          scaleX,
          scaleY,
        }}
      >
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default StickyCards;
