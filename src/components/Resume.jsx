import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <Container>
        <div className="resume-card">
          <Row className="align-items-center">
            {/* LEFT SIDE */}
            <Col md={6}>
              <h2 className="resume-title">Resume</h2>
              <p className="resume-text">
                You can view or download my latest resume to see more details
                about my education, skills and projects.
              </p>

              <Button
                className="resume-btn"
                href="/images/BRIJESH-SANGANI.pdf" // public folder ma PDF
                target="_blank"
                rel="noopener noreferrer"
              >
                View / Download Resume
              </Button>
            </Col>

            {/* RIGHT SIDE – QUICK SUMMARY */}
            <Col md={6}>
              <div className="resume-info">
                <h5>Quick Summary</h5>
                <ul>
                  <li>
                    <span>Name</span>
                    <strong>Brijesh Sangani</strong>
                  </li>
                  <li>
                    <span>Role</span>
                    <strong>Frontend Developer</strong>
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
                    <span>Field</span>
                    <strong>Frontend Development</strong>
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

export default Resume;
