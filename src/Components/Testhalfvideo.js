
import React from "react";

const Testhalfvideo = () => {
  return (
    <section className="h-screen w-full flex bg-[#e8e2d4]">
      {/* Left Side - Text Content */}
      <div className="w-1/2 bg-[#e8e2d4] flex flex-col justify-center items-start p-16 ">
        <h1 className="max-w-lg pl-12 text-5xl font-bold text-[#422f40]">Who We Are & What We Believe</h1>
        <p className=" max-w-lg pl-12 text-lg text-[#422f40] mt-12">
          Our team is dedicated to delivering exceptional care guided by a shared philosophy of trust, innovation, and compassion.
        </p>
        <button className="ml-12 mt-12 bg-[#422f40] text-[#e8e2d4] px-6 py-3 text-lg font-semibold rounded-md">BOOK AN APPOINTMENT</button>
      </div>
      
      {/* Right Side - Video */}
      <div className="w-1/2 relative  rounded-md">
        <video
          className="absolute  right-10 w-full h-full object-cover  rounded-lg"
          autoPlay
          loop
          muted
          playsInline
          src="./Assets/out.mp4"
        />
      </div>
    </section>
  );
};

export default Testhalfvideo;
