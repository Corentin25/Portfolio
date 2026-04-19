import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export function Contact() {
  const form = useRef();

  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Portfolio Mail Service",
        "template_yi7oiiq",
        form.current,
        "kvMFesBstWjgB8yvh",
      )
      .then(
        (result) => {
          console.log("Succès :", result.text);
          setStatusMessage({
            type: "success",
            text: "Votre message a bien été envoyé !",
          });
          form.current.reset();
          setTimeout(() => {
            setStatusMessage(null);
          }, 4000);
        },
        (error) => {
          console.log("Erreur :", error.text);
          setStatusMessage({
            type: "error",
            text: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
          });
          setTimeout(() => {
            setStatusMessage(null);
          }, 4000);
        },
      );
  };

  return (
    <>
      <h1>Contacter votre développeur web</h1>
      <h2>Des questions ? N'hésitez pas à me contacter.</h2>
      <section className="contactSection">
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <div className="formGroup">
            <label htmlFor="userName">Nom et prénom / Raison sociale :</label>
            <input type="text" id="userName" name="userName" required />
          </div>
          <div className="formGroup">
            <label htmlFor="userEmail">Adresse courriel :</label>
            <input type="email" id="userEmail" name="userEmail" required />
          </div>
          <div className="formGroup">
            <label htmlFor="userMessage">Message :</label>
            <textarea
              id="userMessage"
              name="userMessage"
              rows="6"
              required
            ></textarea>
          </div>
          <div className="form-checkbox">
            <input
              type="checkbox"
              id="rgpdConsent"
              name="rgpdConsent"
              required
            />
            <label htmlFor="rgpdConsent">
              Je consens à ce que mes données soient traitées conformément à la
              politique de confidentialité du site.
            </label>
          </div>
          {statusMessage && (
            <div className={`statusMessage ${statusMessage.type}`}>
              {statusMessage.text}
            </div>
          )}
          <button type="submit" className="submitButton">
            Envoyer
          </button>
        </form>
      </section>
    </>
  );
}
