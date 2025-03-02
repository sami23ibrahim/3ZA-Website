// import React from 'react';


// export default function VideoLogo() {
//   return (
//     <div className="relative w-full h-screen bg-[#272626] flex items-center justify-center">
//       {/* SVG Mask */}
//       <svg
//         className="absolute inset-0 w-full h-full"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 422 242"
//       >
//         <defs>
//           <clipPath id="logo-clip">
//             <path d="M144.53 0.649902H78.6V31.7699H78.55L0.780029 125.48H144.52L144.53 94.3599H66.75L144.53 0.649902Z" />
//             <path d="M78.61 0.649902H0.780029V31.7599H78.61V0.649902Z" />
//             <path d="M72.65 241.88C33.02 241.88 0.780029 209.67 0.780029 170.07H31.9C31.9 192.51 50.18 210.76 72.65 210.76C95.12 210.76 113.4 192.51 113.4 170.07V140.24H144.52V170.07C144.52 209.67 112.28 241.88 72.65 241.88Z" />
//             {/* Add remaining paths here */}
//           </clipPath>
//         </defs>
//       </svg>

//       {/* Video */}
//       <video
//         className="absolute w-[422px] h-[242px] object-contain"
//         src="/Assets/vid.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{ clipPath: 'url(#logo-clip)' }}
//       />

//     </div>
//   );
// }








// import React from 'react';

// const VideoLogo = () => {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       {/* Video Section */}
//       <div className="relative w-1/3 h-full overflow-hidden">
//         {/* Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/Assets/vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Clipping Mask */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div
//             className="relative bg-white mix-blend-difference clip-mask"
//             style={{
//               width: '850px',
//               height: '950px',
//               WebkitMaskImage: "url('/Assets/logo.svg')",
//               WebkitMaskRepeat: 'no-repeat',
//               WebkitMaskPosition: 'center',
//               WebkitMaskSize: 'contain',
//               maskImage: "url('/Assets/logo.svg')",
//               maskRepeat: 'no-repeat',
//               maskPosition: 'center',
//               maskSize: 'contain',
//             }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoLogo;



// import React from 'react';

// const VideoLogo = () => {
//   return (
//     <div className="flex items-center justify-start h-screen bg-[#272626] ">
//       {/* Video Section */}
//       <div className="relative w-1/3 h-full ">
//         {/* Clipping Mask */}
//         <div
//           className="relative w-full h-full"
//           style={{
//             WebkitMaskImage: "url('/Assets/logo2.svg')",
//             WebkitMaskRepeat: 'no-repeat',
//             WebkitMaskPosition: 'center',
//             WebkitMaskSize: 'contain',
//             maskImage: "url('/Assets/logo2.svg')",
//             maskRepeat: 'no-repeat',
//             maskPosition: 'center',
//             maskSize: 'contain',
//             overflow: 'hidden',
//             width: '650px',
//             height: '550px',
//           }}
//         >
//           {/* Video */}
//           <video
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             autoPlay
//             muted
//             loop
//             playsInline
//           >
//             <source src="/Assets/vid5.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoLogo;




// import React from 'react';

// const VideoWithClippingMask = () => {
//   return (
//     <div className="flex items-end justify-start h-screen bg-[#272626] pb-[0px] pl-[0px]">
//       {/* Video Section */}
//       <div
//         className="relative"
//         style={{
//           WebkitMaskImage: "url('/Assets/logo2.svg')",
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'center bottom',
//           WebkitMaskSize: 'contain',
//           maskImage: "url('/Assets/logo2.svg')",
//           maskRepeat: 'no-repeat',
//           maskPosition: 'center bottom',
//           maskSize: 'contain',
//           width: '650px',
//           height: '650px',
//           paddingLeft:'0px',
//         }}
//       >
//         {/* Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default VideoWithClippingMask;


// import React from 'react';

// const VideoWithClippingMask = () => {
//   return (
//     <div className="relative h-screen bg-[#272626] flex items-center justify-left">
//       {/* Video Section */}
//       <div
//         className="relative"
//         style={{
//           WebkitMaskImage: "url('/Assets/logo2.svg')",
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'center bottom',
//           WebkitMaskSize: 'contain',
//           maskImage: "url('/Assets/logo2.svg')",
//           maskRepeat: 'no-repeat',
//           maskPosition: 'center bottom',
//           maskSize: 'contain',
//           width: '650px',
//           height: '650px',
//         }}
//       >
//         {/* Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Content Section */}
//       <div className="absolute top-0 right-0 p-8 text-white text-right">
//         <div>
//           <p>Warmoesstraat 149-151</p>
//           <p>1012JW Amsterdam</p>
//           <p>The Netherlands</p>
//         </div>
//         <div className="mt-8">
//           <p className="font-bold">Email</p>
//           <p>hello@baast.studio</p>

//           <p className="font-bold mt-4">Instagram</p>
//           <p>@baast.studio</p>

//           <p className="font-bold mt-4">LinkedIn</p>
//           <p>@baast.studio</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoWithClippingMask;




// import React from 'react';

// const VideoWithClippingMask = () => {
//   return (
//     <div className="relative h-screen bg-[#272626] flex items-center justify-end">
//       {/* Video Section */}
//       <div
//         className="relative"
//         style={{
//           WebkitMaskImage: "url('/Assets/logo2.svg')",
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'center bottom',
//           WebkitMaskSize: 'contain',
//           maskImage: "url('/Assets/logo2.svg')",
//           maskRepeat: 'no-repeat',
//           maskPosition: 'center bottom',
//           maskSize: 'contain',
//           width: '650px',
//           height: '650px',
//         }}
//       >
//         {/* Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Content Section */}
//       <div className="absolute top-8 left-8 p-8 text-white text-left">
//         {/* Address */}
//         <div>
//           <p className="text-xl">Skalitzer Straße 137</p>
//           <p className="text-xl">10999 Berlin</p>
//           <p className="text-xl">Germany</p>
//         </div>

       
//       </div>
//       <div className="absolute buttom-0 left-8 p-8 text-white text-left">
      
