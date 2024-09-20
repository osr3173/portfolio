import React from "react";

interface NavbarProps {
  onNavigate: (section: "Main" | "Introduce" | "Projects" | "History") => void;
  currentPage: "Main" | "Introduce" | "Projects" | "History";
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const getClassName = (section: "Main" | "Introduce" | "Projects" | "History") => {
    return currentPage === section
      ? "text-white font-bold"
      : "text-gray-400 hover:text-white";
  };

  return (
    <div className="fixed left-10 top-0 h-screen flex flex-col items-center justify-center space-y-6 z-50">
      <button
        className={`${getClassName("Main")} text-lg`}
        onClick={() => onNavigate("Main")}
      >
        Main
      </button>
      <button
        className={`${getClassName("Introduce")} text-lg`}
        onClick={() => onNavigate("Introduce")}
      >
        Introduce
      </button>
      <button
        className={`${getClassName("History")} text-lg`}
        onClick={() => onNavigate("History")}
      >
        History
      </button>
      <button
        className={`${getClassName("Projects")} text-lg`}
        onClick={() => onNavigate("Projects")}
      >
        Projects
      </button>
    </div>
  );
};

export default Navbar;
