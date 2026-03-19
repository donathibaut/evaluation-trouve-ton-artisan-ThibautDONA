const app = require("./app");
const sequelize = require("./config/config");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connecté à mysql !");
    return sequelize.sync();
  })
  .then(() => {
    const port = process.env.DB_PORT || 3306;
    app.listen(port, () => {
      console.log("Serveur lancé !");
    });
  })
  .catch((err) => {
    console.log("Erreur de lancement du serveur : ", err);
  });
