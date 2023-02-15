const path = require('path');
const { Sequelize, Model } = require('sequelize');

const sequelize = new Sequelize({
    // Dialect needed
    dialect: "sqlite",
    // Where is the database located? __dirname is the current directory we're in
    storage: path.join(__dirname, "db.sqlite")

})

module.exports = {
    sequelize,
    Sequelize
};
