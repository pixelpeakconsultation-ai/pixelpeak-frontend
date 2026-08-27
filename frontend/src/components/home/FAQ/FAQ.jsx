import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";

const faqData = [
  {
    id: 1,
    question: "What services does PixelPeak offer?",
    answer:
      "PixelPeak provides complete digital growth solutions for businesses, including professional website development, SEO, Google Ads, Meta Ads, social media marketing, e-commerce development, and digital strategy.",
  },
  {
    id: 2,
    question: "How much does a professional website cost?",
    answer:
"Our website development projects typically range from $1,000 to $6,000, depending on the size, features, design requirements, functionality, and complexity of the project. We create custom solutions based on your business goals rather than using a one-size-fits-all package."  },
  {
    id: 3,
    question: "How long does website development take?",
    answer:
      "A typical business website can take around 2–6 days depending on its complexity, number of pages, content, features, revisions, and client feedback. Larger e-commerce and custom projects may require more time.",
  },
  {
    id: 4,
    question: "Do you work with businesses outside Canada?",
    answer:
      "Yes. Although PixelPeak focuses primarily on Canadian businesses, we can work with businesses and startups internationally through online meetings, communication, and remote project management.",
  },
  {
    id: 5,
    question: "Do you provide SEO after building a website?",
    answer:
      "Yes. Website development and SEO can be combined into a complete growth strategy. We can optimize your website structure, technical SEO, content, keywords, local SEO, and other important ranking factors.",
  },
  {
    id: 6,
    question: "Do you manage Google Ads and Meta Ads?",
    answer:
      "Yes. We can help businesses plan, launch, monitor, and optimize paid advertising campaigns across platforms such as Google Ads and Meta Ads, with the goal of generating qualified traffic and leads.",
  },
  {
    id: 7,
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can redesign an outdated website with a modern interface, improved mobile responsiveness, better user experience, stronger conversion elements, and a more professional brand presence.",
  },
  {
    id: 8,
    question: "How do I get started with PixelPeak?",
    answer:
      "Getting started is simple. Contact us and tell us about your business, goals, and project requirements. We'll discuss your needs, recommend the right strategy, and determine the next steps for your project.",
  },
];

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleToggle = (id) => {
    setOpenFAQ((previous) =>
      previous === id ? null : id
    );
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-background-glow"></div>

      <div className="faq-container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <motion.div
          className="faq-heading"
          initial={{
            opacity: 0,
            y: 35,
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
          <span className="faq-label">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Questions?
            <span> We've Got Answers.</span>
          </h2>

          <p>
            Everything you need to know about
            working with PixelPeak.
          </p>
        </motion.div>

        {/* ==========================================
            FAQ LIST
        ========================================== */}

        <motion.div
          className="faq-list"
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
            delay: 0.15,
          }}
        >
          {faqData.map((faq, index) => {
            const isOpen = openFAQ === faq.id;

            return (
              <motion.div
                className={`faq-item ${
                  isOpen ? "faq-item-open" : ""
                }`}
                key={faq.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >
                <button
                  className="faq-question"
                  onClick={() => handleToggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question-text">
                    {faq.question}
                  </span>

                  <span
                    className={`faq-icon ${
                      isOpen ? "faq-icon-open" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ==========================================
            BOTTOM CTA
        ========================================== */}

        <motion.div
          className="faq-bottom"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <div>
            <h3>
              Still have questions?
            </h3>

            <p>
              Let's talk about your business
              and your goals.
            </p>
          </div>

          <a
            href="#contact"
            className="faq-contact-button"
          >
            Contact Us
            <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default FAQ;