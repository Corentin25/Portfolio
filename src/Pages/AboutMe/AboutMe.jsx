import data from "../../Data/portfolioData.json";
import avatar from "../../Assets/Corentin-Busi-Developpeur-Web.webp";
import { Collapse } from "../../Components/Collapse/Collapse";
import { References } from "../../Components/References/References";
import "./aboutMe.css";

export function AboutMe() {
  const collapsesGroup1 = data.aboutMe.slice(0, 3);
  const collapsesGroup2 = data.aboutMe.slice(3, 6);

  return (
    <>
      <h1>À propos de Corentin Busi</h1>
      <h2>Le parcours de votre intégrateur web à Bourg en Bresse</h2>
      <section className="aboutSection">
        <div className="threeCollapses">
          {collapsesGroup1.map((item) => (
            <Collapse key={item.id} label={item.id} content={item.text} />
          ))}
        </div>
        <img
          src={avatar}
          alt="Corentin Busi, Développeur Web Front-End"
          className="avatarImg"
        />
        <div className="threeCollapses">
          {collapsesGroup2.map((item) => (
            <Collapse key={item.id} label={item.id} content={item.text} />
          ))}
        </div>
      </section>
      <section className="skills">
        <h2>Formations et compétences</h2>
        <p className="skillsText">
          Durant 9 mois, j’ai effectué une formation 100% en ligne avec
          OpenClassrooms afin d’acquérir l’ensemble des compétences qui font de
          moi aujourd’hui un développeur front-end minutieux et autonome.
        </p>
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/wjdlpfml.json"
            trigger="loop"
            delay="1000"
          ></lord-icon>
          <p className="qualification">
            Titre professionnel « Développeur Informatique »<br />
            Diplôme de niveau 5 (BAC+2)
          </p>
          <p className="certification">
            Certification professionnelle
            <br />
            enregistrée au RNCP
          </p>
        </div>
        <div className="skillsLogos">
          {data.skills.map((skill) => (
            <img
              key={skill.id}
              src={skill.src}
              alt={`Logo de ${skill.name}`}
              className="skillImg"
            />
          ))}
        </div>
      </section>
      <section className="referenceSection">
        <h2>Ils me recommandent :</h2>
        <div className="allReferences">
          {data.allReferences.map((allReference) => (
            <References
              key={allReference.id}
              reference={allReference.reference}
              nameReferent={allReference.nameReferent}
              pictoSrc="https://cdn.lordicon.com/fozsorqm.json"
              pictoTrigger="loop"
            />
          ))}
        </div>
      </section>
    </>
  );
}
