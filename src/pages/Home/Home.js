import React from "react";
import Douglas from "../../assets/Douglas.png";
import "./Home.styles.scss";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="pages-home">
      <div className="intro">
        <div className="text-xl font">
          <h1>Developer Fullstack.</h1>
          <p>
            Passionné par le développement web, je crée des solutions innovantes
            et sur mesure avec l’objectif d’offrir une expérience utilisateur au
            top.
          </p>
        </div>
        <div className="text-center douglas">
          <img src={Douglas} alt="Douglas Face" />
        </div>
        <div className=" font-2">
          <p>
            Toujours à la recherche de solutions efficaces et innovantes pour
            créer des applications performantes et intuitives.
          </p>
          <p>
            Si tu cherches quelqu’un pour donner vie à ton projet, parlons-en !
            🚀
          </p>
          <a href="#about-me">
            <div className="scroll-down"></div>
          </a>
        </div>
      </div>
      <section id="about-me">
        <div className="about-me">
          <div className="left">
            <h1>Mon approche</h1>
            <p>
              Développer, c’est avant tout une histoire de logique et de fun.
              Mon but ? Créer des apps qui tournent comme une horloge, tout en
              étant faciles à comprendre et à améliorer. Avec React sous le bras, je suis prêt à attaquer n’importe quel
              projet.
            </p>
          </div>
          <div className="right">
            <h1>Technologies</h1>
            <p>
              Alors, qu'est-ce que je fais ? Je passe mes journées à jongler
              entre React, TypeScript et ViteJS dans VSCode – mon terrain de jeu
              préféré. Je gère tout ça sur GitHub avec le versioning, histoire
              de ne jamais perdre une ligne de code.
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact">
          <Contact />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
