import { Link } from "react-router-dom";
import "./landingPage.css";

export function LandingPage() {
  return (
    <main>
      <h1 id="h1Landing">
        <span className="h1PhoneView">Busi</span> Corentin
      </h1>
      <h2>Intégrateur Web / Développeur Front-end</h2>
      <Link to={"/home"}>
        <button className="goButton">C'est parti !</button>
      </Link>
    </main>
  );
}
