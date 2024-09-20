import React from "react";

const Main: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-blue-500 bg-center"
      style={{ backgroundImage: `./img.jpg` }}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          Hello, I'm <br /> SeungRok Oh
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          AND THIS IS MY REZUME
        </p>
      </div>
    </div>
  );
};

export default Main;
