import { useState } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "NorthPeak Construction",
    category: "Websites",
    industry: "Construction",
    description:
      "A modern business website designed to establish trust, showcase services and generate qualified leads.",
    services: ["Website Development", "SEO", "Lead Generation"],
    result: "+68% Leads",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.dhgriffin.com/",
  },
  {
    id: 2,
    title: "UrbanCart",
    category: "E-Commerce",
    industry: "E-Commerce",
    description:
      "A conversion-focused online store with a clean shopping experience and optimized product presentation.",
    services: ["E-Commerce", "UI/UX", "SEO"],
    result: "+42% Conversion",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.fulfyld.com/",
  },
  {
    id: 3,
    title: "Maple Finance",
    category: "Websites",
    industry: "Finance",
    description:
      "A professional corporate website created to communicate complex financial services clearly.",
    services: ["Website Development", "UI/UX", "SEO"],
    result: "+91% Engagement",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    link: "https://carta.com/",
  },
  {
    id: 4,
    title: "TrueNorth Dental",
    category: "SEO",
    industry: "Healthcare",
    description:
      "A local growth strategy combining search optimization and conversion-focused website improvements.",
    services: ["SEO", "Local SEO", "Website Optimization"],
    result: "+180% Traffic",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.straumann.com",
  },
  {
    id: 5,
    title: "Elevate Fitness",
    category: "Digital Marketing",
    industry: "Fitness",
    description:
      "A digital marketing campaign built to increase awareness, leads and online memberships.",
    services: ["Google Ads", "Meta Ads", "Social Media"],
    result: "3.8x ROAS",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.whoop.com/",
  },
  {
    id: 6,
    title: "Luxe Interiors",
    category: "Digital Marketing",
    industry: "Interior Design",
    description:
      "A premium digital presence designed to showcase projects and attract high-value clients.",
    services: ["Website Development", "Social Media", "SEO"],
    result: "+74% Enquiries",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    link: "https://guide.michelin.com",
  },
  {
    id: 7,
    title: "Evergreen Landscaping",
    category: "Websites",
    industry: "Landscaping",
    description:
      "A modern service-based website built to showcase landscaping projects and increase local enquiries.",
    services: ["Website Development", "Local SEO", "Lead Generation"],
    result: "+57% Leads",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80",
    link: "https://petersonslandscape.com/",
  },
  {
    id: 8,
    title: "Urban Estate",
    category: "Websites",
    industry: "Real Estate",
    description:
      "A premium real estate website designed to showcase properties and create a stronger digital presence.",
    services: ["Website Development", "UI/UX", "SEO"],
    result: "+83% Enquiries",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.theurbanestate.com/",
  },
  {
    id: 9,
    title: "Nova Coffee",
    category: "E-Commerce",
    industry: "Food & Beverage",
    description:
      "A visually engaging online store created to showcase premium coffee products and simplify online ordering.",
    services: ["E-Commerce", "UI/UX", "Digital Marketing"],
    result: "+46% Sales",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
    link: "https://shopatshams.com",
  },
  {
    id: 10,
    title: "Prime Auto",
    category: "Digital Marketing",
    industry: "Automotive",
    description:
      "A digital marketing system designed to generate qualified vehicle enquiries through targeted campaigns.",
    services: ["Google Ads", "Meta Ads", "Lead Generation"],
    result: "4.2x ROAS",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    link: "https://themeforest.net",
  },
    {
    id: 11,
    title: "Pixel Dental",
    category: "SEO",
    industry: "Dental Clinic",
    description:
      "A high-converting dental website and local SEO strategy designed to increase appointments and dominate local search.",
    services: ["Local SEO", "Website Optimization", "Lead Generation"],
    result: "+126% Appointments",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.fdiworlddental.org/",
  },

  {
    id: 12,
    title: "Summit Properties",
    category: "Websites",
    industry: "Real Estate",
    description:
      "A premium property website designed to showcase listings, build buyer confidence and generate qualified enquiries.",
    services: ["Website Development", "UI/UX", "SEO"],
    result: "+83% Enquiries",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.countryclubverandas.com/",
  },

  {
    id: 13,
    title: "FitCore Studio",
    category: "Digital Marketing",
    industry: "Fitness",
    description:
      "A performance-focused marketing campaign built to attract new members and increase gym membership enquiries.",
    services: ["Google Ads", "Meta Ads", "Social Media"],
    result: "4.1x ROAS",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.businessinsider.com/",
  },

  {
    id: 14,
    title: "Maple Market",
    category: "E-Commerce",
    industry: "Retail",
    description:
      "A modern e-commerce experience created to simplify shopping, improve product discovery and increase online sales.",
    services: ["E-Commerce", "UI/UX", "Conversion Optimization"],
    result: "+61% Sales",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.sourduckmarket.com/",
  },

  {
    id: 15,
    title: "BluePeak Law",
    category: "Websites",
    industry: "Legal Services",
    description:
      "A professional law firm website designed to communicate expertise, build trust and generate qualified consultations.",
    services: ["Website Development", "SEO", "Lead Generation"],
    result: "+72% Leads",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    link: "https://passport.world.rugby/",
  },

  {
    id: 16,
    title: "GreenLeaf Gardens",
    category: "SEO",
    industry: "Landscaping",
    description:
      "A local SEO and website optimization campaign designed to increase visibility and generate more landscaping enquiries.",
    services: ["Local SEO", "SEO", "Website Optimization"],
    result: "+154% Traffic",
    image:
      "https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1200&q=80",
    link: "https://green-leaf.gr/",
  },
];

