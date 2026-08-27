import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Reviews.css";

const STAR = String.fromCharCode(9733);

const initialReviews = [
  {
    id: 1,
    name: "Ahmed Khan",
    date: "August 12, 2026",
    rating: 5,
    verified: true,
    service: "Website Development",
    helpful: 12,
    text:
      "PixelPeak completely transformed our online presence. The website looks professional, loads quickly and works perfectly on mobile. The team understood exactly what we wanted and delivered an excellent result.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    date: "August 8, 2026",
    rating: 5,
    verified: true,
    service: "Digital Marketing",
    helpful: 8,
    text:
      "Excellent service and communication. The team understood our business goals and delivered exactly what we needed. They were professional throughout the entire project.",
  },
  {
    id: 3,
    name: "Michael Brown",
    date: "July 29, 2026",
    rating: 4,
    verified: true,
    service: "SEO",
    helpful: 5,
    text:
      "Very professional team. The website design was modern and the whole process was smooth from beginning to end. Communication was also very good.",
  },
];

const ratingData = [
  { stars: 5, percentage: 82, count: 80 },
  { stars: 4, percentage: 13, count: 13 },
  { stars: 3, percentage: 4, count: 4 },
  { stars: 2, percentage: 1, count: 1 },
  { stars: 1, percentage: 0, count: 0 },
];

