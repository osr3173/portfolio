import React from "react";

const Main: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-blue-500 bg-center"
      style={{ backgroundImage: `./img.jpg` }}
    >
      <div className="text-center px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          Hello, I'm <br /> SeungRok Oh
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300">
          AND THIS IS MY REZUME
        </p>
      </div>
    </div>
  );
};

export default Main;
