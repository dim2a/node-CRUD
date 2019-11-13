const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('User', {
  // id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   atoIncrement: true
  //   //allowNull: false
  // },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
