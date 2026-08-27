import { motion } from "framer-motion";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section" id="cta">
      {/* Background Effects */}
      <div className="cta-glow cta-glow-one"></div>
      <div className="cta-glow cta-glow-two"></div>

      <div className="cta-container">

        {/* Main CTA */}
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="cta-label">
            READY TO GROW?
          </span>

          <h2>
            Let's Build Something
            <span> Great Together.</span>
          </h2>

          <p>
            Whether you're launching a new business, improving your
            current website, or looking to generate more customers,
            PixelPeak can help you build a stronger digital presence.
          </p>

          {/* Buttons */}
          <div className="cta-buttons">

            <a
              href="#contact"
              className="cta-primary-button"
            >
              Start Your Project
              <span>→</span>
            </a>

            <a
  href="https://calendar.app.google/NeEae2sdgGubo1fZ6"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
>
  Book Free Consultation
</a>

          </div>
        </motion.div>


        {/* Trust Points */}
        <motion.div
          className="cta-features"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >

          <div className="cta-feature">
            <span className="cta-check">✓</span>
            <span>Custom Solutions</span>
          </div>

          <div className="cta-feature">
            <span className="cta-check">✓</span>
            <span>Transparent Pricing</span>
          </div>

          <div className="cta-feature">
            <span className="cta-check">✓</span>
            <span>Professional Development</span>
          </div>

          <div className="cta-feature">
            <span className="cta-check">✓</span>
            <span>Canada-Focused Strategy</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default CTA;