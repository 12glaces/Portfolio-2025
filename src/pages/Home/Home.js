import React from "react";
import { motion } from "framer-motion";
import Douglas from "../../assets/Douglas.png";
import "./Home.styles.scss";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import AboutMe from "../../components/AboutMe/AboutMe";
import Timeline from "../../components/Timeline/Timeline";
import CallToAction from "../../components/CallToAction/CallToAction";

const Home = () => {
  return (
    <div className="pages-home">
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <motion.div
          className="text-xl font"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="w-max">
            <h1 className="animate-typing leading-3 overflow-hidden whitespace-nowrap border-r-4 border-transparent pr-5 text-5xl text-white font-bold">
              Développeur Web.
            </h1>
          </div>
          <p>
            Passionné par le développement web, je crée des solutions innovantes
            et sur mesure avec l’objectif d’offrir une expérience utilisateur au
            top.
          </p>
        </motion.div>
        <div className="text-center douglas">
          <img src={Douglas} alt="Douglas Face" />
        </div>
        <motion.div
          className="font-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: false }}
        >
          <p>
            Toujours à la recherche de solutions efficaces et innovantes pour
            créer des applications performantes et intuitives.
          </p>
          <p>
            Si tu cherches quelqu’un pour donner vie à ton projet, parlons-en !
            🚀
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      >
        <div className="scroll-down-container">
        <a href="#about-me">
            <div className="scroll-down"></div>
          </a>
        </div>
        <AboutMe />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      >
        <CallToAction />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      ><Timeline />
      </motion.div>  
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false }}
      >
        <div className="contact">
          <Contact />
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Home;
