import React, { useState } from "react";
import SEO from "../../components/common/SEO/SEO";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // HANDLE FORM SUBMIT
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("success");

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
  <>
    <SEO
      title="Contact PixelPeak | Get a Free Consultation"
      description="Contact PixelPeak to discuss website development, SEO, Google Ads, social media marketing, and digital growth solutions for your business."
      canonical="https://YOUR-DOMAIN.com/contact"
      keywords="contact PixelPeak, free digital marketing consultation, website development, SEO services, Google Ads, social media marketing, digital marketing agency"
    />

    <main className="contact-page">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="contact-hero">

        <div className="contact-hero-glow contact-glow-one"></div>
        <div className="contact-hero-glow contact-glow-two"></div>

        <div className="contact-hero-content">

          <div className="contact-badge">
            <span></span>
            LET'S TALK
          </div>

          <h1>
            Let's Build Something
            <strong>That Grows.</strong>
          </h1>

          <p>
            Have a business idea, a website that needs improvement, or a
            marketing challenge? Tell us what you're working on and let's
            create a digital strategy that moves your business forward.
          </p>

          <div className="contact-hero-actions">

            <a
              href="#contact-form"
              className="contact-primary-btn"
            >
              Start a Project
              <span>→</span>
            </a>

            <a
              href="#contact-info"
              className="contact-secondary-btn"
            >
              Explore Contact Info
            </a>

          </div>

        </div>

        <div className="contact-hero-scroll">
          <span></span>
          Scroll to connect
        </div>

      </section>


      {/* ==================================================
          CONTACT MAIN
      ================================================== */}

      <section
        className="contact-main"
        id="contact-info"
      >

        <div className="contact-main-container">

          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <div className="contact-side">

            <div className="contact-section-label">
              GET IN TOUCH
            </div>

            <h2>
              Your next
              <span>growth move</span>
              starts here.
            </h2>

            <p className="contact-side-description">
              Whether you're launching a new business, rebuilding your
              online presence, or looking for better marketing results,
              PixelPeak is ready to help.
            </p>


            {/* ==================================================
                CONTACT INFORMATION CARDS
            ================================================== */}

            <div className="contact-info-cards">

              {/* EMAIL */}

             <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=pixelpeakconsultation@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-info-card"
>
  <div className="contact-card-icon">
    ✉
  </div>

  <div className="contact-card-content">
    <small>
      Email us
    </small>

    <h3>
      pixelpeakconsultation@gmail.com
    </h3>

    <p>
      We usually reply within 1 business day.
    </p>
  </div>

  <span className="contact-card-arrow">
    ↗
  </span>
</a>


              {/* PHONE */}

              <a
  href="https://wa.me/923007339654"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-info-card"
>
  <div className="contact-card-icon">
    ☎
  </div>

  <div className="contact-card-content">
    <small>
      WhatsApp us
    </small>

    <h3>
      +92 3007339654
    </h3>

    <p>
      Message us on WhatsApp during business hours.
    </p>
  </div>

  <span className="contact-card-arrow">
    ↗
  </span>
</a>


              {/* BUSINESS HOURS */}

              <div className="contact-info-card">

                <div className="contact-card-icon">
                  ◷
                </div>

                <div className="contact-card-content">

                  <small>
                    Business hours
                  </small>

                  <h3>
                    Mon — sad
                  </h3>

                  <p>
                    7:00 AM — 11:00 PM EST
                  </p>

                </div>

              </div>

            </div>


            {/* ==================================================
                SOCIAL MEDIA
            ================================================== */}

            <div className="contact-social-area">

              <span>
                FOLLOW PIXELPEAK
              </span>

              <div className="contact-social-links">


                {/* ==================================================
                    INSTAGRAM
                ================================================== */}

                <a
  href="https://www.instagram.com/pixelpeak_marketing/"
  className="social-instagram"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
