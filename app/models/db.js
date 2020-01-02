const Sequelize = require("sequelize");

const sequelize = new Sequelize("amazontrader", "postgres", "040191", {
  host: "localhost",
  dialect: "postgres"
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};
