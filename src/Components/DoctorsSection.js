// import React, { useEffect, useRef } from "react";
// import { motion, useAnimation } from "framer-motion";

// const doctors = [
//   {
//     name: "Fabian Badour",
//     image: "./Assets/fab.png",
//     description:
//       "Fabian behandelt innerhalb der Chirurgie, Implantologie, Zahnersatz (Prothetik) und Frontzahnästhetik. Seine Behandlung erstreckt sich auch auf die von Angstpatienten. Fabian steht für Beratungen in verschiedenen Sprachen zur Verfügung, darunter Arabisch, Englisch und Deutsch, um eine ganzheitliche Versorgung seiner Patienten sicherzustellen.",
//   },
//   {
//     name: "Hakam El Daghma",
//     image: "./Assets/hak.png",
//     description:
//       "Hakam hat Expertise in verschiedenen Bereichen der Zahnmedizin. Seine Spezialisierung umfasst die mikroskopische Wurzelkanalbehandlung, Zahnersatz (Prothetik) und derzeit Ästhetische Zahnmedizin für Veneers und Frontzahnästhetik. Hakam bietet einfühlsame Betreuung, besonders für Angstpatienten, und steht für Beratungen in Deutsch, Englisch und Arabisch zur Verfügung.",
//   },
//   {
//     name: "Prabh Singh Mahal",
//     image: "./Assets/prab.png",
//     description:
//       "Prabh hat sich auf Chirurgie, Implantologie, Zahnersatz (Prothetik) und Frontzahnästhetik spezialisiert. Mit seiner patientennahen Betreuung widmet er sich auch der Behandlung von Angstpatienten. Prabjit bietet Beratungen in verschiedenen Sprachen an, darunter Punjabi, Hindi, Urdu, Englisch und Deutsch, um eine umfassende Versorgung seiner Patienten zu gewährleisten.",
//   },
// ];



// const DoctorsSection = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           controls.start({ opacity: 1, y: 0 });
//         }
//       },
//       { threshold: 0.3 }
//     );
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//     return () => observer.disconnect();
//   }, [controls]);

//   return (
//     <section ref={ref} className="bg-[#3F2D40] text-[#e8e2d4] py-12 px-6">
//       <div className="max-w-full  text-start ml-14">
//         <h2 className="text-5xl font-bold items-start mt-7 mb-0 ">Unsere Ärzte</h2>
//         <p className="text-lgtext-[#e8e2d4] mt-2">Testimonials and Reviews</p>
//       </div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={controls}
//         transition={{ duration: 0.5 }}
//         className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12"
//       >
//         {doctors.map((doctor, index) => (
//           <div key={index} className="flex flex-col items-start w-full max-w-xs mx-auto">
//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               className="w-60 h-72 object-cover mt-0 mb-4"
//             />
//             <div className="mt-4 text-left">
//               <p className="text-[#e8e2d4] text-lg mt-2 ">{doctor.description}</p>
//               <h3 className="text-[#e8e2d4] font-semibold text-2xl mt-8">{doctor.name}</h3>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default DoctorsSection;




// import React, { useEffect, useRef } from "react";
// import { motion, useAnimation } from "framer-motion";