>

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >

                    <defs>

                      <linearGradient
                        id="instagramGradient"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >

                        <stop
                          offset="0%"
                          stopColor="#feda75"
                        />

                        <stop
                          offset="25%"
                          stopColor="#fa7e1e"
                        />

                        <stop
                          offset="50%"
                          stopColor="#d62976"
                        />

                        <stop
                          offset="75%"
                          stopColor="#962fbf"
                        />

                        <stop
                          offset="100%"
                          stopColor="#4f5bd5"
                        />

                      </linearGradient>

                    </defs>

                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      fill="none"
                      stroke="url(#instagramGradient)"
                      strokeWidth="2"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      fill="none"
                      stroke="url(#instagramGradient)"
                      strokeWidth="2"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1.2"
                      fill="#d62976"
                    />

                  </svg>

                </a>


                {/* ==================================================
                    TIKTOK
                ================================================== */}

                <a
  href="https://www.tiktok.com/@pixel.peak00"
  className="social-tiktok"
  aria-label="TikTok"
  target="_blank"
  rel="noopener noreferrer"
>

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >

                    {/* Cyan shadow */}

                    <path
                      d="M15.5 4.2c.4 1.8 1.5 3.1 3.3 3.5v2.8c-1.4-.1-2.6-.5-3.7-1.2v5.8c0 3.5-2.2 5.7-5.5 5.7-3 0-5.2-2.1-5.2-5 0-3.1 2.5-5.3 5.8-5.2v2.9c-1.7-.2-2.9.7-2.9 2.2 0 1.2.9 2.1 2.2 2.1 1.4 0 2.5-.9 2.5-2.8V4.2h3.5Z"
                      fill="#25F4EE"
                      transform="translate(-1 0)"
                    />

                    {/* Red shadow */}

                    <path
                      d="M16.5 3.2c.4 1.8 1.5 3.1 3.3 3.5v2.8c-1.4-.1-2.6-.5-3.7-1.2v5.8c0 3.5-2.2 5.7-5.5 5.7-3 0-5.2-2.1-5.2-5 0-3.1 2.5-5.3 5.8-5.2v2.9c-1.7-.2-2.9.7-2.9 2.2 0 1.2.9 2.1 2.2 2.1 1.4 0 2.5-.9 2.5-2.8V3.2h3.5Z"
                      fill="#FE2C55"
                      transform="translate(1 0)"
                    />

                    {/* Main white TikTok shape */}

                    <path
                      d="M16 3.7c.4 1.8 1.5 3.1 3.3 3.5v2.8c-1.4-.1-2.6-.5-3.7-1.2v5.8c0 3.5-2.2 5.7-5.5 5.7-3 0-5.2-2.1-5.2-5 0-3.1 2.5-5.3 5.8-5.2V13c-1.7-.2-2.9.7-2.9 2.2 0 1.2.9 2.1 2.2 2.1 1.4 0 2.5-.9 2.5-2.8V3.7H16Z"
                      fill="#ffffff"
                    />

                  </svg>

                </a>


                {/* ==================================================
                    FACEBOOK
                ================================================== */}

                <a
  href="https://www.facebook.com/share/1JsBkrrFaP/"
  className="social-facebook"
  aria-label="Facebook"
  target="_blank"
  rel="noopener noreferrer"
