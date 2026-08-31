import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">

        {/* ==========================================
            LOGO
        ========================================== */}

        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
          aria-label="PixelPeak Home"
        >
          <img
            src={Logo}
            alt="PixelPeak"
          />
        </NavLink>


        {/* ==========================================
            NAVIGATION LINKS
        ========================================== */}

        <div
          className={`nav-links ${
            menuOpen ? "mobile-open" : ""
          }`}
        >

          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>


          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            About
          </NavLink>


          {/* Services */}
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>


          {/* Portfolio */}
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Portfolio
          </NavLink>


          {/* Pricing */}
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Pricing
          </NavLink>


          {/* Blog */}
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Blog
          </NavLink>


          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>


          {/* ==========================================
              MOBILE CONSULTATION BUTTON
          ========================================== */}

          <a
            href="https://calendar.app.google/NeEae2sdgGubo1fZ6"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn mobile-consult"
            onClick={closeMenu}
          >
            Book Free Consultation
          </a>

        </div>


        {/* ==========================================
            DESKTOP CONSULTATION BUTTON
        ========================================== */}

        <a
          href="https://calendar.app.google/NeEae2sdgGubo1fZ6"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-btn desktop-consult"
        >
          Book Free Consultation
        </a>


        {/* ==========================================
            MOBILE MENU BUTTON
        ========================================== */}

        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;