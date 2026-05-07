import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const Home = () => {

  useEffect(() => {
    document.title = "Brijesh Sangani ";
  })

  return (
    <section className="hero-section" id="home">
      <Container className="hero-card">
        {/* LEFT SIDE TEXT */}
        <div className="hero-left">
          <p className="hero-tagline">HELLO THERE, WELCOME TO MY SITE</p>

          <h1 className="hero-title">
            I'm <span>Brijesh Sangani</span>
          </h1>

          <h2 className="hero-subtitle">
            <span className="hero-highlight">A Full Stack Developer</span> <br />

          </h2>

          <div className="hero-buttons">
            <Button className="hero-btn-primary" href="#projects">
              SEE PORTFOLIO
            </Button>
            <Button className="hero-btn-outline" href="#contact">
              CONTACT ME
            </Button>
            <Button className="hero-btn-outline" href="/images/BRIJESH-SANGANI.pdf" target="_blank">
              RESUME
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-right">
          <div className="hero-image-frame">
            <img
              src="/images/myphoto.png"   // <-- tamaru photo
              alt="Brijesh Sangani"
              className="hero-image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
