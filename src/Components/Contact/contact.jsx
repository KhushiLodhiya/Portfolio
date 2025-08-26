import React, { useState } from "react";
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

    // TODO: send to backend or email service
    console.log("Form Data Submitted:", formData);

    alert("Thank you for reaching out! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">
        {/* Left: Info */}
        <div className="contact-info">
          <h3>Let’s Connect</h3>
          <p>
            I’m always open to discussing new opportunities, projects, or ideas.
            Feel free to drop a message and I’ll respond as soon as possible.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:lodhiyakhushi99@gmail.com">
              lodhiyakhushi99@gmail.com
            </a>
          </p>
        </div>

        {/* Right: Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
