import React from "react";

const NewSectionName = ({ title }) => {
  return (
    <div className="flex items-center justify-center bg-[#272626] h-96">
      <h2 className="text-white text-5xl font-mono text-center">
        {title}
      </h2>
    </div>
  );
};

export default NewSectionName;
