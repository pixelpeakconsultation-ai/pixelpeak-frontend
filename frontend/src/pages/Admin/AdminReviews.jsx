import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminReviews.css";

function AdminReviews() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedReview, setSelectedReview] =
    useState(null);

  const [actionLoading, setActionLoading] =
    useState(false);

  const token = localStorage.getItem("adminToken");

  /* ========================================
     FETCH REVIEWS
  ======================================== */

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError("");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      const response = await fetch(
        "https://backend-psi-rouge-29.vercel.app/api/reviews/admin",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/admin/login");
        return;
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to fetch reviews."
        );
      }

      setReviews(data.reviews || []);
    } catch (error) {
      console.error("Fetch reviews error:", error);

      setError(
        error.message ||
          "Unable to load reviews."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  /* ========================================
     APPROVE REVIEW
  ======================================== */

  const handleApprove = async (reviewId) => {
    try {
      setActionLoading(true);

      const response = await fetch(
        `https://backend-psi-rouge-29.vercel.app/api/reviews/${reviewId}/approve`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/admin/login");
        return;
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to approve review."
        );
      }

      setReviews((previousReviews) =>
        previousReviews.map((review) =>
          review._id === reviewId
            ? {
                ...review,
                approved: true,
              }
            : review
        )
      );

      if (
        selectedReview &&
        selectedReview._id === reviewId
      ) {
        setSelectedReview({
          ...selectedReview,
          approved: true,
        });
      }
    } catch (error) {
      console.error("Approve review error:", error);

      alert(
        error.message ||
          "Failed to approve review."
      );
    } finally {
      setActionLoading(false);
    }
  };

  /* ========================================
     DELETE REVIEW
  ======================================== */

  const handleDelete = async (reviewId) => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this review?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setActionLoading(true);

      const response = await fetch(
        `https://backend-psi-rouge-29.vercel.app/api/reviews/${reviewId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/admin/login");
        return;
      }

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to delete review."
        );
      }

      setReviews((previousReviews) =>
        previousReviews.filter(
          (review) => review._id !== reviewId
        )
      );

      setSelectedReview(null);
    } catch (error) {
      console.error("Delete review error:", error);

      alert(
        error.message ||
          "Failed to delete review."
      );
    } finally {
      setActionLoading(false);
    }
  };

  /* ========================================
     LOGOUT
  ======================================== */

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin/login");
  };

  /* ========================================
     DATE
  ======================================== */

  const formatDate = (date) => {
    if (!date) {
      return "—";
    }

    return new Date(date).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );
  };

  /* ========================================
     STARS
  ======================================== */

  const renderStars = (rating) => {
    return (
      <span className="admin-review-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={
              star <= rating
                ? "star filled"
                : "star"
            }
          >
            ★
          </span>
        ))}
      </span>
    );
  };

  /* ========================================
     COUNTS
  ======================================== */

  const pendingCount = reviews.filter(
    (review) => !review.approved
  ).length;

  const approvedCount = reviews.filter(
    (review) => review.approved
  ).length;

  /* ========================================
     RENDER
  ======================================== */

  return (
    <div className="admin-reviews-page">

      {/* =====================================
          SIDEBAR
      ===================================== */}

      <aside className="admin-reviews-sidebar">

        <div className="admin-reviews-logo">
          <h2>
            <span>Pixel</span>Peak
          </h2>

          <p>ADMIN PANEL</p>
        </div>

        <nav className="admin-reviews-nav">

          <div className="admin-reviews-nav-title">
            Management
          </div>

          <button
            className="admin-reviews-nav-button"
            onClick={() =>
              navigate("/admin/dashboard")
            }
          >
            <span className="admin-reviews-nav-icon">
              ⌂
            </span>

            <span>Dashboard</span>
          </button>

          <button
            className="admin-reviews-nav-button"
            onClick={() =>
              navigate("/admin/contacts")
            }
          >
            <span className="admin-reviews-nav-icon">
              ✉
            </span>

            <span>Contacts</span>
          </button>

          <button className="admin-reviews-nav-button active">
            <span className="admin-reviews-nav-icon">
              ★
            </span>

            <span>Reviews</span>
          </button>

        </nav>

        <div className="admin-reviews-sidebar-bottom">

          <button
            className="admin-reviews-logout"
            onClick={handleLogout}
          >
            <span>↪</span>
            <span>Logout</span>
          </button>

        </div>

      </aside>

      {/* =====================================
          MAIN
      ===================================== */}

      <main className="admin-reviews-main">

        <header className="admin-reviews-topbar">

          <div>
            <h1>Review Management</h1>

            <p>
              Review, approve and manage client
              feedback.
            </p>
          </div>

          <button
            className="admin-reviews-dashboard-button"
            onClick={() =>
              navigate("/admin/dashboard")
            }
          >
            ← Dashboard
          </button>

        </header>

        <section className="admin-reviews-content">

          {/* =================================
              STAT CARDS
          ================================= */}

          <div className="admin-review-stats">

            <div className="admin-review-stat-card">

              <div className="review-stat-icon">
                ★
              </div>

              <div>
                <span>Total Reviews</span>
                <strong>{reviews.length}</strong>
              </div>

            </div>

            <div className="admin-review-stat-card">

              <div className="review-stat-icon pending">
                !
              </div>

              <div>
                <span>Pending</span>
                <strong>{pendingCount}</strong>
              </div>

            </div>

            <div className="admin-review-stat-card">

              <div className="review-stat-icon approved">
                ✓
              </div>

              <div>
                <span>Approved</span>
                <strong>{approvedCount}</strong>
              </div>

            </div>

          </div>

          {/* =================================
              HEADING
          ================================= */}

          <div className="admin-reviews-heading">

            <div>
              <h2>All Reviews</h2>

              <p>
                {loading
                  ? "Loading..."
                  : `${reviews.length} review${
                      reviews.length !== 1
                        ? "s"
                        : ""
                    }`}
              </p>
            </div>

            <button
              className="admin-reviews-refresh"
              onClick={fetchReviews}
              disabled={loading}
            >
              ↻ Refresh
            </button>

          </div>

          {/* ERROR */}

          {error && (
            <div className="admin-reviews-error">
              {error}
            </div>
          )}

          {/* LOADING */}

          {loading && (
            <div className="admin-reviews-state">

              <div className="admin-review-spinner"></div>

              <p>
                Loading reviews...
              </p>

            </div>
          )}

          {/* EMPTY */}

          {!loading &&
            !error &&
            reviews.length === 0 && (
              <div className="admin-reviews-state">

                <div className="admin-review-empty-icon">
                  ★
                </div>

                <h3>
                  No reviews yet
                </h3>

                <p>
                  Customer reviews will appear
                  here when submitted.
                </p>

              </div>
            )}

          {/* =================================
              DESKTOP TABLE
          ================================= */}

          {!loading &&
            reviews.length > 0 && (
              <div className="admin-reviews-table-wrapper">

                <table className="admin-reviews-table">

                  <thead>
                    <tr>
                      <th>Reviewer</th>
                      <th>Rating</th>
                      <th>Service</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>

                    {reviews.map((review) => (
                      <tr key={review._id}>

                        <td>
                          <div className="reviewer-cell">

                            <div className="reviewer-avatar">
                              {review.name
                                ?.charAt(0)
                                ?.toUpperCase()}
                            </div>

                            <div>
                              <strong>
                                {review.name}
                              </strong>

                              <span>
                                {review.email}
                              </span>
                            </div>

                          </div>
                        </td>

                        <td>
                          {renderStars(
                            review.rating
                          )}
                        </td>

                        <td>
                          {review.service || "—"}
                        </td>

                        <td>

                          {review.approved ? (
                            <span className="review-status approved">
                              Approved
                            </span>
                          ) : (
                            <span className="review-status pending">
                              Pending
                            </span>
                          )}

                        </td>

                        <td>
                          {formatDate(
                            review.createdAt
                          )}
                        </td>

                        <td>

                          <button
                            className="review-view-button"
                            onClick={() =>
                              setSelectedReview(
                                review
                              )
                            }
                          >
                            View
                          </button>

                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>
            )}

          {/* =================================
              MOBILE CARDS
          ================================= */}

          {!loading &&
            reviews.length > 0 && (
              <div className="admin-reviews-mobile">

                {reviews.map((review) => (
                  <div
                    className="admin-review-card"
                    key={review._id}
                  >

                    <div className="admin-review-card-header">

                      <div className="reviewer-mobile">

                        <div className="reviewer-avatar">
                          {review.name
                            ?.charAt(0)
                            ?.toUpperCase()}
                        </div>

                        <div>
                          <h3>
                            {review.name}
                          </h3>

                          <span>
                            {review.email}
                          </span>
                        </div>

                      </div>

                      {review.approved ? (
                        <span className="review-status approved">
                          Approved
                        </span>
                      ) : (
                        <span className="review-status pending">
                          Pending
                        </span>
                      )}

                    </div>

                    <div className="mobile-review-rating">
                      {renderStars(
                        review.rating
                      )}

                      <span>
                        {review.rating}/5
                      </span>
                    </div>

                    <p className="mobile-review-comment">
                      {review.comment}
                    </p>

                    <div className="mobile-review-footer">

                      <span>
                        {review.service ||
                          "General"}
                      </span>

                      <span>
                        {formatDate(
                          review.createdAt
                        )}
                      </span>

                    </div>

                    <button
                      className="review-mobile-view"
                      onClick={() =>
                        setSelectedReview(
                          review
                        )
                      }
                    >
                      View Details
                    </button>

                  </div>
                ))}

              </div>
            )}

        </section>

      </main>

      {/* =====================================
          REVIEW MODAL
      ===================================== */}

      {selectedReview && (
        <div
          className="admin-review-modal-overlay"
          onClick={() =>
            setSelectedReview(null)
          }
        >

          <div
            className="admin-review-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="admin-review-modal-header">

              <div className="review-modal-person">

                <div className="reviewer-avatar large">
                  {selectedReview.name
                    ?.charAt(0)
                    ?.toUpperCase()}
                </div>

                <div>
                  <span>
                    REVIEW DETAILS
                  </span>

                  <h2>
                    {selectedReview.name}
                  </h2>
                </div>

              </div>

              <button
                className="admin-review-modal-close"
                onClick={() =>
                  setSelectedReview(null)
                }
              >
                ×
              </button>

            </div>

            <div className="admin-review-modal-body">

              <div className="review-modal-rating">
                {renderStars(
                  selectedReview.rating
                )}

                <strong>
                  {selectedReview.rating}/5
                </strong>
              </div>

              <div className="review-modal-status">

                <span>Status</span>

                {selectedReview.approved ? (
                  <strong className="approved-text">
                    ✓ Approved
                  </strong>
                ) : (
                  <strong className="pending-text">
                    ! Pending Approval
                  </strong>
                )}

              </div>

              <div className="review-modal-info">

                <div>
                  <span>Email</span>

                  <a
                    href={`mailto:${selectedReview.email}`}
                  >
                    {selectedReview.email}
                  </a>
                </div>

                <div>
                  <span>Company</span>

                  <strong>
                    {selectedReview.company ||
                      "—"}
                  </strong>
                </div>

                <div>
                  <span>Service</span>

                  <strong>
                    {selectedReview.service ||
                      "—"}
                  </strong>
                </div>

                <div>
                  <span>Date</span>

                  <strong>
                    {formatDate(
                      selectedReview.createdAt
                    )}
                  </strong>
                </div>

              </div>

              <div className="review-modal-comment">

                <span>Comment</span>

                <p>
                  {selectedReview.comment}
                </p>

              </div>

            </div>

            <div className="admin-review-modal-footer">

              {!selectedReview.approved && (
                <button
                  className="review-approve-button"
                  onClick={() =>
                    handleApprove(
                      selectedReview._id
                    )
                  }
                  disabled={actionLoading}
                >
                  {actionLoading
                    ? "Processing..."
                    : "✓ Approve Review"}
                </button>
              )}

              <button
                className="review-delete-button"
                onClick={() =>
                  handleDelete(
                    selectedReview._id
                  )
                }
                disabled={actionLoading}
              >
                {actionLoading
                  ? "Processing..."
                  : "Delete Review"}
              </button>

              <button
                className="review-close-button"
                onClick={() =>
                  setSelectedReview(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default AdminReviews;