>

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >

                    <path
                      d="M14 8h3V4.5c-.5-.1-1.8-.2-3.4-.2-3.4 0-5.7 2.1-5.7 5.9v3.3H5v3.9h2.9V24h4v-6.6h3.3l.5-3.9h-3.8v-3c0-1.1.3-1.8 2.1-1.8Z"
                      fill="#1877F2"
                    />

                  </svg>

                </a>

              </div>

            </div>

          </div>


          {/* ==================================================
              RIGHT SIDE — FORM
          ================================================== */}

          <div
            className="contact-form-container"
            id="contact-form"
          >

            {/* FORM HEADER */}

            <div className="contact-form-top">

              <div>

                <span>
                  PROJECT INQUIRY
                </span>

                <h2>
                  Tell us about
                  <strong> your project.</strong>
                </h2>

              </div>

              <div className="form-number">
                01
              </div>

            </div>


            {/* ==================================================
                FORM
            ================================================== */}

            <form onSubmit={handleSubmit}>

              {/* NAME + EMAIL */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="name">
                    Your Name <span>*</span>
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />

                </div>

              </div>


              {/* COMPANY + PHONE */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="company">
                    Company
                  </label>

                  <input
                    id="company"
                    type="text"
                    name="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                  />

                </div>


                <div className="contact-field">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+1 (000) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />

                </div>

              </div>


              {/* SERVICE + BUDGET */}

              <div className="contact-form-row">

                <div className="contact-field">

                  <label htmlFor="service">
                    What can we help with? <span>*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a service
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="SEO">
                      SEO
                    </option>

                    <option value="Google Ads">
                      Google Ads
                    </option>

                    <option value="Meta Ads">
                      Meta Ads
                    </option>

                    <option value="Social Media Marketing">
                      Social Media Marketing
                    </option>

                    <option value="Digital Strategy">
                      Digital Strategy
                    </option>

                    <option value="Multiple Services">
                      Multiple Services
                    </option>

                  </select>

                </div>


                <div className="contact-field">

                  <label htmlFor="budget">
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >

                    <option value="">
                      Select budget
                    </option>

                    <option value="Under $1,000">
                      Under $1,000
                    </option>

                    <option value="$1,000 - $3,000">
                      $1,000 — $3,000
                    </option>

                    <option value="$3,000 - $5,000">
                      $3,000 — $5,000
                    </option>

                    <option value="$5,000 - $10,000">
                      $5,000 — $10,000
                    </option>

                    <option value="$10,000+">
                      $10,000+
                    </option>

                  </select>

                </div>

              </div>


              {/* MESSAGE */}

              <div className="contact-field contact-message-field">

                <label htmlFor="message">
                  Tell us about your project <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your business, goals, current challenges, and what you'd like to achieve..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* ==================================================
                  FORM BOTTOM
              ================================================== */}

              <div className="contact-form-bottom">

                <p>
                  By submitting this form, you agree to be contacted by
                  PixelPeak regarding your inquiry.
                </p>

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Send Project Request
                  <span>→</span>
                </button>

              </div>


              {/* ==================================================
                  SUCCESS MESSAGE
              ================================================== */}

              {status === "success" && (
                <div
                  className="contact-success"
                  role="alert"
                >

                  <span>✓</span>

                  <p>
                    Thank you! Your project request has been received.
                  </p>

                </div>
              )}

            </form>

          </div>

        </div>

      </section>


      {/* ==================================================
          WHY PIXELPEAK
      ================================================== */}

      <section className="contact-why">

        <div className="contact-why-container">

          <div className="contact-why-heading">

            <span>
              WHY PIXELPEAK?
            </span>

            <h2>
              More than an agency.
              <strong>
                {" "}Your digital growth partner.
              </strong>
            </h2>

          </div>


          {/* ==================================================
              BENEFITS
          ================================================== */}

          <div className="contact-benefits">

            {/* BENEFIT 01 */}

            <div className="contact-benefit">

              <div className="benefit-number">
                01
              </div>

              <h3>
                Free Consultation
              </h3>

              <p>
                Start with a conversation. We'll understand your
                business, goals, and challenges before recommending
                anything.
              </p>

            </div>


            {/* BENEFIT 02 */}

            <div className="contact-benefit">

              <div className="benefit-number">
                02
              </div>

              <h3>
                Custom Strategy
              </h3>

              <p>
                No generic packages. We build digital strategies
                around your specific business and growth objectives.
              </p>

            </div>


            {/* BENEFIT 03 */}

            <div className="contact-benefit">

              <div className="benefit-number">
                03
              </div>

              <h3>
                Built for Growth
              </h3>

              <p>
                Websites, SEO, advertising, and marketing work
                together to create a stronger digital presence.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  </>
  );
};

export default Contact;