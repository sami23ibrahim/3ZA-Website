import React from 'react';

const TopBar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-20 bg-[#272626]/10 z-30"
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
      }}
    />
  );
};

export default TopBar;
