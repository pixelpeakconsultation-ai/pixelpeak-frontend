import { Link } from "react-router-dom";
import {
  FaCheck,
  FaGlobe,
  FaSearch,
  FaBullhorn,
  FaRocket,
  FaArrowRight,
  FaQuestionCircle,
} from "react-icons/fa";
import SEO from "../../components/common/SEO/SEO";
import "./Pricing.css";

function Pricing() {
  const websitePlans = [
    {
      name: "Starter",
      price: "$1,500",
      description:
        "A professional online presence for startups and small businesses getting started.",
      features: [
        "Up to 4 pages",
        "Responsive design",
        "Modern UI/UX",
        "Contact form",
        "Basic SEO setup",
        "Social media integration",
        "Performance optimization",
      ],
    },
    {
      name: "Business",
      price: "$2,500",
      popular: true,
      description:
        "A complete business website designed to build trust and generate more enquiries.",
      features: [
        "Up to 8 pages",
        "Custom UI/UX design",
        "Advanced responsive design",
        "Contact & enquiry forms",
        "On-page SEO",
        "Google Analytics setup",
        "Performance optimization",
        "Conversion-focused sections",
      ],
    },
    {
      name: "Professional",
      price: "$4,500+",
      description:
        "A powerful custom website for established businesses with advanced requirements.",
      features: [
        "Custom website architecture",
        "Advanced UI/UX",
        "Custom functionality",
        "Advanced SEO structure",
        "CMS integration",
        "Third-party integrations",
        "Advanced performance optimization",
        "Ongoing support options",
      ],
    },
  ];

  const marketingPlans = [
    {
      icon: <FaSearch />,
      name: "SEO",
      price: "From $600/mo",
      description:
        "Build long-term organic visibility and attract customers through search.",
      features: [
        "Keyword research",
        "On-page optimization",
        "Technical SEO",
        "Content strategy",
        "Local SEO",
        "Monthly reporting",
      ],
    },
    {
      icon: <FaBullhorn />,
      name: "Paid Advertising",
      price: "From $750/mo",
      description:
        "Reach potential customers through targeted Google and Meta advertising campaigns.",
      features: [
        "Campaign strategy",
        "Google Ads",
        "Meta Ads",
        "Audience targeting",
        "Ad optimization",
        "Performance reporting",
      ],
    },
    {
      icon: <FaRocket />,
      name: "Social Growth",
      price: "From $600/mo",
      description:
        "Build a stronger social presence with consistent content and strategic marketing.",
      features: [
        "Content strategy",
        "Social media management",
        "Creative direction",
        "Audience growth",
        "Engagement strategy",
        "Monthly reporting",
      ],
    },
  ];

  const faqs = [
    {
      question: "Are these fixed prices?",
      answer:
        "No. These are starting prices. The final price depends on your business requirements, project scope, functionality, and the level of customization required.",
    },
    {
      question: "Can I combine multiple services?",
      answer:
        "Yes. You can combine website development, SEO, paid advertising, and social media marketing into a customized growth package.",
    },
    {
      question: "Do you offer custom packages?",
      answer:
        "Absolutely. If your business needs something different from the packages shown here, we can create a custom solution around your goals and budget.",
    },
    {
      question: "Do you work with Canadian businesses?",
      answer:
        "Yes. PixelPeak is focused on helping Canadian startups, local businesses, and growing companies build stronger digital experiences.",
    },
    {
      question: "How do I get an exact quote?",
      answer:
        "Send us your project details through the contact page. We'll review your requirements and discuss the best solution for your business.",
    },
  ];

  return (
  <>
    <SEO
      title="Digital Marketing & Website Pricing"
      description="Explore PixelPeak's website development, SEO, paid advertising, and social media marketing pricing plans for Canadian businesses. Choose a package or request a custom quote."
      canonical="https://YOUR-DOMAIN.com/pricing"
      keywords="digital marketing pricing, website development pricing, SEO pricing, Google Ads pricing, Meta Ads pricing, social media marketing pricing, web design pricing, Canadian digital marketing agency"
    />

    <main className="pricing-page">
      {/* ==========================================
          Hero
      ========================================== */}

      <section className="pricing-hero">
        <div className="pricing-container">
          <div className="pricing-hero-content">
            <span className="pricing-label">PIXELPEAK PRICING</span>

            <h1>
              Plans Built Around
              <span> Your Growth.</span>
            </h1>

            <p>
              Professional websites and digital marketing solutions designed
              to help businesses build their online presence and turn digital
              traffic into real opportunities.
            </p>

            <div className="pricing-hero-buttons">
              <a
  href="https://calendar.app.google/NeEae2sdgGubo1fZ6"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  Book Free Consultation
                <FaArrowRight />
              </a>

              <a href="#website-pricing" className="pricing-secondary-btn">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          Website Pricing
      ========================================== */}

      <section className="website-pricing" id="website-pricing">
        <div className="pricing-container">
          <div className="pricing-section-heading">
            <span className="pricing-label">WEBSITE DEVELOPMENT</span>

            <h2>
              Build a Website That
              <span> Works for Your Business.</span>
            </h2>

            <p>
              From a simple business website to a completely custom digital
              experience, choose a starting point and we'll tailor the project
              around your needs.
            </p>
          </div>

          <div className="website-pricing-grid">
            {websitePlans.map((plan) => (
              <div
                className={`website-price-card ${
                  plan.popular ? "popular-plan" : ""
                }`}
                key={plan.name}
              >
                {plan.popular && (
                  <div className="popular-badge">MOST POPULAR</div>
                )}

                <div className="price-card-top">
                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>

                  <div className="price">
                    <span>Starting from</span>
                    <strong>{plan.price}</strong>
                  </div>
                </div>

                <div className="price-divider"></div>

                <ul className="price-features">
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="price-card-btn">
                  Discuss This Plan
                  <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>

          <p className="pricing-note">
            * Website pricing is a starting estimate. Final pricing depends
            on project scope, functionality, content, integrations, and
            customization.
          </p>
        </div>
      </section>

      {/* ==========================================
          Marketing
      ========================================== */}

      <section className="marketing-pricing">
        <div className="pricing-container">
          <div className="pricing-section-heading">
            <span className="pricing-label">DIGITAL MARKETING</span>

            <h2>
              Grow Your Business
              <span> Beyond Your Website.</span>
            </h2>

            <p>
              Your website is only the beginning. Build visibility, attract
              customers, and create consistent digital growth with ongoing
              marketing.
            </p>
          </div>

          <div className="marketing-pricing-grid">
            {marketingPlans.map((plan) => (
              <div className="marketing-card" key={plan.name}>
                <div className="marketing-icon">{plan.icon}</div>

                <h3>{plan.name}</h3>

                <div className="marketing-price">{plan.price}</div>

                <p className="marketing-description">{plan.description}</p>

                <ul>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="marketing-btn">
                  Get Started
                  <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          Growth Package
      ========================================== */}

      <section className="growth-section">
        <div className="pricing-container">
          <div className="growth-card">
            <div className="growth-content">
              <span className="pricing-label">PIXELPEAK GROWTH</span>

              <h2>
                One Strategy.
                <span> Everything You Need to Grow.</span>
              </h2>

              <p>
                Need more than a website? Our growth approach combines website
                development, SEO, paid advertising, social media, and digital
                strategy into one connected system.
              </p>

              <a
  href="https://calendar.app.google/NeEae2sdgGubo1fZ6"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  Book Free Consultation
                <FaArrowRight />
              </a>
            </div>

            <div className="growth-services">
              <div>
                <FaGlobe />
                <span>Website</span>
              </div>

              <div>
                <FaSearch />
                <span>SEO</span>
              </div>

              <div>
                <FaBullhorn />
                <span>Ads</span>
              </div>

              <div>
                <FaRocket />
                <span>Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          Custom Pricing
      ========================================== */}

      <section className="custom-pricing">
        <div className="pricing-container">
          <div className="custom-card">
            <div className="custom-icon">
              <FaRocket />
            </div>

            <div className="custom-content">
              <span className="pricing-label">CUSTOM SOLUTION</span>

              <h2>
                Don't See What
                <span> You Need?</span>
              </h2>

              <p>
                Every business is different. Tell us what you're trying to
                achieve and we'll create a solution around your requirements.
              </p>

              <Link to="/contact" className="pricing-primary-btn">
                Request Custom Pricing
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          FAQ
      ========================================== */}

      <section className="pricing-faq">
        <div className="pricing-container">
          <div className="pricing-section-heading">
            <span className="pricing-label">PRICING FAQ</span>

            <h2>
              Questions About
              <span> Pricing?</span>
            </h2>

            <p>
              Here are some common questions businesses ask before starting a
              project with PixelPeak.
            </p>
          </div>

          <div className="pricing-faq-list">
            {faqs.map((faq, index) => (
              <details className="pricing-faq-item" key={index}>
                <summary>
                  <span>
                    <FaQuestionCircle />
                    {faq.question}
                  </span>

                  <b>+</b>
                </summary>

                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          Final CTA
      ========================================== */}

      <section className="pricing-cta">
        <div className="pricing-container">
          <div className="pricing-cta-box">
            <span className="pricing-label">LET'S TALK</span>

            <h2>
              Not Sure Which Plan
              <span> Is Right for You?</span>
            </h2>

            <p>
              Tell us about your business, your goals, and what you're trying
              to achieve. We'll help you find the right digital solution.
            </p>

            <Link to="/contact" className="pricing-primary-btn">
              Talk to PixelPeak
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
        </main>
  </>
  );
}

export default Pricing;