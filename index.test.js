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

        test('can create a Band', async () => {
            const testUser = await User.create({ name: 'George', password: '123' });
            expect(testUser.name).toBe('George');
        })
    })



    test('can create a Musician', async () => {
        // TODO - test creating a musician
        test('can create a Band', async () => {
            const testUser = await User.create({ name: 'George', password: '123' });
            expect(testUser.name).toBe('George');
        })
    })
})
