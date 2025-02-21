import React from 'react';
import './Timeline.styles.scss';

const Timeline = () => {
  return (
    <section id="experience">
      <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-line"></div>
        <div className="timeline-content">
          <div className="timeline-year">2022 - 2024</div>
          <div className="timeline-role">Développeur Front-end React</div>
          <div className="timeline-company-location">
            SharingCloud - Nantes, Pays de la Loire, France
          </div>
          <div className="timeline-responsibilities">
            <ul>
              <li>Développement sur VSCode en React avec TypeScript, ViteJS et Sass.</li>
              <li>Suivi des tâches et des tickets à l’aide de Jira.</li>
              <li>Collaboration en méthode agile avec des sprints de trois semaines.</li>
              <li>Création de tests unitaires et gestion du versioning via GitHub.</li>
            </ul>
          </div>
          <div className="timeline-projects">
            <h4>Projets:</h4>
            <ul>
              <li>Contribution à une bibliothèque de composants basée sur un design system interne conçu par l’équipe UI/UX.</li>
              <li>Participation au développement d'un addin Outlook.</li>
              <li>Développement d'une page d'identification pour RoomPad à partir d'un POC.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-line"></div>
        <div className="timeline-content">
          <div className="timeline-year">2021 - 2022</div>
          <div className="timeline-role">Développeur Web</div>
          <div className="timeline-company-location">
            ELIOTT CONSULTING - Niort, Nouvelle-Aquitaine, France
          </div>
          <div className="timeline-responsibilities">
            <ul>
              <li>Développement sur VSCode en React avec TypeScript et Sass.</li>
              <li>Suivi des tâches via Trello pour organiser les sprints et prioriser les développements.</li>
              <li>Utilisation de GitHub avec un workflow basé sur GitFlow pour la gestion des branches et du code source.</li>
              <li>Mise en place d’un environnement de test.</li>
            </ul>
          </div>
          <div className="timeline-projects">
            <h4>Missions:</h4>
            <ul>
              <li>Conception et développement d’un Proof of Concept (POC) pour la gestion en ligne des constats.</li>
              <li>Création d’un site web vitrine pour l’entreprise, optimisé pour l’expérience utilisateur.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
