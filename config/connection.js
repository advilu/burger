const Sequelize = require("sequelize");

// mySQL connection using Sequelize
const sequelize = new Sequelize("burgers", "root", "password", {
  host: "localhost",
  port: 3309,
  dialect: "mysql",
  pool: {
    max: 50,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;