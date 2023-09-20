const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");
const db = {};

const sequlize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = sequlize.define(path.join(__dirname, file));
    db[model.ndame] = model;
  });

db.sequlize = sequlize;
db.Sequelize = Sequelize;
module.exports = db;
