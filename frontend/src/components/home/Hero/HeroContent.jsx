import { motion } from "framer-motion";
import HeroTypewriter from "./Typewriter";
import Stats from "./Stats";

function HeroContent() {
  return (
    <motion.div
      className="hero-content"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-badge">
        🚀 Canada's Digital Growth Partner
      </div>

      <HeroTypewriter />

      <p className="hero-text">
        PixelPeak helps startups and local businesses grow with
        professional websites, SEO, paid advertising,
        social media marketing and digital strategy.
      </p>

      <div className="hero-buttons">

        <button className="primary-btn">
          Book Free Consultation
        </button>

        <button className="secondary-btn">
          Explore Services
        </button>

      </div>

      <Stats />

    </motion.div>
  );
}

export default HeroContent;