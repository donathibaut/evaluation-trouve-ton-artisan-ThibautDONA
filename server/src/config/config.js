const { Sequelize } = require("sequelize");

/**
 * Importation de sequelize
 * @module dbConnection
 */
/**
 * Mise en place de sequelize ('database', 'user', 'password', {})
 * @type {Sequelize}
 */
const sequelize = new Sequelize(DB_NAME, USER_NAME, USER_PASSWORD, {
  host: HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
