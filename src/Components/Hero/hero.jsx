import React from "react";
import {Link as ScrollLink} from 'react-scroll';
import Picture from '../../Assets/portfolio-pp.jpg';
import './hero.css';

function Hero(){
    return(
        <>
        <section id="hero" className="hero">
  {/* Left side */}
  <div className="hero-left">
    <h1>
      Hey, I’m <span>Khushi Lodhiya</span> 👋
    </h1>
    <p>
      An aspiring <strong>Software Developer</strong> passionate about
      <strong> web development</strong>, crafting intuitive UIs, and
      building impactful digital solutions 🚀
    </p>

    <div className="hero-buttons">
      <button
        className="btn connect-btn"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/khushi-lodhiya-5aa172321",
            "_blank"
          )
        }
      >
        Let’s Connect
      </button>

      <ScrollLink
        to="projects"
        smooth={true}
        duration={600}
        className="btn project-btn"
      >
        View Projects
      </ScrollLink>
    </div>
  </div>

 
  <div className="hero-right">
    <img src={Picture} alt="profile-picture" />
  </div>
</section>

        </>
    )
}
export default Hero;