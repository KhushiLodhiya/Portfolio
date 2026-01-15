import React from "react";
import "./project.css";

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="bg-lines"></div>

      {/* ===== TITLE ===== */}
      <div className="projects-header">
        <h2 className="section-title">
          Selected <span>Projects</span>
        </h2>
        <p className="projects-sub">
          A few meaningful works where I explored real-world problems,
          clean UI, and thoughtful engineering.
        </p>
      </div>

      {/* ===== FEATURED PROJECT ===== */}
      <div className="project-block featured">
        <div className="project-meta">
          <span>Hackathon · 2024</span>
        </div>

        <h3>AgroFarm — Intelligent AgriTech Ecosystem</h3>

        <p className="project-role">
          Frontend Developer · CodeXccelerate (Gateway University, Delhi)
        </p>

        <p>
          AgroFarm is a full-stack AgriTech platform designed to bridge the
          gap between farmers and industries through transparent crop
          trading, direct communication, and shared resources.
        </p>

        <p>
          Showcased at a national-level hackathon where our team secured
          <strong> 15th place</strong>.
        </p>

        <a
          href="https://github.com/yourgithub/agrofarm"
          target="_blank"
          rel="noreferrer"
          className="project-btn"
        >
          View on GitHub
        </a>
      </div>

      {/* ===== SIH PROJECT ===== */}
      <div className="project-block">
        <div className="project-meta">
          <span>Smart India Hackathon</span>
        </div>

        <h3>GradLink — Alumni & Student Engagement Platform</h3>

        <p>
          GradLink is a centralized platform for alumni data management,
          mentorship, and institutional engagement across campuses.
        </p>

        <ul>
          <li>Hybrid onboarding via domain email & ERP verification</li>
          <li>Role-based dashboards for students, alumni & institutes</li>
          <li>Mentorship, internships & career tracking</li>
          <li>Fundraising & events with Razorpay integration</li>
          <li>Auto alumni assignment after graduation</li>
        </ul>

        <p className="muted">
          Designed to ensure authenticity, engagement, and scalability.
        </p>

        <a
          href="https://github.com/KhushiLodhiya/SIH_gradlink"
          target="_blank"
          rel="noreferrer"
          className="project-btn"
        >
          View on GitHub
        </a>
      </div>

      {/* ===== OTHER PROJECTS ===== */}
      <div className="project-list">

        <div className="project-block small">
          <h4>Portfolio Website</h4>
          <p>
            Personal portfolio built with React featuring smooth animations
            and a minimal UI philosophy.
          </p>

          <a
            href="https://github.com/KhushiLodhiya/Portfolio"
            target="_blank"
            rel="noreferrer"
            className="project-btn small-btn"
          >
            GitHub
          </a>
        </div>

        <div className="project-block small">
          <h4>Coca-Cola Website Clone</h4>
          <p>Frontend recreation of Coca-Cola’s official website.</p>

          <a
            href="https://github.com/KhushiLodhiya/Website-1"
            target="_blank"
            rel="noreferrer"
            className="project-btn small-btn"
          >
            GitHub
          </a>
        </div>

        <div className="project-block small">
          <h4>Moooi Website Clone</h4>
          <p>Pixel-perfect clone of Moooi’s furniture website.</p>

          <a
            href="https://github.com/KhushiLodhiya/clone_Moooi_rect"
            target="_blank"
            rel="noreferrer"
            className="project-btn small-btn"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
