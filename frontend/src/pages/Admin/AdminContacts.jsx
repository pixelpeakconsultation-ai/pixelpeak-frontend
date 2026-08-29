import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminContacts.css";

function AdminContacts() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedContact, setSelectedContact] =
    useState(null);

  const [deleteLoading, setDeleteLoading] =
    useState(false);

  const token = localStorage.getItem("adminToken");

  /* ========================================
     FETCH CONTACTS
  ======================================== */

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError("");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      const response = await fetch(
        "https://backend-psi-rouge-29.vercel.app/api/contact",
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
          data.message || "Failed to fetch contacts."
        );
      }

      setContacts(data.contacts || []);
    } catch (error) {
      console.error("Fetch contacts error:", error);

      setError(
        error.message ||
          "Unable to load contact submissions."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ========================================
     LOAD CONTACTS
  ======================================== */

  useEffect(() => {
    fetchContacts();
  }, []);

  /* ========================================
     DELETE CONTACT
  ======================================== */

  const handleDelete = async (contactId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact submission?"
    );

    if (!confirmed) {
      return;
    }

    try {
      setDeleteLoading(true);

      const response = await fetch(
        `https://backend-psi-rouge-29.vercel.app/api/contact/${contactId}`,
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
          data.message || "Failed to delete contact."
        );
      }

      setContacts((previousContacts) =>
        previousContacts.filter(
          (contact) => contact._id !== contactId
        )
      );

      setSelectedContact(null);
    } catch (error) {
      console.error("Delete contact error:", error);

      alert(
        error.message ||
          "Failed to delete contact submission."
      );
    } finally {
      setDeleteLoading(false);
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
     FORMAT DATE
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
     RENDER
  ======================================== */

  return (
    <div className="admin-contacts-page">

      {/* =====================================
          SIDEBAR
      ===================================== */}

      <aside className="admin-contacts-sidebar">

        <div className="admin-contacts-logo">
          <h2>
            <span>Pixel</span>Peak
          </h2>

          <p>ADMIN PANEL</p>
        </div>

        <nav className="admin-contacts-nav">

          <div className="admin-contacts-nav-title">
            Management
          </div>

          <button
            className="admin-contacts-nav-button"
            onClick={() =>
              navigate("/admin/dashboard")
            }
          >
            <span className="admin-contacts-nav-icon">
              ⌂
            </span>

            <span>Dashboard</span>
          </button>

          <button
            className="admin-contacts-nav-button active"
          >
            <span className="admin-contacts-nav-icon">
              ✉
            </span>

            <span>Contacts</span>
          </button>

          <button
            className="admin-contacts-nav-button"
            onClick={() =>
              navigate("/admin/reviews")
            }
          >
            <span className="admin-contacts-nav-icon">
              ★
            </span>

            <span>Reviews</span>
          </button>

        </nav>

        <div className="admin-contacts-sidebar-bottom">

          <button
            className="admin-contacts-logout"
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

      <main className="admin-contacts-main">

        {/* TOP BAR */}

        <header className="admin-contacts-topbar">

          <div>
            <h1>Contact Submissions</h1>

            <p>
              Manage inquiries from potential clients.
            </p>
          </div>

          <button
            className="admin-contacts-back"
            onClick={() =>
              navigate("/admin/dashboard")
            }
          >
            ← Dashboard
          </button>

        </header>

        {/* CONTENT */}

        <section className="admin-contacts-content">

          {/* HEADER */}

          <div className="admin-contacts-heading">

            <div>
              <h2>All Contacts</h2>

              <p>
                {loading
                  ? "Loading..."
                  : `${contacts.length} submission${
                      contacts.length !== 1
                        ? "s"
                        : ""
                    }`}
              </p>
            </div>

            <button
              className="admin-refresh-button"
              onClick={fetchContacts}
              disabled={loading}
            >
              ↻ Refresh
            </button>

          </div>

          {/* ERROR */}

          {error && (
            <div className="admin-contacts-error">
              {error}
            </div>
          )}

          {/* LOADING */}

          {loading && (
            <div className="admin-contacts-state">
              <div className="admin-spinner"></div>

              <p>
                Loading contact submissions...
              </p>
            </div>
          )}

          {/* EMPTY */}

          {!loading &&
            !error &&
            contacts.length === 0 && (
              <div className="admin-contacts-state">

                <div className="admin-empty-icon">
                  ✉
                </div>

                <h3>
                  No contact submissions yet
                </h3>

                <p>
                  New inquiries submitted through
                  your website will appear here.
                </p>

              </div>
            )}

          {/* DESKTOP TABLE */}

          {!loading &&
            contacts.length > 0 && (
              <div className="admin-contacts-table-wrapper">

                <table className="admin-contacts-table">

                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Service</th>
                      <th>Budget</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>

                    {contacts.map((contact) => (
                      <tr key={contact._id}>

                        <td>
                          <strong>
                            {contact.name}
                          </strong>
                        </td>

                        <td>
                          <span className="contact-email">
                            {contact.email}
                          </span>
                        </td>

                        <td>
                          {contact.company || "—"}
                        </td>

                        <td>
                          <span className="contact-service">
                            {contact.service || "—"}
                          </span>
                        </td>

                        <td>
                          {contact.budget || "—"}
                        </td>

                        <td>
                          {formatDate(
                            contact.createdAt
                          )}
                        </td>

                        <td>

                          <button
                            className="contact-view-button"
                            onClick={() =>
                              setSelectedContact(
                                contact
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

          {/* MOBILE CARDS */}

          {!loading &&
            contacts.length > 0 && (
              <div className="admin-contacts-mobile">

                {contacts.map((contact) => (
                  <div
                    className="admin-contact-card"
                    key={contact._id}
                  >

                    <div className="admin-contact-card-top">

                      <div>
                        <h3>
                          {contact.name}
                        </h3>

                        <a
                          href={`mailto:${contact.email}`}
                        >
                          {contact.email}
                        </a>
                      </div>

                      <span className="contact-date">
                        {formatDate(
                          contact.createdAt
                        )}
                      </span>

                    </div>

                    <div className="admin-contact-card-info">

                      <div>
                        <span>Company</span>
                        <strong>
                          {contact.company ||
                            "—"}
                        </strong>
                      </div>

                      <div>
                        <span>Service</span>
                        <strong>
                          {contact.service ||
                            "—"}
                        </strong>
                      </div>

                      <div>
                        <span>Budget</span>
                        <strong>
                          {contact.budget ||
                            "—"}
                        </strong>
                      </div>

                    </div>

                    <button
                      className="contact-mobile-view"
                      onClick={() =>
                        setSelectedContact(
                          contact
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
          CONTACT DETAILS MODAL
      ===================================== */}

      {selectedContact && (
        <div
          className="admin-contact-modal-overlay"
          onClick={() =>
            setSelectedContact(null)
          }
        >

          <div
            className="admin-contact-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="admin-contact-modal-header">

              <div>
                <span>
                  CONTACT DETAILS
                </span>

                <h2>
                  {selectedContact.name}
                </h2>
              </div>

              <button
                className="admin-modal-close"
                onClick={() =>
                  setSelectedContact(null)
                }
              >
                ×
              </button>

            </div>

            <div className="admin-contact-modal-body">

              <div className="contact-detail">
                <span>Email</span>

                <a
                  href={`mailto:${selectedContact.email}`}
                >
                  {selectedContact.email}
                </a>
              </div>

              <div className="contact-detail">
                <span>Phone</span>

                {selectedContact.phone ? (
                  <a
                    href={`tel:${selectedContact.phone}`}
                  >
                    {selectedContact.phone}
                  </a>
                ) : (
                  <strong>—</strong>
                )}
              </div>

              <div className="contact-detail">
                <span>Company</span>

                <strong>
                  {selectedContact.company ||
                    "—"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Service</span>

                <strong>
                  {selectedContact.service ||
                    "—"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Budget</span>

                <strong>
                  {selectedContact.budget ||
                    "—"}
                </strong>
              </div>

              <div className="contact-detail">
                <span>Submitted</span>

                <strong>
                  {formatDate(
                    selectedContact.createdAt
                  )}
                </strong>
              </div>

              <div className="contact-message">

                <span>Message</span>

                <p>
                  {selectedContact.message ||
                    "No message provided."}
                </p>

              </div>

            </div>

            <div className="admin-contact-modal-footer">

              <button
                className="admin-modal-delete"
                onClick={() =>
                  handleDelete(
                    selectedContact._id
                  )
                }
                disabled={deleteLoading}
              >
                {deleteLoading
                  ? "Deleting..."
                  : "Delete Contact"}
              </button>

              <button
                className="admin-modal-cancel"
                onClick={() =>
                  setSelectedContact(null)
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

export default AdminContacts;
