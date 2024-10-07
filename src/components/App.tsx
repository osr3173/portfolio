import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Main from "./Main";
import Introduce from "./Introduce";
import Projects from "./Projects";
import History from "./History";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<
    "Main" | "Introduce" | "Projects" | "History"
  >("Main");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const sections = {
        Main: document.getElementById("Main")?.offsetTop || 0,
        Introduce: document.getElementById("Introduce")?.offsetTop || 0,
        Projects: document.getElementById("Projects")?.offsetTop || 0,
        History: document.getElementById("History")?.offsetTop || 0,
      };

      if (scrollPosition >= sections.Projects + window.innerHeight / 4) {
        setCurrentPage("Projects");
      } else if (scrollPosition >= sections.History + window.innerHeight / 4) {
        setCurrentPage("History");
      } else if (scrollPosition >= sections.Introduce + window.innerHeight / 4) {
        setCurrentPage("Introduce");
      } else {
        setCurrentPage("Main");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePageTransition = (
    section: "Main" | "Introduce" | "History" | "Projects"
  ) => {
    setCurrentPage(section);

    const sectionPositions = {
      Main: document.getElementById("Main")?.offsetTop || 0,
      Introduce: document.getElementById("Introduce")?.offsetTop || 0,
      History: document.getElementById("History")?.offsetTop || 0,
      Projects: document.getElementById("Projects")?.offsetTop || 0,
    };

    gsap.to(window, {
      scrollTo: {
        y: sectionPositions[section],
        autoKill: false,
      },
      duration: 1,
      ease: "power2.out",
    });
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Navbar onNavigate={handlePageTransition} currentPage={currentPage} />
      <div className="flex-grow">
        <section id="Main" className="min-h-screen">
          <Main />
        </section>
        <section id="Introduce" className="min-h-screen">
          <Introduce />
        </section>
        <section id="History" className="min-h-screen">
          <History />
        </section>
        <section id="Projects" className="min-h-screen">
          <Projects />
        </section>
      </div>
    </div>
  );
};

export default App;
