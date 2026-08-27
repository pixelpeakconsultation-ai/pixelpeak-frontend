import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaHouse } from "react-icons/fa6";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">
      {/* Background Effects */}
      <div className="not-found-glow not-found-glow-one"></div>
      <div className="not-found-glow not-found-glow-two"></div>

      {/* Floating Decorative Elements */}
      <div className="not-found-circle circle-one"></div>
      <div className="not-found-circle circle-two"></div>
      <div className="not-found-circle circle-three"></div>

      <div className="not-found-container">

        {/* 404 */}
        <div className="not-found-number">
          404
        </div>

        {/* Icon */}
        <div className="not-found-icon">
          <FaHouse />
        </div>

        {/* Content */}
        <span className="not-found-tag">
          PAGE NOT FOUND
        </span>

        <h1>
          Looks Like You're
          <span> Lost.</span>
        </h1>

        <p>
          The page you're looking for doesn't exist, has been moved,
          or the URL may be incorrect. Let's get you back on track.
        </p>

        {/* Buttons */}
        <div className="not-found-buttons">

          <Link
            to="/"
            className="not-found-primary"
          >
            <FaHouse />
            Back to Home
          </Link>

          <Link
            to="/services"
            className="not-found-secondary"
          >
            Explore Services
            <FaArrowRight />
          </Link>

        </div>

        {/* Back Link */}
        <button
          type="button"
          className="not-found-back"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft />
          Go Back
        </button>

      </div>
    </main>
  );
}

export default NotFound;