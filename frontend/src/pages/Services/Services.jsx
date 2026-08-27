import { Link } from "react-router-dom";

import {
  FaLaptopCode,
  FaSearch,
  FaGoogle,
  FaFacebookF,
  FaShareAlt,
  FaChartLine,
  FaCode,
  FaBullseye,
  FaArrowRight,
  FaCheck,
  FaLightbulb,
  FaRocket,
  FaChartBar,
} from "react-icons/fa";

import "./Services.css";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      number: "01",
      title: "Website Development",
      description:
        "We build fast, modern, professional websites designed to turn visitors into customers and help your business establish a strong digital presence.",
      features: [
        "Business Websites",
        "E-commerce Websites",
        "Landing Pages",
        "Custom Web Development",
      ],
    },
    {
      icon: <FaSearch />,
      number: "02",
      title: "SEO",
      description:
        "Improve your visibility on search engines and attract customers who are actively looking for your products or services.",
      features: [
        "Local SEO",
        "Technical SEO",
        "On-Page SEO",
        "SEO Strategy",
      ],
    },
    {
      icon: <FaGoogle />,
      number: "03",
      title: "Google Ads",
      description:
        "Reach potential customers at the exact moment they are searching for your services with carefully managed Google advertising campaigns.",
      features: [
        "Search Campaigns",
        "Display Campaigns",
        "Keyword Research",
        "Conversion Tracking",
      ],
    },
    {
      icon: <FaFacebookF />,
      number: "04",
      title: "Meta Ads",
      description:
        "Create targeted Facebook and Instagram campaigns that put your business in front of the right audience.",
      features: [
        "Facebook Advertising",
        "Instagram Advertising",
        "Audience Targeting",
        "Campaign Optimization",
      ],
    },
    {
      icon: <FaShareAlt />,
      number: "05",
      title: "Social Media Marketing",
      description:
        "Build a recognizable brand and maintain a professional social presence with strategic content and consistent marketing.",
      features: [
        "Content Strategy",
        "Social Management",
        "Brand Growth",
        "Audience Engagement",
      ],
    },
    {
      icon: <FaChartLine />,
      number: "06",
      title: "Digital Growth Strategy",
      description:
        "Turn your digital presence into a growth system with strategies built around your business goals, customers, and market.",
      features: [
        "Business Analysis",
        "Growth Planning",
        "Conversion Strategy",
        "Performance Tracking",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      icon: <FaLightbulb />,
      title: "Discovery",
      description:
        "We learn about your business, audience, competitors, goals, and current digital presence.",
    },
    {
      number: "02",
      icon: <FaBullseye />,
      title: "Strategy",
      description:
        "We create a clear digital strategy focused on the opportunities that can make the biggest difference.",
    },
    {
      number: "03",
      icon: <FaCode />,
      title: "Build",
      description:
        "Our team develops and implements the website, campaigns, SEO, and digital assets your business needs.",
    },
    {
      number: "04",
      icon: <FaRocket />,
      title: "Launch",
      description:
        "We test everything carefully and launch your digital presence with performance and user experience in mind.",
    },
    {
      number: "05",
      icon: <FaChartBar />,
      title: "Grow",
      description:
        "We monitor performance, identify opportunities, and continuously improve your digital growth.",
    },
  ];

  return (
    <main className="services-page">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="services-hero">
        <div className="services-container services-hero-grid">
          {/* HERO CONTENT */}

          <div className="services-hero-content">
            <span className="services-label">OUR SERVICES</span>

            <h1>
              Digital Services
              <span> Built for Growth</span>
            </h1>

            <p>
              PixelPeak helps Canadian businesses build a stronger digital
              presence through professional websites, SEO, paid advertising,
              social media marketing, and growth strategy.
            </p>

            <div className="services-hero-buttons">
              <a
  href="https://calendar.app.google/NeEae2sdgGubo1fZ6"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  Book Free Consultation
                <FaArrowRight />
              </a>

              <Link to="/portfolio" className="services-secondary-btn">
                View Our Work
              </Link>
            </div>
          </div>

          {/* =========================================================
              PREMIUM ANIMATED GROWTH DASHBOARD
          ========================================================= */}

          <div className="services-hero-visual">
            <div className="chart-glow"></div>

            <div className="growth-dashboard">
              {/* FLOATING STAT 1 */}

              <div className="growth-stat stat-one">
                <span>Growth</span>
                <strong>+28.4%</strong>
              </div>

              {/* FLOATING STAT 2 */}

              <div className="growth-stat stat-two">
                <span>Conversions</span>
                <strong>+42%</strong>
              </div>

              {/* MAIN CHART */}

              <div className="growth-chart">
                <div className="chart-grid"></div>

                {/* Y AXIS */}

                <div className="chart-label label-one">100</div>
                <div className="chart-label label-two">75</div>
                <div className="chart-label label-three">50</div>
                <div className="chart-label label-four">25</div>

                {/* GROWTH BARS */}

                <div className="growth-bars">
                  <div className="growth-bar bar-one">
                    <span></span>
                  </div>

                  <div className="growth-bar bar-two">
                    <span></span>
                  </div>

                  <div className="growth-bar bar-three">
                    <span></span>
                  </div>

                  <div className="growth-bar bar-four">
                    <span></span>
                  </div>

                  <div className="growth-bar bar-five">
                    <span></span>
                  </div>

                  <div className="growth-bar bar-six">
                    <span></span>
                  </div>

                  <div className="growth-bar bar-seven">
                    <span></span>
                  </div>

                  <div className="growth-bar bar-eight">
                    <span></span>
                  </div>
                </div>

                {/* GROWTH CURVE */}

                <svg
                  className="growth-svg"
                  viewBox="0 0 700 300"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="growthGradient"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="55%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#d4af37" />
                    </linearGradient>

                    <filter id="lineGlow">
                      <feGaussianBlur
                        stdDeviation="5"
                        result="blur"
                      />

                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* AREA */}

                  <path
                    className="growth-area"
                    d="
                      M 0 260
                      C 80 250, 100 220, 160 225
                      C 220 230, 240 180, 300 190
                      C 350 200, 380 145, 430 155
                      C 480 165, 500 110, 550 120
                      C 600 130, 620 65, 700 25
                      L 700 300
                      L 0 300
                      Z
                    "
                  />

                  {/* MAIN LINE */}

                  <path
                    className="growth-path"
                    d="
                      M 0 260
                      C 80 250, 100 220, 160 225
                      C 220 230, 240 180, 300 190
                      C 350 200, 380 145, 430 155
                      C 480 165, 500 110, 550 120
                      C 600 130, 620 65, 700 25
                    "
                  />

                  {/* FINAL POINT */}

                  <circle
                    className="growth-point"
                    cx="700"
                    cy="25"
                    r="6"
                  />
                </svg>

                {/* FINAL GROWTH POINT */}

                <div className="chart-end-point">
                  <span></span>
                </div>

                {/* BASELINE */}

                <div className="chart-baseline"></div>
              </div>

              {/* FLOATING STAT 3 */}

              <div className="growth-stat stat-three">
                <span>Performance</span>
                <strong>94.8%</strong>
              </div>

              {/* DASHBOARD FOOTER */}

              <div className="dashboard-footer">
                <div>
                  <small>Digital Growth</small>
                  <strong>↑ Accelerating</strong>
                </div>

                <div className="dashboard-live">
                  <span></span>
                  LIVE PERFORMANCE
                </div>
              </div>

              {/* DECORATIVE PARTICLES */}

              <span className="chart-particle particle-one"></span>
              <span className="chart-particle particle-two"></span>
              <span className="chart-particle particle-three"></span>
              <span className="chart-particle particle-four"></span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEBSITE DEVELOPMENT
      ========================================================= */}

      <section className="service-feature-section">
        <div className="services-container feature-grid">
          <div className="feature-visual website-visual">
            <div className="feature-window">
              <div className="feature-window-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="website-preview">
                <div className="preview-nav">
                  <strong>YOUR BRAND</strong>

                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="preview-hero">
                  <small>BUILD YOUR FUTURE</small>

                  <h3>
                    Your Business
                    <br />
                    Deserves Better.
                  </h3>

                  <div className="preview-button"></div>
                </div>

                <div className="preview-cards">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-content">
            <span className="services-label">
              01 / WEBSITE DEVELOPMENT
            </span>

            <h2>
              Websites That
              <span> Work for Your Business</span>
            </h2>

            <p>
              Your website is often the first interaction a potential customer
              has with your business. We create modern, responsive websites
              that communicate your value clearly and make it easy for
              customers to take action.
            </p>

            <div className="feature-list">
              <div>
                <FaCheck />
                <span>Modern professional design</span>
              </div>

              <div>
                <FaCheck />
                <span>Fully responsive across devices</span>
              </div>

              <div>
                <FaCheck />
                <span>Fast and optimized performance</span>
              </div>

              <div>
                <FaCheck />
                <span>SEO-friendly structure</span>
              </div>

              <div>
                <FaCheck />
                <span>Conversion-focused user experience</span>
              </div>

              <div>
                <FaCheck />
                <span>Easy future expansion</span>
              </div>
            </div>

            <Link to="/contact" className="feature-btn">
              Build Your Website
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          MARKETING & GROWTH
      ========================================================= */}

      <section className="marketing-section">
        <div className="services-container">
          <div className="services-section-heading">
            <span className="services-label">MARKETING & GROWTH</span>

            <h2>
              Get Found. Get
              <span> Customers.</span>
            </h2>

            <p>
              A professional website is only the beginning. We help bring
              qualified visitors to your business and turn attention into
              measurable opportunities.
            </p>
          </div>

          <div className="marketing-grid">
            {/* SEO */}

            <div className="marketing-card">
              <div className="marketing-icon">
                <FaSearch />
              </div>

              <span>SEO</span>

              <h3>Be Visible When Customers Search</h3>

              <p>
                Improve your search visibility and build a sustainable source
                of organic traffic through strategic SEO.
              </p>

              <Link to="/contact">
                Learn More <FaArrowRight />
              </Link>
            </div>

            {/* GOOGLE ADS */}

            <div className="marketing-card">
              <div className="marketing-icon">
                <FaGoogle />
              </div>

              <span>GOOGLE ADS</span>

              <h3>Reach Customers Ready to Buy</h3>

              <p>
                Put your business in front of high-intent customers with
                carefully structured and optimized Google campaigns.
              </p>

              <Link to="/contact">
                Learn More <FaArrowRight />
              </Link>
            </div>

            {/* META ADS */}

            <div className="marketing-card">
              <div className="marketing-icon">
                <FaFacebookF />
              </div>

              <span>META ADS</span>

              <h3>Reach the Right Audience</h3>

              <p>
                Use Facebook and Instagram advertising to reach targeted
                audiences and create new opportunities for your business.
              </p>

              <Link to="/contact">
                Learn More <FaArrowRight />
              </Link>
            </div>

            {/* SOCIAL MEDIA */}

            <div className="marketing-card">
              <div className="marketing-icon">
                <FaShareAlt />
              </div>

              <span>SOCIAL MEDIA</span>

              <h3>Build a Stronger Brand</h3>

              <p>
                Create a consistent and professional social presence that
                keeps your business connected with its audience.
              </p>

              <Link to="/contact">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY PIXELPEAK
      ========================================================= */}

      <section className="why-services">
        <div className="services-container">
          <div className="services-section-heading">
            <span className="services-label">WHY PIXELPEAK</span>

            <h2>
              We Don't Just Deliver
              <span> Services</span>
            </h2>

            <p>
              We focus on how every part of your digital presence contributes
              to your actual business goals.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">01</div>

              <h3>Business First</h3>

              <p>
                Every recommendation starts with your business objectives,
                customers, and market rather than following generic trends.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">02</div>

              <h3>Modern Technology</h3>

              <p>
                We use modern development and digital marketing practices to
                create experiences that are fast, scalable, and professional.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">03</div>

              <h3>Clear Communication</h3>

              <p>
                You stay informed throughout the project with straightforward
                communication and clear progress updates.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">04</div>

              <h3>Long-Term Growth</h3>

              <p>
                We build digital systems that can continue evolving as your
                business grows instead of creating something that becomes
                outdated quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section className="services-process">
        <div className="services-container">
          <div className="services-section-heading">
            <span className="services-label">OUR PROCESS</span>

            <h2>
              From Idea to
              <span> Growth</span>
            </h2>

            <p>
              A simple and transparent process designed to move your project
              forward without unnecessary complexity.
            </p>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <div className="process-card" key={step.number}>
                <div className="process-top">
                  <span>{step.number}</span>

                  <div className="process-icon">{step.icon}</div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="services-cta">
        <div className="services-container">
          <div className="services-cta-box">
            <span className="services-label">LET'S GROW TOGETHER</span>

            <h2>
              Ready to Take Your
              <span> Business Online?</span>
            </h2>

            <p>
              Tell us about your business, your goals, and where you want to
              go. We'll help you figure out the right digital strategy.
            </p>

            <div className="cta-buttons">
              <Link to="/contact" className="services-primary-btn">
                Book a Free Consultation
                <FaArrowRight />
              </Link>

              <Link to="/portfolio" className="services-secondary-btn">
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;