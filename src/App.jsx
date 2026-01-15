import React from "react";
import Navbar from "./Components/Navbar/nav";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/about";
import Skills from "./Components/Skills/skill";
import Projects from "./Components/Projects/project";
import Contact from "./Components/Contact/contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

