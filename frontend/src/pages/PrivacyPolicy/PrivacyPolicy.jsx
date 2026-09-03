import { Link } from "react-router-dom";
import SEO from "../../components/common/SEO/SEO";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
  <>
    <SEO
      title="Privacy Policy"
      description="Read PixelPeak's Privacy Policy to understand how we collect, use, protect, and manage information when you use our website and services."
      canonical="https://YOUR-DOMAIN.com/privacy"
      keywords="PixelPeak privacy policy, privacy policy, data protection, personal information, website privacy"
    />

    <main className="legal-page">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="legal-hero">
        <div className="legal-hero-glow"></div>

        <div className="legal-container">
          <span className="legal-tag">
            PRIVACY & SECURITY
          </span>

          <h1>
            Privacy Policy
          </h1>

          <p>
            Your privacy matters to PixelPeak. This policy explains
            how we collect, use, protect and manage information when
            you use our website and services.
          </p>

          <span className="legal-updated">
            Last Updated: August 25, 2026
          </span>
        </div>
      </section>


      {/* ==========================================
          CONTENT
      ========================================== */}

      <section className="legal-content-section">
        <div className="legal-container legal-content">

          <div className="legal-intro">
            <p>
              PixelPeak ("PixelPeak", "we", "us", or "our") respects
              your privacy and is committed to protecting personal
              information provided through our website, contact forms,
              consultation booking system, email communications and
              digital marketing services.
            </p>

            <p>
              This Privacy Policy explains what information we may
              collect, why we collect it, how we use it, and the choices
              available to you.
            </p>
          </div>


          {/* 1 */}

          <article className="legal-section">
            <h2>1. Information We Collect</h2>

            <p>
              We may collect information that you voluntarily provide
              when you contact us, request information, book a
              consultation or use our services.
            </p>

            <h3>Information may include:</h3>

            <ul>
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or business name</li>
              <li>Website address</li>
              <li>Services you are interested in</li>
              <li>Project requirements and business information</li>
              <li>Messages or other information you submit to us</li>
            </ul>
          </article>


          {/* 2 */}

          <article className="legal-section">
            <h2>2. Information Collected Automatically</h2>

            <p>
              When you visit our website, certain technical information
              may be collected automatically by your browser or by
              third-party services used on our website.
            </p>

            <p>
              This information may include your approximate location,
              browser type, device type, operating system, referring
              website, pages visited and general website usage data.
            </p>

            <p>
              We may use this information to improve website performance,
              security and user experience.
            </p>
          </article>


          {/* 3 */}

          <article className="legal-section">
            <h2>3. How We Use Your Information</h2>

            <p>
              Information provided to PixelPeak may be used to:
            </p>

            <ul>
              <li>Respond to inquiries and requests</li>
              <li>Schedule and manage consultations</li>
              <li>Provide requested services</li>
              <li>Prepare proposals and project information</li>
              <li>Communicate with clients</li>
              <li>Improve our website and services</li>
              <li>Maintain website security</li>
              <li>Prevent fraud, abuse or unauthorized activity</li>
              <li>Meet applicable legal or regulatory obligations</li>
            </ul>
          </article>


          {/* 4 */}

          <article className="legal-section">
            <h2>4. Consultation Booking</h2>

            <p>
              PixelPeak may use third-party scheduling services such as
              Google Calendar to allow visitors to book consultations.
            </p>

            <p>
              Information submitted through the booking system may be
              processed by the relevant service provider according to
              its own privacy policy and terms.
            </p>
          </article>


          {/* 5 */}

          <article className="legal-section">
            <h2>5. Email Communications</h2>

            <p>
              If you contact PixelPeak by email or submit your email
              address through our website, we may use that information
              to respond to your inquiry or communicate with you about
              requested services.
            </p>

            <p>
              We do not intentionally use consultation contact
              information to send unrelated promotional communications
              without an appropriate basis or consent where required.
            </p>
          </article>


          {/* 6 */}

          <article className="legal-section">
            <h2>6. Third-Party Services</h2>

            <p>
              PixelPeak may use third-party platforms to provide,
              operate or support parts of our website and services.
            </p>

            <p>These may include services such as:</p>

            <ul>
              <li>Google Calendar</li>
              <li>Google Meet</li>
              <li>Google Analytics, if enabled</li>
              <li>Google Ads, if enabled</li>
              <li>Meta platforms, if enabled</li>
              <li>Email and communication providers</li>
              <li>Website hosting and infrastructure providers</li>
            </ul>

            <p>
              These third parties may process information according to
              their own policies and terms.
            </p>
          </article>


          {/* 7 */}

          <article className="legal-section">
            <h2>7. Cookies and Tracking Technologies</h2>

            <p>
              Our website may use cookies or similar technologies to
              maintain functionality, understand website usage,
              improve performance or support advertising and analytics
              where those services are enabled.
            </p>

            <p>
              You can manage certain cookies through your browser
              settings. Disabling cookies may affect some website
              functionality.
            </p>
          </article>


          {/* 8 */}

          <article className="legal-section">
            <h2>8. How We Protect Information</h2>

            <p>
              PixelPeak takes reasonable measures to protect information
              against unauthorized access, misuse, alteration or
              disclosure.
            </p>

            <p>
              However, no method of transmitting or storing information
              online can be guaranteed to be completely secure.
            </p>
          </article>


          {/* 9 */}

          <article className="legal-section">
            <h2>9. Data Retention</h2>

            <p>
              We retain information only for as long as reasonably
              necessary for the purposes described in this policy,
              including providing services, maintaining business
              records, resolving disputes and meeting legal obligations.
            </p>
          </article>


          {/* 10 */}

          <article className="legal-section">
            <h2>10. Your Privacy Choices</h2>

            <p>
              Depending on applicable law, you may have rights regarding
              your personal information, including requesting access,
              correction or deletion of certain information.
            </p>

            <p>
              To make a privacy-related request, contact us using the
              information provided below.
            </p>
          </article>


          {/* 11 */}

          <article className="legal-section">
            <h2>11. Children's Privacy</h2>

            <p>
              Our services are intended for businesses and general
              audiences. We do not knowingly collect personal
              information from children for the purpose of providing
              our business services.
            </p>
          </article>


          {/* 12 */}

          <article className="legal-section">
            <h2>12. Changes to This Policy</h2>

            <p>
              We may update this Privacy Policy from time to time to
              reflect changes to our services, technology, legal
              requirements or business practices.
            </p>

            <p>
              Any updated version will be posted on this page with a
              revised "Last Updated" date.
            </p>
          </article>


          {/* 13 */}

          <article className="legal-section">
            <h2>13. Contact Us</h2>

            <p>
              If you have questions about this Privacy Policy or how
              PixelPeak handles information, please contact us:
            </p>

            <div className="legal-contact-box">
              <strong>PixelPeak</strong>

              <a href="mailto:pixelpeakconsultation@gmail.com">
                pixelpeakconsultation@gmail.com
              </a>
            </div>
          </article>


          {/* NAVIGATION */}

          <div className="legal-navigation">
            <Link to="/">
              ← Back to Home
            </Link>

            <Link to="/terms">
              Terms & Conditions →
            </Link>
          </div>

        </div>
      </section>

    </main>
  </>
  );
}

export default PrivacyPolicy;