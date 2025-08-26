import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/nav';
import Hero from './Components/Hero/hero';
import Skills from './Components/Skills/skill';
import Projects from './Components/Projects/project';
import About from './Components/About/about';
import Contact from './Components/Contact/contact'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <>
             <Hero />
             <Skills />
            <Projects/>
            <Contact/>
          </>
        }/>       
        { <Route path="/about" element={<About />} /> }
          { <Route path="/project" element={<Projects/>} /> }
      </Routes>
    </Router>
    </>
  )
}

export default App
