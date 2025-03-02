// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="relative bg-[f8f8f6] text-white">
//       {/* Wrapper for the image and overlay */}
//       <div className="relative w-full h-[300px]">
//         {/* Image */}
//         <img
//           src="../Assets/tree.png" // Replace with your actual image path
//           alt="Footer Top"
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         />
//         {/* Overlay Color */}
//         <div className="absolute top-0 left-0 w-full h-full bg-[#f8f8f6] opacity-0 z-10"></div>
//       </div>

//       {/* Footer Content */}
//       <div className="py-10 z-20 relative text-[#422f40]">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
//           {/* Clinic Hours Section */}
//           <div className="mb-6 md:mb-0">
//             <h2 className="text-xl font-bold mb-4 text-[#422f40]">Clinic Hours</h2>
//             <p>Montag, Dienstag, Donnerstag: <br />08:30–20:00 Uhr</p>
//             <p>Mittwoch: 08:30–18:30 Uhr</p>
//             <p>Freitag: 09:00–15:00 Uhr</p>
//           </div>

//           {/* Clinic Contact Section */}
//           <div className="mb-6 md:mb-0">
//             <h2 className="text-xl font-bold mb-4 text-[#422f40]">Our Clinic</h2>
//             <p>Skalitzer Straße 137,<br />10999 Berlin</p>
//             <p>
//               <a href="tel:03069005528" className="underline">030 69005528</a>
//             </p>
//             <p>
//               <a href="mailto:team@diedreizahnaerzte.berlin" className="underline">team@diedreizahnaerzte.berlin</a>
//             </p>
//           </div>

//           {/* Social Media Section */}
//           <div className="flex space-x-4">
//             <a href="#" className="text-black hover:text-gray-300">
//               <i className="fab fa-facebook-f text-2xl"></i>
//             </a>
//             <a href="#" className="text-black hover:text-gray-300">
//               <i className="fab fa-twitter text-2xl"></i>
//             </a>
//             <a href="#" className="text-black hover:text-gray-300">
//               <i className="fab fa-instagram text-2xl"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const StyledFooter = () => {
//   const footerTitleRef = useRef(null); // Reference for the footer title

//   useEffect(() => {
//     // Animate the footer title
//     if (footerTitleRef.current) {
//       gsap.fromTo(
//         footerTitleRef.current,
//         { scale: 1 },
//         {
//           scale: 1.3,
//           duration: 2,
//           scrollTrigger: {
//             trigger: footerTitleRef.current,
//             start: "top 80%",
//             end: "top 40%",
//             scrub: true,
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <div className="w-screen overflow-x-hidden">
//       {/* Footer Title */}
//       <h2
//         ref={footerTitleRef}
//         className="text-center text-3xl font-bold mb-12 text-customPink"
//         style={{ filter: "drop-shadow(1px 1px 0.7px #909497)", // Adjusted shadow offset
//         }}
//       >
//         Contact Us
//       </h2>

//       {/* Footer Component */}
//       <footer
//         className="relative bg-[#f496bf] text-white text-center mb-12 ml-[6px] mr-[20px]"
//         style={{
//           borderTopLeftRadius: "25px",
//           borderTopRightRadius: "25px",
//           borderBottomLeftRadius: "25px",
//           borderBottomRightRadius: "25px",
//           padding: "4rem 2rem 6rem",
//         }}
//       >
//         {/* Main Content */}
//         <div className="max-w-screen-lg mx-auto">
//           <h2 className="text-2xl md:text-4xl font-bold text-[#fdf9f4] mb-4">
//             Ready To put a Smile On Your Face?
//           </h2>
//           <div className="flex justify-center gap-4 mt-6">
//             <button className="bg-[#fdf9f4] text-customPink px-4 py-2 rounded-lg hover:bg-gray-200 transition">
//               Email Us
//             </button>
//             <button className="bg-[#fdf9f4] text-customPink px-4 py-2 rounded-lg hover:bg-gray-200 transition">
//               +49 (0)000 000 000
//             </button>
//           </div>
//         </div>

//         {/* Footer Links */}
//         <div className="mt-12 text-white text-ml">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div>
//               <h4 className="uppercase tracking-wider text-xs mb-2">( Content )</h4>
//               <ul>
//                 <li>BlaBlaBla</li>
//                 <li>BlaBlaBla</li>
//                 <li>BlaBlaBla</li>
//                 <li>BlaBlaBla</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="uppercase tracking-wider text-xs mb-2">( Content )</h4>
//               <ul>
//                 <li>BlaBlaBla</li>
//                 <li>BlaBlaBla</li>
//                 <li>BlaBlaBla</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="uppercase tracking-wider text-xs mb-2">( Connect )</h4>
//               <ul>
//                 <li>BlaBlaBla</li>
//                 <li>BlaBlaBla</li>
//                 <li>BlaBlaBla</li>
//                 <li>BlaBlaBla</li>
//               </ul>
//             </div>
//           </div>
//           <p className="mt-6">&copy; DIE DREI ZAHNÄRZTE 2025 | Terms & Privacy</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default StyledFooter;







