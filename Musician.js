const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
let Musician = sequelize.define("musician", {
    // Column names
    name: Sequelize.STRING,
    instrument: Sequelize. STRING
})

module.exports = {
    Musician
};