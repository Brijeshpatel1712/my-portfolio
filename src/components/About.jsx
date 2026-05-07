import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="about-card">
          <Row className="align-items-center">
          
            <Col md={7}>
              <h2 className="about-title">About Me</h2>
              <p className="about-intro">
                I'm <span className="about-name">Brijesh Sangani</span> a
                passionate <span className="about-role">FULL STACK Developer</span>{" "}
                who loves building clean and modern web experiences.
              </p>

              <p className="about-desc">
                I'm currently pursuing <strong>BCA</strong> at{" "}
                <strong>Swarrnim Institute of Technology</strong> in Ahmedabad.
                I enjoy turning complex ideas into beautiful, responsive, and 
                user-friendly websites.
              </p>

              <p className="about-desc">
                My focus is on writing clean, scalable code and continuously 
                improving my development skills to build better digital products.
              </p>
            </Col>

            {/* RIGHT SIDE INFO / HIGHLIGHTS */}
            <Col md={5}>
              <div className="about-info-box">
                <h5 className="about-info-title">Quick Info</h5>
                <ul className="about-list">
                  <li>
                    <span>Location</span>
                    <strong>Ahmedabad, India</strong>
                  </li>
                  <li>
                    <span>Education</span>
                    <strong>BCA (Pursuing)</strong>
                  </li>
                  <li>
                    <span>College</span>
                    <strong>Swarrnim Institute of Technology</strong>
                  </li>
                  <li>
                    <span>Expertise</span>
                    <strong>Frontend & Full Stack Development</strong>
                  </li>
                </ul>

              
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