//         {/* Contact Information */}
//         <div className="flex items-center mb-0">
//   <p className="text-4xl font-extrabold uppercase leading-none mr-2">Email</p>
//   <p className="text-3xl font-normal leading-tight ">Diedreiza@Gmail.com</p>
// </div>

//           <div className="flex items-center mb-0">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-2">Instagram</p>
//             <p className="text-3xl font-normal leading-tight">@DieDreiZA</p>
//           </div>
//           <div className="flex items-center mb-0">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-2">PHONE </p>
//             <p className="text-3xl font-normal leading-tight"> 030 69005528</p>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default VideoWithClippingMask;



// import React from 'react';

// const VideoWithClippingMask = () => {
//   return (
//     <div className="relative h-screen bg-[#272626] flex place-items-end justify-end">
//       {/* Video Section */}
//       <div
//         className="relative"
//         style={{
//           WebkitMaskImage: "url('/Assets/logo2.svg')",
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'center bottom',
//           WebkitMaskSize: 'contain',
//           maskImage: "url('/Assets/logo2.svg')",
//           maskRepeat: 'no-repeat',
//           maskPosition: 'center bottom',
//           maskSize: 'contain',
//           width: '650px',
//           height: '650px',
//         }}
//       >
//         {/* Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Address Section */}
//       <div className="absolute top-8 left-8 p-8 text-white text-left">
//         <div>
//           <p className="text-xl">Skalitzer Straße 137</p>
//           <p className="text-xl">10999 Berlin</p>
//           <p className="text-xl">Germany</p>
//         </div>
//       </div>





//       {/* Contact Information Section */}
//       <div className="absolute bottom-8 left-8 p-8 text-white text-left">
//         <div className="flex items-center mb-1">
//           <p className="text-4xl font-extrabold uppercase leading-none mr-4">Email</p>
//           <p className="text-3xl font-normal leading-tight">Diedreiza@Gmail.com</p>
//         </div>
//         <div className="flex items-center mb-1">
//           <p className="text-4xl font-extrabold uppercase leading-none mr-4">Instagram</p>
//           <p className="text-3xl font-normal leading-tight">@DieDreiZA</p>
//         </div>
//         <div className="flex items-center ">
//           <p className="text-4xl font-extrabold uppercase leading-none mr-4">Phone</p>
//           <p className="text-3xl font-normal leading-tight">030 69005528</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoWithClippingMask;




// import React from 'react';

// const VideoWithClippingMask = () => {
//   return (
//     <div className="relative h-screen bg-[#272626] flex items-center justify-center">
//       {/* Video Section */}
//       <div
//         className="relative"
//         style={{
//           WebkitMaskImage: "url('/Assets/logo2.svg')",
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'center bottom',
//           WebkitMaskSize: 'contain',
//           maskImage: "url('/Assets/logo2.svg')",
//           maskRepeat: 'no-repeat',
//           maskPosition: 'center bottom',
//           maskSize: 'contain',
//           width: '650px',
//           height: '550px',
//           marginTop:'45px',
//           marginRight:'1px',

//         }}
//       >
//         {/* Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>





//       {/* Address Section */}
//       <div className="absolute top-8 left-8 p-16 text-white text-left ">
//         <div>
//           <p className="text-3xl font-normal leading-tight">Skalitzer Straße 137</p>
//           <p className="text-3xl font-normal leading-tight">10999 Berlin</p>
//           <p className="text-3xl font-normal leading-tight">Germany</p>
//         </div>

//         {/* Barcode */}
//         <div className="left-8 pt-12">
//           <img
//             src="/Assets/code.png" // Replace with the path to your barcode image
//             alt="Barcode"
//             className="w-48" // Adjust the width as needed
//           />
//           <p className="text-3xl font-normal leading-tight">Scan with your Phone </p>
//         </div>
//       </div>

//       {/* Contact Information Section */}
//       <div className="absolute bottom-8 left-16 p-8 text-white text-left">
//         <div className="flex items-center mb-0">
//           <p className="text-4xl font-extrabold uppercase leading-none mr-4">Email</p>
//           <p className="text-3xl font-normal leading-tight">Diedreiza@Gmail.com</p>
//         </div>
//         <div className="flex items-center mb-0">
//           <p className="text-4xl font-extrabold uppercase leading-none mr-4">Instagram</p>
//           <p className="text-3xl font-normal leading-tight">@DieDreiZA</p>
//         </div>
//         <div className="flex items-center  mb-0">
//           <p className="text-4xl font-extrabold uppercase leading-none mr-4">Phone</p>
//           <p className="text-3xl font-normal leading-tight">030 69005528</p>
//         </div>
//       </div>
//       </div>

//   );
// };

// export default VideoWithClippingMask;





// import React from 'react';

// const VideoWithClippingMask = () => {
//   return (
//     <div className="relative h-screen bg-[#272626] flex items-center justify-center">
//       {/* Video Section */}
//       <div
//         className="relative"
//         style={{
//           WebkitMaskImage: "url('/Assets/logo2.svg')",
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'center bottom',
//           WebkitMaskSize: 'contain',
//           maskImage: "url('/Assets/logo2.svg')",
//           maskRepeat: 'no-repeat',
//           maskPosition: 'center bottom',
//           maskSize: 'contain',
//           width: '750px',
//           height: '650px',
//           marginTop: '45px',
//           marginRight: '1px',
//         }}
//       >
//         {/* Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Right Section */}
//       <div className="absolute top-0 right-8 p-16 text-white">
//         {/* Address Section */}
//         <div className="mb-8">
//           <p className="text-3xl font-normal leading-tight">Skalitzer Straße 137</p>
//           <p className="text-3xl font-normal leading-tight">10999 Berlin</p>
//           <p className="text-3xl font-normal leading-tight">Germany</p>
//         </div>

//         {/* Barcode */}
//         <div className="mb-8">
//           <img
//             src="/Assets/code.png" // Replace with the path to your barcode image
//             alt="Barcode"
//             className="w-48 mb-4" // Adjust the width as needed
//           />
//           <p className="text-3xl font-normal leading-tight">Scan with your Phone</p>
//         </div>

