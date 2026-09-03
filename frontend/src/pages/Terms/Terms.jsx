import { Link } from "react-router-dom";
import SEO from "../../components/common/SEO/SEO";
import "./Terms.css";

function Terms() {
  return (
  <>
    <SEO
      title="Terms of Service"
      description="Read PixelPeak's Terms of Service to understand the terms and conditions that apply when using our website and digital marketing services."
      canonical="https://YOUR-DOMAIN.com/terms"
      keywords="PixelPeak terms of service, terms and conditions, digital marketing services, website services, service agreement"
    />

    <main className="legal-page">
      {/* ==========================================
          HERO
      ========================================== */}

      <section className="legal-hero">
        <div className="legal-hero-glow"></div>

        <div className="legal-container">

          <span className="legal-tag">
            TERMS OF USE
          </span>

          <h1>
            Terms & Conditions
          </h1>

          <p>
            These terms explain the rules and conditions that apply
            when you use the PixelPeak website or engage PixelPeak
            for digital services.
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
              These Terms & Conditions ("Terms") govern your use of
              the PixelPeak website and any services provided by
              PixelPeak ("PixelPeak", "we", "us", or "our").
            </p>

            <p>
              By using our website or engaging our services, you agree
              to these Terms. If you do not agree with these Terms,
              please do not use our website or services.
            </p>

          </div>


          {/* 1 */}

          <article className="legal-section">

            <h2>1. Website Use</h2>

            <p>
              You may use this website for lawful purposes only.
              You agree not to misuse the website, attempt to gain
              unauthorized access, interfere with its operation, or
              use the website for fraudulent or unlawful activities.
            </p>

          </article>


          {/* 2 */}

          <article className="legal-section">

            <h2>2. Our Services</h2>

            <p>
              PixelPeak provides digital services that may include:
            </p>

            <ul>
              <li>Website design and development</li>
              <li>Search engine optimization</li>
              <li>Google Ads management</li>
              <li>Social media marketing</li>
              <li>E-commerce development</li>
              <li>Digital strategy and consulting</li>
              <li>Other digital marketing services agreed with a client</li>
            </ul>

            <p>
              The exact services, deliverables, timelines and fees for
              a project will be determined through the applicable
              proposal, quotation, statement of work or agreement.
            </p>

          </article>


          {/* 3 */}

          <article className="legal-section">

            <h2>3. Consultations</h2>

            <p>
              Free consultations are intended to provide an initial
              discussion about a business's digital needs and potential
              solutions.
            </p>

            <p>
              A consultation does not create an obligation for either
              party to enter into a paid services agreement.
            </p>

          </article>


          {/* 4 */}

          <article className="legal-section">

            <h2>4. Project Scope</h2>

            <p>
              Project scope will be based on the services and
              deliverables agreed between PixelPeak and the client.
            </p>

            <p>
              Requests outside the agreed scope may require additional
              fees, time or a revised project agreement.
            </p>

          </article>


          {/* 5 */}

          <article className="legal-section">

            <h2>5. Client Responsibilities</h2>

            <p>
              Clients are responsible for providing accurate,
              complete and timely information, content, credentials,
              approvals and materials required to complete a project.
            </p>

            <p>
              Delays caused by missing information, delayed approvals
              or unavailable client materials may affect project
              timelines.
            </p>

          </article>


          {/* 6 */}

          <article className="legal-section">

            <h2>6. Payments</h2>

            <p>
              Fees, payment schedules, deposits and payment terms will
              be communicated before work begins or as otherwise agreed
              in writing.
            </p>

            <p>
              Work may be paused or suspended if required payments are
              overdue.
            </p>

          </article>


          {/* 7 */}

          <article className="legal-section">

            <h2>7. Website Development</h2>

            <p>
              Website projects may include design, development,
              responsive implementation, testing and deployment as
              specifically agreed.
            </p>

            <p>
              Domain names, hosting, premium software, third-party
              subscriptions, paid plugins and other external services
              may involve separate costs unless explicitly included in
              the project agreement.
            </p>

          </article>


          {/* 8 */}

          <article className="legal-section">

            <h2>8. SEO and Marketing Results</h2>

            <p>
              Digital marketing results can be affected by factors
              outside PixelPeak's control.
            </p>

            <p>
              PixelPeak does not guarantee specific rankings, traffic,
              leads, sales, advertising results, revenue or other
              business outcomes unless a specific written agreement
              expressly states otherwise.
            </p>

          </article>


          {/* 9 */}

          <article className="legal-section">

            <h2>9. Advertising Platforms</h2>

            <p>
              Advertising campaigns may use third-party platforms such
              as Google Ads and Meta Ads.
            </p>

            <p>
              Platform policies, algorithms, account restrictions,
              approval processes, pricing and availability are
              controlled by the relevant platform and may change
              without notice.
            </p>

          </article>


          {/* 10 */}

          <article className="legal-section">

            <h2>10. Intellectual Property</h2>

            <p>
              Ownership of website designs, source code, graphics,
              content, advertising materials and other project assets
              will depend on the applicable agreement between PixelPeak
              and the client.
            </p>

            <p>
              Third-party materials remain subject to their respective
              licenses and ownership rights.
            </p>

          </article>


          {/* 11 */}

          <article className="legal-section">

            <h2>11. Third-Party Services</h2>

            <p>
              PixelPeak may rely on third-party services, platforms
              and software to deliver certain services.
            </p>

            <p>
              PixelPeak is not responsible for outages, policy changes,
              pricing changes, account suspensions or other issues
              caused directly by third-party providers.
            </p>

          </article>


          {/* 12 */}

          <article className="legal-section">

            <h2>12. Cancellation and Termination</h2>

            <p>
              Either party may request termination of an ongoing
              service arrangement subject to the terms of the
              applicable agreement.
            </p>

            <p>
              Fees for completed work, committed expenses or
              non-refundable amounts may remain payable according to
              the applicable agreement.
            </p>

          </article>


          {/* 13 */}

          <article className="legal-section">

            <h2>13. Limitation of Liability</h2>

            <p>
              To the extent permitted by applicable law, PixelPeak
              will not be responsible for indirect, incidental,
              consequential or special losses arising from the use of
              our website or services.
            </p>

            <p>
              Nothing in these Terms is intended to exclude or limit
              liability that cannot lawfully be excluded or limited.
            </p>

          </article>


          {/* 14 */}

          <article className="legal-section">

            <h2>14. Website Content</h2>

            <p>
              Information published on the PixelPeak website is
              provided for general informational purposes and may be
              changed or updated without notice.
            </p>

            <p>
              We make reasonable efforts to keep information accurate,
              but we do not guarantee that every piece of website
              content will always be complete, current or error-free.
            </p>

          </article>


          {/* 15 */}

          <article className="legal-section">

            <h2>15. Privacy</h2>

            <p>
              Your use of our website is also subject to our
              Privacy Policy, which explains how information may be
              collected and handled.
            </p>

            <p>
              <Link to="/privacy">
                View our Privacy Policy →
              </Link>
            </p>

          </article>


          {/* 16 */}

          <article className="legal-section">

            <h2>16. Changes to These Terms</h2>

            <p>
              PixelPeak may update these Terms from time to time.
              Updated Terms will be published on this page with a
              revised "Last Updated" date.
            </p>

          </article>


          {/* 17 */}

          <article className="legal-section">

            <h2>17. Contact Us</h2>

            <p>
              If you have questions about these Terms & Conditions,
              please contact PixelPeak:
            </p>

            <div className="legal-contact-box">

              <strong>
                PixelPeak
              </strong>

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

            <Link to="/privacy">
              ← Privacy Policy
            </Link>

          </div>

        </div>

      </section>

    </main>
  </>
  );
}

export default Terms;