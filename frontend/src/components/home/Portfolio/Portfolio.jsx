import { motion } from "framer-motion";
import "./Portfolio.css";

import WebsiteProject from "../../../assets/portfolio/website-project.jpg";
import EcommerceProject from "../../../assets/portfolio/ecommerce-project.jpg";
import SEOProject from "../../../assets/portfolio/seo-project.jpg";
import MarketingProject from "../../../assets/portfolio/marketing-project.jpg";

function Portfolio() {
  const projects = [
    {
      image: WebsiteProject,
      title: "Modern Business Website",
      category: "Website Development",
      description:
        "A professional, responsive website designed to create a strong online presence and generate new customer enquiries.",
    },
    {
      image: EcommerceProject,
      title: "E-Commerce Store",
      category: "E-Commerce",
      description:
        "A modern online shopping experience designed with a clean interface, easy navigation and conversion-focused pages.",
    },
    {
      image: SEOProject,
      title: "SEO Growth Campaign",
      category: "SEO",
      description:
        "A strategic SEO project focused on improving search visibility, attracting qualified visitors and building organic growth.",
    },
    {
      image: MarketingProject,
      title: "Digital Marketing Campaign",
      category: "Digital Marketing",
      description:
        "A complete digital marketing campaign combining paid advertising, social media and performance-focused strategy.",
    },
  ];

  return (
    <section className="portfolio-section" id="portfolio">

      {/* Background Glow */}

      <div className="portfolio-glow portfolio-glow-one"></div>
      <div className="portfolio-glow portfolio-glow-two"></div>


      <div className="portfolio-container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <motion.div
          className="portfolio-header"
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

          <span className="portfolio-tag">
            OUR WORK
          </span>

          <h2>
            Projects Built
            <span> For Growth.</span>
          </h2>

          <p>
            A selection of digital experiences and marketing solutions
            created to help businesses build stronger brands and grow online.
          </p>

        </motion.div>


        {/* ==========================================
            PROJECT GRID
        ========================================== */}

        <div className="portfolio-grid">

          {projects.map((project, index) => (

            <motion.article
              className="portfolio-card"
              key={project.title}

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
                delay: index * 0.1,
              }}
            >

              {/* Project Image */}

              <div className="portfolio-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />

                <div className="portfolio-image-overlay">

                  <span>
                    View Project
                  </span>

                </div>

              </div>


              {/* Project Content */}

              <div className="portfolio-content">

                <span className="portfolio-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <button className="portfolio-button">
                  View Project
                  <span>→</span>
                </button>

              </div>

            </motion.article>

          ))}

        </div>


        {/* ==========================================
            BOTTOM CTA
        ========================================== */}

        <motion.div
          className="portfolio-bottom"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.7,
          }}
        >

          <p>
            Want to see what we can build for your business?
          </p>

          <button className="portfolio-view-all">
            View All Projects
            <span>→</span>
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default Portfolio;