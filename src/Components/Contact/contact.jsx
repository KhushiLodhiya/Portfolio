import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_a4i5n3o"
      )
      .then(
        () => {
          alert("✨ Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <section className="contact">
      {/* background grid */}
      <div className="bg-lines"></div>

      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-info">
          <h3>Let’s Create Something ✨</h3>
          <p>
            Whether it’s an internship, freelance project, or just a friendly
            hello — my inbox is always open.
          </p>

          <div className="contact-detail">
            <span>Email</span>
            <a href="mailto:lodhiyakhushi99@gmail.com">
              lodhiyakhushi99@gmail.com
            </a>
          </div>

          <div className="contact-note">
            I usually reply within <strong>24 hours</strong>.
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label>Your Email</label>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <label>Subject</label>
          </div>

          <div className="input-group textarea">
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label>Your Message</label>
          </div>

          <button type="submit" className="send-btn">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