//         {/* Contact Information Section */}
//         <div>
//           <div className="flex items-center mb-0">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Email</p>
//             <p className="text-3xl font-normal leading-tight">Diedreiza@Gmail.com</p>
//           </div>
//           <div className="flex items-center mb-0">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Instagram</p>
//             <p className="text-3xl font-normal leading-tight">@DieDreiZA</p>
//           </div>
//           <div className="flex items-center">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Phone</p>
//             <p className="text-3xl font-normal leading-tight">030 69005528</p>
//           </div>
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default VideoWithClippingMask;


// import React from 'react';

// const VideoWithClippingMask = () => {
//   return (
//     <div className="relative h-screen bg-[#272626] flex items-center justify-between pl-28 space-x-8">
//       {/* Video Section */}
//       <div
//         className="relative flex-shrink-0"
//         style={{
//           WebkitMaskImage: "url('/Assets/logo2.svg')",
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'center bottom',
//           WebkitMaskSize: 'contain',
//           maskImage: "url('/Assets/logo2.svg')",
//           maskRepeat: 'no-repeat',
//           maskPosition: 'center bottom',
//           maskSize: 'contain',
//           width: '750px',
//           height: '650px',
//           marginTop: '45px',
//         }}
//       >
//         {/* Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

   

//       {/* Right Section */}
//       <div className="text-white pr-48">
//         {/* Address Section */}
//         <div className="mb-8 mt-6">
//           <p className="text-3xl font-normal leading-tight">Skalitzer Straße 137</p>
//           <p className="text-3xl font-normal leading-tight">10999 Berlin</p>
//           <p className="text-3xl font-normal leading-tight">Germany</p>
//         </div>

//         {/* Barcode */}
//         <div className="mt-6">
//           <img
//             src="/Assets/code.png" // Replace with the path to your barcode image
//             alt="Barcode"
//             className="w-48 mb-4" // Adjust the width as needed
//           />
//           <p className="text-3xl font-normal leading-tight">Scan with your Phone</p>
//         </div>

//         {/* Contact Information Section */}
//         <div className="mb-0 mt-16">
//           <div className="flex items-center mb-0">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Email</p>
//             <p className="text-3xl font-normal leading-tight">Diedreiza@Gmail.com</p>
//           </div>
//           <div className="flex items-center mb-0">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Instagram</p>
//             <p className="text-3xl font-normal leading-tight">@DieDreiZA</p>
//           </div>
//           <div className="flex items-center">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Phone</p>
//             <p className="text-3xl font-normal leading-tight">030 69005528</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoWithClippingMask;



// import React from 'react';

// const VideoWithClippingMask = () => {
//   return (
//     <div className="relative h-screen bg-[#272626] flex items-center justify-end pl-1 space-x-0">
//       {/* Video Section */}
//       <div
//         className="relative flex-shrink-0"
//         style={{
//           WebkitMaskImage: "url('/Assets/logo2.svg')",
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'center bottom',
//           WebkitMaskSize: 'contain',
//           maskImage: "url('/Assets/logo2.svg')",
//           maskRepeat: 'no-repeat',
//           maskPosition: 'center bottom',
//           maskSize: 'contain',
//           width: '750px',
//           height: '650px',
//           marginTop: '45px',
//         }}
//       >
//         {/* Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

   

//       {/* Right Section */}
//       <div className="text-white pr-48  justify-start ">
//         {/* Address Section */}
//         <div className="mb-8 mt-6">
//           <p className="text-3xl font-normal leading-tight">Skalitzer Straße 137</p>
//           <p className="text-3xl font-normal leading-tight">10999 Berlin</p>
//           <p className="text-3xl font-normal leading-tight">Germany</p>
//         </div>

//         {/* Barcode */}
//         <div className="mt-6">
//           <img
//             src="/Assets/code.png" // Replace with the path to your barcode image
//             alt="Barcode"
//             className="w-48 mb-4" // Adjust the width as needed
//           />
//           <p className="text-3xl font-normal leading-tight">Scan with your Phone</p>
//         </div>

//         {/* Contact Information Section */}
//         <div className="mb-0 mt-16">
//           <div className="flex items-center mb-0">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Email</p>
//             <p className="text-3xl font-normal leading-tight">Diedreiza@Gmail.com</p>
//           </div>
//           <div className="flex items-center mb-0">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Instagram</p>
//             <p className="text-3xl font-normal leading-tight">@DieDreiZA</p>
//           </div>
//           <div className="flex items-center">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Phone</p>
//             <p className="text-3xl font-normal leading-tight">030 69005528</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoWithClippingMask;




// import React from 'react';

// const NewFooter = () => {
//   return (
//     <div className="relative h-[screen] bg-[#272626] flex items-center justify-between px-16 ">
//       {/* Left Section: Text and Barcode */}
//       <div className="text-white pl-10 pb-10">
//         {/* Address Section */}
//         <div className="mb-8 mt-6">
//           <p className="text-3xl font-normal leading-tight">Skalitzer Straße 137</p>
//           <p className="text-3xl font-normal leading-tight">10999 Berlin</p>
//           <p className="text-3xl font-normal leading-tight">Germany</p>
//         </div>

//         {/* Barcode Section */}
//         <div className="mt-6">
//           <img
//             src="/Assets/code.png" // Replace with the path to your barcode image
//             alt="Barcode"
//             className="w-48 mb-4" // Adjust the width as needed
//           />
//           <p className="text-3xl font-normal leading-tight">Scan with your Phone</p>
//         </div>

