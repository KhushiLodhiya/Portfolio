import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Picture from "../../Assets/portfolio-pp.jpg";
import GhibliPic from "../../Assets/profile.portfolio.g.png";
import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* animated grid */}
      <div className="bg-lines"></div>

      {/* LEFT CONTENT */}
      <div className="hero-left">
        <div className="hero-title">
          <span className="intro-line">HELLO, I AM</span>
          <h1 className="name">Khushi Lodhiya</h1>
        </div>

        <p className="hero-desc">
          A curious <span>Software Developer</span>
        </p>

        <p className="hero-sub">
          I enjoy crafting meaningful web experiences, blending clean
          design with thoughtful interactions and modern frontend
          technologies.
        </p>

        <div className="hero-buttons">
          <a
            href="https://www.linkedin.com/in/khushi-lodhiya-5aa172321"
            target="_blank"
            rel="noreferrer"
            className="hero-btn primary"
          >
            Let’s Connect
          </a>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={600}
            className="hero-btn ghost"
          >
            View Projects
          </ScrollLink>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <div className="photo-wrapper ghibli-hover">
          <img
            src={Picture}
            alt="Khushi"
            className="photo real-photo"
          />
          <img
            src={GhibliPic}
            alt="Khushi Ghibli"
            className="photo ghibli-photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
