/**
 * @file ArtisanRating.jsx
 * @description Transforme la note en nombre d'étoiles
 */

/**
 * @function ArtisanRating
 * @param {Number} note - note d'artisan
 * @returns {JSX.Element}
 * @description Transforme la note en nombre d'étoiles
 */
export default function ArtisanRating({ note }) {
  const rate = [];

  /**
   * @function roundDecimal
   * @param {Number} nb - nb à arrondir
   * @returns arrondi
   * @description Arrondit un nombre à 0.5
   */
  const roundDecimal = (nb) => {
    return Math.round(nb * 2) / 2;
  };

  const noteRound = roundDecimal(note);

  /**
   * @function composeArray
   * @param {Number} noteRound - note arrondie
   * @returns {Array} transmet des éléments pour array
   * @description Transmet une note décomposée en unités à un tableau
   */
  const composeArray = (noteRound) => {
    let noteLoop = noteRound;
    for (let i = 0; i < 5; i++) {
      if (noteLoop >= 1) {
        rate.push(1);
        noteLoop -= 1;
      } else if (noteLoop === 0.5) {
        rate.push(0.5);
        noteLoop -= 1;
      } else {
        rate.push(0);
      }
    }
  };
  composeArray(noteRound);

  const starsArray = [];

  for (let i = 0; i < 5; i++) {
    if (rate[i] === 1) {
      starsArray.push(<i key={i} className="bi bi-star-fill"></i>);
    } else if (rate[i] === 0.5) {
      starsArray.push(<i key={i} className="bi bi-star-half"></i>);
    } else {
      starsArray.push(<i key={i} className="bi bi-star"></i>);
    }
  }

  return <div className="starsRate">{starsArray}</div>;
}