//         {/* Contact Information Section */}
//         <div className="mt-16">
//           <div className="flex items-center mb-0">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Email</p>
//             <p className="text-3xl font-normal leading-tight">Diedreiza@Gmail.com</p>
//           </div>
//           <div className="flex items-center mb-0">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Instagram</p>
//             <p className="text-3xl font-normal leading-tight">@DieDreiZA</p>
//           </div>
//           <div className="flex items-center">
//             <p className="text-4xl font-extrabold uppercase leading-none mr-4">Phone</p>
//             <p className="text-3xl font-normal leading-tight">030 69005528</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Section: Video and Logo */}
//       <div
//         className="relative flex-shrink-0"
//         style={{
//           WebkitMaskImage: "url('/Assets/logo2.svg')",
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'center bottom',
//           WebkitMaskSize: 'contain',
//           maskImage: "url('/Assets/logo2.svg')",
//           maskRepeat: 'no-repeat',
//           maskPosition: 'center bottom',
//           maskSize: 'contain',
//           width: '450px',
//           height: '635px',
//           marginTop: '50px',
//           marginBottom: '60px',

//         }}
//       >
//         {/* Video */}
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default NewFooter;




// import React from 'react';

// const NewFooter = () => {
//   return (
//     <div className="relative min-h-screen bg-[#272626] flex items-start px-16 py-10">


//   {/* Left Section: Text and Barcode */}
//   <div className="text-[#e8e2d4] pl-10">
//   {/* Address Section */}
//   <div className="mb-8 text-[#e8e2d4]">
//     <p className="text-3xl font-normal leading-tight">Skalitzer Straße 137</p>
//     <p className="text-3xl font-normal leading-tight">10999 Berlin</p>
//     <p className="text-3xl font-normal leading-tight">Germany</p>
//   </div>

//   {/* Barcode Section */}
//   <div className="mt-12 text-[#e8e2d4]">
//     <img
//       src="/Assets/code.png" // Replace with the path to your barcode image
//       alt="Barcode"
//       className="w-48 mb-4" // Adjust the width as needed
//     />
//     <p className="text-3xl font-normal leading-tight">Scan for more info</p>
//   </div>

//   {/* Contact Information Section */}
//   <div className="mt-12">
//     <div className="flex items-center mb-1">
//       <p className="text-3xl font-extrabold uppercase leading-none mr-4">Email</p>
//       <p className="text-3xl font-normal leading-tight">Diedreiza@Gmail.com</p>
//     </div>
//     <div className="flex items-center mb-1">
//       <p className="text-3xl font-extrabold uppercase leading-none mr-4">Instagram</p>
//       <p className="text-3xl font-normal leading-tight">@DieDreiZA</p>
//     </div>
//     <div className="flex items-center">
//       <p className="text-3xl font-extrabold uppercase leading-none mr-4">Phone</p>
//       <p className="text-3xl font-normal leading-tight">030 69005528</p>
//     </div>
//   </div>
// </div>



//       <div
//         className="relative flex-shrink-0 flex items-center justify-center ml-10 mb-10"
//         style={{
//           WebkitMaskImage: "url('/Assets/logo.svg')",
//           WebkitMaskRepeat: 'no-repeat',
//           WebkitMaskPosition: 'center',
//           WebkitMaskSize: 'contain',
//           maskImage: "url('/Assets/logo.svg')",
//           maskRepeat: 'no-repeat',
//           maskPosition: 'center',
//           maskSize: 'contain',
//           width: '940px',
//           height: '610px',
//           marginBottom:"0px",
//           marginTop:"0px"

//         }}
//       >
  
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >

//           <source src="/Assets/logo-vid.mp4" type="video/mp4" />

//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// };

// export default NewFooter;








// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const NewFooter = () => {
//   return (
//     <div className="relative min-h-screen bg-[#272626] flex px-10 py-8">

//       {/* Section: 1*/}
//       <div className="w-1/3 text-[#e8e2d4] pl-10 flex flex-col justify-center pt-14">
    
//         {/* Barcode Section */}
//         <div className="mt-12">
//           <img
//             src="/Assets/code.png" 
//             alt="Barcode"
//             className="w-48 mb-4" 
//           />
//           <p className="text-3xl font-normal leading-tight">Scan for more info</p>
//         </div>

//         {/* Contact Information Section */}
//         <div className="mt-12">
//           <div className="flex items-center mb-1">
//             <p className="text-3xl font-extrabold uppercase leading-none mr-4">Email</p>
//             <p className="text-3xl font-normal leading-tight">Diedreiza@Gmail.com</p>
//           </div>
//           <div className="flex items-center mb-1">
//             <p className="text-3xl font-extrabold uppercase leading-none mr-4">Instagram</p>
//             <p className="text-3xl font-normal leading-tight">@DieDreiZA</p>
//           </div>
//           <div className="flex items-center">
//             <p className="text-3xl font-extrabold uppercase leading-none mr-4">Phone</p>
//             <p className="text-3xl font-normal leading-tight">030 69005528</p>
//           </div>
//         </div>
//       </div>

//      {/*Section: 2 */}
//      <div className="w-1/3 text-[#e8e2d4] pl-10 flex flex-col justify-center pt-10">
    
//      <div
//           className="relative w-full h-auto max-w-[80%] max-h-[80vh] flex justify-center items-end mb-0 py-20"
//         >
//           {/* Masked Logo */}
//           <div
//             className="relative w-full h-full"
//             style={{
//               WebkitMaskImage: "url('/Assets/logo.svg')",
//               WebkitMaskRepeat: 'no-repeat',
//               WebkitMaskPosition: 'center',
//               WebkitMaskSize: 'cover',
//               maskImage: "url('/Assets/logo.svg')",
//               maskRepeat: 'no-repeat',
//               maskPosition: 'center',
//               maskSize: 'cover',
//             }}
//           >
//             <video
//               className="w-full h-full object-cover"
//               autoPlay
//               muted
//               loop
//               playsInline
//             >
//               <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>

//           {/* Fallback Image if Mask Fails */}
//           <img
//             src="/Assets/logo.svg"
//             alt="Logo"
//             className="absolute top-0 left-0 w-full h-full opacity-10"
//           />
//         </div>

