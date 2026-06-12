import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faGlobe,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./singleProject.css";

export function SingleProject({
  title,
  introText,
  seeMoreLink,
  githubLink,
  websiteLink,
  coverImage,
  details,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="projectContainer">
        <img
          src={coverImage}
          alt={title}
          aria-label={`Photo du projet ${title}`}
          className="imgProject"
        />
        <div className="infoProject">
          <h3>{title}</h3>
          <p className="infoText">{introText}</p>
          <div
            className="seeMore"
            onClick={toggleModal}
            role="button"
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faUpRightFromSquare} />
            En savoir plus
          </div>{" "}
          <div className="buttons">
            {githubLink ? (
              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir le dépôt GitHub de ${title}`}
              >
                <button className="gitButton">
                  Lien Github
                  <FontAwesomeIcon icon={faGithub} />
                </button>
              </a>
            ) : (
              <button
                className="gitButton disabledBtn"
                disabled
                aria-disabled="true"
              >
                Lien Github
                <FontAwesomeIcon icon={faGithub} />
              </button>
            )}
            {websiteLink ? (
              <a
                href={websiteLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir le site internet de ${title}`}
              >
                <button className="websiteButton">
                  Lien du site
                  <FontAwesomeIcon icon={faGlobe} />
                </button>
              </a>
            ) : (
              <button
                className="websiteButton disabledBtn"
                disabled
                aria-disabled="true"
              >
                Lien du site
                <FontAwesomeIcon icon={faGlobe} />
              </button>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modalOverlay" onClick={toggleModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button
              className="closeModalBtn"
              onClick={toggleModal}
              aria-label="Fermer"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h3 className="modalTitle">{title} - Détails du projet</h3>
            <div className="cardsGrid">
              {details.map((detail, index) => (
                <div key={index} className="detailCard">
                  <h4>{detail.label}</h4>
                  <p>{detail.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
