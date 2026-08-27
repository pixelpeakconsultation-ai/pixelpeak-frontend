import { motion } from "framer-motion";
import "./Process.css";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We learn about your business, audience, goals and challenges before creating a strategy.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We create a clear digital roadmap designed around your business objectives and target customers.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Our team turns the strategy into a professional website, marketing campaign or digital solution.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We test everything, optimize the experience and launch your digital presence with confidence.",
    },
    {
      number: "05",
      title: "Grow",
      description:
        "We monitor performance, improve results and continuously find new opportunities for growth.",
    },
  ];

  return (
    <section className="process-section" id="process">

      {/* Background Glow */}

      <div className="process-glow process-glow-one"></div>
      <div className="process-glow process-glow-two"></div>


      <div className="process-container">

        {/* ==========================================
            HEADER
        ========================================== */}

        <motion.div
          className="process-header"
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

          <span className="process-tag">
            HOW WE WORK
          </span>

          <h2>
            From Idea
            <span> To Growth.</span>
          </h2>

          <p>
            A simple, transparent process designed to turn your
            business goals into measurable digital results.
          </p>

        </motion.div>


        {/* ==========================================
            PROCESS
        ========================================== */}

        <div className="process-wrapper">

          {/* Connecting Line */}

          <div className="process-line">
            <motion.div
              className="process-line-progress"
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: "100%",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>


          {/* Steps */}

          <div className="process-grid">

            {steps.map((step, index) => (

              <motion.div
                className="process-step"
                key={step.number}

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
                  duration: 0.6,
                  delay: index * 0.18,
                }}
              >

                {/* Number */}

                <motion.div
                  className="process-number"
                  whileHover={{
                    scale: 1.08,
                  }}
                >
                  {step.number}
                </motion.div>


                {/* Content */}

                <div className="process-content">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>


        {/* ==========================================
            BOTTOM MESSAGE
        ========================================== */}

        <motion.div
          className="process-bottom"
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
            delay: 0.3,
          }}
        >

          <span>
            Ready to grow your business?
          </span>

          <button className="process-button">
            Start Your Project
            <span>→</span>
          </button>

        </motion.div>

      </div>

    </section>
  );
}

export default Process;