// import React from "react";

// const Footer = () => {
//   return (
//     <section className="w-screen h-screen relative">
//       {/* Background Image covering full screen */}
//       <div className="absolute top-0 left-0 w-full h-1/2">
//         <img
//           src="./Assets/footer-img.png"
//           alt="Clinic Procedure"
//           className="w-full h-full object-cover"
//         />
//       </div>
      
//       {/* Bottom Content Covering Half of the Screen */}#
//       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#422f40] text-white py-12 px-16 flex justify-between items-start  ">
//         {/* Clinic Hours */}
//         <div className="w-1/3 text-[#e8e2d4] mt-10%">
//           <h2 className="text-4xl font-bold mt-10% ">Clinic hours</h2>
//           <p className="text-xl font-semibold mt-6">Montag, Dienstag, Donnerstag: 08:30-20:00 Uhr</p>
//           <p className="text-xl font-semibold mt-6">Mittwoch: 08:30-18:30 Uhr</p>
//           <p className="text-xl font-semibold mt-6">Freitag: 09:00-15:00 Uhr</p>
//         </div>

//         {/* Our Clinic Info */}
//         <div className="w-1/3 text-center text-[#e8e2d4] mt-10%">
//           <h2 className="text-4xl font-bold mt-10%">Our Clinic</h2>
//           <p className="text-xl font-semibold mt-6">Skalitzer Straße 137, 10999 Berlin</p>
//           <p className="text-xl font-semibold mt-6">030 69005528</p>
//           <p className="text-xl  underline cursor-pointer mt-6 text-[#e8e2d4]">team@diedreizahnaerzte.berlin</p>
//         </div>

//         {/* Social Media & QR Code */}
//         <div className="w-1/3 text-right flex flex-col items-end">
         
//           {/* Barcode Image */}
//           <img
//             src="./Assets/code.jpg"
//             alt="QR Code"
//             className="w-1/2 h-1/2 mt-10%"
//           />
//            {/* Social Media Icons */}
//            {/* <div className="flex space-x-4 mb-10">
//             <img src="./Assets/facebook-icon.png" alt="Facebook" className="w-6 h-6 mt-10" />
//             <img src="./Assets/twitter-icon.png" alt="Twitter" className="w-6 h-6 mt-10" />
//             <img src="./Assets/instagram-icon.png" alt="Instagram" className="w-6 h-6 mt-10" />
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;









// import React from "react";

// const Footer = () => {
//   return (
//     <section className="w-screen h-[80vh] relative">
//       {/* Background Image covering full screen */}
//       <div className="absolute top-0 left-0 w-full h-1/4">
//         <img
//           src="./Assets/footer-img.png"
//           alt="Clinic Procedure"
//           className="w-full h-full object-cover"
//         />
//       </div>
      
//       {/* Bottom Content  */}
//       <div className="absolute bottom-0 left-0 w-full h-3/4 bg-[#422f40] text-white py-2 px-16 flex flex-col justify-center items-center">
        
//         <div className="w-full max-w-screen-lg flex flex-col sm:flex-row justify-between items-start gap-y-6">
          
//           {/* Clinic Hours */}
//           <div className="w-full md:w-1/3 text-[#e8e2d4] text-center md:text-left">
//             <h2 className="text-4xl font-bold">Clinic hours</h2>
//             <p className="text-xl font-semibold mt-4">Montag, Dienstag, Donnerstag: 08:30-20:00 Uhr</p>
//             <p className="text-xl font-semibold mt-4">Mittwoch: 08:30-18:30 Uhr</p>
//             <p className="text-xl font-semibold mt-4">Freitag: 09:00-15:00 Uhr</p>
//           </div>

//           {/* Our Clinic Info */}
//           <div className="w-full md:w-1/3 text-center text-[#e8e2d4]">
//             <h2 className="text-4xl font-bold">Our Clinic</h2>
//             <p className="text-xl font-semibold mt-4">Skalitzer Straße 137, 10999 Berlin</p>
//             <p className="text-xl font-semibold mt-4">030 69005528</p>
//             <p className="text-xl underline cursor-pointer mt-4 text-[#e8e2d4]">team@diedreizahnaerzte.berlin</p>
//           </div>

