/**
 * @file ExtLink.js
 * @description Contient une fonction permettant de disposer de liens externes déjà paramétrés et sécurisés
 */

/**
 * Permet de disposer de liens externes déjà paramétrés et sécurisés
 * @component
 * @param {Object} props
 * @param {String} props.href
 * @param {React.ReactNode} props.children
 * @returns {React.JSX.Element} `<a>` paramétré et sécurisé
 */
export default function ExtLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
