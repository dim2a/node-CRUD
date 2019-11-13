const Sequelize = require("sequelize");

const DB_NAME = "node-test",
  USER_NAME = "root",
  PASSWORD = "12345678";

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;