//     {/* Contact Information Section */}
//     <div className="mt-2 ">
//       <div className="flex items-center mb-1">
//         <p className="text-2xl font-extrabold uppercase leading-none mr-1">Monday-Thursday:</p>
//         <p className="text-3xl font-normal leading-tight">08:30-20:00</p>
//       </div>
//       <div className="flex items-center mb-1">
//         <p className="text-2xl font-extrabold uppercase leading-none mr-4">Wednesday:</p>
//         <p className="text-3xl font-normal leading-tight">08:30-18:30</p>
//       </div>
//       <div className="flex items-center">
//         <p className="text-2xl font-extrabold uppercase leading-none mr-4">Friday:</p>
//         <p className="text-3xl font-normal leading-tight">09:00-15:00</p>
//       </div>
//     </div>
//   </div>

//    {/* Section: 3 */}
//    <div className="w-1/3 text-[#e8e2d4] pl-20 flex flex-col justify-end mb-14">
    
//     {/* Contact Information Section */}
//   {/* Contact Information Section */}
//   <div className="mt-12">
//       <div className="flex items-center mb-1">
//         <p className="text-2xl font-extrabold uppercase leading-none mr-9">LOGO</p>
//         <p className="text-2xl font-extrabold uppercase leading-none mr-9">LOGO</p>
//         <p className="text-2xl font-extrabold uppercase leading-none mr-9">LOGO</p>

//       </div>
     
//     </div>
//   </div>


      







//     </div>
//   );
// };

// export default NewFooter;







// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const NewFooter = () => {
//   return (
//     <div className="relative min-h-screen bg-[#272626] flex px-10 py-0">

//   {/* Section: 1 (content) */}
//   {/* <div className="w-1/2 text-[#e8e2d4] pl-28 flex flex-col justify-end pb-24"> */}
//   <div className="w-1/2 text-[#e8e2d4] pl-24 flex flex-col justify-start pt-16">

//    {/*contact */}
//    <div className="mt-4">

        
// <div className="flex items-center mb-1">
//   <p className="text-3xl font-extrabold uppercase mr-4">Email</p>
//   <p className="text-3xl font-normal">Diedreiza@Gmail.com</p>
// </div>

// <div className="flex items-center mb-1">
//   <p className="text-3xl font-extrabold uppercase mr-4">Phone</p>
//   <p className="text-3xl font-normal">030 69005528</p>
// </div>


// <div className="flex items-center mb-1">
//   <p className="text-3xl font-extrabold uppercase mr-4">Address</p>
//   <p className="text-3xl font-normal">Skalitzer Straße 137,</p>
// </div>
// <div className="flex items-center mb-1">
// <p className="text-3xl font-extrabold uppercase mr-4 text-[#272626]">Address</p>

//   <p className="text-3xl font-normal">10999 Berlin</p>
// </div>
// </div>
     
//     {/* Clinic Hours */}
//     <div className="mt-12">
   
//    <div className="flex items-center mb-1">
//      <p className="text-3xl font-extrabold uppercase mr-4">Monday-Thursday:</p>
//      <p className="text-3xl font-normal">08:30-20:00</p>
//    </div>
//    <div className="flex items-center mb-1">
//      <p className="text-3xl font-extrabold uppercase mr-4">Wednesday:</p>
//      <p className="text-3xl font-normal">08:30-18:30</p>
//    </div>
//    <div className="flex items-center mb-1">
//      <p className="text-3xl font-extrabold uppercase mr-4">© 2024 Ask Phill. All rights reserved.</p>
//      <p className="text-3xl font-normal">09:00-15:00</p>
//    </div>

//     {/* appointment */}

//    <div className="mt-10">
//               <button className=" text-[#272626] bg-[#e8e2d4] px-6 py-2 text-xl font-bold border border-[#e8e2d4] rounded-2xl hover:bg-[#272626] hover:text-[#e8e2d4] transition-all">
//                 Book an Appointment
//               </button>
//             </div>



//     {/* social media*/}

//       <div className="mt-12 flex items-center space-x-10">
//     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//       <div className="w-12 h-12 bg-[#e8e2d4] rounded-2xl flex items-center justify-center transition-all hover:bg-[#272626]">
//         <FaLinkedinIn className="text-4xl text-[#272626] transition-all hover:text-white" />
//       </div>
//     </a>
//     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//       <div className="w-12 h-12 bg-[#e8e2d4] rounded-2xl flex items-center justify-center transition-all hover:bg-[#272626]">
//         <FaInstagram className="text-4xl text-[#272626] transition-all hover:text-white" />
//       </div>
//     </a>
//     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//       <div className="w-12 h-12 bg-[#e8e2d4] rounded-2xl flex items-center justify-center transition-all hover:bg-[#272626]">
//         <FaFacebookF className="text-4xl text-[#272626] transition-all hover:text-white" />
//       </div>
//     </a>
//   </div>

//  </div>

//       </div>



//       {/* Section: 1 (Left - Contact & Barcode) */}
//       <div className="w-1/2 text-[#e8e2d4] pl-24 flex flex-col justify-start pt-60">
//       {/* <div className="w-1/2 text-[#e8e2d4] pl-24 flex flex-col justify-end pb-8"> */}



//  <div className="relative w-full h-auto max-w-[80%] max-h-[80vh] flex justify-center items-end py-20">
//           {/* Masked Logo */}
//           <div
//             className="relative w-full h-full"
//             style={{
//               WebkitMaskImage: "url('/Assets/logo.svg')",
//               WebkitMaskRepeat: 'no-repeat',
//               WebkitMaskPosition: 'center',
//               WebkitMaskSize: 'contain', // Prevents cropping issues
//               maskImage: "url('/Assets/logo.svg')",
//               maskRepeat: 'no-repeat',
//               maskPosition: 'center',
//               maskSize: 'contain',
//             }}
//           >
//             <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
//               <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>

//       </div>

    


//     </div>
//   );
// };

// export default NewFooter;



// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const NewFooter = () => {
//   return (
//     <div className="relative min-h-screen bg-[#272626] flex flex-col lg:flex-row items-center lg:items-start px-10 py-0">

