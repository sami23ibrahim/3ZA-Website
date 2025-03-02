import React from "react";

const Testfooter = () => {
  return (
    <section className="w-screen h-screen relative">
      {/* Background Image covering full screen */}
      <div className="absolute pt-10 w-full h-full bg-[#e8e2d4] pl-1 pr-5">
        <img
          src="./Assets/Tree.png"
          alt="Clinic Procedure"
          className="w-full h-full object-top rounded-lg"
        />
      </div>

      {/* Bottom Content Covering Half of the Screen */}
      <div className="absolute bottom-0 left-0 w-full h-40% bg-[#e8e2d4] text-white py-6 px-0 flex justify-between items-start">
          {/* time */}
  <div className="w-1/2 text-[#422f40] pl-20">
          <p className="text-3xl font-bold leading-tight">‍Montag, Dienstag, Donnerstag: </p>
          <p className="text-3xl font-mono leading-tight">08:30-20:00 Uhr</p>

          <p className="text-3xl font-bold leading-tight">Mittwoch:</p>
          <p className="text-3xl font-mono leading-tight">08:30-18:30 Uhr</p>

          <p className="text-3xl font-bold leading-tight">Freitag:</p>
          <p className="text-3xl font-mono leading-tight">09:00-15:00 Uhr</p>

        </div>
          {/* Contact Information Section */}
          <div className="w-1/3 text-[#422f40]  justify-start items-start left-0 p-0">

          <p className="text-3xl font-bold leading-tight">Skalitzer Straße 137</p>
          <p className="text-3xl font-bold leading-tight">10999 Berlin</p>
          <p className="text-3xl font-bold leading-tight mb-5">Germany</p>

          <div className="flex justify-start items-center mb-0">
            <p className="text-3xl font-bold uppercase leading-none mr-4">Email</p>
            <p className="text-3xl font-mono leading-tight">Diedreiza@Gmail.com</p>
          </div>
          <div className="flex justify-start items-center mb-0">
            <p className="text-3xl font-bold uppercase leading-none mr-4">Instagram</p>
            <p className="text-3xl font-mono leading-tight">@DieDreiZA</p>
          </div>
          <div className="flex justify-start items-center">
            <p className="text-3xl font-bold uppercase leading-none mr-4">Phone</p>
            <p className="text-3xl font-mono leading-tight">030 69005528</p>
          </div>

        </div>

         
  {/* Address Section */}
  {/* <div className="w-1/3 text-[#422f40] pl-20">
          <p className="text-3xl font-bold leading-tight">Skalitzer Straße 137</p>
          <p className="text-3xl font-bold leading-tight">10999 Berlin</p>
          <p className="text-3xl font-bold leading-tight">Germany</p>
        </div> */}
     
    {/* Barcode Section */}
    <div className="w-1/3 text-center">
          <img
            src="/Assets/code.png" // Ensure this path is correct
            alt="Barcode"
            className="w-48 mx-auto mb-4"
          />
          <p className="text-3xl font-bold leading-tight text-[#422f40]">Scan me!</p>
        </div>
      </div>
    </section>
  );
};

export default Testfooter;
