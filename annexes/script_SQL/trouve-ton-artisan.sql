-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : mar. 17 mars 2026 à 18:02
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `trouve-ton-artisan`
--
DROP DATABASE IF EXISTS `trouve-ton-artisan`;
CREATE DATABASE IF NOT EXISTS `trouve-ton-artisan` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `trouve-ton-artisan`;

-- Création d'un administrateur
DROP USER IF EXISTS ''@'';
CREATE USER IF NOT EXISTS ''@'' IDENTIFIED BY '';
GRANT ALL PRIVILEGES ON ``.* TO ''@'' WITH GRANT OPTION;
FLUSH PRIVILEGES;
-- --------------------------------------------------------

--
-- Structure de la table `artisan`
--

DROP TABLE IF EXISTS `artisan`;
CREATE TABLE IF NOT EXISTS `artisan` (
  `ID_ARTISAN` int(11) NOT NULL AUTO_INCREMENT,
  `nom_artisan` varchar(50) NOT NULL,
  `note` decimal(2,1) NOT NULL,
  `a_propos` text NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `site_web` varchar(255) DEFAULT NULL,
  `top` tinyint(1) NOT NULL,
  `ID_SPECIALITE` int(11) NOT NULL,
  `ID_VILLE` int(11) NOT NULL,
  PRIMARY KEY (`ID_ARTISAN`),
  KEY `ID_SPECIALITE` (`ID_SPECIALITE`),
  KEY `ID_VILLE` (`ID_VILLE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déclencheurs `artisan`
--
DROP TRIGGER IF EXISTS `is_top`;
DELIMITER $$
CREATE TRIGGER `is_top` BEFORE INSERT ON `artisan` FOR EACH ROW BEGIN
    IF NEW.note > 4.7 THEN SET NEW.top = 1;
    ELSE SET NEW.top = 0;
    END IF;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `updt_top`;
DELIMITER $$
CREATE TRIGGER `updt_top` BEFORE UPDATE ON `artisan` FOR EACH ROW BEGIN
    IF NEW.note > 4.7 THEN SET NEW.top = 1;
    ELSE SET NEW.top = 0;
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `ID_CATEGORIE` int(11) NOT NULL AUTO_INCREMENT,
  `nom_cat` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_CATEGORIE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `specialite`
--

DROP TABLE IF EXISTS `specialite`;
CREATE TABLE IF NOT EXISTS `specialite` (
  `ID_SPECIALITE` int(11) NOT NULL AUTO_INCREMENT,
  `nom_spe` varchar(50) NOT NULL,
  `ID_CATEGORIE` int(11) NOT NULL,
  PRIMARY KEY (`ID_SPECIALITE`),
  KEY `ID_CATEGORIE` (`ID_CATEGORIE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ville`
--

DROP TABLE IF EXISTS `ville`;
CREATE TABLE IF NOT EXISTS `ville` (
  `ID_VILLE` int(11) NOT NULL AUTO_INCREMENT,
  `nom_ville` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_VILLE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Contraintes pour la table `artisan`
--
ALTER TABLE `artisan`
  ADD CONSTRAINT `artisan_ibfk_1` FOREIGN KEY (`ID_SPECIALITE`) REFERENCES `specialite` (`ID_SPECIALITE`),
  ADD CONSTRAINT `artisan_ibfk_2` FOREIGN KEY (`ID_VILLE`) REFERENCES `ville` (`ID_VILLE`);

--
-- Contraintes pour la table `specialite`
--
ALTER TABLE `specialite`
  ADD CONSTRAINT `specialite_ibfk_1` FOREIGN KEY (`ID_CATEGORIE`) REFERENCES `categorie` (`ID_CATEGORIE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
