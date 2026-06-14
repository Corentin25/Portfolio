import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { SingleProject } from "../../Components/SingleProject/SingleProject";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import data from "../../Data/portfolioData.json";

import "./projects.css";

export function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1 id="h1Projects">Les différents projets de Corentin Busi</h1>
      <h2>Votre développeur front-end proche de Lyon</h2>
      <section className="projectSection">
        {data.projects.map((project, index) => (
          <SingleProject
            key={project.id}
            title={project.title}
            introText={project.introText}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            coverImage={project.coverImage}
            details={project.details}
          />
        ))}
      </section>
      <Link to="/aboutme" className="goToAboutMe">
        À propos de moi
        <FontAwesomeIcon icon={faChevronRight} />
      </Link>
    </>
  );
}