const categories = [
  "All",
  "Websites",
  "E-Commerce",
  "SEO",
  "Digital Marketing",
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="portfolio-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="portfolio-hero">
        <div className="portfolio-glow portfolio-glow-one"></div>
        <div className="portfolio-glow portfolio-glow-two"></div>
        <div className="portfolio-grid"></div>

        <div className="portfolio-hero-content">
          <div className="portfolio-badge">
            <span></span>
            OUR PORTFOLIO
          </div>

          <h1>
            Work that makes
            <strong> businesses grow.</strong>
          </h1>

          <p>
            Explore websites, e-commerce experiences and digital
            marketing projects we've created to help businesses
            build stronger brands and generate measurable growth.
          </p>

          <a
            href="#projects"
            className="portfolio-hero-button"
          >
            Explore Our Work
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* ==================================================
          PROJECTS
      ================================================== */}

      <section
        className="portfolio-projects"
        id="projects"
      >
        <div className="portfolio-container">

          {/* Section Heading */}

          <div className="portfolio-section-heading">
            <div>
              <span className="portfolio-label">
                SELECTED WORK
              </span>

              <h2>
                Projects built for
                <strong> real growth.</strong>
              </h2>
            </div>

            <p>
              Every project is designed around a clear business
              objective — from generating leads to increasing
              visibility and improving conversions.
            </p>
          </div>

          {/* Categories */}

          <div className="portfolio-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* ==================================================
              PROJECT GRID
          ================================================== */}

          <div className="portfolio-grid-list">
            {filteredProjects.map((project) => (
              <article
                className="portfolio-card"
                key={project.id}
              >

                {/* IMAGE */}

                <div className="portfolio-card-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="portfolio-card-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <span>↗</span>
                    </a>
                  </div>

                  <div className="portfolio-card-category">
                    {project.category}
                  </div>
                </div>

                {/* CONTENT */}

                <div className="portfolio-card-content">
                  <div className="portfolio-card-top">
                    <div>
                      <span>
                        {project.industry}
                      </span>

                      <h3>
                        {project.title}
                      </h3>
                    </div>

                    <div className="portfolio-result">
                      {project.result}
                    </div>
                  </div>

                  <p>
                    {project.description}
                  </p>

                  {/* SERVICES */}

                  <div className="portfolio-services">
                    {project.services.map((service) => (
                      <span key={service}>
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* MOBILE BUTTON */}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-mobile-button"
                  >
                    View Project
                    <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          RESULTS
      ================================================== */}

      <section className="portfolio-results">
        <div className="portfolio-container">

          <div className="portfolio-results-heading">
            <span className="portfolio-label">
              THE IMPACT
            </span>

            <h2>
              We don't just build.
              <strong> We grow.</strong>
            </h2>

            <p>
              Our work is focused on measurable business
              outcomes, not simply making something look good.
            </p>
          </div>

          <div className="portfolio-stats">

            <div className="portfolio-stat">
              <strong>180%</strong>
              <span>
                Average Traffic Growth
              </span>
            </div>

            <div className="portfolio-stat">
              <strong>68%</strong>
              <span>
                More Qualified Leads
              </span>
            </div>

            <div className="portfolio-stat">
              <strong>3.8x</strong>
              <span>
                Average Advertising ROAS
              </span>
            </div>

            <div className="portfolio-stat">
              <strong>42%</strong>
              <span>
                Conversion Improvement
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          CTA
      ================================================== */}

      <section className="portfolio-cta">
        <div className="portfolio-cta-glow"></div>

        <div className="portfolio-cta-content">
          <span className="portfolio-label">
            HAVE A PROJECT?
          </span>

          <h2>
            Let's build something
            <strong> worth growing.</strong>
          </h2>

          <p>
            Tell us about your business, your goals and where
            you want to go. We'll help you build the digital
            strategy to get there.
          </p>

          <Link
            to="/contact"
            className="portfolio-cta-button"
          >
            Start a Conversation
            <span>→</span>
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Portfolio;