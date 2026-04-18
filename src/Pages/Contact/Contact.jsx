import "./contact.css";

export function Contact() {
  return (
    <>
      <h1>Contacter votre développeur web</h1>
      <h2>Des questions ? N'hésitez pas à me contacter.</h2>
      <section className="contactSection">
        <form className="contactForm">
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
          <button type="submit" className="submitButton">
            Envoyer
          </button>
        </form>
      </section>
    </>
  );
}
