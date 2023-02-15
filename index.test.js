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
            const testUser3 = await Band.create({ name: 'Oasis', genre: 'Rock and Pop' });
            expect(testUser3.genre).toBe('Rock and Pop');
        })


        
        test('can create a Musician', async () => {
            const testUser2 = await Musician.create({ name: 'Noel', instrument: 'Guitar' });
            expect(testUser2.name).toBe('Noel');
        })

        test('can create a Musician', async () => {
            const testUser4 = await Musician.create({ name: 'Noel', instrument: 'Guitar' });
            expect(testUser4.instrument).toBe('Guitar');
        })
    
})
