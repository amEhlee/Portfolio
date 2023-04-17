import React, { useRef } from "react";
import { Navbar } from "flowbite-react";

// import pages
// TODO:remove import ExperiencePage from "./pages/ExperiencePage";
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

  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <a href="#Home" className="no-underline text-black">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">
              Elie Kabengele
            </span>
          </Navbar.Brand>
        </a>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <button onClick={() => {handleScroll(HeroRef);}}>
            <Navbar.Link>Home</Navbar.Link>
          </button>
          <button onClick={() => {handleScroll(AboutRef);}}>
            <Navbar.Link>About</Navbar.Link>
          </button>
          <button onClick={() => {handleScroll(ProjectsRef);}}>
            <Navbar.Link>Projects</Navbar.Link>
          </button>
          <button onClick={() => {handleScroll(ContactMeRef);}}>
            <Navbar.Link>Contact Me</Navbar.Link>
          </button>
        </Navbar.Collapse>
      </Navbar>

      <div className="font-Poppins">
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
