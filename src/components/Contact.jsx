import React from "react";
import { Container } from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="contact-card">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">
            Feel free to reach out for collaboration or just a friendly chat.
          </p>

          <div className="contact-list">
            {/* Name */}
            <div className="contact-item">
              <FaUser className="contact-icon" />
              <span>Brijesh Sangani</span>
            </div>

            {/* Email */}
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href="mailto:brijeshsangani088@gmail.com">
                brijeshsangani088@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Ahmedabad, India</span>
            </div>
          </div>

          {/* Social Icons Row */}
          <div className="social-row">
            <a
              href="https://github.com/Brijeshpatel1712"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/brijesh-sangani-33a512246"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact-icon" />
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="site-footer">
          <p>© 2026 Brijesh Sangani. All rights reserved.</p>
        </footer>
      </Container>
    </section>
  );
};

export default Contact;
