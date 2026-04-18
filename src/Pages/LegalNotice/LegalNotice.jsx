import "./legalNotice.css";

export function LegalNotice() {
  const user = "corentinbusi.pro";
  const domain = "gmail.com";

  return (
    <>
      <h1>Mentions Légales</h1>
      <h2>En vigueur au 18 Avril 2026</h2>
      <section className="legalSection">
        <div className="legalGroup">
          <h3>1. Éditeur du site</h3>
          <p>
            Le présent site, accessible à l'URL{" "}
            <strong>https://corentin25.github.io/Portfolio/</strong>, est édité
            par :
          </p>
          <p>
            <strong>Corentin Busi</strong>
            <br />
            Statut : Particulier
            <br />
            Adresse : Bourg-en-Bresse et environs
            <br />
            Contact : {`${user}@${domain}`}
          </p>
          <p>
            Le Directeur de la publication du Site est{" "}
            <strong>Corentin Busi</strong>.
          </p>
        </div>

        <div className="legalGroup">
          <h3>2. Hébergement</h3>
          <p>
            Le site est hébergé par la société <strong>GitHub, Inc.</strong>,
            située au 88 Colin P Kelly Jr St, San Francisco, CA 94107,
            États-Unis. Contact de l'hébergeur : https://support.github.com/
          </p>
        </div>

        <div className="legalGroup">
          <h3>3. Propriété intellectuelle</h3>
          <p>
            L'ensemble de ce site relève de la législation française et
            internationale sur le droit d'auteur et la propriété intellectuelle.
            Tous les droits de reproduction sont réservés, y compris pour les
            documents téléchargeables et les représentations iconographiques et
            photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support
            électronique quel qu'il soit est formellement interdite sauf
            autorisation expresse du directeur de la publication.
          </p>
        </div>

        <div className="legalGroup">
          <h3>4. Gestion des données personnelles (RGPD)</h3>
          <p>
            Les informations recueillies via le formulaire de contact sont
            enregistrées dans un fichier informatisé par
            <strong> Corentin Busi</strong> pour la gestion des demandes de
            contact et les échanges professionnels qui en découlent. Elles sont
            conservées pendant la durée nécessaire au traitement de la demande.
          </p>
          <p>
            Conformément à la loi « informatique et libertés » et au RGPD, vous
            pouvez exercer votre droit d'accès aux données vous concernant et
            les faire rectifier ou supprimer en contactant :{" "}
            {`${user}@${domain}`}
          </p>
        </div>

        <div className="legalGroup">
          <h3>5. Cookies</h3>
          <p>
            Le site <strong>https://corentin25.github.io/Portfolio/</strong>{" "}
            n'utilise pas de cookies de traçage ou publicitaires. Seuls des
            cookies strictement nécessaires au fonctionnement technique du site
            peuvent être déposés sur votre terminal.
          </p>
        </div>
      </section>
    </>
  );
}