//           {/* Social Media & QR Code */}
//           <div className="w-full md:w-1/3 text-center md:text-right flex justify-center md:justify-end">
//             <img
//               src="./Assets/code.jpg"
//               alt="QR Code"
//               className="w-[200px] h-[200px]"
//             />
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;




// import React, { useState, useEffect } from "react";

// const Footer = () => {
//   const [isMobile, setIsMobile] = useState(
//     window.innerWidth < 500 || window.innerHeight < 500
//   );

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 500 || window.innerHeight < 500);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className={`w-screen ${isMobile ? "h-[150vh]" : "h-[80vh]"} relative`}>
//       {/* Background Image */}
//       <div className={`absolute top-0 left-0 w-full ${isMobile ? "h-1/4" : "h-1/2"}`}>
//         <img
//           src="./Assets/footer-img.png"
//           alt="Clinic Procedure"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Bottom Content */}
//       <div
//         className={`absolute bottom-0 left-0 w-full ${isMobile ? "h-3/4" : "h-1/2"}
//           bg-[#422f40] text-white py-6 px-8 flex flex-col justify-center items-center`}
//       >
//         <div className="w-full max-w-screen-lg flex flex-col sm:flex-row justify-between items-start gap-y-6">
//           {/* Clinic Hours */}
//           <div className="w-full md:w-1/3 text-[#e8e2d4] text-center md:text-left">
//             <h2 className="text-4xl font-bold">Clinic hours</h2>
//             <p className="text-xl font-semibold mt-4">Montag, Dienstag, Donnerstag: 08:30-20:00 Uhr</p>
//             <p className="text-xl font-semibold mt-4">Mittwoch: 08:30-18:30 Uhr</p>
//             <p className="text-xl font-semibold mt-4">Freitag: 09:00-15:00 Uhr</p>
//           </div>

//           {/* Our Clinic Info */}
//           <div className="w-full md:w-1/3 text-center text-[#e8e2d4]">
//             <h2 className="text-4xl font-bold">Our Clinic</h2>
//             <p className="text-xl font-semibold mt-4">Skalitzer Straße 137, 10999 Berlin</p>
//             <p className="text-xl font-semibold mt-4">030 69005528</p>
//             <p className="text-xl underline cursor-pointer mt-4 text-[#e8e2d4]">team@diedreizahnaerzte.berlin</p>
//           </div>

//           {/* Social Media & QR Code */}
//           <div className="w-full md:w-1/3 text-center md:text-right flex justify-center md:justify-end">
//             <img src="./Assets/code.jpg" alt="QR Code" className="w-[200px] h-[200px]" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;



import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const Footer = () => {
  const { t } = useTranslation(); // Get translation function
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 500 || window.innerHeight < 500
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500 || window.innerHeight < 500);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`w-screen ${isMobile ? "h-[150vh]" : "h-[80vh]"} relative`}>
      {/* Background Image */}
      <div className={`absolute top-0 left-0 w-full ${isMobile ? "h-1/4" : "h-1/2"}`}>
        <img
          src="./Assets/footer-img.png"
          alt={t("footer.clinic_image_alt")}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Content */}
      <div
        className={`absolute bottom-0 left-0 w-full ${isMobile ? "h-3/4" : "h-1/2"}
          bg-[#422f40] text-white py-6 px-8 flex flex-col justify-center items-center`}
      >
        <div className="w-full max-w-screen-lg flex flex-col sm:flex-row justify-between items-start gap-y-6">
          {/* Clinic Hours */}
          <div className="w-full md:w-1/3 text-[#e8e2d4] text-center md:text-left">
            <h2 className="text-4xl font-bold">{t("footer.clinic_hours.title")}</h2>
            <p className="text-xl font-semibold mt-4">{t("footer.clinic_hours.times.monday")}</p>
            <p className="text-xl font-semibold mt-4">{t("footer.clinic_hours.times.wednesday")}</p>
            <p className="text-xl font-semibold mt-4">{t("footer.clinic_hours.times.friday")}</p>
          </div>

          {/* Our Clinic Info */}
          <div className="w-full md:w-1/3 text-center text-[#e8e2d4]">
            <h2 className="text-4xl font-bold">{t("footer.our_clinic.title")}</h2>
            <p className="text-xl font-semibold mt-4">{t("footer.our_clinic.info.address")}</p>
            <p className="text-xl font-semibold mt-4">{t("footer.our_clinic.info.phone")}</p>
            <p className="text-xl underline cursor-pointer mt-4 text-[#e8e2d4]">{t("footer.our_clinic.info.email")}</p>
          </div>

          {/* Social Media & QR Code */}
          <div className="w-full md:w-1/3 text-center md:text-right flex justify-center md:justify-end">
            <img src="./Assets/code.jpg" alt={t("footer.qr_code_alt")} className="w-[200px] h-[200px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
