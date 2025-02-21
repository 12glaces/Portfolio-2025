import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "./Projects.styles.scss";
import vpc from "../../assets/pr-vpc.JPG";
import me from "../../assets/pr-douglas.JPG";
import sharing from "../../assets/pr-sharingcloud.JPG";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      title: "Les Vieux Pistons Chaléonnais",
      description:
        "Site WordPress conçu pour une association dont je fais partie, dédié aux passionnés de véhicules anciens.",
      technologies: ["WordPress", "HTML", "CSS"],
      imageUrl: vpc,
      client: "VPC",
    },
    {
      title: "Site personnel",
      description:
        "Conception et développement d'un site personnel en React, intégrant Node.js et Express pour une gestion optimisée des services et des données. Ce projet reflète mon expertise en développement web moderne et mon souci du détail.",
      technologies: ["React", "Node.js", "Express", "Scss"],
      imageUrl: me,
    },
    {
      title: "WorkplaceToBe",
      description:
        "Contribution à la création d’un add-in Outlook visant à faciliter la gestion des salles de réunion et des espaces de travail.",
      technologies: ["TypeScript", "Scss", "Figma"],
      imageUrl: sharing,
      client: "SharingCloud",
    },
  ];

  const handleCardClick = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const handleModalClickOutside = (e) => {
    if (e.target.classList.contains("project-modal")) {
      handleCloseModal();
    }
  };

  return (
    <div className="projects-page">
      <ScrollToTop />
      <motion.div
        className="intro"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="projects-container">
          <section className="projects-intro">
            <h1>Projets réalisés</h1>
          </section>

          <section className="project-list">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => handleCardClick(project)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-title">{project.title}</div>
              </div>
            ))}
          </section>
        </div>
      </motion.div>

      {isModalOpen && currentProject && (
        <div className="project-modal" onClick={handleModalClickOutside}>
          <div className="modal-content">
            <span className="close-modal" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="modal-image">
              <img
                src={currentProject.imageUrl}
                alt={currentProject.title}
                className="modal-project-image"
              />
            </div>
            <div className="modal-details">
              <h2>{currentProject.title}</h2>
              <p>
                {currentProject.client}
              </p>
              <p>{currentProject.description}</p>
              {/* <p>
                <strong>Technologies :</strong>
              </p> */}
              <div className="tech-list">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`tech-badge ${tech.toLowerCase()}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
