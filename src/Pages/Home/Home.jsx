import { Cards } from "../../Components/Cards/Cards";
import "./home.css";

export function Home() {
  return (
    <>
      <h1 id="h1Home">Intégrateur web à Bourg en Bresse</h1>
      <h2>Votre développeur front-end dans l’Ain</h2>
      <p className="homeText">
        Découvrez mes différents projets, mon évolution professionnelle dans ce
        métier et plongez avec moi dans l’univers fascinant du développement web
        !
      </p>
      <section className="cardSection">
        <Cards
          title="Mes projets"
          pictoSrc="https://cdn.lordicon.com/zhiiqoue.json"
          pictoState="morph-open"
          pictoTrigger="morph"
          linkTo="/projects"
        />
        <Cards
          title="À Propos"
          pictoSrc="https://cdn.lordicon.com/kdduutaw.json"
          pictoState="hover-looking-around"
          pictoTrigger="hover"
          linkTo="/aboutme"
        />
        <Cards
          title="Contact"
          pictoSrc="https://cdn.lordicon.com/jdgfsfzr.json"
          pictoTrigger="hover"
          linkTo="/contact"
        />
      </section>
    </>
  );
}
