import React from "react";
import "./Services.styles.scss";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import { FaWordpress, FaCode, FaTools, FaGlobe } from "react-icons/fa"; // Importing icons
import { HashLink } from "react-router-hash-link";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Services = () => {
  return (
    <div className="services-page">
      <ScrollToTop />
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="services-container">
          <section className="services-intro">
            <h1>Mes Services</h1>
            {/* <p>
              Je propose une gamme de services pour vous aider à concrétiser vos
              projets web, du développement de sites WordPress à des solutions
              sur-mesure, adaptés à vos besoins spécifiques.
            </p> */}
          </section>

          <section className="service-list">
            <div className="service-item">
              <FaWordpress size={40} />
              <h2>Création de sites WordPress</h2>
              <p>
                Vous avez besoin d’un site web simple, rapide à mettre en place
                et facile à gérer ? Je crée des sites WordPress sur-mesure,
                adaptés à vos besoins, pour vous offrir un site performant et
                évolutif.
              </p>
            </div>

            <div className="service-item">
              <FaCode size={40} />
              <h2>Sites Web sur-mesure</h2>
              <p>
                Vous avez un besoin spécifique ? Je développe des sites web
                sur-mesure en React, HTML, CSS et plus, pour des solutions
                uniques et adaptées à votre activité.
              </p>
            </div>

            <div className="service-item">
              <FaTools size={40} />
              <h2>Aide avec vos projets</h2>
              <p>
                Vous avez un projet en tête, mais vous ne savez pas comment le
                réaliser ? Je vous aide à définir vos objectifs et à mettre en
                place des solutions adaptées à vos besoins.
              </p>
            </div>

            <div className="service-item">
              <FaGlobe size={40} />
              <h2>Amélioration de sites existants</h2>
              <p>
                Vous avez déjà un site web mais vous souhaitez l'améliorer ou le
                rendre plus performant ? Je vous aide à optimiser votre site
                actuel et à résoudre les problèmes techniques pour améliorer son
                efficacité et son expérience utilisateur.
              </p>
            </div>
          </section>

          <div className="contact-button-container">
            <HashLink to="/#contact" className="contact-button">
              Contactez-moi maintenant
            </HashLink>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Services;