function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [selectedReview, setSelectedReview] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [sortBy, setSortBy] = useState("recent");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    rating: 0,
    review: "",
  });

  /* ==========================================
     SORT REVIEWS
  ========================================== */

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "highest") {
      return b.rating - a.rating;
    }

    if (sortBy === "lowest") {
      return a.rating - b.rating;
    }

    if (sortBy === "helpful") {
      return b.helpful - a.helpful;
    }

    return b.id - a.id;
  });

  /* ==========================================
     FORM CHANGE
  ========================================== */

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /* ==========================================
     SUBMIT REVIEW
  ========================================== */

  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.review.trim() ||
      formData.rating === 0
    ) {
      alert("Please complete all required fields and select a rating.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: formData.name.trim(),
      date: "Just now",
      rating: Number(formData.rating),
      verified: false,
      service: formData.service || "General",
      helpful: 0,
      text: formData.review.trim(),
    };

    setReviews((previous) => [newReview, ...previous]);

    setFormData({
      name: "",
      email: "",
      service: "",
      rating: 0,
      review: "",
    });

    setShowReviewForm(false);
    setSelectedReview(newReview);
  };

  /* ==========================================
     HELPFUL BUTTON
  ========================================== */

  const handleHelpful = (reviewId) => {
    setReviews((previous) =>
      previous.map((review) =>
        review.id === reviewId
          ? {
              ...review,
              helpful: review.helpful + 1,
            }
          : review
      )
    );

    if (selectedReview && selectedReview.id === reviewId) {
      setSelectedReview((previous) => ({
        ...previous,
        helpful: previous.helpful + 1,
      }));
    }
  };

  /* ==========================================
     RENDER STARS
  ========================================== */

  const renderStars = (rating, interactive = false) => {
    return (
      <div
        className={
          interactive
            ? "modal-star-selector"
            : "review-stars"
        }
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= rating ? "active" : ""}
            onClick={
              interactive
                ? () =>
                    setFormData((previous) => ({
                      ...previous,
                      rating: star,
                    }))
                : undefined
            }
          >
            {STAR}
          </span>
        ))}
      </div>
    );
  };

  /* ==========================================
     CLOSE MODALS
  ========================================== */

  const closeReviewModal = () => {
    setSelectedReview(null);
  };

  const closeReviewForm = () => {
    setShowReviewForm(false);
  };

  return (
    <section
      className="reviews-section"
      id="reviews"
    >
      <div className="reviews-background-glow"></div>

      <div className="reviews-container">

        {/* ======================================
            HEADER
        ====================================== */}

        <motion.div
          className="reviews-heading"
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
          <span className="reviews-label">
            CUSTOMER REVIEWS
          </span>

          <h2>
            What Our Clients{" "}
            <span>Think.</span>
          </h2>

          <p>
            Real experiences from businesses
            that have worked with PixelPeak.
          </p>
        </motion.div>

        {/* ======================================
            REVIEW SUMMARY
        ====================================== */}

        <motion.div
          className="review-summary"
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

          {/* OVERALL RATING */}

          <div className="overall-rating">
            <h3>4.5</h3>

            <div className="overall-stars">
              {STAR}
              {STAR}
              {STAR}
              {STAR}
              {STAR}
            </div>

            <p>
              Based on{" "}
              <strong>98 reviews</strong>
            </p>
          </div>

          {/* RATING BREAKDOWN */}

          <div className="rating-breakdown">
            {ratingData.map((item) => (
              <div
                className="rating-row"
                key={item.stars}
              >
                <span className="rating-number">
                  {item.stars}
                </span>

                <span className="small-star">
                  {STAR}
                </span>

                <div className="rating-bar">
                  <div
                    className="rating-bar-fill"
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>

                <span className="rating-count">
                  {item.count}
                </span>
              </div>
            ))}
          </div>

          {/* WRITE REVIEW */}

          <div className="review-action">
            <h3>
              Share your experience
            </h3>

            <p>
              Worked with PixelPeak?
            </p>

            <button
              type="button"
              className="write-review-button"
              onClick={() =>
                setShowReviewForm(true)
              }
            >
              Write a Review
              <span>→</span>
            </button>
          </div>

        </motion.div>

        {/* ======================================
            REVIEW LIST
        ====================================== */}

        <div className="reviews-list">

          <div className="reviews-list-header">
            <h3>
              Customer Reviews
            </h3>

            <select
              className="sort-button"
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
            >
              <option value="recent">
                Most Recent
              </option>

              <option value="highest">
                Highest Rating
              </option>

              <option value="lowest">
                Lowest Rating
              </option>

              <option value="helpful">
                Most Helpful
              </option>
            </select>
          </div>

          {/* REVIEWS */}

          {sortedReviews.map(
            (review, index) => (
              <motion.div
                className="individual-review"
                key={review.id}
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >

                {/* USER */}

                <div className="review-user">

                  <div className="review-user-avatar">
                    {review.name
                      .charAt(0)
                      .toUpperCase()}
                  </div>

                  <div>
                    <h4>
                      {review.name}
                    </h4>

                    {review.verified && (
                      <span className="verified-client">
                        ✓ Verified Client
                      </span>
                    )}
                  </div>

                </div>

                {/* REVIEW CONTENT */}

                <div className="review-main">

                  <div className="review-meta">
                    {renderStars(
                      review.rating
                    )}

                    <span className="review-date">
                      {review.date}
                    </span>
                  </div>

                  <div className="review-service">
                    {review.service}
                  </div>

                  <p className="review-preview">
                    {review.text.length > 180
                      ? `${review.text.slice(
                          0,
                          180
                        )}...`
                      : review.text}
                  </p>

                  <div className="review-actions">

                    <button
                      type="button"
                      className="read-review-button"
                      onClick={() =>
                        setSelectedReview(
                          review
                        )
                      }
                    >
                      Read Full Review
                    </button>

                    <button
                      type="button"
                      className="helpful-button"
                      onClick={() =>
                        handleHelpful(
                          review.id
                        )
                      }
                    >
                      <span className="helpful-icon">
                        👍
                      </span>

                      Helpful

                      <span>
                        {review.helpful}
                      </span>
                    </button>

                  </div>

                </div>

              </motion.div>
            )
          )}

        </div>

      </div>

      {/* ========================================
          FULL REVIEW MODAL
      ======================================== */}

      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="review-modal-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeReviewModal}
          >

            <motion.div
              className="review-detail-modal"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <button
                type="button"
                className="modal-close"
                onClick={closeReviewModal}
                aria-label="Close review"
              >
                ×
              </button>

              {/* USER */}

              <div className="detail-user">

                <div className="detail-avatar">
                  {selectedReview.name
                    .charAt(0)
                    .toUpperCase()}
                </div>

                <div>
                  <h3>
                    {selectedReview.name}
                  </h3>

                  {selectedReview.verified && (
                    <span>
                      ✓ Verified Client
                    </span>
                  )}
                </div>

              </div>

              {/* RATING */}

              <div className="detail-rating">

                {renderStars(
                  selectedReview.rating
                )}

                <span>
                  {selectedReview.date}
                </span>

              </div>

              {/* SERVICE */}

              <div className="detail-service">
                {selectedReview.service}
              </div>

              {/* FULL REVIEW */}

              <p className="full-review-text">
                “{selectedReview.text}”
              </p>

              {/* HELPFUL */}

              <div className="detail-helpful">

                <span>
                  Was this review helpful?
                </span>

                <button
                  type="button"
                  onClick={() =>
                    handleHelpful(
                      selectedReview.id
                    )
                  }
                >
                  👍 Helpful

                  <strong>
                    {selectedReview.helpful}
                  </strong>
                </button>

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================
          WRITE REVIEW MODAL
      ======================================== */}

      <AnimatePresence>
        {showReviewForm && (
          <motion.div
            className="review-modal-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeReviewForm}
          >

            <motion.div
              className="review-form-modal"
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            >

              <button
                type="button"
                className="modal-close"
                onClick={closeReviewForm}
                aria-label="Close form"
              >
                ×
              </button>

              <span className="modal-label">
                SHARE YOUR EXPERIENCE
              </span>

              <h2>
                Write a{" "}
                <span>Review</span>
              </h2>

              <p>
                Tell us about your experience
                working with PixelPeak.
              </p>

              <form
                onSubmit={
                  handleSubmitReview
                }
              >

                {/* NAME */}

                <div className="input-group">
                  <label htmlFor="review-name">
                    Your Name *
                  </label>

                  <input
                    id="review-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={
                      handleInputChange
                    }
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* EMAIL */}

                <div className="input-group">
                  <label htmlFor="review-email">
                    Your Email *
                  </label>

                  <input
                    id="review-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={
                      handleInputChange
                    }
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* SERVICE */}

                <div className="input-group">
                  <label htmlFor="review-service">
                    Service
                  </label>

                  <select
                    id="review-service"
                    name="service"
                    value={
                      formData.service
                    }
                    onChange={
                      handleInputChange
                    }
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="SEO">
                      SEO
                    </option>

                    <option value="Google Ads">
                      Google Ads
                    </option>

                    <option value="Social Media Marketing">
                      Social Media Marketing
                    </option>

                    <option value="E-Commerce">
                      E-Commerce
                    </option>

                    <option value="Digital Strategy">
                      Digital Strategy
                    </option>
                  </select>
                </div>

                {/* RATING */}

                <div className="input-group">
                  <label>
                    Your Rating *
                  </label>

                  {renderStars(
                    formData.rating,
                    true
                  )}
                </div>

                {/* REVIEW */}

                <div className="input-group">
                  <label htmlFor="review-text">
                    Your Review *
                  </label>

                  <textarea
                    id="review-text"
                    name="review"
                    value={
                      formData.review
                    }
                    onChange={
                      handleInputChange
                    }
                    rows="5"
                    placeholder="Share your experience..."
                    required
                  />
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="submit-review-button"
                >
                  Submit Review
                  <span>→</span>
                </button>

              </form>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Reviews;