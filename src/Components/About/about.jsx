import React from "react";
import "./about.css";

function About() {
  return (
    <section className="about" id="about">
      {/* background grid */}
      <div className="bg-lines"></div>

      <div className="about-container">
        {/* LEFT TEXT */}
        <div className="about-left">
          <span className="about-eyebrow">About Me</span>

          <h2 className="about-title">
            A developer who enjoys building
            <span> thoughtful digital experiences</span>
          </h2>

          <p className="about-text">
            I’m <strong>Khushi Lodhiya</strong>, a software development student
            with a growing passion for frontend development and clean user
            interfaces.
          </p>

          <p className="about-text">
            My journey into web development began with curiosity — experimenting
            with layouts, animations, and interactions — and gradually evolved
            into a deep interest in crafting intuitive, user-focused products.
          </p>

          <p className="about-text">
            I enjoy working at the intersection of logic and creativity, where
            design meets code. I focus on writing clean, maintainable code,
            building responsive layouts, and continuously refining the user
            experience.
          </p>

          <p className="about-text highlight">
            Currently, I’m seeking <strong>internship</strong> and{" "}
            <strong>freelance opportunities</strong> where I can contribute,
            learn from real-world challenges, and grow as a developer.
          </p>
        </div>

        {/* RIGHT STATS */}
        <div className="about-right">
          <div className="about-card">
            <h3>3+</h3>
            <p>Projects Built</p>
          </div>

          <div className="about-card">
            <h3>Frontend</h3>
            <p>Focused Development</p>
          </div>

          <div className="about-card">
            <h3>Continuous</h3>
            <p>Learning Mindset</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
