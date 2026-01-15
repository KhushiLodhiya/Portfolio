import React from "react";
import "./skill.css";

function Skill() {
  return (
    <section id="skills" className="skills">

      {/* background grid */}
      <div className="bg-lines"></div>

      <h2 className="section-title">
        Skills & <span>Tools</span>
      </h2>

      <p className="skills-sub">
        Technologies I use to design, build, and ship clean digital experiences.
      </p>

      <div className="skill-groups">

        <div className="skill-group">
          <h3>Frontend</h3>
          <div className="skill-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

        <div className="skill-group">
          <h3>Backend</h3>
          <div className="skill-list">
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>MySQL</span>
          </div>
        </div>

        <div className="skill-group">
          <h3>Languages</h3>
          <div className="skill-list">
            <span>C</span>
            <span>C++</span>
            <span>Java</span>
          </div>
        </div>

        <div className="skill-group">
          <h3>Tools</h3>
          <div className="skill-list">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Figma</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skill;
