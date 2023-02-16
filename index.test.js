const { sequelize } = require('./db');
const { Band, Musician } = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    

        test('can create a Band', async () => {
            const testUser1 = await Band.create({ name: 'Oasis', genre: 'Rock and Pop' });
            expect(testUser1.name).toBe('Oasis');
        })
    
        test('can create a Band', async () => {
            const testUser3 = await Band.create({ name: 'Blur', genre: 'BritPop' });
            expect(testUser3.genre).toBe('BritPop');
        })


        
        test('can create a Musician', async () => {
            const testUser2 = await Musician.create({ name: 'Noel', instrument: 'Guitar' });
            expect(testUser2.name).toBe('Noel');
        })

        test('can create a Musician', async () => {
            const testUser4 = await Musician.create({ name: 'Damian', instrument: 'Singer' });
            expect(testUser4.instrument).toBe('Singer');
        })

        test('test if musicians are in band', async () => {
            
            
// User to add post to
const someMusician = await Musician.findByPk(1)
// Adding the post with an id of 4 to someUser
await someMusician.addBand(1)
// Verifying it's been added
const result = await Band.findByPk(1);
//console.log(posts)

           

            expect(result).toBe('xyz');
        })


    
})