//       {/* Section: Left (Content) */}
//       <div className="w-[80%] lg:w-1/2 text-[#e8e2d4] pl-6 lg:pl-24 flex flex-col justify-start pt-16">
//         {/* Contact Info */}
//         <div className="mt-4">
//           {[
//             { label: "Email", value: "Diedreiza@Gmail.com" },
//             { label: "Phone", value: "030 69005528" },
//             { label: "Address", value: "Skalitzer Straße 137, 10999 Berlin" }
//           ].map((item, index) => (
//             <div key={index} className="flex items-center mb-1">
//               <p className="text-3xl font-extrabold uppercase mr-4">{item.label}</p>
//               <p className="text-3xl font-normal">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Clinic Hours */}
//         <div className="mt-12">
//           {[
//             { label: "Monday-Thursday:", value: "08:30-20:00" },
//             { label: "Wednesday:", value: "08:30-18:30" },
//             { label: "Friday:", value: "09:00-15:00" }
//           ].map((item, index) => (
//             <div key={index} className="flex items-center mb-1">
//               <p className="text-3xl font-extrabold uppercase mr-4">{item.label}</p>
//               <p className="text-3xl font-normal">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Appointment Button */}
//         <div className="mt-10">
//           <button className="text-[#272626] bg-[#e8e2d4] px-6 py-2 text-xl font-bold border border-[#e8e2d4] rounded-2xl hover:bg-[#272626] hover:text-[#e8e2d4] transition-all">
//             Book an Appointment
//           </button>
//         </div>

//         {/* Social Media */}
//         <div className="mt-12 flex items-center space-x-6">
//           {[
//             { icon: <FaLinkedinIn />, link: "https://www.linkedin.com" },
//             { icon: <FaInstagram />, link: "https://www.instagram.com" },
//             { icon: <FaFacebookF />, link: "https://www.facebook.com" }
//           ].map((item, index) => (
//             <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
//               <div className="w-12 h-12 bg-[#e8e2d4] rounded-2xl flex items-center justify-center transition-all hover:bg-[#272626]">
//                 {React.cloneElement(item.icon, { className: "text-4xl text-[#272626] transition-all hover:text-white" })}
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Section: Right (Logo) */}
//       <div className="w-[80%] lg:w-1/2 text-[#e8e2d4] flex flex-col items-center lg:items-start justify-start pt-44">
//         <div className="relative w-full h-auto max-w-[80%] max-h-[80vh] flex justify-center items-end py-20">
//           {/* Masked Logo */}
//           <div
//             className="relative w-full h-full"
//             style={{
//               WebkitMaskImage: "url('/Assets/logo.svg')",
//               WebkitMaskRepeat: 'no-repeat',
//               WebkitMaskPosition: 'center',
//               WebkitMaskSize: 'contain',
//               maskImage: "url('/Assets/logo.svg')",
//               maskRepeat: 'no-repeat',
//               maskPosition: 'center',
//               maskSize: 'contain',
//             }}
//           >
//             <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
//               <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default NewFooter;


// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const NewFooter = () => {
//   return (
//     <div className="relative min-h-screen bg-[#272626] flex flex-col lg:flex-row items-center lg:items-start px-10 py-0 overflow-hidden">

//       {/* Section: Left (Content) */}
//       <div className="w-full lg:w-1/2 text-[#e8e2d4] pl-6 lg:pl-24 flex flex-col justify-start pt-16 max-w-[100%]">
//         {/* Contact Info */}
//         <div className="mt-4">
//           {[
//             { label: "Email", value: "Diedreiza@Gmail.com" },
//             { label: "Phone", value: "030 69005528" },
//             { label: "Address", value: "Skalitzer Straße 137, 10999 Berlin" }
//           ].map((item, index) => (
//             <div key={index} className="flex items-center mb-1 max-w-[100%]">
//               <p className="text-3xl font-extrabold uppercase mr-4 whitespace-nowrap">{item.label}</p>
//               <p className="text-3xl font-normal break-words">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Clinic Hours */}
//         <div className="mt-12">
//           {[
//             { label: "Monday-Thursday:", value: "08:30-20:00" },
//             { label: "Wednesday:", value: "08:30-18:30" },
//             { label: "Friday:", value: "09:00-15:00" }
//           ].map((item, index) => (
//             <div key={index} className="flex items-center mb-1 max-w-[100%]">
//               <p className="text-3xl font-extrabold uppercase mr-4 whitespace-nowrap">{item.label}</p>
//               <p className="text-3xl font-normal break-words">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Appointment Button */}
//         <div className="mt-10">
//           <button className="text-[#272626] bg-[#e8e2d4] px-6 py-2 text-xl font-bold border border-[#e8e2d4] rounded-2xl hover:bg-[#272626] hover:text-[#e8e2d4] transition-all">
//             Book an Appointment
//           </button>
//         </div>

//         {/* Social Media */}
//         <div className="mt-12 flex items-center space-x-6">
//           {[
//             { icon: <FaLinkedinIn />, link: "https://www.linkedin.com" },
//             { icon: <FaInstagram />, link: "https://www.instagram.com" },
//             { icon: <FaFacebookF />, link: "https://www.facebook.com" }
//           ].map((item, index) => (
//             <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
//               <div className="w-12 h-12 bg-[#e8e2d4] rounded-2xl flex items-center justify-center transition-all hover:bg-[#272626]">
//                 {React.cloneElement(item.icon, { className: "text-4xl text-[#272626] transition-all hover:text-white" })}
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Section: Right (Logo) */}
//       <div className="w-full lg:w-1/2 text-[#e8e2d4] flex flex-col items-center lg:items-start justify-start pt-12 lg:pt-44 md:pt-44">
//         <div className="relative w-full h-auto max-w-[80%] max-h-[80vh] flex justify-center items-end py-20">
//           {/* Masked Logo */}
//           <div
//             className="relative w-full h-full"
//             style={{
//               WebkitMaskImage: "url('/Assets/logo.svg')",
//               WebkitMaskRepeat: 'no-repeat',
//               WebkitMaskPosition: 'center',
//               WebkitMaskSize: 'contain',
//               maskImage: "url('/Assets/logo.svg')",
//               maskRepeat: 'no-repeat',
//               maskPosition: 'center',
//               maskSize: 'contain',
//             }}
//           >
//             <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
//               <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default NewFooter;


// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const NewFooter = () => {
//   return (
//     <div className="relative min-h-screen bg-[#272626] flex flex-col lg:flex-row items-center lg:items-start px-10 py-0 overflow-hidden">

//       {/* Section: Left (Content) */}
//       <div className="w-full lg:w-1/2 text-[#e8e2d4] pl-6 lg:pl-24 flex flex-col justify-start pt-16 max-w-[100%]">
//         {/* Contact Info */}
//         <div className="mt-4">
//           {[
//             { label: "Email", value: "Diedreiza@Gmail.com" },
//             { label: "Phone", value: "030 69005528" },
//             { label: "Address", value: "Skalitzer Straße 137, 10999 Berlin" }
//           ].map((item, index) => (
//             <div key={index} className="flex items-center mb-1 max-w-[100%]">
//               <p className="text-2xl md:text-3xl font-extrabold uppercase mr-4 whitespace-nowrap">{item.label}</p>
//               <p className="text-xl md:text-3xl font-normal break-words">{item.value}</p>
//             </div>
       
//           ))}
//         </div>

//         {/* Clinic Hours */}
//         <div className="mt-12">
//           {[
//             { label: "Monday-Thursday:", value: "08:30-20:00" },
//             { label: "Wednesday:", value: "08:30-18:30" },
//             { label: "Friday:", value: "09:00-15:00" }
//           ].map((item, index) => (
//             <div key={index} className="flex items-center mb-1 max-w-[100%]">
//               <p className="text-2xl md:text-3xl font-extrabold uppercase mr-4 whitespace-nowrap">{item.label}</p>
//               <p className="text-xl md:text-3xl font-normal break-words">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Appointment Button */}
//         <div className="mt-10">
//           <button className="text-[#272626] bg-[#e8e2d4] px-6 py-2 text-xl font-bold border border-[#e8e2d4] rounded-2xl hover:bg-[#272626] hover:text-[#e8e2d4] transition-all">
//             Book an Appointment
//           </button>
//         </div>

//         {/* Social Media */}
//         <div className="mt-12 flex items-center space-x-6">
//           {[
//             { icon: <FaLinkedinIn />, link: "https://www.linkedin.com" },
//             { icon: <FaInstagram />, link: "https://www.instagram.com" },
//             { icon: <FaFacebookF />, link: "https://www.facebook.com" }
//           ].map((item, index) => (
//             <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
//               <div className="w-12 h-12 bg-[#e8e2d4] rounded-2xl flex items-center justify-center transition-all hover:bg-[#272626]">
//                 {React.cloneElement(item.icon, { className: "text-4xl text-[#272626] transition-all hover:text-white" })}
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Section: Right (Logo) */}
//       <div className="w-full lg:w-1/2 text-[#e8e2d4] flex flex-col items-center lg:items-start justify-start pt-12 lg:pt-44 md:pt-44">
//         <div className="relative w-full h-auto max-w-[80%] max-h-[80vh] flex justify-center items-end py-20">
//           {/* Masked Logo */}
//           <div
//             className="relative w-full h-full"
//             style={{
//               WebkitMaskImage: "url('/Assets/logo.svg')",
//               WebkitMaskRepeat: 'no-repeat',
//               WebkitMaskPosition: 'center',
//               WebkitMaskSize: 'contain',
//               maskImage: "url('/Assets/logo.svg')",
//               maskRepeat: 'no-repeat',
//               maskPosition: 'center',
//               maskSize: 'contain',
//             }}
//           >
//             <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
//               <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
      

//           </div>
//                 <div className="flex items-end mt-1 justify-end">

// <p className="text-sm font-normal">© 2025 diedreizahnaerzte. All rights reserved.</p>
// </div>
        
//         </div>
      
//       </div>

//     </div>
//   );
// };

// export default NewFooter;


// import React from 'react';
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const NewFooter = () => {
//   return (
//     <div className="relative min-h-screen bg-[#272626] flex flex-col lg:flex-row items-center lg:items-start px-10 py-0 overflow-hidden">

//       {/* Section: Left (Content) */}
//       <div className="w-full lg:w-1/2 text-[#e8e2d4] pl-2 lg:pl-24 flex flex-col justify-start pt-16 max-w-[100%]">
//         {/* Contact Info */}
//         <div className="mt-4">
//           {[
//             { label: "Email", value: "Diedreiza@Gmail.com" },
//             { label: "Phone", value: "030 69005528" },
//             { label: "Address", value: "Skalitzer Straße 137, 10999 Berlin" }
//           ].map((item, index) => (
//             <div key={index} className="flex items-center mb-1 max-w-[100%]">
//               <p className="text-2xl md:text-3xl font-extrabold uppercase mr-4 whitespace-nowrap">{item.label}</p>
//               <p className="text-xl md:text-3xl font-normal break-words">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Clinic Hours */}
//         <div className="mt-12">
//           {[
//             { label: "Monday-Thursday:", value: "08:30-20:00" },
//             { label: "Wednesday:", value: "08:30-18:30" },
//             { label: "Friday:", value: "09:00-15:00" }
//           ].map((item, index) => (
//             <div key={index} className="flex items-center mb-1 max-w-[100%]">
//               <p className="text-2xl md:text-3xl font-extrabold uppercase mr-4 whitespace-nowrap">{item.label}</p>
//               <p className="text-xl md:text-3xl font-normal break-words">{item.value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Appointment Button */}
//         <div className="mt-10">
//           <button className="text-[#272626] bg-[#e8e2d4] px-6 py-2 text-xl font-bold border border-[#e8e2d4] rounded-2xl hover:bg-[#272626] hover:text-[#e8e2d4] transition-all">
//             Book an Appointment
//           </button>
//         </div>

//         {/* Social Media */}
//         <div className="mt-12 flex items-center space-x-6">
//           {[
//             { icon: <FaLinkedinIn />, link: "https://www.linkedin.com" },
//             { icon: <FaInstagram />, link: "https://www.instagram.com" },
//             { icon: <FaFacebookF />, link: "https://www.facebook.com" }
//           ].map((item, index) => (
//             <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
//               <div className="w-12 h-12 bg-[#e8e2d4] rounded-2xl flex items-center justify-center transition-all hover:bg-[#272626]">
//                 {React.cloneElement(item.icon, { className: "text-4xl text-[#272626] transition-all hover:text-white" })}
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Section: Right (Logo + Copyright) */}
//       <div className="w-full lg:w-1/2 text-[#e8e2d4] flex flex-col items-center lg:items-start justify-start pt-12 lg:pt-44 md:pt-32 md:mb-10 md:pl-20  relative">
        
