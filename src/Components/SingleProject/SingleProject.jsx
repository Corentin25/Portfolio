import { Collapse } from "../Collapse/Collapse";
import "./singleProject.css";

export function SingleProject({
  title,
  introText,
  githubLink,
  coverImage,
  isReversed,
  details,
}) {
  return (
    <>
      <div className={`projectTop ${isReversed ? "reversed" : ""}`}>
        <div className="infoProject">
          <h3>{title}</h3>
          <p className="infoText">{introText}</p>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le dépôt GitHub de ${title}`}
          >
            <button className="gitButton">Lien Github</button>
          </a>
        </div>
        <img
          src={coverImage}
          alt={title}
          aria-label={`Photo du projet ${title}`}
          className="imgProject"
        />
      </div>
      <div className="collapses-container">
        {details.map((detail, index) => (
          <Collapse key={index} label={detail.label} content={detail.content} />
        ))}
      </div>
    </>
  );
}
