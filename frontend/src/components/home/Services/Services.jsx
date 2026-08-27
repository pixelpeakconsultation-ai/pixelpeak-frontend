import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Services.css";

import WebsiteImage from "../../../assets/services/website-development.jpg";
import SeoImage from "../../../assets/services/seo.jpg";
import GoogleAdsImage from "../../../assets/services/google-ads.jpg";
import SocialMediaImage from "../../../assets/services/social-media.jpg";
import EcommerceImage from "../../../assets/services/ecommerce.jpg";
import StrategyImage from "../../../assets/services/digital-strategy.jpg";

function Services() {
  const services = [
    {
      image: WebsiteImage,
      title: "Website Development",
      description:
        "Professional, fast and responsive websites designed to turn visitors into customers.",
      link: "/blog/1",
    },

    {
      image: SeoImage,
      title: "SEO",
      description:
        "Improve your search visibility, attract qualified traffic and build long-term organic growth.",
      link: "/blog/2",
    },

    {
      image: GoogleAdsImage,
      title: "Google Ads",
      description:
        "Target the right customers with strategic Google advertising campaigns built for results.",
      link: "/blog/3",
    },

    {
      image: SocialMediaImage,
      title: "Social Media Marketing",
      description:
        "Build your brand presence and connect with your audience through effective social media strategies.",
      link: "/blog/4",
    },

    {
      image: EcommerceImage,
      title: "E-Commerce",
      description:
        "Create modern online stores with smooth shopping experiences designed to increase conversions.",
      link: "/blog/5",
    },

    {
      image: StrategyImage,
      title: "Digital Growth Strategy",
      description:
        "Turn your business goals into a clear digital strategy focused on sustainable growth.",
      link: "/blog/6",
    },
  ];

  return (
    <section className="services" id="services">

      {/* Background Glow */}
      <div className="services-glow services-glow-one"></div>
      <div className="services-glow services-glow-two"></div>

      <div className="services-container">

        {/* ==========================================
            SECTION HEADER
        ========================================== */}

        <motion.div
          className="services-header"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="services-tag">
            WHAT WE DO
          </span>

          <h2>
            Digital Services Built
            <span> For Growth.</span>
          </h2>

          <p>
            Everything your business needs to build a strong digital
            presence, attract customers and grow online.
          </p>
        </motion.div>

        {/* ==========================================
            SERVICES GRID
        ========================================== */}

        <div className="services-grid">

          {services.map((service, index) => (

            <motion.article
              className="service-card"
              key={service.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >

              {/* ==========================================
                  RECTANGULAR IMAGE
              ========================================== */}

              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>

              {/* ==========================================
                  CARD CONTENT
              ========================================== */}

              <div className="service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                {/* ==========================================
                    LEARN MORE
                ========================================== */}

                <Link
                  to={service.link}
                  className="service-button"
                >
                  Learn More
                  <span>→</span>
                </Link>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;