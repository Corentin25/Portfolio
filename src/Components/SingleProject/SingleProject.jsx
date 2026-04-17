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
  const collapsesGroup1 = details.slice(0, 2);
  const collapsesGroup2 = details.slice(2, 4);
  const collapsesGroup3 = details.slice(4, 6);
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
      <div className="collapseSection">
        <div className="twoCollapses">
          {collapsesGroup1.map((detail, index) => (
            <Collapse
              key={index}
              label={detail.label}
              content={detail.content}
            />
          ))}
        </div>
        <div className="twoCollapses">
          {collapsesGroup2.map((detail, index) => (
            <Collapse
              key={index}
              label={detail.label}
              content={detail.content}
            />
          ))}
        </div>
        <div className="twoCollapses">
          {collapsesGroup3.map((detail, index) => (
            <Collapse
              key={index}
              label={detail.label}
              content={detail.content}
            />
          ))}
        </div>
      </div>
    </>
  );
}