//         {/* Logo Container */}
//         {/* <div className="relative w-full h-auto max-w-[80%] max-h-[80vh] flex flex-col justify-center items-center py-20">
//           <div
//             className="relative w-full h-full"
//             style={{
//               WebkitMaskImage: "url('/Assets/logo.svg')",
//               WebkitMaskRepeat: 'no-repeat',
//               WebkitMaskPosition: 'center',
//               WebkitMaskSize: 'contain',
//               maskImage: "url('/Assets/logo.svg')",
//               maskRepeat: 'no-repeat',
//               maskPosition: 'center',
//               maskSize: 'contain',
//             }}
//           >
//             <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
//               <source src="/Assets/logo-vid.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div> */}
// {/* Logo Container */}
// <div className="relative w-full h-auto max-w-[80%] max-h-[80vh] flex flex-col justify-center items-center py-20">
//   {/* Logo Image */}
//   <img
//     // src="/Assets/logo.svg"
//     src="/Assets/logo-gray.png"

//     alt="Logo"
//     className="w-full h-auto object-contain"
//   />
// </div>






//         {/* Copyright Text */}
//         <div className="w-full text-center mt-0 md:mt-10 lg:absolute lg:bottom-[40px]">
//           <p className="text-sm font-normal">© 2025 diedreizahnaerzte. All rights reserved.</p>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default NewFooter;



import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import translation hook

const NewFooter = () => {
  const { t } = useTranslation(); // Get translation function

  return (
    <div className="relative min-h-screen bg-[#422f40] flex flex-col lg:flex-row items-center lg:items-start px-10 py-0 overflow-hidden">

      {/* Section: Left (Content) */}
      <div className="w-full lg:w-1/2 text-[#e8e2d4] pl-0 lg:pl-24 flex flex-col justify-start pt-16 max-w-[100%]">
        
        {/* Contact Info */}
        <div className="mt-4">
          {[
            { label: t("new_footer.email"), value: "Diedreiza@Gmail.com" },
            { label: t("new_footer.phone"), value: "030 69005528" },
            { label: t("new_footer.address"), value: "Skalitzer Straße 137, 10999 Berlin" } // Do not translate
          ].map((item, index) => (
            <div key={index} className="flex items-center mb-1 max-w-[100%]">
              <p className="text-2xl md:text-3xl font-extrabold uppercase mr-4 whitespace-nowrap ">{item.label}</p>
              <p className="text-xl md:text-3xl font-normal break-words">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Clinic Hours */}
        <div className="mt-12">
          {[
            { label: t("new_footer.monday_thursday"), value: "08:30-20:00" },
            { label: t("new_footer.wednesday"), value: "08:30-18:30" },
            { label: t("new_footer.friday"), value: "09:00-15:00" }
          ].map((item, index) => (
            <div key={index} className="flex items-center mb-1 max-w-[100%]">
              <p className="text-2xl md:text-3xl font-extrabold uppercase mr-4 whitespace-nowrap">{item.label}</p>
              <p className="text-xl md:text-3xl font-normal break-words">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Appointment Button */}
        <div className="mt-10">
        <a href="https://www.doctolib.de/zahnarztpraxis/berlin/die-drei-zahnaerzte/booking/specialities?bookingFunnelSource=profile" target="_blank" rel="noopener noreferrer">
  <button className="text-[#272626] bg-[#e8e2d4] px-6 py-2 text-xl font-bold border border-[#e8e2d4] rounded-2xl hover:bg-[#272626] hover:text-[#e8e2d4] transition-all">
    {t("new_footer.book_appointment")}
  </button>
</a>

        </div>

     {/* Social Media */}
<div className="mt-12 flex items-center space-x-6">
  {[
    { icon: <FaLinkedinIn />, link: "https://www.instagram.com/diedreizahnaerzte.berlin/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/diedreizahnaerzte.berlin/" },
    { icon: <FaFacebookF />, link: "https://www.instagram.com/diedreizahnaerzte.berlin/" }
  ].map((item, index) => (
    <a 
      key={index} 
      href={item.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 bg-[#e8e2d4] rounded-2xl flex items-center justify-center transition-all hover:bg-[#272626]"
    >
      {React.cloneElement(item.icon, { className: "text-4xl text-[#272626] transition-all hover:text-white" })}
    </a>
  ))}
</div>

      </div>

      {/* Section: Right (Logo + Copyright) */}
      <div className="w-full lg:w-1/2 text-[#e8e2d4] flex flex-col items-center lg:items-start justify-start pt-12 lg:pt-44 md:pt-32 md:mb-10 md:pl-20  relative">
        
        {/* Logo */}
        <div className="relative w-full h-auto max-w-[80%] max-h-[80vh] flex flex-col justify-center items-center py-20">
          <img src="/Assets/logo-gray.png" alt="Logo" className="w-full h-auto object-contain" />
        </div>

        {/* Copyright */}
        <div className="w-full text-center mt-0 md:mt-10 lg:absolute lg:bottom-[40px]">
          <p className="text-sm font-normal">© 2025 diedreizahnaerzte. {t("new_footer.copyright")}</p>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
