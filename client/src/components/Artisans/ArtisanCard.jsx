import ExtLink from "../ExtLink";

/**
 * @function ArtisanCard
 * @param {Object} props
 * @param {Array} props.artisan - tableau contenant les données relatives à l'artisan choisi
 * @param {Boolean} props.loading - permet de définir l'état du chargement
 * @returns {JSX.Element}
 * @description Gestion du chargement et préparation de l'affichage de la card artisan
 */
export default function ArtisanCard({ artisan, loading }) {
  return loading ? (
    <p className="loading">Chargement en cours...</p>
  ) : (
    <section className="card">
      <h1>{artisan.nom_artisan}</h1>
      <img src="" alt="logo ou photo de l'entreprise" />
      <div className="note">
        <p>{artisan.note}</p>
      </div>
      <div className="spe">
        <p>{artisan.specialite?.nom_spe}</p>
      </div>
      <div className="loc">
        <p>{artisan.ville?.nom_ville}</p>
      </div>
      <div className="about">
        <h2>A propos</h2>
        <p>{artisan.a_propos}</p>
      </div>
      <div className="contact">
        {/*Formulaire destiné à l'adresse mail {artisan.email}*/}
        <h2>Formulaire de contact</h2>
        <form action="post" className="contact__form">
          <label htmlFor="name">nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom..."
            required
          />
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre adresse mail..."
            required
          />
          <label htmlFor="message">message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Vote message..."
            rows={"5"}
            cols={"10"}
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="website">
        <ExtLink href={artisan.site_web}>
          Accéder au site web <img src="" alt="flèche" />
        </ExtLink>
      </div>
    </section>
  );
}
