import { Link } from "react-router-dom";

import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa6";

import Logo from "../../../assets/images/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      {/* ==========================================
          BACKGROUND GLOW
      ========================================== */}

      <div className="footer-glow footer-glow-one"></div>

      <div className="footer-glow footer-glow-two"></div>


      {/* ==========================================
          MAIN FOOTER
      ========================================== */}

      <div className="footer-container">


        {/* ========================================
            BRAND
        ======================================== */}

        <div className="footer-brand">

          {/* Logo */}

          <Link
            to="/"
            className="footer-logo-link"
          >
            <img
              src={Logo}
              alt="PixelPeak"
              className="footer-logo"
            />
          </Link>


          {/* Description */}

          <p className="footer-description">
            PixelPeak helps businesses grow online
            through professional websites, SEO,
            digital marketing, paid advertising and
            powerful digital strategies.
          </p>


          {/* Email */}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pixelpeakconsultation@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-email"
          >
            <span className="footer-email-icon">
              <FaEnvelope />
            </span>

            <span>
              pixelpeakconsultation@gmail.com
            </span>
          </a>

        </div>


        {/* ========================================
            QUICK LINKS
        ======================================== */}

        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about">
                About
              </Link>
            </li>

            <li>
              <Link to="/services">
                Services
              </Link>
            </li>

            <li>
              <Link to="/portfolio">
                Portfolio
              </Link>
            </li>

            <li>
              <Link to="/blog">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>


        {/* ========================================
            SERVICES
        ======================================== */}

        <div className="footer-column">

          <h3>
            Services
          </h3>

          <ul>

            <li>
              <Link to="/services">
                Website Development
              </Link>
            </li>

            <li>
              <Link to="/services">
                SEO
              </Link>
            </li>

            <li>
              <Link to="/services">
                Google Ads
              </Link>
            </li>

            <li>
              <Link to="/services">
                Social Media Marketing
              </Link>
            </li>

            <li>
              <Link to="/services">
                E-Commerce
              </Link>
            </li>

            <li>
              <Link to="/services">
                Digital Strategy
              </Link>
            </li>

          </ul>

        </div>


        {/* ========================================
            FOLLOW US
        ======================================== */}

        <div className="footer-column footer-follow">

          <h3>
            Follow Us
          </h3>

          <p className="footer-social-text">
            Follow PixelPeak and stay connected
            with our latest work, insights and
            updates.
          </p>


          <div className="footer-follow-icons">


            {/* FACEBOOK */}

            <a
  href="https://www.facebook.com/share/1JsBkrrFaP/"
  className="social-facebook"
  aria-label="Facebook"
  target="_blank"
  rel="noopener noreferrer"
>
              <FaFacebookF />
            </a>


            {/* INSTAGRAM */}

            <a
  href="https://www.instagram.com/pixelpeak_marketing/"
  className="social-instagram"
  aria-label="Instagram"
  target="_blank"
  rel="noopener noreferrer"
>
              <FaInstagram />
            </a>


            {/* TIKTOK */}

            <a
  href="https://www.tiktok.com/@pixel.peak00"
  className="social-tiktok"
  aria-label="TikTok"
  target="_blank"
  rel="noopener noreferrer"
>
              <FaTiktok />
            </a>

          </div>

        </div>

      </div>


      {/* ==========================================
          BOTTOM
      ========================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {currentYear} PixelPeak. All rights reserved.
          </p>


          {/* Legal Links */}

          <div className="footer-bottom-links">

            <Link to="/privacy">
              Privacy Policy
            </Link>

            <Link to="/terms">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;