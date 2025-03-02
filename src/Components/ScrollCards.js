
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const ScrollCards = () => {
//   const rowRef = useRef();
//   const reverseRowRef = useRef();
//   const titleRef = useRef(); // Reference for the title

//   useEffect(() => {
//     // Smooth horizontal scrolling for the first row (left movement)
//     gsap.to(rowRef.current, {
//       x: "-50%", // Scroll left smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: rowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });

//     // Smooth horizontal scrolling for the reverse row (right movement)
//     gsap.to(reverseRowRef.current, {
//       x: "50%", // Scroll right smoothly
//       ease: "linear", // Consistent speed
//       scrollTrigger: {
//         trigger: reverseRowRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: true, // Tied to scroll position
//       },
//     });

//     // Scale animation for the title
//     gsap.fromTo(
//       titleRef.current,
//       { scale: 1 }, // Initial scale
//       {
//         scale: 1.3, // Scaled-up size
//         duration: 2,
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 80%",
//           end: "top 40%",
//           scrub: true, // Tied to scroll position
//         },
//       }
//     );
//   }, []);

//   const cardSizes = [
//     { width: "340px", height: "139px" }, // Small
//     { width: "380px", height: "149px" }, // Medium
//     { width: "320px", height: "159px" }, // Large
//   ];

//   const firstRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const secondRowImages = [
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//     "/Assets/rev.png",
//   ];

//   const generateCards = (images, rowId) => {
//     return Array.from({ length: 18 }).map((_, index) => {
//       const { width, height } = cardSizes[index % cardSizes.length];
//       const imageUrl = images[index % images.length]; // Cycle through images

//       return (
//         <div
//           key={`${rowId}-${index}`}
//           className="rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold"
//           style={{
//             width,
//             height,
//             backgroundImage: `url(${imageUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundColor: "#f8f8f6",
//             boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
//             flexShrink: 0,
//             zIndex: 1, // Ensure the cards stay on top
//             transform: "translateY(-2px)", // Slightly elevate the cards
//           }}
//         ></div>
//       );
//     });
//   };

//   return (
//     <div
//       className="bg-[#f8f8f6] py-16 relative mb-28"
//       style={{
//         paddingBottom: "20px", // Prevent clipping
//         overflowX: "hidden", // Prevent horizontal scrolling
//         zIndex: 0, // Ensure it's beneath the logos of the next component
//       }}
//     >
//       {/* Title with scaling effect */}
//       <h2
//         ref={titleRef}
//         className="text-center text-[#272626] text-3xl font-mono mb-2 tracking-tighter"
//         style={{
//         }}
//       >
//        What our clients think of us
//       </h2>

//       <h6 className=" text-lg text-[#272626] mb-20 font-mono mt-2 tracking-tighter text-center">
//         We’re honest about our skills and abilities — and we’re delighted that our clients agree.
//         </h6>



//       {/* First Row */}
//       <div
//         style={{
//           overflow: "visible", // Ensure shadows are not clipped
//           marginBottom: "40px", // Add space for shadows
//         }}
//       >
//         <div
//           ref={rowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover left movement
//             display: "flex",
//           }}
//         >
//           {generateCards(firstRowImages, "row1")}
//         </div>
//       </div>

//       {/* Reverse Row */}
//       <div
//         style={{
//           overflow: "visible", // Ensure shadows are not clipped
//         }}
//       >
//         <div
//           ref={reverseRowRef}
//           className="flex gap-6"
//           style={{
//             width: "250%", // Increased width to cover right movement
//             display: "flex",
//             justifyContent: "flex-end", // Start from the right
//           }}
//         >
//           {generateCards(secondRowImages, "row2")}
//         </div>





// {/* Google Logo and Stars Section */}
// <div
//   className="flex flex-col items-center justify-center mt-10"
//   style={{
//     paddingBottom: "20px", // Additional space at the bottom
//     marginTop: "40px",
//   }}
// >
//   <img
//     src="/Assets/google.png"
//     alt="Google Logo"
//     className="w-44 h-16 mb-4"
//     style={{
//       filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4))", // Subtle shadow
//     }}
//   />
//   <div className="flex items-center ">
//       <img
//         src="/Assets/stars.png" // Replace with the path to your star icon
//         alt="Star"
//         className="w-24 h-24 mx-1"
//         style={{
//           filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4))", // Subtle shadow
//         }}
//       />
   
//   </div>
// </div>







//       </div>
//     </div>
//   );
// };

// export default ScrollCards;









import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollCards = () => {
  const rowRef = useRef();
  const reverseRowRef = useRef();
  const titleRef = useRef(); // Reference for the title

  const [bgColor, setBgColor] = useState("#f8f8f6"); // Initial background color

  useEffect(() => {
    // Background color transition logic
    const handleScroll = () => {
      const component = document.getElementById("scroll-cards");
      const rect = component.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the component is leaving the viewport
      if (rect.bottom < windowHeight -200) {
        setBgColor("#272626"); // Dark background color
      } else {
        setBgColor("#f8f8f6"); // Light background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Smooth horizontal scrolling for the first row (left movement)
    gsap.to(rowRef.current, {
      x: "-50%", // Scroll left smoothly
      ease: "linear", // Consistent speed
      scrollTrigger: {
        trigger: rowRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Tied to scroll position
      },
    });

    // Smooth horizontal scrolling for the reverse row (right movement)
    gsap.to(reverseRowRef.current, {
      x: "50%", // Scroll right smoothly
      ease: "linear", // Consistent speed
      scrollTrigger: {
        trigger: reverseRowRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Tied to scroll position
      },
    });

    // Scale animation for the title
    gsap.fromTo(
      titleRef.current,
      { scale: 1 }, // Initial scale
      {
        scale: 1.3, // Scaled-up size
        duration: 2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: true, // Tied to scroll position
        },
      }
    );
  }, []);

  const cardSizes = [
    { width: "340px", height: "139px" }, // Small
    { width: "380px", height: "149px" }, // Medium
    { width: "320px", height: "159px" }, // Large
  ];

  const firstRowImages = [
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
  ];

  const secondRowImages = [
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
    "/Assets/rev.png",
  ];

  const generateCards = (images, rowId) => {
    return Array.from({ length: 18 }).map((_, index) => {
      const { width, height } = cardSizes[index % cardSizes.length];
      const imageUrl = images[index % images.length]; // Cycle through images

      return (
        <div
          key={`${rowId}-${index}`}
          className="rounded-lg shadow-lg flex items-center justify-center text-lg font-semibold"
          style={{
            width,
            height,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#f8f8f6",
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
            flexShrink: 0,
            zIndex: 1, // Ensure the cards stay on top
            transform: "translateY(-2px)", // Slightly elevate the cards
          }}
        ></div>
      );
    });
  };

  return (
    <div
      id="scroll-cards"
      className="pt-16 relative mb-0 transition-colors"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1.2s ease",
        paddingBottom: "40px", // Prevent clipping
        overflowX: "hidden", // Prevent horizontal scrolling
        zIndex: 0, // Ensure it's beneath the logos of the next component
      }}
    >
      {/* Title with scaling effect */}
      <h2
        ref={titleRef}
        className="text-center text-[#272626] text-3xl font-mono mb-2 tracking-tighter"
      >
        What our clients think of us
      </h2>

      <h6 className=" text-lg text-[#272626] mb-20 font-mono mt-2 tracking-tighter text-center">
        We’re honest about our skills and abilities — and we’re delighted that
        our clients agree.
      </h6>

      {/* First Row */}
      <div
        style={{
          overflow: "visible", // Ensure shadows are not clipped
          marginBottom: "40px", // Add space for shadows
        }}
      >
        <div
          ref={rowRef}
          className="flex gap-6"
          style={{
            width: "250%", // Increased width to cover left movement
            display: "flex",
          }}
        >
          {generateCards(firstRowImages, "row1")}
        </div>
      </div>

      {/* Reverse Row */}
      <div
        style={{
          overflow: "visible", // Ensure shadows are not clipped
        }}
      >
        <div
          ref={reverseRowRef}
          className="flex gap-6"
          style={{
            width: "250%", // Increased width to cover right movement
            display: "flex",
            justifyContent: "flex-end", // Start from the right
          }}
        >
          {generateCards(secondRowImages, "row2")}
        </div>
      </div>

      {/* Google Logo and Stars Section */}
      <div
        className="flex flex-col items-center justify-center mt-10"
        style={{
          paddingBottom: "40px", // Additional space at the bottom
          paddingTop: "40px",
        }}
      >
        <img
          src="/Assets/google.png"
          alt="Google Logo"
          className="w-44 h-16 mb-4"
          style={{
            filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4))", // Subtle shadow
          }}
        />
        <div className="flex items-center ">
          <img
            src="/Assets/stars.png" // Replace with the path to your star icon
            alt="Star"
            className="w-24 h-24 mx-1"
            style={{
              filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4))", // Subtle shadow
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollCards;
