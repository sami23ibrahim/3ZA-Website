import React, { useState } from "react";
import { motion } from "framer-motion";

const defaultService = {
  title: "Our Services",
  image: "/Assets/Tree.png",
  description:
    "We understand your needs and offer a wide range of services. Whether you need prophylaxis, surgical interventions, implantology, root canal treatment or bleaching, you are in the best hands with us",
};

const services = [
  {
    icon: "/Assets/Anxiety Patients.svg",
    title: "Anxiety Patients",
    image: "/Assets/1.png",
    description:
      "Together we will tackle every challenge on your way to healthy teeth.",
  },
  {
    icon: "/Assets/surgery.svg",
    title: "Oral Surgery",
    image: "/Assets/2.png",
    description:
      "Together we solve even complex issues with precision and empathy.",
  },
  {
    icon: "/Assets/implantology.svg",
    title: "Implantology",
    image: "/Assets/3.png",
    description:
      "Gentle, innovative dental implants for lasting radiance and strong teeth. We are taking new paths to dental health with you.",
  },
  {
    icon: "/Assets/dentures.svg",
    title: "Dentures",
    image: "/Assets/Tree.png",
    description:
      "Discover the art of tooth restoration with us. We excel at it so that you can smile with peace of mind.",
  },
  {
    icon: "/Assets/root-canal-treatment.svg",
    title: "Root Canal Treatment",
    image: "/Assets/3.png",
    description:
      "Pain-free & efficient microscope treatment – ​​because your dental health is important to us.",
  },
  {
    icon: "/Assets/veneers.svg",
    title: "Veneers",
    image: "/Assets/2.png",
    description:
      "Your teeth, individually and optimally refined. With veneers we bring back your shine.",
  },
  {
    icon: "/Assets/invisalign.svg",
    title: "Invisalign",
    image: "/Assets/1.png",
    description: "Achieve a straighter smile with our invisible braces.",
  },
  {
    icon: "/Assets/pediatric-dentistry.svg",
    title: "Pediatric Dentistry",
    image: "/Assets/Tree.png",
    description: "Warm care so that the little ones shine.",
  },
  {
    icon: "/Assets/Aesthetic-Dentistry.svg",
    title: "Aesthetic Dentistry",
    image: "/Assets/Tree.png",
    description:
      "Your smile, designed by us. We set new standards for radiant, individual results.",
  },
  // {
  //   icon: "/Assets/periodontology.svg",
  //   title: "Periodontology",
  //   image: "/Assets/Tree.png",
  //   description: "Your strong smile starts with healthy gums.",
  // },
  // {
  //   icon: "/Assets/Teeth Cleaning.svg",
  //   title: "Teeth Cleaning",
  //   image: "/Assets/1.png",
  //   description: "For clean, healthy teeth – we do our best to make you shine.",
  // },
  // {
  //   icon: "/Assets/bleaching.svg",
  //   title: "Bleaching",
  //   image: "/Assets/2.png",
  //   description: "Flawlessly white smile: We design the path to your feel-good smile.",
  // },
];

const ServicesAnimation = () => {
  const [activeService, setActiveService] = useState(null);

  const serviceVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleContainerClick = (event) => {
    if (!event.target.closest(".service-icon")) {
      setActiveService(null);
    }
  };

  return (
    <div
      className=" bg-[#272626] pt-10 px-0 w-screen flex flex-col lg:flex-row mb-0"
      onClick={handleContainerClick}
    >
      {/* Left Section: Image */}
      <div className="w-full lg:w-[40%] relative h-screen px-4 lg:px-10 pb-4 ml-10">
        <motion.img
          src={activeService ? activeService.image : defaultService.image}
          alt={activeService ? activeService.title : defaultService.title}
          className="w-[100%] h-[80%] object-cover rounded-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          key={activeService ? activeService.image : defaultService.image}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
          <h2 className="text-5xl font-bold text-[#f7f3e9] mb-4">
            {activeService ? activeService.title : defaultService.title}
          </h2>
          <p className="text-xl text-[#f7f3e9] w-5/6 mt-6">
            {activeService ? activeService.description : defaultService.description}
          </p>
        </div>
      </div>

      {/* Right Section: Service Icons */}
      <div className="w-full lg:w-[60%] px-10 lg:px-16 pt-8 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-icon flex flex-col items-center text-center group cursor-pointer p-8 rounded-lg border transition-transform duration-200 ${
                activeService?.title === service.title
                  ? "border-[#f7f3e9]"
                  : "border-transparent"
              }`}
              whileHover={{ scale: 1.2 }}
              variants={serviceVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveService(service);
              }}
            >
              <motion.img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mb-2"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
              <h3 className="text-sm font-medium text-[#f7f3e9]">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesAnimation;
