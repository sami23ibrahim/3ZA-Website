// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     id: 1,
//     title: "Discover",
//     description:
//       "At this point we get to know your business, your goals and your target audience. We conduct research and analysis to gain insights that will be critical to the rest of the project.",
//   },
//   {
//     id: 2,
//     title: "Design",
//     description:
//       "Using insights from the discovery phase, we translate our ideas into wireframes, style guides, mockups, and interactive prototypes.",
//   },
//   {
//     id: 3,
//     title: "Develop",
//     description:
//       "Our experienced developers bring the designs to life using the latest technologies to create responsive, fast, and functional digital products.",
//   },
//   {
//     id: 4,
//     title: "Improve",
//     description:
//       "After launch, we collaborate with you to collect user feedback, monitor performance, and implement enhancements over time.",
//   },
// ];

// const ProcessApproach = () => {
//   const [activeStep, setActiveStep] = useState(1);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     const screenHeight = window.innerHeight;

//     steps.forEach((step) => {
//       const element = document.getElementById(`step-${step.id}`);
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         if (rect.top <= screenHeight / 2 && rect.bottom >= screenHeight / 2) {
//           setActiveStep(step.id);
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col overflow-hidden">
//       {steps.map((step) => (
//         <motion.div
//           key={step.id}
//           id={`step-${step.id}`}
//           className={`h-screen flex items-center justify-center transition-transform duration-500 relative ${
//             activeStep === step.id
//               ? "translate-x-0 opacity-100"
//               : step.id % 2 === 0
//               ? "translate-x-1/2 opacity-50"
//               : "-translate-x-1/2 opacity-50"
//           }`}
//         >
//           <div className="w-screen flex justify-center">
//             <div
//               className={`relative w-[90%] max-w-4xl h-64 bg-gray-800 rounded-3xl flex items-center px-8 py-4 transition-transform duration-500 ${
//                 activeStep === step.id ? "translate-x-0" : step.id % 2 === 0 ? "translate-x-1/2" : "-translate-x-1/2"
//               }`}
//             >
//               <h2 className="text-4xl font-bold mr-4">{step.id}.</h2>
//               <div>
//                 <h3 className="text-3xl font-semibold mb-2">{step.title}</h3>
//                 <p className="text-lg text-gray-300">{step.description}</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default ProcessApproach;




// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     id: 1,
//     title: "Discover",
//     description:
//       "At this point we get to know your business, your goals and your target audience. We conduct research and analysis to gain insights that will be critical to the rest of the project.",
//   },
//   {
//     id: 2,
//     title: "Design",
//     description:
//       "Using insights from the discovery phase, we translate our ideas into wireframes, style guides, mockups, and interactive prototypes.",
//   },
//   {
//     id: 3,
//     title: "Develop",
//     description:
//       "Our experienced developers bring the designs to life using the latest technologies to create responsive, fast, and functional digital products.",
//   },
//   {
//     id: 4,
//     title: "Improve",
//     description:
//       "After launch, we collaborate with you to collect user feedback, monitor performance, and implement enhancements over time.",
//   },
// ];

// const ProcessApproach = () => {
//   const [activeStep, setActiveStep] = useState(1);

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY;
//     const screenHeight = window.innerHeight;

//     steps.forEach((step) => {
//       const element = document.getElementById(`step-${step.id}`);
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         if (rect.top <= screenHeight / 2 && rect.bottom >= screenHeight / 2) {
//           setActiveStep(step.id);
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col overflow-hidden">
//       {steps.map((step) => (
//         <motion.div
//           key={step.id}
//           id={`step-${step.id}`}
//           initial={{ x: "100%", opacity: 40 }}
//           animate={{ x: activeStep === step.id ? "0%" : "100%", opacity: activeStep === step.id ? 1 : 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="h-[screen] flex items-center justify-center relative"
//         >
//           <div className="w-screen flex justify-center">
//             <div className="relative w-[90%] max-w-4xl h-64 bg-gray-800 rounded-3xl flex items-center px-8 py-4">
//               <h2 className="text-4xl font-bold mr-4">{step.id}.</h2>
//               <div>
//                 <h3 className="text-3xl font-semibold mb-2">{step.title}</h3>
//                 <p className="text-lg text-gray-300">{step.description}</p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default ProcessApproach;



// import React, { useEffect, useRef, useState } from "react";

// const ProcessApproach = () => {
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const containerRef = useRef(null);

//   const handleScroll = () => {
//     const containerTop = containerRef.current.getBoundingClientRect().top;
//     if (containerTop < window.innerHeight / 2 && !hasScrolled) {
//       setHasScrolled(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasScrolled]);

//   return (
//     <div ref={containerRef} className="relative h-[200vh] bg-gray-900 text-white">
//       <div
//         className={`absolute top-[1vh] left-1/2 transform transition-transform duration-700 ease-in-out w-[90%] p-6 bg-gray-800 rounded-full shadow-lg ${
//           hasScrolled ? "-translate-x-1/2" : "translate-x-[30%]"
//         }`}
//       >
//         <h2 className="text-3xl font-bold mb-4 text-center">1. Discover</h2>
//         <p className="text-gray-300 text-center">
//           At this point, we get to know your business, your goals, and your target
//           audience. We conduct research and analysis to gain insights that will
//           be critical to the rest of the project.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProcessApproach;



// import React, { useEffect, useRef, useState } from "react";

// const ProcessApproach = () => {
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const containerRef = useRef(null);

//   const handleScroll = () => {
//     const containerTop = containerRef.current.getBoundingClientRect().top;
//     if (containerTop < window.innerHeight / 4 && !hasScrolled) {
//       setHasScrolled(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasScrolled]);

//   return (
//     <div ref={containerRef} className="relative h-[50vh] bg-[#272626] text-white">
//       <div
//         className={`border-2 border-neutral-300 absolute top-[50%] left-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out w-[90%] h-[300px] p-6 bg-transparent rounded-full  ${
//           hasScrolled ? "-translate-x-1/2" : "translate-x-[0%]"
//         }`}
//       >
//         <h2 className="text-4xl font-extrabold mb-6 text-center text-[#eaeaea] tracking-wide">1. Discover</h2>
//         <p className="text-[#f8f8f6] text-center text-lg leading-7 max-w-[70%] mx-auto">
//           At this point, we get to know your business, your goals, and your target
//           audience. We conduct research and analysis to gain insights that will
//           be critical to the rest of the project.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProcessApproach;




// import React, { useEffect, useRef, useState } from "react";

// const ProcessApproach = () => {
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const containerRef = useRef(null);

//   const handleScroll = () => {
//     const containerTop = containerRef.current.getBoundingClientRect().top;
//     if (containerTop < window.innerHeight / 4 && !hasScrolled) {
//       setHasScrolled(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasScrolled]);

//   return (
//     <div ref={containerRef} className="relative h-[47vh] bg-[#272626] text-white">
//       <div
//         className={`border-2 border-neutral-300 absolute top-[50%] left-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out w-[90%] h-[300px] p-6 bg-transparent rounded-full flex items-center justify-between ${
//           hasScrolled ? "-translate-x-1/2" : "translate-x-[0%]"
//         }`}
//       >
//         <div className="flex flex-col w-2/3 pl-10">
//           <h3 className="text-5xl font-semibold text-left text-[#eaeaea] pl-40">
//           Fabian Badour
//           </h3>
//         </div>
//         <p className="text-[#d4d4d4] text-left text-lg leading-7 w-2/3 pr-44">
//         Fabian treats within the areas of surgery, implantology, dental prosthetics and front tooth aesthetics. His treatment also extends to anxious patients. Fabian is available for consultations in various languages, including Arabic, English and German, to ensure holistic care for his patients.
//         </p>
    
//       </div>
//     </div>
//   );
// };

// export default ProcessApproach;




// import React, { useEffect, useRef, useState } from "react";

// const ProcessApproach = () => {
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const containerRef = useRef(null);

//   const handleScroll = () => {
//     const containerTop = containerRef.current.getBoundingClientRect().top;
//     if (containerTop < window.innerHeight / 2 && !hasScrolled) {
//       setHasScrolled(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasScrolled]);

//   return (
//     <div ref={containerRef} className="relative h-[47vh] bg-[#272626] text-white">
//       <div
//         className={`border-2 border-neutral-300 absolute top-[50%] left-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out w-[90%] h-[300px] p-6 bg-transparent rounded-full flex items-center justify-between ${
//           hasScrolled ? "-translate-x-1/2" : "translate-x-[0%]"
//         }`}
//       >
//          {/* Image and Name */}
//          <div className="flex flex-col items-center w-2/3 pl-32">
//           <img
//             src="../Assets/fab.png" // Replace with your image URL
//             alt="Fabian Badour"
//             className="rounded-full w-56 h-56 object-cover"
//           />
//           <h3 className="text-3xl font-mono mt-4 tracking-tighter text-[#eaeaea]">
//             Fabian Badour
//           </h3>
//         </div>

//         {/* Text */}
//         <p className="text-[#d4d4d4] text-left text-lg leading-7 w-2/3 pr-44 font-mono mt-2 tracking-tighter">
//           Fabian treats within the areas of surgery, implantology, dental prosthetics and front tooth aesthetics. His treatment also extends to anxious patients. Fabian is available for consultations in various languages, including Arabic, English and German, to ensure holistic care for his patients.
//         </p>
//       </div>

      
//     </div>
//   );
// };

// export default ProcessApproach;



// import React, { useEffect, useRef, useState } from "react";

// const ProcessApproach = ({ name, text, imageUrl }) => {
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const containerRef = useRef(null);

//   const handleScroll = () => {
//     const containerTop = containerRef.current.getBoundingClientRect().top;
//     if (containerTop < window.innerHeight / 2 && !hasScrolled) {
//       setHasScrolled(true);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [hasScrolled]);

//   return (
//     <div ref={containerRef} className="relative h-[47vh] bg-[#272626] text-white">
//       <div
//         className={`border-[1px] border-neutral-300 absolute top-[50%] left-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out w-[90%] h-[300px] p-6 bg-transparent rounded-full flex items-center justify-between ${
//           hasScrolled ? "-translate-x-1/2" : "translate-x-[0%]"
//         }`}
//       >
//         {/* Image and Name */}
//         <div className="flex flex-col items-center w-2/3 pl-32">
//           <img
//             src={imageUrl} // Dynamically passed image URL
//             alt={name}
//             className="rounded-full w-56 h-56 object-cover"
//           />
//           <h3 className="text-3xl font-mono mt-4 tracking-tighter text-[#eaeaea]">
//             {name}
//           </h3>
//         </div>

//         {/* Text */}
//         <p className="text-[#d4d4d4] text-left text-lg leading-7 w-2/3 pr-44 font-mono mt-2 tracking-tighter">
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProcessApproach;


// import React, { useEffect, useRef, useState } from "react";

// const NewProcessApproach = ({ items }) => {
//   const containerRefs = useRef([]);

//   const [scrolledStates, setScrolledStates] = useState(
//     Array(items.length).fill(false)
//   );

//   const handleScroll = () => {
//     const updatedStates = scrolledStates.map((state, index) => {
//       const containerTop =
//         containerRefs.current[index]?.getBoundingClientRect().top;
//       return containerTop < window.innerHeight / 2 ? true : state;
//     });
//     setScrolledStates(updatedStates);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [scrolledStates]);

//   return (
//     <div className="relative bg-[#272626] text-white ">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           ref={(el) => (containerRefs.current[index] = el)}
//           className={`border-2 border-neutral-300 relative top-1/2 transform -translate-y-1/2 transition-transform duration-700 ease-in-out w-[90%] h-[290px] p-6 mb-10 mx-auto bg-transparent rounded-full flex items-center justify-between ${
//             scrolledStates[index] ? "-translate-x-1/8" : "translate-x-[50%]"
//           }`}
//         >
//           {/* Image and Name */}
//           <div className="flex flex-col items-center w-2/3 pl-32">
//             <img
//               src={item.imageUrl} // Dynamically passed image URL
//               alt={item.name}
//               className="rounded-full w-56 h-56 object-cover"
//             />
//             <h3 className="text-3xl font-mono mt-4 tracking-tighter text-[#eaeaea]">
//               {item.name}
//             </h3>
//           </div>

//           {/* Text */}
//           <p className="text-[#d4d4d4] text-left text-lg leading-7 w-2/3 pr-44 font-mono mt-2 tracking-tighter">
//             {item.text}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewProcessApproach;




import React, { useEffect, useRef, useState } from "react";

const NewProcessApproach = ({ items }) => {
  const containerRefs = useRef([]);

  const [scrolledStates, setScrolledStates] = useState(
    Array(items.length).fill(false)
  );

  const handleScroll = () => {
    const updatedStates = scrolledStates.map((state, index) => {
      const containerTop =
        containerRefs.current[index]?.getBoundingClientRect().top;
      return containerTop < window.innerHeight / 2 ? true : state;
    });
    setScrolledStates(updatedStates);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledStates]);

  return (
    <div className="relative bg-[#e8e2d4] text-[#272626] min-h-screen pt-20 pb-20">
      {/* Title */}

      <h2 className="text-[#272626] text-5xl font-bold text-center tracking-tighter mt-20 mb-40">
        Our Doctors
      </h2>

      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (containerRefs.current[index] = el)}
          className={` relative transform transition-transform duration-700 ease-in-out w-[80%] h-[290px] p-6 mb-10 mx-auto bg-transparent rounded-full flex items-center justify-between ${
            scrolledStates[index] ? "-translate-x-1/8" : "translate-x-[50%]"
          }`}
        >
          {/* Image and Name */}
          <div className="flex flex-col items-center w-2/3 pl-32">
            <img
              src={item.imageUrl} // Dynamically passed image URL
              alt={item.name}
              className="rounded-3xl w-52 h-52 object-cover"
            />
            <h3 className="text-4xl font-bold mt-1 tracking-tighter text-[#422f40]">
              {item.name}
            </h3>
          </div>

          {/* Text */}
          <p className="text-[#422f40] text-left text-xl leading-7 w-2/3 pr-44 font-mono mt-1 tracking-tighter">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NewProcessApproach;
