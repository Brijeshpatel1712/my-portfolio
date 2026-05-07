import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import projects from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          A collection of my creative work and professional projects.
        </p>

        <Row className="projects-grid">
          {projects.map((project) => (
            <Col key={project.id} md={4} sm={6} xs={12} className="mb-4">
              <Card className="project-card">
                {/* IMAGE */}
                {project.image && (
                  <div className="project-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.name}
                      className="project-image"
                    />
                  </div>
                )}

                {/* BODY */}
                <Card.Body>
                  <Card.Title className="project-name">
                    {project.name}
                  </Card.Title>
                  <div className="project-buttons">
                    <Button
                      variant="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                    >
                      View Project
                    </Button>
                    <Button
                      variant="outline-light"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-github"
                    >
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
