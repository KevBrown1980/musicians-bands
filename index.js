const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./Song')

// one-to-one relationship
Musician.belongsTo(Band);
// one-to-many relationship
Band.hasMany(Musician);


Band.hasMany(Song);
Song.hasMany(Band);

module.exports = {
    Band,
    Musician,
    Song
};