// const doctors = [
//   {
//     name: "Fabian Badour",
//     image: "./Assets/fab.png",
//     description:
//       "Fabian behandelt innerhalb der Chirurgie, Implantologie, Zahnersatz (Prothetik) und Frontzahnästhetik. Seine Behandlung erstreckt sich auch auf die von Angstpatienten. Fabian steht für Beratungen in verschiedenen Sprachen zur Verfügung, darunter Arabisch, Englisch und Deutsch, um eine ganzheitliche Versorgung seiner Patienten sicherzustellen.",
//   },
//   {
//     name: "Hakam El Daghma",
//     image: "./Assets/hak.png",
//     description:
//       "Hakam hat Expertise in verschiedenen Bereichen der Zahnmedizin. Seine Spezialisierung umfasst die mikroskopische Wurzelkanalbehandlung, Zahnersatz (Prothetik) und derzeit Ästhetische Zahnmedizin für Veneers und Frontzahnästhetik. Hakam bietet einfühlsame Betreuung, besonders für Angstpatienten, und steht für Beratungen in Deutsch, Englisch und Arabisch zur Verfügung.",
//   },
//   {
//     name: "Prabh Singh Mahal",
//     image: "./Assets/prab.png",
//     description:
//       "Prabh hat sich auf Chirurgie, Implantologie, Zahnersatz (Prothetik) und Frontzahnästhetik spezialisiert. Mit seiner patientennahen Betreuung widmet er sich auch der Behandlung von Angstpatienten. Prabjit bietet Beratungen in verschiedenen Sprachen an, darunter Punjabi, Hindi, Urdu, Englisch und Deutsch, um eine umfassende Versorgung seiner Patienten zu gewährleisten.",
//   },
// ];

// const DoctorsSection = () => {
//   const controls = useAnimation();
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           controls.start({ opacity: 1, y: 0 });
//         }
//       },
//       { threshold: 0.3 }
//     );
//     if (ref.current) {
//       observer.observe(ref.current);
//     }
//     return () => observer.disconnect();
//   }, [controls]);

//   return (
//     <section ref={ref} className="bg-[#422f40] text-[#e8e2d4] py-12 px-6">
//       <div className="max-w-full text-start ml-14">
//         <h2 className="text-5xl font-bold items-start mt-7 mb-0">Unsere Ärzte</h2>
//         <p className="text-lg text-[#e8e2d4] mt-2">Testimonials and Reviews</p>
//       </div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={controls}
//         transition={{ duration: 0.5 }}
//         className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
//       >
//         {doctors.map((doctor, index) => (
//           <div key={index} className="flex flex-col items-start w-full max-w-sm mx-auto h-full">
//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               className="w-72 h-72 object-cover mt-0 mb-4"
//             />
//             <div className="text-left flex-1">
//               <p className="text-[#e8e2d4] text-lg leading-tight mt-2">{doctor.description}</p>
//             </div>
//             <div className="text-left w-full flex items-end justify-start min-h-[80px]">
//               <h3 className="text-[#e8e2d4] font-semibold text-2xl">{doctor.name}</h3>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default DoctorsSection;




import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook
import { motion, useAnimation } from "framer-motion";

const DoctorsSection = () => {
  const { t } = useTranslation(); // Get translation function
  const controls = useAnimation();
  const ref = useRef(null);

  const doctors = [
    {
      name: t("doctors.list.fabian.name"),
      image: "./Assets/fab.png",
      description: t("doctors.list.fabian.description"),
    },
    {
      name: t("doctors.list.hakam.name"),
      image: "./Assets/hak.png",
      description: t("doctors.list.hakam.description"),
    },
    {
      name: t("doctors.list.prabh.name"),
      image: "./Assets/prab.png",
      description: t("doctors.list.prabh.description"),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section ref={ref} className="bg-[#422f40] text-[#e8e2d4] py-12 px-6">
      <div className="max-w-full text-start ml-14">
        <h2 className="text-5xl font-bold items-start mt-7 mb-0">{t("doctors.title")}</h2>
        <p className="text-lg text-[#e8e2d4] mt-2">{t("doctors.subtitle")}</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
      >
        {doctors.map((doctor, index) => (
          <div key={index} className="flex flex-col items-start w-full max-w-sm mx-auto h-full">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-72 h-72 object-cover mt-0 mb-4"
            />
            <div className="text-left flex-1">
              <p className="text-[#e8e2d4] text-lg leading-tight mt-2">{doctor.description}</p>
            </div>
            <div className="text-left w-full flex items-end justify-start min-h-[80px]">
              <h3 className="text-[#e8e2d4] font-semibold text-2xl">{doctor.name}</h3>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default DoctorsSection;
