import React from "react";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
//import Certifications from "../sections/Certifications";
import Experience from "../sections/Experience";
//import Articles from "../sections/Articles";
import Projects from "../sections/Projects";

function Content() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </main>
  );
}

export default Content;
