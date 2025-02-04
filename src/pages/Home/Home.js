import React from "react";
import Douglas from "../../assets/Douglas.png";
import "./Home.styles.scss";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  //w-3/12
  return (
    <div className="pages-home">
      <div className="intro">
        <div className="text-xl font">
          <h1>Developer Fullstack.</h1>
          <p>
          Passionné par le développement frontend et backend, je crée des solutions innovantes et sur mesure avec l’objectif d’offrir une expérience utilisateur au top.
          </p>
        </div>
        <div className="text-center douglas">
          <img src={Douglas} alt="Douglas Face" />
        </div>
        <div className=" font-2">
          <p>
            Expert en développement frontend et backend, toujours à la recherche de solutions efficaces et innovantes pour créer des applications performantes et intuitives.
          </p>
          <p>
            Si tu cherches quelqu’un pour donner vie à ton projet, parlons-en ! 🚀
          </p>
          <a href="#about-me">
          <div className="scroll-down"></div>
            
          </a>
        </div>
      </div>
      <section id="about-me">
        <div className="container about-me">
          <div>
          <h1>This is Sec 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, ligula a ultricies volutpat, velit erat pretium nunc, nec
              bibendum tortor erat in neque. Integer in est nec libero
              consectetur fermentum. Donec euismod, lac
            </p>
          </div>
          <div>
          <h1>This is Sec 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, ligula a ultricies volutpat, velit erat pretium nunc, nec
              bibendum tortor erat in neque. Integer in est nec libero
              consectetur fermentum. Donec euismod, lac
            </p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container contact">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default Home;
