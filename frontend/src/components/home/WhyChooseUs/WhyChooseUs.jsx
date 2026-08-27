import { motion } from "framer-motion";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const benefits = [
    {
      number: "01",
      title: "Business-Focused",
      description:
        "We build digital solutions around your business goals, customers and market—not just technology.",
    },
    {
      number: "02",
      title: "Modern & Professional",
      description:
        "We create fast, responsive and professional digital experiences that make your business stand out.",
    },
    {
      number: "03",
      title: "Results Driven",
      description:
        "Every strategy is designed with measurable growth in mind, from traffic and leads to conversions.",
    },
    {
      number: "04",
      title: "Long-Term Partnership",
      description:
        "We don't disappear after launch. We continue helping your business improve, optimize and grow.",
    },
  ];

  return (
    <section className="why-section" id="why-us">

      {/* Background Glow */}

      <div className="why-glow why-glow-one"></div>
      <div className="why-glow why-glow-two"></div>


      <div className="why-container">

        {/* HEADER */}

        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >

          <span className="why-tag">
            WHY PIXELPEAK
          </span>

          <h2>
            More Than An Agency.
            <span> Your Growth Partner.</span>
          </h2>

          <p>
            We combine technology, creativity and digital marketing
            to build solutions that help businesses grow with confidence.
          </p>

        </motion.div>


        {/* MAIN CONTENT */}

        <div className="why-content">


          {/* LEFT SIDE */}

          <motion.div
            className="why-visual"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            <div className="visual-card">

              <div className="visual-top">

                <div>
                  <span className="visual-small">
                    DIGITAL GROWTH
                  </span>

                  <h3>
                    Built For
                    <br />
                    <span>Real Results.</span>
                  </h3>
                </div>

                <div className="visual-dot"></div>

              </div>


              {/* Growth Chart */}

              <div className="growth-chart">

                <div className="chart-line"></div>

                <div className="chart-point point-one"></div>
                <div className="chart-point point-two"></div>
                <div className="chart-point point-three"></div>
                <div className="chart-point point-four"></div>
                <div className="chart-point point-five"></div>

              </div>


              <div className="visual-stats">

                <div>
                  <strong>+85%</strong>
                  <span>Growth</span>
                </div>

                <div>
                  <strong>+62%</strong>
                  <span>Leads</span>
                </div>

                <div>
                  <strong>+74%</strong>
                  <span>Reach</span>
                </div>

              </div>

            </div>


            {/* Floating Elements

            <div className="floating-card floating-card-one">
              <span>✓</span>
              <div>
                <strong>Strategy</strong>
                <small>Data Driven</small>
              </div>
            </div>


            <div className="floating-card floating-card-two">
              <span>↗</span>
              <div>
                <strong>Growth</strong>
                <small>Always Improving</small>
              </div>
            </div> */}

          </motion.div>


          {/* RIGHT SIDE */}

          <div className="why-benefits">

            {benefits.map((benefit, index) => (

              <motion.div
                className="benefit-item"
                key={benefit.number}
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >

                <div className="benefit-number">
                  {benefit.number}
                </div>

                <div className="benefit-content">

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;