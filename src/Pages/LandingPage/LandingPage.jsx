import { Link } from "react-router-dom";
import "./landingPage.css";

export function LandingPage() {
  return (
    <main>
      <h1 id="firstName">
        <span className="lastName">
          <span>Busi</span>
        </span>{" "}
        Corentin
      </h1>
      <h2 id="frontDeveloper">
        <span className="webIntegrator">Intégrateur Web /</span> Développeur
        Front-end
      </h2>
      <Link to="/home" className="goButton">
        <span>Explorer mon univers</span>
      </Link>
    </main>
  );
}
