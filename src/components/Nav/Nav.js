import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.styles.scss";
import logo from "../../assets/logo_DB-trans.png";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSolid(true); // Set navbar to solid when scrolling down
    } else {
      setIsSolid(false); // Reset navbar when scrolling to the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSolid ? "solid" : ""} text-white`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center space-x-4">
            <HashLink
              to="/#top"
              className="text-lg font-bold flex items-center"
            >
              <img src={logo} alt="D-logo" className="w-14 mr-2" />
              <span className="DB-logo">ouglas Barlow</span>
            </HashLink>

            <div className="hidden xl:flex space-x-4 nav-links first-nav">
              <HashLink
                to="/#about-me"
                className="px-3 py-2 rounded-xl text-sm font-medium"
              >
                À propos
              </HashLink>
              <HashLink
                to="/#experience"
                className="px-3 py-2 rounded-xl text-sm font-medium"
              >
                Experiences
              </HashLink>
              <Link
                to="/services"
                className="px-3 py-2 rounded-xl text-sm font-medium"
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="px-3 py-2 rounded-xl text-sm font-medium"
              >
                Projets
              </Link>
            </div>
          </div>

          <div className="hidden xl:flex">
            <HashLink
              to="/#contact"
              className="px-3 py-2 rounded-xl text-sm font-medium last-nav"
            >
              Contact
            </HashLink>
          </div>

          <div className="xl:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-white hover:text-[#9d977f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#162640] focus:ring-white"
            >
              <svg
                className={`h-6 w-6 transition-transform ${
                  menuOpen ? "rotate-90" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`menu-open xl:hidden ${menuOpen ? "active" : ""}`}>
        <div className="nav-links space-y-1 px-2 pt-2 pb-3">
          <HashLink to="/#about-me" className="nav-item">
            About
          </HashLink>
          <HashLink to="/#experience" className="nav-item">
            Experiences
          </HashLink>
          <Link to="/services" className="nav-item">
            Services
          </Link>
          <Link to="/projects" className="nav-item">
            Projets
          </Link>
          <HashLink to="/#contact" className="nav-item">
            Contact
          </HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
