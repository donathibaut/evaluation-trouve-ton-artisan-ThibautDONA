export default function Artisan() {
  return (
    <main>
      <section className="card">
        <h1>Artisan</h1>
        <img src="" alt="logo ou photo de l'entreprise" />
        <div className="note">
          <p>note</p>
        </div>
        <div className="spe">
          <p>spécialité</p>
        </div>
        <div className="loc">
          <p>localisation</p>
        </div>
        <div className="about">
          <h2>A propos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="contact">
          <h2>Formulaire de contact</h2>
          <form action="post" className="contact__form">
            <label htmlFor="name">nom</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom..."
            />
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre adresse mail..."
            />
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Vote message..."
              rows={"5"}
              cols={"10"}
            ></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div className="website">
          <a href="">
            Accéder au site web <img src="" alt="flèche" />
          </a>
        </div>
      </section>
    </main>
  );
}
