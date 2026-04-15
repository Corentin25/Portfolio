import { SingleProject } from "../../Components/SingleProject/SingleProject";
import data from "../../Data/portfolioData.json";
import "./projects.css";

export function Projects() {
  return (
    <>
      <h1>Les différents projets de Corentin Busi</h1>
      <h2>Votre développeur web front-end proche de Lyon</h2>
      <section className="projectSection">
        {data.projects.map((project, index) => (
          <SingleProject
            key={project.id}
            title={project.title}
            introText={project.introText}
            githubLink={project.githubLink}
            coverImage={project.coverImage}
            isReversed={index % 2 !== 0}
            details={project.details}
          />
        ))}
      </section>
    </>
  );
}
