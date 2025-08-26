import React from "react";
import image from '../../Assets/portfolio-pp.jpg'
import "./about.css";

function AboutPage() {
  return (
    <section className="about">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-container">
        {/* Left: Text */}
        <div className="about-text">
          <p>
            I’m <span className="highlight">Khushi Lodhiya</span>, 
            a self-motivated <strong>Full Stack Developer</strong> 
            with a passion for building scalable applications 
            and creating user-friendly digital solutions.  
          </p>

          <p>
            Currently pursuing <strong>B.Tech in Computer Science (2024–2028)</strong>, 
            with a <span className="highlight">9.40 CGPA (1st Year)</span>. 
            Alongside academics, I am continuously upskilling in modern technologies 
            and contributing to projects that make an impact.  
          </p>

          <h3>Education</h3>
          <ul className="edu-list">
            <li>
              <strong>B.Tech CSE</strong> — 2024–2028, Ongoing 
              <span> | CGPA: 9.40 (1st Year)</span>
            </li>
            <li>
              <strong>Shubham School, Rajkot</strong> — Class 12th PCM (2024) 
              <span> | 72%</span>
            </li>
            <li>
              <strong>Shubham School, Rajkot</strong> — Class 10th (2022) 
              <span> | 82%</span>
            </li>
          </ul>

          <h3>Highlights</h3>
          <ul className="highlights-list">
            <li>Strong foundation in <strong>Frontend & Backend Development</strong></li>
            <li>Active participant in <strong>Hackathons & Team Projects</strong></li>
            <li>Ranked <strong>15th</strong> in a National Hackathon (CodeXccelerate, Delhi)</li>
            <li>Interested in <strong>Open Source & Collaborative Development</strong></li>
          </ul>

          <h3>Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:lodhiyakhushi99@gmail.com">
              lodhiyakhushi99@gmail.com
            </a>
          </p>
        </div>

        {/* Right: Image */}
        <div className="about-right">
          <img
            src={image} 
            alt="About"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
