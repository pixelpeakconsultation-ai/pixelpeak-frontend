import "./Hero.css";

import Particles from "./Particles";

import { Link } from "react-router-dom";

import { TypeAnimation } from "react-type-animation";

import robotLogo from "../../../assets/images/pixelpeak-robot-logo.png";

function Hero() {
  return (
    <section className="hero">

      {/* ==========================================
          BACKGROUND PARTICLES
      ========================================== */}

      <div className="hero-particles">
        <Particles />
      </div>


      {/* ==========================================
          HERO CONTAINER
      ========================================== */}

      <div className="hero-container">


        {/* ==========================================
            LEFT — CONTENT
        ========================================== */}

        <div className="hero-left">

          {/* Tag */}

          <span className="hero-tag">
            Digital Growth Partner
          </span>


          {/* Title */}

          <h1 className="hero-title">
            We Build{" "}

            <TypeAnimation
              sequence={[
                "Professional Websites",
                3000,

                "SEO Strategies",
                3000,

                "Google Ads Campaigns",
                3000,

                "Social Media Marketing",
                3000,

                "E-commerce Stores",
                3000,

                "Brands That Grow",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </h1>


          {/* Description */}

          <p className="hero-description">
            Professional websites, SEO, Google Ads and Social Media
            marketing for startups and local businesses across Canada.
          </p>


          {/* ==========================================
              BUTTONS
          ========================================== */}

          <div className="hero-buttons">

            {/* Book Free Consultation */}

            <a
              href="https://calendar.app.google/NeEae2sdgGubo1fZ6"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn"
            >
              Book Free Consultation
            </a>


            {/* Explore Services */}

            <Link
              to="/services"
              className="secondary-btn"
            >
              Explore Services
            </Link>

          </div>


          {/* ==========================================
              STATS
          ========================================== */}

          <div className="hero-stats">

            <div className="hero-stat">
              <h2>150+</h2>
              <span>Projects</span>
            </div>

            <div className="hero-stat">
              <h2>98%</h2>
              <span>Satisfaction</span>
            </div>

            <div className="hero-stat">
              <h2>5+</h2>
              <span>Years</span>
            </div>

          </div>

        </div>


        {/* ==========================================
            RIGHT — ROBOT LOGO
        ========================================== */}

        <div className="hero-right">

          <div className="hero-logo-area">

            <div className="logo-glow"></div>

            <img
              src={robotLogo}
              alt="PixelPeak Robot Logo"
              className="hero-robot-logo"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;