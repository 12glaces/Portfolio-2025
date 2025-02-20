import React from "react";
import "./Footer.styles.scss";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo_DB-white.png";

const Footer = () => {
  const emailUser = "contact";
  const emailDomain = "douglas-barlow.com";
  const email = `${emailUser}@${emailDomain}`;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo D" className="logo-image" />
          <span className="company-name">ouglas Barlow</span>
        </div>

        <div className="footer-links">
          <a href="/about">À Propos</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a
            href="https://www.linkedin.com/in/douglas-barlow-97656618a/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Douglas Barlow. Tous droits
          réservés.
        </p>
        <p>
          <a href={`mailto:${email}`} className="email-link">
            {emailUser}@{emailDomain}
          </a>
        </p>
        <p className="legal-info">E.I - SIREN 940448012 - Nantes</p>
      </div>
    </footer>
  );
};

export default Footer;
