import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./CallToAction.styles.scss";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="call-to-action">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Découvrez mon travail 🚀
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Des sites web modernes et performants, adaptés à vos besoins. Explorez mes services ou
        découvrez mes projets !
      </motion.p>
      <motion.div
        className="buttons"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <button className="primary" onClick={() => navigate("/services")}>
          💼 Voir mes Services
        </button>
        <button className="secondary" onClick={() => navigate("/projects")}>
          🔥 Explorer mes Projets
        </button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
