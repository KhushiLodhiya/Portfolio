import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./nav.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <ul>
          <li>
            <ScrollLink to="hero" smooth={true} duration={600} offset={-80}>
              Home
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="about" smooth={true} duration={600} offset={-80}>
              About
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="skills" smooth={true} duration={600} offset={-80}>
              Skills
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="projects" smooth={true} duration={600} offset={-80}>
              Projects
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="contact" smooth={true} duration={600} offset={-80}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <button
          className="resume-btn"
          onClick={() =>
            window.open("Khushi Lodhiya (1).pdf", "_blank")
          }
        >
          View Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
