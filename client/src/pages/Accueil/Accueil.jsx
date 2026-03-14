export default function Accueil() {
  return (
    <main>
      <section className="guide">
        <h1>Comment trouver mon artisan ?</h1>
        <ol>
          <li>Choisir la catégorie d’artisanat dans le menu.</li>
          <li>Choisir un artisan.</li>
          <li>Le contacter via le formulaire de contact.</li>
          <li>Une réponse sera apportée sous 48h.</li>
        </ol>
      </section>
      <section className="list">
        <ul className="list1">
          <li>
            <h2>Artisan 1</h2>
          </li>
          <li>note</li>
          <li>spécialité</li>
          <li>localisation</li>
        </ul>
        <ul className="list2">
          <li>
            <h2>Artisan 2</h2>
          </li>
          <li>note</li>
          <li>spécialité</li>
          <li>localisation</li>
        </ul>
        <ul className="list3">
          <li>
            <h2>Artisan 3</h2>
          </li>
          <li>note</li>
          <li>spécialité</li>
          <li>localisation</li>
        </ul>
      </section>
    </main>
  );
}
