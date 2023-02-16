const {Band} = require('./Band')
const {Musician} = require('./Musician')


// one-to-one relationship
Musician.belongsTo(Band);
// one-to-many relationship
Band.hasMany(Musician);


module.exports = {
    Band,
    Musician
};
