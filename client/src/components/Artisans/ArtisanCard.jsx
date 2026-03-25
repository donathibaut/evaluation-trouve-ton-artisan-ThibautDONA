import ExtLink from "../ExtLink";

import ArtisanRating from "./Rating/ArtisanRating";

import defaultArtisan from "../../assets/img/defaultArtisan.png";

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
      <div className="card-body">
        <div className="cardSection identity">
          <img src={defaultArtisan} alt="Artisan" />
          <h1>{artisan.nom_artisan}</h1>
        </div>
        <div className="cardSection note">
          <ArtisanRating note={artisan.note}></ArtisanRating>
        </div>
        <div className="cardSection spe">
          <h2 className="cardSubtitle">{artisan.specialite?.nom_spe}</h2>
        </div>
        <div className="cardSection loc">
          <h2 className="cardSubtitle">{artisan.ville?.nom_ville}</h2>
        </div>
        <div className="cardSection about">
          <h2 className="cardSubtitle">A propos</h2>
          <p className="aboutText">{artisan.a_propos}</p>
        </div>
        <div className="cardSection contact">
          {/*
          ATTENTION : Dans le cadre du devoir, je n'ai pas paramétré ce formulaire.
          Celui-ci rempli, renvoie vers la page "Not Found".
          */}
          <h2 className="cardSubtitle">Formulaire de contact</h2>
          {artisan.email && (
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
              <label htmlFor="objet">objet</label>
              <input
                type="text"
                id="objet"
                name="objet"
                placeholder="Votre objet..."
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
          )}
        </div>
        {artisan.site_web && (
          <div className="cardSection website">
            <ExtLink className="website__link" href={artisan.site_web}>
              <p>Accéder au site web</p>
              <i className="bi bi-arrow-right"></i>
            </ExtLink>
          </div>
        )}
      </div>
    </section>
  );
}
