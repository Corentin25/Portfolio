import { Link } from "react-router-dom";
import "./error404.css";

export function Error404() {
  return (
    <main>
      <h1 id="Error404">
        Error <span className="ErrorPhoneView">404</span>
      </h1>
      <h2 id="notFound">Oups, cette page n'existe pas !</h2>
      <Link to={"/home"}>
        <button className="backButton">Retour</button>
      </Link>
    </main>
  );
}
