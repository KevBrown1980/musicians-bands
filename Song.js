const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
let Song = sequelize.define("song", {
    // Column names
    title: Sequelize.STRING,
})



module.exports = {
    Song
};