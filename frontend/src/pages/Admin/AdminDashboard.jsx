import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const adminUser = JSON.parse(
    localStorage.getItem("adminUser") || "{}"
  );

  const token = localStorage.getItem("adminToken");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin/login");
  };

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [contactsResponse, reviewsResponse] =
        await Promise.all([
          fetch("https://backend-psi-rouge-29.vercel.app/api/contact", {
            headers,
          }),

          fetch("https://backend-psi-rouge-29.vercel.app/api/reviews/admin", {
            headers,
          }),
        ]);

      if (
        contactsResponse.status === 401 ||
        reviewsResponse.status === 401
      ) {
        handleLogout();
        return;
      }

      const contactsData = await contactsResponse.json();
      const reviewsData = await reviewsResponse.json();

      if (contactsData.success) {
        setContacts(contactsData.contacts);
      }

      if (reviewsData.success) {
        setReviews(reviewsData.reviews);
      }
    } catch (error) {
      console.error("Dashboard error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    fetchDashboardData();
  }, []);

  const pendingReviews = reviews.filter(
    (review) => !review.approved
  );

  return (
    <div className="admin-dashboard">

      {/* ================================
          SIDEBAR
      ================================= */}

      <aside className="admin-sidebar">

        <div className="admin-sidebar-logo">
          <h2>
            <span>Pixel</span>Peak
          </h2>

          <p>ADMIN PANEL</p>
        </div>

        <nav className="admin-sidebar-nav">

          <div className="admin-nav-title">
            Management
          </div>

          <button
            className="admin-nav-button active"
            onClick={() => navigate("/admin/dashboard")}
          >
            <span className="admin-nav-icon">⌂</span>
            <span>Dashboard</span>
          </button>

          <button
            className="admin-nav-button"
            onClick={() => navigate("/admin/contacts")}
          >
            <span className="admin-nav-icon">✉</span>
            <span>Contacts</span>
          </button>

          <button
            className="admin-nav-button"
            onClick={() => navigate("/admin/reviews")}
          >
            <span className="admin-nav-icon">★</span>
            <span>Reviews</span>
          </button>

        </nav>

        <div className="admin-sidebar-bottom">

          <button
            className="admin-logout-button"
            onClick={handleLogout}
          >
            <span className="admin-nav-icon">↪</span>
            <span> Logout</span>
          </button>

        </div>
      </aside>

      {/* ================================
          MAIN
      ================================= */}

      <main className="admin-main">

        <header className="admin-topbar">

          <h1>Dashboard</h1>

          <div className="admin-topbar-user">

            <div className="admin-avatar">
              {adminUser.username
                ? adminUser.username.charAt(0).toUpperCase()
                : "A"}
            </div>

            <div className="admin-user-info">
              <strong>
                {adminUser.username || "Admin"}
              </strong>

              <span>Administrator</span>
            </div>

          </div>

        </header>

        <section className="admin-content">

          <div className="admin-welcome">
            <h2>
              Welcome back,{" "}
              {adminUser.username || "Admin"} 👋
            </h2>

            <p>
              Here's what's happening with your PixelPeak website.
            </p>
          </div>

          {/* STATISTICS */}

          <div className="admin-stats">

            <div className="admin-stat-card">

              <div className="admin-stat-top">
                <span className="admin-stat-label">
                  Total Contacts
                </span>

                <span className="admin-stat-icon">
                  ✉
                </span>
              </div>

              <div className="admin-stat-number">
                {loading ? "..." : contacts.length}
              </div>

              <p>
                Client inquiries received
              </p>

            </div>

            <div className="admin-stat-card">

              <div className="admin-stat-top">
                <span className="admin-stat-label">
                  Total Reviews
                </span>

                <span className="admin-stat-icon">
                  ★
                </span>
              </div>

              <div className="admin-stat-number">
                {loading ? "..." : reviews.length}
              </div>

              <p>
                Reviews submitted
              </p>

            </div>

            <div className="admin-stat-card">

              <div className="admin-stat-top">
                <span className="admin-stat-label">
                  Pending Reviews
                </span>

                <span className="admin-stat-icon">
                  ⏳
                </span>
              </div>

              <div className="admin-stat-number">
                {loading ? "..." : pendingReviews.length}
              </div>

              <p>
                Waiting for approval
              </p>

            </div>

          </div>

          {/* PANELS */}

          <div className="admin-panels">

            {/* CONTACTS */}

            <div className="admin-panel">

              <div className="admin-panel-header">

                <h3>
                  Recent Contacts
                </h3>

                <button
                  className="admin-panel-link"
                  onClick={() =>
                    navigate("/admin/contacts")
                  }
                >
                  View All
                </button>

              </div>

              {loading ? (
                <div className="admin-empty">
                  Loading contacts...
                </div>
              ) : contacts.length === 0 ? (
                <div className="admin-empty">
                  No contact submissions yet.
                </div>
              ) : (
                contacts.slice(0, 5).map((contact) => (
                  <div
                    key={contact._id}
                    style={{
                      padding: "12px 0",
                      borderBottom:
                        "1px solid rgba(148,163,184,0.08)",
                    }}
                  >
                    <strong>
                      {contact.name}
                    </strong>

                    <div
                      style={{
                        color: "#64748b",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {contact.email}
                    </div>
                  </div>
                ))
              )}

            </div>

            {/* REVIEWS */}

            <div className="admin-panel">

              <div className="admin-panel-header">

                <h3>
                  Recent Reviews
                </h3>

                <button
                  className="admin-panel-link"
                  onClick={() =>
                    navigate("/admin/reviews")
                  }
                >
                  View All
                </button>

              </div>

              {loading ? (
                <div className="admin-empty">
                  Loading reviews...
                </div>
              ) : reviews.length === 0 ? (
                <div className="admin-empty">
                  No reviews yet.
                </div>
              ) : (
                reviews.slice(0, 5).map((review) => (
                  <div
                    key={review._id}
                    style={{
                      padding: "12px 0",
                      borderBottom:
                        "1px solid rgba(148,163,184,0.08)",
                    }}
                  >
                    <strong>
                      {review.name}
                    </strong>

                    <div
                      style={{
                        color: "#d4af37",
                        fontSize: "13px",
                        marginTop: "4px",
                      }}
                    >
                      {"★".repeat(review.rating)}
                    </div>

                    <div
                      style={{
                        color: "#64748b",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {review.approved
                        ? "Approved"
                        : "Pending approval"}
                    </div>
                  </div>
                ))
              )}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;
