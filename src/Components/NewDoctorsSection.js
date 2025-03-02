


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

// const NewDoctorsSection = () => {
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
//     <section ref={ref} className="bg-[#e8e2d4] text-[#422f40] py-12 px-6">
//       <div className="max-w-full text-start ml-14">
//         <h2 className="text-5xl font-bold items-start mt-7 mb-0">Unsere Ärzte</h2>
//         <p className="text-lg text-[#422f40] mt-2">Testimonials and Reviews</p>
//       </div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={controls}
//         transition={{ duration: 0.5 }}
//         className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
//       >
//         {doctors.map((doctor, index) => (
//           <div key={index} className="flex flex-col items-start w-full max-w-sm mx-auto h-full bg-gray-500 opacity-30">
//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               className="rounded-3xl w-52 h-52  object-cover mt-0 mb-4"
//             />
//                <div className="text-left w-full flex items-end justify-start min-h-[80px]">
//               <h3 className="text-4xl font-bold mt-1 tracking-tighter text-[#422f40]">{doctor.name}</h3>
//             </div>
//             <div className="text-left flex-1">
//               <p className="text-[#422f40] text-lg font-mono leading-tight mt-2">{doctor.description}</p>
//             </div>
         
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default NewDoctorsSection;








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

// const NewDoctorsSection = () => {
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
//     <section ref={ref} className="bg-[#e8e2d4] text-[#422f40] py-12 px-6">
//       <div className="max-w-full text-start ml-2">
//       <h2 className="text-[#422f40] text-7xl font-bold text-center tracking-tighter pb-8">
//         Our Doctors
//         </h2>      </div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={controls}
//         transition={{ duration: 2.1 }}
//         className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
//       >
//         {doctors.map((doctor, index) => (
//           <div key={index} className="flex flex-col items-center w-full max-w-sm mx-auto h-full ">
//           <img
//   src={doctor.image}
//   alt={doctor.name}
//   className="rounded-3xl w-52 h-52 object-cover mt-0 mb-0"
//   style={{ boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.5)" }}
// />

//                <div className="text-left w-full flex items-end justify-center min-h-[80px]">
//               <h3 className="text-4xl font-bold mt-0 tracking-tighter text-[#422f40]">{doctor.name}</h3>
//             </div>
//             <div className="text-left flex-1">
//               <p className="text-[#422f40] text-lg font-base leading-tight mt-2">{doctor.description}</p>
//             </div>
         
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default NewDoctorsSection;




import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import translation hook

const NewDoctorsSection = () => {
  const { t, i18n } = useTranslation(); // Get translation function
  const controls = useAnimation();
  const ref = useRef(null);

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

  const doctors = [
    {
      id: "fabian",
      image: "./Assets/fab.png",
    },
    {
      id: "hakam",
      image: "./Assets/hak.png",
    },
    {
      id: "prabh",
      image: "./Assets/prab.png",
    },
  ];

  return (
    <section ref={ref} className="bg-[#e8e2d4] text-[#422f40] py-12 px-6">
      <div className="max-w-full text-start ml-2">
        <h2 className="text-[#422f40] text-7xl font-bold text-center tracking-tighter pb-8">
          {t("doctors.title")}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 2.1 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
      >
        {doctors.map((doctor) => (
          <div key={doctor.id} className="flex flex-col items-center w-full max-w-sm mx-auto h-full">
            <img
              src={doctor.image}
              alt={t(`new_doctors.items.${doctor.id}.name`)}
              className="rounded-3xl w-52 h-52 object-cover mt-0 mb-0"
              style={{ boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.5)" }}
            />

            <div className="text-left w-full flex items-end justify-center min-h-[80px]">
              <h3
                className="text-4xl font-bold mt-0 tracking-tighter text-[#422f40]"
                style={{
                  fontSize: i18n.language === "de" ? "1.7rem" : "2rem", // Adjust German text size
                }}
              >
                {t(`new_doctors.items.${doctor.id}.name`)}
              </h3>
            </div>
            <div className="text-left flex-1">
              <p className="text-[#422f40] text-lg font-base leading-tight mt-2">
                {t(`new_doctors.items.${doctor.id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default NewDoctorsSection;
