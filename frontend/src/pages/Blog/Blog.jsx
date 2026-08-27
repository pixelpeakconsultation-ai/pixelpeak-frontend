import { Link } from "react-router-dom";
import "./Blog.css";
import {
  FaPenNib,
  FaSearch,
  FaChartLine,
  FaShareAlt,
} from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    category: "Website Development",
    date: "August 15, 2026",
    title: "Why Your Business Needs a Professional Website",
    excerpt:
      "Your website is often the first interaction customers have with your business. Learn how a professional website can build trust and generate more opportunities.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    category: "SEO",
    date: "August 10, 2026",
    title: "How SEO Helps Local Businesses Get Found",
    excerpt:
      "Learn how a strong SEO strategy can help local businesses appear in search results and attract customers who are already looking for their services.",
    image:
      "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    category: "Google Ads",
    date: "August 5, 2026",
    title: "Google Ads vs Organic Traffic: What Should You Choose?",
    excerpt:
      "Paid advertising and organic search can both drive growth. Discover when each strategy makes sense for your business.",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    category: "Social Media",
    date: "July 30, 2026",
    title: "How Social Media Can Grow Your Brand",
    excerpt:
      "A strong social media presence can help businesses build awareness, connect with customers, and turn followers into loyal clients.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    category: "Business Growth",
    date: "July 24, 2026",
    title: "5 Digital Marketing Mistakes Small Businesses Make",
    excerpt:
      "Avoid the common digital marketing mistakes that can waste your budget and slow down your business growth.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    category: "Digital Strategy",
    date: "July 18, 2026",
    title: "Building a Digital Strategy That Actually Works",
    excerpt:
      "Successful digital marketing starts with a clear strategy. Here's how to build a system around your business goals.",
    image:
      "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1000&q=80",
  },
];

function Blog() {
  const featuredPost = blogPosts[0];
  const latestPosts = blogPosts.slice(1);

  return (
    <main className="blog-page">

      {/* ==========================================
          HERO
      ========================================== */}

      <section className="blog-hero">
        <div className="blog-container">

          <div className="blog-hero-content">
            <span className="blog-label">
              PIXELPEAK INSIGHTS
            </span>

            <h1>
              Ideas That Help Your
              <span> Business Grow.</span>
            </h1>

            <p>
              Practical insights, strategies, and digital marketing
              knowledge to help Canadian businesses build a stronger
              online presence and grow with confidence.
            </p>

            <div className="blog-hero-buttons">
              <a href="#latest-articles" className="blog-primary-btn">
                Explore Articles
              </a>

              <Link to="/contact" className="blog-secondary-btn">
                Talk to PixelPeak
              </Link>
            </div>
          </div>

          <div className="blog-hero-visual">

  <div className="blog-glow"></div>

  {/* Background grid */}
  <div className="blog-hero-grid"></div>

  {/* Orbit */}
  <div className="blog-orbit blog-orbit-one"></div>
  <div className="blog-orbit blog-orbit-two"></div>

  {/* Main content sphere */}
  <div className="blog-content-core">

    <div className="core-ring"></div>

    <div className="core-content">
      <span className="core-label">PIXELPEAK</span>

      <div className="core-symbol">✦</div>

      <strong>INSIGHTS</strong>

      <small>DIGITAL GROWTH</small>
    </div>

  </div>

  {/* Floating article */}
  <div className="blog-floating-item article-item">

    <div className="article-icon">
      <FaPenNib />
    </div>

    <div>
      <span>NEW ARTICLE</span>
      <strong>Digital Strategy</strong>
    </div>

  </div>


  {/* SEO floating item */}
  <div className="blog-floating-item seo-item">

    <div className="seo-icon">
      <FaSearch />
    </div>

    <div>
      <span>SEO</span>
      <strong>Visibility ↑</strong>
    </div>

  </div>


  {/* Growth floating item */}
  <div className="blog-floating-item growth-item">

    <div className="growth-icon">
      <FaChartLine />
    </div>

    <div>
      <span>GROWTH</span>
      <strong>+42%</strong>
    </div>

  </div>


  {/* Social floating item */}
  <div className="blog-floating-item social-item">

    <div className="social-icon">
      <FaShareAlt />
    </div>

    <div>
      <span>SOCIAL</span>
      <strong>Reach ↑</strong>
    </div>

  </div>


  {/* Connection lines */}
  <span className="blog-connect connect-one"></span>
  <span className="blog-connect connect-two"></span>
  <span className="blog-connect connect-three"></span>
  <span className="blog-connect connect-four"></span>

  {/* Floating particles */}
  <span className="blog-particle particle-one"></span>
  <span className="blog-particle particle-two"></span>
  <span className="blog-particle particle-three"></span>
  <span className="blog-particle particle-four"></span>
  <span className="blog-particle particle-five"></span>

</div>

        </div>
      </section>


      {/* ==========================================
          FEATURED ARTICLE
      ========================================== */}

      <section className="featured-section">
        <div className="blog-container">

          <div className="section-heading">
            <span className="blog-label">
              FEATURED ARTICLE
            </span>

            <h2>
              Start With What
              <span> Matters.</span>
            </h2>
          </div>

          <article className="featured-card">

            <div className="featured-image">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
              />

              <span className="featured-badge">
                Featured
              </span>
            </div>

            <div className="featured-content">

              <div className="article-meta">
                <span>{featuredPost.category}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
              </div>

              <h3>{featuredPost.title}</h3>

              <p>{featuredPost.excerpt}</p>

              <Link
                to={`/blog/${featuredPost.id}`}
                className="read-btn"
              >
                Read Article
                <span>→</span>
              </Link>

            </div>

          </article>

        </div>
      </section>


      {/* ==========================================
          LATEST ARTICLES
      ========================================== */}

      <section
        className="latest-section"
        id="latest-articles"
      >
        <div className="blog-container">

          <div className="section-heading">
            <span className="blog-label">
              LATEST ARTICLES
            </span>

            <h2>
              Digital Marketing
              <span> Insights.</span>
            </h2>

            <p>
              Explore practical strategies and ideas designed
              to help businesses compete and grow in the digital world.
            </p>
          </div>


          <div className="blog-grid">

            {latestPosts.map((post) => (
              <article
                className="blog-card"
                key={post.id}
              >

                <div className="blog-card-image">

                  <img
                    src={post.image}
                    alt={post.title}
                  />

                  <span className="category-badge">
                    {post.category}
                  </span>

                </div>

                <div className="blog-card-content">

                  <div className="article-meta">
                    <span>{post.date}</span>
                  </div>

                  <h3>{post.title}</h3>

                  <p>{post.excerpt}</p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="card-read-more"
                  >
                    Read More
                    <span>→</span>
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ==========================================
          CTA
      ========================================== */}

      <section className="blog-cta">
        <div className="blog-container">

          <div className="blog-cta-box">

            <span className="blog-label">
              READY TO GROW?
            </span>

            <h2>
              Turn Ideas Into
              <span> Real Growth.</span>
            </h2>

            <p>
              Reading is the first step. Let's turn the right
              strategy into measurable results for your business.
            </p>

            <Link
              to="/contact"
              className="blog-primary-btn"
            >
              Start Your Project
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Blog;