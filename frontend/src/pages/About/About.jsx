import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaSearch,
  FaBullhorn,
  FaChartLine,
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaCode,
} from "react-icons/fa";
import SEO from "../../components/common/SEO/SEO";
import "./About.css";

function About() {
  const services = [
    {
      icon: <FaGlobe />,
      title: "Website Development",
      text: "Modern, responsive websites designed to turn visitors into customers.",
    },
    {
      icon: <FaSearch />,
      title: "SEO",
      text: "Search engine strategies designed to help your business become easier to find online.",
    },
    {
      icon: <FaBullhorn />,
      title: "Paid Advertising",
      text: "Google and Meta advertising campaigns focused on reaching the right customers.",
    },
    {
      icon: <FaChartLine />,
      title: "Digital Growth",
      text: "Data-driven strategies that help businesses build visibility, leads, and long-term growth.",
    },
  ];

  const reasons = [
    {
      icon: <FaLightbulb />,
      title: "Strategy First",
      text: "We don't believe in random marketing. Every project starts with understanding the business and its goals.",
    },
    {
      icon: <FaRocket />,
      title: "Built for Growth",
      text: "Our websites and marketing strategies are designed with business growth in mind.",
    },
    {
      icon: <FaHandshake />,
      title: "Real Partnership",
      text: "We work with clients as long-term digital growth partners rather than simply completing a project.",
    },
    {
      icon: <FaCode />,
      title: "Modern Solutions",
      text: "We use modern technologies and proven digital strategies to create professional online experiences.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      text: "We learn about your business, audience, competitors, and goals.",
    },
    {
      number: "02",
      title: "Strategize",
      text: "We create a practical digital strategy based on your business objectives.",
    },
    {
      number: "03",
      title: "Build",
      text: "We design and develop your website, campaigns, and digital assets.",
    },
    {
      number: "04",
      title: "Launch",
      text: "We put everything together and launch your digital presence.",
    },
    {
      number: "05",
      title: "Grow",
      text: "We analyze performance and continuously improve your digital strategy.",
    },
  ];

  return (
  <>
    <SEO
      title="About PixelPeak | Digital Growth Agency"
      description="Learn about PixelPeak, a digital marketing agency helping startups and businesses grow through website development, SEO, advertising, social media, and digital strategy."
      canonical="https://YOUR-DOMAIN.com/about"
      keywords="about PixelPeak, digital marketing agency, digital growth agency, web development, SEO services, social media marketing, paid advertising, digital strategy"
    />

    <main className="about-page">
      
      {/* ==========================================
          Hero
      ========================================== */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-content">
            <span className="about-label">ABOUT PIXELPEAK</span>

            <h1>
              We Build Digital Experiences
              <span> That Grow Businesses.</span>
            </h1>

            <p>
              PixelPeak is a digital marketing agency helping startups and
              businesses build a stronger presence online through websites,
              SEO, advertising, social media, and digital strategy.
            </p>

            <div className="about-hero-buttons">
              <Link to="/contact" className="about-primary-btn">
                Let's Work Together
              </Link>

              <Link to="/services" className="about-secondary-btn">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-glow"></div>

            <div className="about-hero-visual">

  <div className="about-glow"></div>

  {/* Animated background grid */}
  <div className="about-grid"></div>

  {/* Orbit rings */}
  <div className="growth-orbit orbit-one"></div>
  <div className="growth-orbit orbit-two"></div>
  <div className="growth-orbit orbit-three"></div>

  {/* Main growth system */}
  <div className="growth-system">

    {/* Center */}
    <div className="growth-center">

      <div className="growth-center-ring"></div>

      <div className="growth-center-content">
        <span>PIXEL</span>
        <strong>PEAK</strong>
        <small>DIGITAL GROWTH</small>
      </div>

    </div>

    {/* Connecting lines */}
    <div className="growth-line growth-line-one"></div>
    <div className="growth-line growth-line-two"></div>
    <div className="growth-line growth-line-three"></div>
    <div className="growth-line growth-line-four"></div>

    {/* Floating nodes */}
    <div className="growth-node node-one">
      <FaGlobe />
      <span>WEB</span>
    </div>

    <div className="growth-node node-two">
      <FaSearch />
      <span>SEO</span>
    </div>

    <div className="growth-node node-three">
      <FaBullhorn />
      <span>ADS</span>
    </div>

    <div className="growth-node node-four">
      <FaChartLine />
      <span>GROWTH</span>
    </div>

  </div>

  {/* Floating statistics */}

  <div className="about-floating-stat stat-growth">
    <span>GROWTH</span>
    <strong>+84%</strong>
    <small>Performance</small>
  </div>

  <div className="about-floating-stat stat-projects">
    <span>PROJECTS</span>
    <strong>50+</strong>
    <small>Digital Projects</small>
  </div>

  <div className="about-floating-stat stat-reach">
    <span>REACH</span>
    <strong>3.2M</strong>
    <small>Monthly Impressions</small>
  </div>

</div>
          </div>
        </div>
      </section>

      {/* ==========================================
          Who We Are
      ========================================== */}
      <section className="about-story">
        <div className="about-container story-grid">
          <div className="story-visual">
            <div className="story-card">
              <span className="story-card-small">PIXELPEAK</span>

              <h3>
                Turning ideas into
                <span> digital growth.</span>
              </h3>

              <div className="story-line"></div>

              <p>
                Websites. Marketing. Strategy. Growth.
              </p>
            </div>
          </div>

          <div className="story-content">
            <span className="about-label">WHO WE ARE</span>

            <h2>
              Your business deserves more than
              <span> just a website.</span>
            </h2>

            <p>
              Your website is often the first interaction a potential customer
              has with your business. That's why PixelPeak focuses on creating
              digital experiences that look professional, communicate your
              value, and help turn visitors into customers.
            </p>

            <p>
              We combine website development, search engine optimization,
              paid advertising, social media marketing, and digital strategy
              to create a complete online growth system for businesses.
            </p>

            <p>
              Our goal is simple: help businesses establish a professional
              online presence and create a digital foundation they can grow
              with.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          What We Do
      ========================================== */}
      <section className="about-services">
        <div className="about-container">
          <div className="section-heading">
            <span className="about-label">WHAT WE DO</span>

            <h2>
              Everything You Need to
              <span> Grow Online.</span>
            </h2>

            <p>
              From your first website to ongoing digital marketing, PixelPeak
              brings the essential pieces of your online presence together.
            </p>
          </div>

          <div className="about-services-grid">
            {services.map((service, index) => (
              <div className="about-service-card" key={index}>
                <div className="service-icon">{service.icon}</div>

                <span className="service-number">
                  0{index + 1}
                </span>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          Why PixelPeak
      ========================================== */}
      <section className="about-why">
        <div className="about-container">
          <div className="section-heading">
            <span className="about-label">WHY PIXELPEAK</span>

            <h2>
              We Think About Your
              <span> Business, Not Just Your Website.</span>
            </h2>

            <p>
              Every decision we make should have a purpose: helping your
              business communicate better, reach more people, and grow.
            </p>
          </div>

          <div className="about-reasons-grid">
            {reasons.map((reason, index) => (
              <div className="reason-card" key={index}>
                <div className="reason-icon">{reason.icon}</div>

                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          Process
      ========================================== */}
      <section className="about-process">
        <div className="about-container">
          <div className="section-heading">
            <span className="about-label">OUR PROCESS</span>

            <h2>
              From Idea to
              <span> Growth.</span>
            </h2>

            <p>
              A simple process designed to keep every project focused,
              organized, and connected to your business goals.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <div className="process-card" key={item.number}>
                <span className="process-number">{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CTA
      ========================================== */}
      <section className="about-cta">
        <div className="about-container">
          <div className="cta-box">
            <span className="about-label">READY TO GROW?</span>

            <h2>
              Let's Build Something
              <span> That Moves Your Business Forward.</span>
            </h2>

            <p>
              Tell us about your business and let's discuss how PixelPeak can
              help you build a stronger digital presence.
            </p>

            <Link to="/contact" className="about-primary-btn">
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
        </main>
  </>
  );
}

export default About;