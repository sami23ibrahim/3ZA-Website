import './App.css';
import React, { useState, useEffect } from "react";
import Logo from './Components/Logo.js';
import Navbar from './Components/Navbar.js';
import FullScreenVideo from './Components/FullScreenVideo.js';
import DoctorsSection from './Components/DoctorsSection.js';
import HalfScreenVideo from './Components/HalfScreenVideo.js';
import ServicesCards from './Components/ServicesCards.js';
import StickyServices from './Components/StickyServices.js';
import ScrollAnimationComponent from './Components/ScrollAnimationComponent.js';
import Footer from './Components/Footer.js';
import ServicesCardsMobile from './Components/ServicesCardsMobile.js';
import StickyServicesMobile from './Components/StickyServicesMobile.js';

import Testfooter from './Components/Testfooter.js';
import Testhalfvideo from './Components/Testhalfvideo.js';
import NewProcessApproach from './Components/NewProcessApproach.js';
import NewFullScreenVideo from './Components/NewFullScreenVideo.js';
import Delete from './Components/Delete.js';
 import NewGridHoverEffect from './Components/NewGridHoverEffect.js';
import VideoLogo from './Components/VideoLogo.js';
import NewStickySections from './Components/NewStickySections.js';
import ScrollCards from './Components/ScrollCards.js';
 import NewStickyServicesMobile from './Components/NewStickyServicesMobile.js';
 import NewDoctorsSection from './Components/NewDoctorsSection.js';
 import NewServicesCardsMobile from './Components/NewServicesCardsMobile.js';
 import NewLogo from './Components/NewLogo.js';
 import NewScrollAnimationComponent from './Components/NewScrollAnimationComponent.js';
 import OurPhilosophy from './Components/OurPhilosophy.js';
 import LanguageSwitcher from "./Components/LanguageSwitcher";
 import NewFullScreenVideo2 from './Components/NewFullScreenVideo2.js';
 import NewGridHoverEffect2 from './Components/NewGridHoverEffect2.js';
 import NewServicesCardsMobile2 from './Components/NewServicesCardsMobile2.js';
 import NewStickyServices2 from './Components/NewStickyServices2.js';

 



// function App() {


//   const [isMobile, setIsMobile] = useState(
//     window.innerWidth <= 555 || window.innerHeight <= 500
//   );

//   const [isMobileStickyServices, setIsMobileStickyServices] = useState(
//     window.innerWidth <= 767 && window.innerHeight <= 767
//   );

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 555 || window.innerHeight <= 500);
//       setIsMobileStickyServices(window.innerWidth <= 767 || window.innerHeight <= 767);

//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);




// return (

//   <div className="relative z-0">   <Navbar className="navbar" />

//   <div className="logo">
//        <Logo logoSrc="/Assets/Logo-white.png" altText="Company Logo" />
//        {/* <Logo logoSrc="/Assets/Logo2.png" altText="Company Logo" /> */}
//   </div>
//  {/* Landing Page Section */}
//  <div id="landing-page">
//    <FullScreenVideo 
//        videoSrc="/Assets/docs.mp4"
//        mobileVideoSrc="/Assets/vertical-intro.mp4" 
//   posterImage="https://via.placeholder.com/1920x1080"  
//   className="fullscreen-video" 
// />
// </div>
//  <LanguageSwitcher /> {/* Add language switcher here */}

//  <div id="services">
//        {isMobile ? <ServicesCardsMobile /> : <ServicesCards />}
//      </div>
//      <div>
//        {isMobileStickyServices ? <StickyServicesMobile /> : <StickyServices />}
//      </div>
// <div id="team" className="Newsticky-sections">

//      <DoctorsSection />
// </div>
//      <ScrollAnimationComponent/>
  
  
//      <HalfScreenVideo/>
  
   
//      <div className="footer">  <Footer/> </div>



//  </div>
//   );
//  }

// export default App;


//================================================================================================================================================


 



// function App() {
//   const [isMobile, setIsMobile] = useState(
//     window.innerWidth <= 555 || window.innerHeight <= 500
//   );

//   const [isMobileStickyServices, setIsMobileStickyServices] = useState(
//     window.innerWidth <= 767 && window.innerHeight <= 767
//   );

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 555 || window.innerHeight <= 500);
//       setIsMobileStickyServices(window.innerWidth <= 767 || window.innerHeight <= 767);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div>
//       <Navbar className="navbar" />

//       <div className="logo">
//         {/* <Logo logoSrc="/Assets/Logo-white.png" altText="Company Logo" /> */}
//        <Logo logoSrc="/Assets/Logo2.png" altText="Company Logo" />

//       </div>

//       {/* Landing Page Section */}
//       <div id="landing-page">
//         <NewFullScreenVideo
//           videoSrc="/Assets/docs.mp4"
//           mobileVideoSrc="/Assets/vertical-intro.mp4"
//           posterImage="https://via.placeholder.com/1920x1080"
//           className="fullscreen-video"
//         />
//       </div>

//       <LanguageSwitcher />

//       {/* Services Section */}
//       <div id="services">
//         {isMobile ? <NewServicesCardsMobile /> : <NewGridHoverEffect />}
//       </div>


//       <div className="Newsticky-sections">
//         {isMobileStickyServices ? <NewStickyServicesMobile /> : <NewStickySections />}
//       </div>
    

//       <ScrollAnimationComponent />
//         {/* Team Section */}
//         <div id="team" className="Newsticky-sections">
//         <NewDoctorsSection />
//         </div>
//       <OurPhilosophy />

//       {/* Footer Section */}
//       <div id="footer" className="footer">
//         <VideoLogo />
//       </div>
//     </div>
//   );
// }

// export default App;




//================================================================================================================================================







function App() {


  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 555 || window.innerHeight <= 500
  );

  const [isMobileStickyServices, setIsMobileStickyServices] = useState(
    window.innerWidth <= 767 && window.innerHeight <= 767
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 555 || window.innerHeight <= 500);
      setIsMobileStickyServices(window.innerWidth <= 767 || window.innerHeight <= 767);

    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);




return (

  <div className="relative z-0">   <Navbar className="navbar" />

  <div className="logo">
       {/* <Logo logoSrc="/Assets/Logo-white.png" altText="Company Logo" /> */}
       <Logo logoSrc="/Assets/smile2.png" altText="Company Logo" />
  </div>
         {/* Landing Page Section */}
<div id="landing-page">
         <NewFullScreenVideo2
           videoSrc="/docs.mp4"
           mobileVideoSrc="/vertical-intro.mp4"
           posterImage="https://via.placeholder.com/1920x1080"
           className="fullscreen-video"
         />
       </div>
 <LanguageSwitcher /> {/* Add language switcher here */}

   <div id="services">
        {isMobile ? <NewServicesCardsMobile2 /> : <ServicesCards />}
      </div>
     <div>
       {isMobileStickyServices ? <StickyServicesMobile /> : <NewStickyServices2 />}
     </div>
          <ScrollAnimationComponent />

 {/* Team Section */}
          <div id="team" className="Newsticky-sections">
         <NewDoctorsSection />
         </div>
       <OurPhilosophy />

       {/* Footer Section */}
       <div id="footer" className="footer">
         <VideoLogo />
       </div>
     </div>
  );
}

export default App;

