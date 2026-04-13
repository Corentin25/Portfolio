import { Link, useLocation } from "react-router-dom";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareShareNodes,
  faCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export function Header() {
  const location = useLocation();

  const backButtonPath = ["/projects", "/aboutme", "/contact"];

  const showBackButton = backButtonPath.includes(location.pathname);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Corentin Busi | Portfolio",
          text: "Découvrez mon portfolio d'Intégrateur Web / Développeur front-end !",
          url: "https://corentin25.github.io/Portfolio",
        });
      } catch (error) {
        console.log("Partage annulé ou échoué", error);
      }
    } else {
      alert(
        "La fonctionnalité de partage n'est pas supportée sur ce navigateur.",
      );
    }
  };

  return (
    <header>
      <div>
        {showBackButton && (
          <Link
            to="/home"
            className="backHomePage"
            aria-label="Retourner sur la page d'accueil"
          >
            <FontAwesomeIcon icon={faCircleLeft} className="backArrow" /> Retour
            à l'accueil
          </Link>
        )}
      </div>
      <div className="links">
        <button
          onClick={handleShare}
          className="share-button"
          aria-label="Partager le site"
        >
          <FontAwesomeIcon
            icon={faSquareShareNodes}
            className="faIcon"
            aria-hidden="true"
          />
        </button>
        <a
          href="https://www.linkedin.com/in/corentin-busi/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visiter le profil LinkedIn"
        >
          <FontAwesomeIcon
            icon={faSquareLinkedin}
            className="faIcon"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://github.com/Corentin25"
          target="_blank"
          rel="noreferrer"
          aria-label="Voir le dépôt GitHub"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="faIcon"
            aria-hidden="true"
          />
        </a>
      </div>
    </header>
  );
}
