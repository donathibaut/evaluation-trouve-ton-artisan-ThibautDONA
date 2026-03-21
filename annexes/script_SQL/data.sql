--
-- Désactiver les Foreign Keys pour permettre TRUNCATE
--

SET FOREIGN_KEY_CHECKS = 0;

--
-- Insertion en une fois, plus sécurisée
--
START TRANSACTION;

--
-- Suppression des données déjà présentes avant d'insérer
--

DELETE FROM `artisan`;
DELETE FROM `categorie`;
DELETE FROM `specialite`;
DELETE FROM `ville`;

ALTER TABLE `categorie` AUTO_INCREMENT = 1;
ALTER TABLE `specialite` AUTO_INCREMENT = 1;
ALTER TABLE `ville` AUTO_INCREMENT = 1;
ALTER TABLE `artisan` AUTO_INCREMENT = 1;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`ID_CATEGORIE`, `nom_cat`) VALUES
(1, 'Fabrication'),
(2, 'Alimentation'),
(3, 'Bâtiment'),
(4, 'Services');

--
-- Déchargement des données de la table `specialite`
--

INSERT INTO `specialite` (`ID_SPECIALITE`, `nom_spe`, `ID_CATEGORIE`) VALUES
(1, 'Boucher', 2),
(2, 'Chocolatier', 2),
(3, 'Traiteur', 2),
(4, 'Boulanger', 2),
(5, 'Menuisier', 3),
(6, 'Electricien', 3),
(7, 'Chauffagiste', 3),
(8, 'Plombier', 3),
(9, 'Bijoutier', 1),
(10, 'Couturier', 1),
(11, 'Ferronnier', 1),
(12, 'Fleuriste', 4),
(13, 'Coiffeur', 4),
(14, 'Toiletteur', 4),
(15, 'Webdesign', 4);

--
-- Déchargement des données de la table `ville`
--

INSERT INTO `ville` (`ID_VILLE`, `nom_ville`) VALUES
(1, 'Aix-les-bains'),
(2, 'Lyon'),
(3, 'Montélimar'),
(4, 'Evian'),
(5, 'Chambéry'),
(6, 'Romans-sur-Isère'),
(7, 'Saint-Priest'),
(8, 'Annecy'),
(9, 'Chamonix'),
(10, 'Le Puy-en-Velay'),
(11, 'Annonay'),
(12, 'Bourg-en-Bresse'),
(13, 'Vienne'),
(14, 'Valence');

--
-- Déchargement des données de la table `artisan`
--

INSERT INTO `artisan` (`ID_ARTISAN`, `nom_artisan`, `note`, `a_propos`, `email`, `site_web`, `top`, `ID_SPECIALITE`, `ID_VILLE`) VALUES
(1, 'Claude Quinn', 4.2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com', NULL, 0, 9, 1),
(2, 'Boucherie Dumont', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boucherie.dumont@gmail.com', NULL, 0, 1, 2),
(3, 'Chocolaterie Labbé', 4.9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1, 2, 2),
(4, 'Traiteur Truchon', 4.1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 0, 3, 2),
(5, 'Au pain chaud', 4.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'aupainchaud@hotmail.com', NULL, 1, 4, 3),
(6, 'Boutot & fils', 4.7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 0, 5, 12),
(7, 'Mont Blanc Électricité', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 0, 6, 9),
(8, 'Orville Salmons', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com', NULL, 1, 7, 4),
(9, 'Vallis Bellemare', 4.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 0, 8, 13),
(10, 'Amitee Lécuyer', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 0, 10, 8),
(11, 'Ernest Carignan', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carigan@hotmail.com', NULL, 1, 11, 10),
(12, 'Le monde des fleurs', 4.6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 0, 12, 11),
(13, 'Leala Dennis', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 0, 13, 5),
(14, 'C\'est sup\'hair', 4.1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com', 'https://sup-hair.fr', 0, 13, 6),
(15, 'Royden Charbonneau', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r.charbonneau@gmail.com', NULL, 0, 13, 7),
(16, 'Valérie Laderoute', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laderoute@gmail.com', NULL, 0, 14, 14),
(17, 'CM Graphisme', 4.4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 0, 15, 14);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;