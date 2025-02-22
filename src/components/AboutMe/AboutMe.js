import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about-me">
      <motion.div
        className="about-me"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h1>Mon approche</h1>
          <p>
            Développer, c’est avant tout une histoire de logique et de fun. Mon
            but ? Créer des site qui tournent comme une horloge, tout en étant
            faciles à comprendre et à améliorer. Avec React sous le bras, je
            suis prêt à attaquer n’importe quel projet.
          </p>
        </motion.div>

        <motion.div
          className="right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h1>Technologies</h1>
          <p>
            Alors, qu'est-ce que je fais ? Je passe mes journées à jongler entre
            React, TypeScript et ViteJS dans VSCode – mon terrain de jeu
            préféré. Je gère tout ça sur GitHub, histoire de
            ne jamais perdre une ligne de code.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
