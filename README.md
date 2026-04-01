# evaluation-trouve-ton-artisan-ThibautDONA

Création du site web "Trouve ton artisan !" permettant de répertorier les artisans de la région Auvergne-Rhône-Alpes (France)

Français

## Prérequis

Ce projet utilise les ressources suivantes :

- git
- Node.js v24.12.0
- npm
- Express
- Sequelize
- XAMPP
- MySQL
- PhpMyAdmin

## Installation

1. Installez nvm :
   https://www.nvmnode.com/guide/installation.html

2. Installez Node.js + npm :
   Dans le terminal, utilisez :

```bash
nvm install 24.12.0
```

puis :

```bash
nvm use 24.12.0
```

Pour voir si c'est bien installé :

```bash
node -v
```

(Vous devriez voir : v.24.12.0)

3. Installez git :
   https://git-scm.com

4. Clonez le repository :
   Dans votre terminal, utilisez :

```bash
git clone https://github.com/donathibaut/evaluation-api-ThibautDONA
```

5. Installez les packages (dont Express) :
   Avec le terminal, allez à la racine du projet.
   Dans le terminal, utilisez :

```bash
npm i
```

    Ensuite, faites de même dans le répertoire client et le répertoire server.

6. Installez XAMPP :
   https://www.apachefriends.org/fr/index.html

7. Allez sur PhpMyAdmin :
   Sur l'interface XAMPP, appuyez sur les boutons "Start" des lignes Apache et MySQL.
   Ensuite, cliquez sur le bouton "Admin" de la ligne MySQL, celle-ci vous enverra sur PhpMyAdmin.

   Une fois que vous y serez, accédez à l'onglet SQL disponible depuis l'accueil et collez le script contenu
   dans le fichier trouve-ton-artisan.sql (annexes/script_SQL).

   Cela étant fait, dirigez-vous dans la base nouvellemnt créée, allez dans l'onglet SQL s'y trouvant
   et collez le script data.sql.

   La base de données est maintenant prête !

8. Rendez-vous dans le fichier .env.example (dossier server/env) afin de copier le modèle fourni,
   vous permettant de paramétrer le fichier .env que vous créerez sur le même répertoire.
   Ainsi, vous paramétrerez le serveur.

---

English

# evaluation-trouve-ton-artisan-ThibautDONA

Creation of the website "Trouve ton artisan !" helping you to find craftsmen of the French region Auvergne-Rhône-Alpes

## Requirements

This project uses the following resources :

- git
- Node.js v24.12.0
- npm
- Express
- Sequelize
- XAMPP
- MySQL
- PhpMyAdmin

## Installation

1. Install nvm :
   https://www.nvmnode.com/guide/installation.html

2. Install Node.js + npm :
   In the terminal, use :

```bash
nvm install 24.12.0
```

then :

```bash
nvm use 24.12.0
```

To see if it's correctly installed :

```bash
node -v
```

(You should see : v.24.12.0)

3. Install git :
   https://git-scm.com

4. Clone this repository :
   In your terminal, use :

```bash
git clone https://github.com/donathibaut/evaluation-api-ThibautDONA
```

5. Install the packages (including Express) :
   With the terminal, go to the project root folder.
   In the terminal, use :

```bash
npm i
```

    Then do the same in the client and the server directory.

6. Install XAMPP :
   https://www.apachefriends.org/fr/index.html

7. Go to PhpMyAdmin :
   On XAMPP interface, select "Start" buttons in the Apache and MySQL areas.
   Then, click on the "Admin" button in the MySQL area, this one will redirect you on PhpMyAdmin.

   Once you are there, go to the home page of PhpMyAdmin, then click on the "SQL" tab and paste the script named "trouve-ton-artisan.sql"
   you will find in annexes/script_SQL.

   After that, head for the new database and click on the "SQL" tab and paste the script named "data.sql".

   Well done, the database is now ready !

8. Go to the .env.example file (server/env) to copy the example for the .env file you will create in the same directory.
   This .env will give you the possibility to set the server parameters.
