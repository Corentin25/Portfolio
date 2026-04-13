import { Link } from "react-router-dom";
import "./error404.css";

export function Error404() {
  return (
    <main>
      <h1 id="Error404">
        Erreur <span className="ErrorPhoneView">404</span>
      </h1>
      <h2 id="notFound">Oups, on dirait que ce lien s'est perdu dans la matrice...</h2>
      <Link to={"/home"}>
        <button className="backButton">Retour à l'accueil</button>
      </Link>
    </main>
  );
}
