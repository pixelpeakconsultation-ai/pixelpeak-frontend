import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaRocket,
  FaCode,
  FaChartLine,
} from "react-icons/fa";
import SEO from "../../components/common/SEO/SEO";
import "./WebsiteDeveloperUSA.css";

function WebsiteDeveloperUSA() {
  return (
    <>
      <SEO
        title="Website Developer in the USA"
        description="PixelPeak is a website developer in the USA helping small businesses build professional, responsive, SEO-ready websites designed to attract customers and grow online."
        canonical="https://frontend-orcin-zeta-52.vercel.app/services/website-developer-usa"
        keywords="website developer USA, website development USA, website developer for small businesses, small business website development USA, website design USA"
      />

      {/* HERO */}
      <section className="website-dev-hero">
        <div className="website-dev-container">
          <div className="website-dev-hero-content">
            <span className="website-dev-eyebrow">
              WEBSITE DEVELOPMENT
            </span>

            <h1>Website Developer in the USA</h1>

            <p>
              Professional website development for small businesses and
              growing brands that want a stronger online presence, more
              customers, and a website built for growth.
            </p>

            <div className="website-dev-hero-buttons">
              <Link to="/contact" className="website-dev-primary-btn">
                Get a Free Consultation
                <FaArrowRight />
              </Link>

              <Link to="/pricing" className="website-dev-secondary-btn">
                View Website Pricing
              </Link>
            </div>
          </div>

          <div className="website-dev-hero-visual">
            <div className="website-dev-code-card">
              <div className="code-card-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-content">
                <span>&lt;website&gt;</span>
                <span className="code-indent">
                  &lt;business-growth&gt;
                </span>
                <span className="code-indent">
                  professional website
                </span>
                <span className="code-indent">
                  SEO + performance
                </span>
                <span className="code-indent">
                  mobile responsive
                </span>
                <span>&lt;/business-growth&gt;</span>
                <span>&lt;/website&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="website-dev-intro">
        <div className="website-dev-container">
          <div className="website-dev-section-heading">
            <span>BUILD A BETTER ONLINE PRESENCE</span>
            <h2>
              Your Website Should Work
              <br />
              For Your Business
            </h2>
          </div>

          <div className="website-dev-intro-content">
            <p>
              Your website is often the first interaction a potential
              customer has with your business. A professional website should
              do more than look good — it should communicate your value,
              build trust, perform well, and make it easy for visitors to
              take action.
            </p>

            <p>
              PixelPeak develops modern websites for small businesses and
              growing brands with a focus on usability, performance,
              responsive design, and SEO-ready structure.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="website-dev-benefits">
        <div className="website-dev-container">
          <div className="website-dev-section-heading centered">
            <span>WHY YOUR BUSINESS NEEDS A PROFESSIONAL WEBSITE</span>
            <h2>Built to Attract, Engage & Convert</h2>
          </div>

          <div className="website-dev-benefits-grid">
            <div className="website-dev-benefit-card">
              <FaLaptopCode />
              <h3>Professional First Impression</h3>
              <p>
                Establish credibility with a modern website that clearly
                communicates what your business offers.
              </p>
            </div>

            <div className="website-dev-benefit-card">
              <FaMobileAlt />
              <h3>Mobile Responsive</h3>
              <p>
                Give customers a seamless experience across smartphones,
                tablets, laptops, and desktop devices.
              </p>
            </div>

            <div className="website-dev-benefit-card">
              <FaSearch />
              <h3>SEO-Ready Structure</h3>
              <p>
                Build your website with a strong technical and content
                foundation for search visibility.
              </p>
            </div>

            <div className="website-dev-benefit-card">
              <FaRocket />
              <h3>Fast Performance</h3>
              <p>
                Performance-focused development helps create a faster,
                smoother experience for your visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="website-dev-services">
        <div className="website-dev-container">
          <div className="website-dev-section-heading">
            <span>WHAT WE BUILD</span>
            <h2>Website Development for Growing Businesses</h2>
          </div>

          <div className="website-dev-services-grid">
            <div className="website-dev-service-card">
              <FaCode />
              <h3>Business Websites</h3>
              <p>
                Professional websites designed to establish your brand and
                turn visitors into potential customers.
              </p>
            </div>

            <div className="website-dev-service-card">
              <FaChartLine />
              <h3>Lead Generation Websites</h3>
              <p>
                Conversion-focused websites designed to encourage visitors
                to contact your business.
              </p>
            </div>

            <div className="website-dev-service-card">
              <FaLaptopCode />
              <h3>Small Business Websites</h3>
              <p>
                Practical and scalable websites built around the needs of
                small businesses and startups.
              </p>
            </div>

            <div className="website-dev-service-card">
              <FaRocket />
              <h3>Custom Website Development</h3>
              <p>
                Custom functionality and integrations for businesses with
                more advanced website requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="website-dev-features">
        <div className="website-dev-container">
          <div className="website-dev-features-content">
            <span>WHAT'S INCLUDED</span>

            <h2>
              Everything You Need
              <br />
              for a Strong Website
            </h2>

            <p>
              We focus on building websites that are professional, usable,
              scalable, and ready to support your digital marketing efforts.
            </p>

            <div className="website-dev-check-list">
              <div>
                <FaCheck />
                <span>Modern professional design</span>
              </div>

              <div>
                <FaCheck />
                <span>Fully responsive development</span>
              </div>

              <div>
                <FaCheck />
                <span>SEO-friendly structure</span>
              </div>

              <div>
                <FaCheck />
                <span>Performance optimization</span>
              </div>

              <div>
                <FaCheck />
                <span>Conversion-focused user experience</span>
              </div>

              <div>
                <FaCheck />
                <span>Contact forms and integrations</span>
              </div>

              <div>
                <FaCheck />
                <span>Social media integration</span>
              </div>

              <div>
                <FaCheck />
                <span>Easy future expansion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="website-dev-pricing">
        <div className="website-dev-container">
          <div className="website-dev-section-heading centered">
            <span>WEBSITE DEVELOPMENT PRICING</span>
            <h2>Choose the Right Website for Your Business</h2>
            <p>
              Our website development starts with a clear scope and focuses
              on building a solution that fits your business goals.
            </p>
          </div>

          <div className="website-dev-pricing-grid">
            <div className="website-dev-price-card">
              <span className="price-label">STARTER</span>

              <h3>Starter</h3>

              <div className="website-dev-price">$1,500</div>

              <p>
                A professional online presence for startups and small
                businesses getting started.
              </p>

              <ul>
                <li>
                  <FaCheck /> Up to 4 pages
                </li>
                <li>
                  <FaCheck /> Responsive design
                </li>
                <li>
                  <FaCheck /> Modern UI/UX
                </li>
                <li>
                  <FaCheck /> Contact form
                </li>
                <li>
                  <FaCheck /> Basic SEO setup
                </li>
                <li>
                  <FaCheck /> Social media integration
                </li>
                <li>
                  <FaCheck /> Performance optimization
                </li>
              </ul>

              <Link to="/contact" className="website-dev-price-btn">
                Get Started
                <FaArrowRight />
              </Link>
            </div>

            <div className="website-dev-price-card featured">
              <span className="price-label">PROFESSIONAL</span>

              <h3>Professional</h3>

              <div className="website-dev-price">$4,500+</div>

              <p>
                A powerful custom website for established businesses with
                advanced requirements.
              </p>

              <ul>
                <li>
                  <FaCheck /> Custom website architecture
                </li>
                <li>
                  <FaCheck /> Advanced UI/UX
                </li>
                <li>
                  <FaCheck /> Custom functionality
                </li>
                <li>
                  <FaCheck /> Advanced SEO structure
                </li>
                <li>
                  <FaCheck /> CMS integration
                </li>
                <li>
                  <FaCheck /> Third-party integrations
                </li>
                <li>
                  <FaCheck /> Advanced performance optimization
                </li>
                <li>
                  <FaCheck /> Ongoing support options
                </li>
              </ul>

              <Link to="/contact" className="website-dev-price-btn">
                Discuss Your Project
                <FaArrowRight />
              </Link>
            </div>
          </div>

          <p className="website-dev-custom-note">
            E-commerce websites, custom applications, and projects with
            advanced functionality are quoted based on scope and
            requirements.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="website-dev-process">
        <div className="website-dev-container">
          <div className="website-dev-section-heading centered">
            <span>OUR PROCESS</span>
            <h2>From Idea to Launch</h2>
          </div>

          <div className="website-dev-process-grid">
            <div className="website-dev-process-step">
              <span>01</span>
              <h3>Discovery</h3>
              <p>
                We learn about your business, audience, goals, and website
                requirements.
              </p>
            </div>

            <div className="website-dev-process-step">
              <span>02</span>
              <h3>Planning</h3>
              <p>
                We organize the website structure, content, user journey,
                and functionality.
              </p>
            </div>

            <div className="website-dev-process-step">
              <span>03</span>
              <h3>Design</h3>
              <p>
                We create a professional interface focused on usability,
                branding, and conversions.
              </p>
            </div>

            <div className="website-dev-process-step">
              <span>04</span>
              <h3>Development</h3>
              <p>
                Your website is developed with responsive design,
                performance, and scalability in mind.
              </p>
            </div>

            <div className="website-dev-process-step">
              <span>05</span>
              <h3>Testing</h3>
              <p>
                We test responsiveness, functionality, performance, and
                important user flows.
              </p>
            </div>

            <div className="website-dev-process-step">
              <span>06</span>
              <h3>Launch</h3>
              <p>
                After final checks, your website is prepared for launch and
                ongoing growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PIXELPEAK */}
      <section className="website-dev-why">
        <div className="website-dev-container">
          <div className="website-dev-section-heading centered">
            <span>WHY PIXELPEAK</span>
            <h2>More Than Just a Website</h2>
            <p>
              We build websites with your long-term digital growth in mind.
            </p>
          </div>

          <div className="website-dev-why-grid">
            <div>
              <FaCheck />
              <h3>Custom Approach</h3>
              <p>
                Your website is built around your business instead of a
                one-size-fits-all solution.
              </p>
            </div>

            <div>
              <FaCheck />
              <h3>Growth Focused</h3>
              <p>
                We consider how your website can support marketing,
                visibility, and lead generation.
              </p>
            </div>

            <div>
              <FaCheck />
              <h3>SEO Ready</h3>
              <p>
                Your website gets a strong foundation for future SEO and
                content marketing efforts.
              </p>
            </div>

            <div>
              <FaCheck />
              <h3>Scalable</h3>
              <p>
                Build today with the flexibility to expand your website as
                your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="website-dev-faq">
        <div className="website-dev-container">
          <div className="website-dev-section-heading centered">
            <span>FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="website-dev-faq-list">
            <details>
              <summary>
                How much does a small business website cost in the USA?
              </summary>
              <p>
                Website development costs vary depending on the number of
                pages, functionality, design requirements, integrations, and
                project scope. PixelPeak website development starts at
                $1,500 for our Starter package, while Professional projects
                start at $4,500+.
              </p>
            </details>

            <details>
              <summary>
                Do you build websites for small businesses?
              </summary>
              <p>
                Yes. PixelPeak builds professional websites for startups,
                small businesses, established businesses, and growing brands.
              </p>
            </details>

            <details>
              <summary>
                Will my website be mobile responsive?
              </summary>
              <p>
                Yes. Our websites are designed to provide a responsive
                experience across mobile phones, tablets, laptops, and
                desktop devices.
              </p>
            </details>

            <details>
              <summary>
                Can you help with SEO?
              </summary>
              <p>
                Yes. Our websites are built with SEO-friendly structure and
                performance in mind. We can also support broader SEO and
                digital marketing strategies.
              </p>
            </details>

            <details>
              <summary>
                Can you redesign my existing business website?
              </summary>
              <p>
                Yes. We can redesign an existing website to improve its
                appearance, usability, responsiveness, performance, and
                overall digital experience.
              </p>
            </details>

            <details>
              <summary>
                Do you work with businesses in the USA?
              </summary>
              <p>
                Yes. PixelPeak works with businesses looking for professional
                website development and digital growth solutions in the USA.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="website-dev-final-cta">
        <div className="website-dev-container">
          <div>
            <span>READY TO GET STARTED?</span>

            <h2>
              Build a Website
              <br />
              That Grows Your Business
            </h2>

            <p>
              Let's discuss your goals and create a website that gives your
              business a stronger digital presence.
            </p>

            <Link to="/contact" className="website-dev-primary-btn">
              Book a Free Consultation
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebsiteDeveloperUSA;