import React, { useState } from "react";
import "./project.css";

function Projects() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My <span>Projects</span></h2>

      {/* AgroFarm Highlight */}
      <div className="project-card highlight">
        <h3>AgroFarm – Intelligent AgriTech Ecosystem</h3>
        <p className="project-role">
          <strong>Role:</strong> Frontend Developer
        </p>
        <p>
          AgroFarm is a full-stack web platform built to bridge the gap between 
          farmers and industries, empowering direct communication, resource sharing, 
          and transparent crop trading. This project was showcased at the national-level 
          hackathon <strong>CodeXccelerate, Gateway University Delhi</strong> where we secured 
          <strong> 15th place</strong>.
        </p>

        {showMore && (
          <div className="project-details">
            <h4>Why AgroFarm?</h4>
            <ul>
              <li>🌾 Bridges the farmer–industry gap by eliminating middlemen.</li>
              <li>🤝 Empowers small farmers with a community-driven learning space.</li>
              <li>💰 Promotes fair trade via real-time market insights.</li>
              <li>⚡ Boosts smart agriculture through soil testing and analytics.</li>
              <li>📱 Encourages rural tech adoption with simple, regional-friendly design.</li>
              <li>🇮🇳 Supports India’s Digital Agriculture Mission & Atmanirbhar Bharat vision.</li>
            </ul>
          </div>
        )}

        <button className="readmore-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Read More"}
        </button>
      </div>

<div className="project-card">
          <h3>Portfolio</h3>
          <p>A modern and responsive portfolio website built using React, Tailwind CSS, and custom animations. It highlights my skills, projects, achievements, and contact information in a professional manner. The design is focused on minimalism and user experience with smooth interactions and clean layouts.</p>
          <a href="https://github.com/yourgithub/spotify-clone" target="_blank" rel="noreferrer" className="repo-link">
            View on GitHub
          </a>
        </div>
      {/* Other Projects */}
      <div className="projects-grid">
        <div className="project-card">
          <h3>Coca-Cola Website Clone</h3>
          <p>Frontend clone of Coca-Cola’s official website.</p>
          <a href="https://github.com/KhushiLodhiya/Website-1" target="_blank" rel="noreferrer" className="repo-link">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Moooi Website Clone</h3>
          <p>Pixel-perfect clone of Mooi furniture website.</p>
          <a href="https://github.com/KhushiLodhiya/clone_Moooi_rect" target="_blank" rel="noreferrer" className="repo-link">
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3>Spotify Clone</h3>
          <p>Music streaming clone built with React.</p>
          <a href="https://github.com/yourgithub/spotify-clone" target="_blank" rel="noreferrer" className="repo-link">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
