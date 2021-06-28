const request = require('supertest')
const app = require('./index')

jest.setTimeout(30000);

describe('POST /upload - upload a new documentation file', () => {
    const filePath = `${__dirname}/testFiles/provider2.csv`

    it('should upload the test csv', function(done) {
            
        request(app)
            .post('/upload')
            .field('provider', 'provider2')
            .attach('csv', filePath)
            .expect(200, {
                msg: 'Finished parsing the csv data'
            }, done)
    })
})