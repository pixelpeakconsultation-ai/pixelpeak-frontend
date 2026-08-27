import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const API_URL = "http://localhost:5000";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please enter your username and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed.");
      }

      // Save JWT token
      localStorage.setItem("adminToken", data.token);

      // Save admin information
      localStorage.setItem("adminUser", JSON.stringify(data.admin));

      // Go to dashboard
      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-background">
        <div className="admin-glow admin-glow-one"></div>
        <div className="admin-glow admin-glow-two"></div>
      </div>

      <div className="admin-login-card">
        <div className="admin-login-logo">
          <span>Pixel</span>Peak
        </div>

        <div className="admin-login-header">
          <h1>Admin Login</h1>
          <p>Sign in to manage your PixelPeak website.</p>
        </div>

        {error && (
          <div className="admin-login-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="admin-input-group">
            <label htmlFor="username">Username</label>

            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
            />
          </div>

          <div className="admin-input-group">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="admin-login-footer">
          <span>PixelPeak Digital Marketing</span>
          <span>Admin Portal</span>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;