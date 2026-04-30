import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-big-section">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE CONTENT */}
          <Col md={6}>
            <h1 className="skills-main-title">
              Me and <br /> <span>My Tech Stack</span>
            </h1>

            <p className="skills-description">
              Hi, I’m Brijesh Sangani — a passionate Frontend Developer who
              loves creating clean, modern and responsive web interfaces using
              HTML, CSS, JavaScript, React and Node.js. I enjoy turning ideas
              into beautiful UI and continuously learning new technologies to
              improve my workflow.
            </p>

            <p className="skills-description">
              I focus on writing clean code, building real-world projects and
              improving my problem-solving skills. I love exploring new
              frameworks and tools to make better user experiences.
            </p>
          </Col>

          {/* RIGHT SIDE ICONS CLOUD */}
          <Col md={6} className="skills-icons-wrapper">
            <div className="skills-cloud">
              <FaHtml5 className="skill-icon html" />
              <FaCss3Alt className="skill-icon css" />
              <FaJs className="skill-icon js" />
              <SiMongodb className="skill-icon mongo" />
              <SiExpress className="skill-icon express" />
              <FaReact className="skill-icon react" />
              <FaNodeJs className="skill-icon node" />
              <FaGitAlt className="skill-icon git" />
              <FaGithub className="skill-icon github" />
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
