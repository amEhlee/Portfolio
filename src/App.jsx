import React, { useRef } from "react";
import Pdf from "./assets/resume/Resume.pdf";

// import pages
import Hero from "./components/Hero";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import FooterBlock from "./components/FooterBlock";

function App() {
  const HeroRef = useRef(null);
  const AboutRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactMeRef = useRef(null);

  function handleScroll(givenRef) {
    givenRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function NavScrollButton({ givenRef, name, className }) {
    return (
      <button
        className={`hover:text-primaryLightBlue duration-300 ${className}`}
        onClick={() => {
          handleScroll(givenRef);
        }}
      >
        <p>{name}</p>
      </button>
    );
  }

  return (
    <>
      <nav className="text-slate-200 fixed top-0 w-full z-10 backdrop-blur-3xl bg-primaryNavDarkBlue shadow-2xl ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavScrollButton
            givenRef={HeroRef}
            name="Elie Kabengele"
            className="self-center text-2xl font-semibold whitespace-nowrap select-non duration-300"
          />
          <div className="hidden w-full md:block md:w-auto text-slate-200">
            <div className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <NavScrollButton givenRef={HeroRef} name="Home" />
              <NavScrollButton givenRef={AboutRef} name="About" />
              <NavScrollButton givenRef={ProjectsRef} name="Projects" />
              <NavScrollButton givenRef={ContactMeRef} name="Contact Me" />
              <button className="border-slate-200 border-2 rounded-md p-2 hover:border-primaryLightBlue hover:text-primaryLightBlue duration-300">
                <a href={Pdf} target="_blank">
                  <p>Resume</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Page Content */}
      <div className="font-Poppins pt-16">
        <div ref={HeroRef}>
          <Hero />
        </div>
        <div ref={AboutRef}>
          <AboutPage />
        </div>
        <div ref={ProjectsRef}>
          <ProjectsPage />
        </div>
        <div ref={ContactMeRef}>
          <ContactPage />
        </div>
        <FooterBlock />
      </div>
    </>
  );
}

export default App;
