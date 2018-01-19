//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let assert = require("assert");


chai.use(chaiHttp);

describe('/GET /api', () => {
  it('it should Add Numbers', (done) => {
    chai.request(server)
        .get('/api')
        .end((err, res) => {
            res.should.have.status(200);
            assert.equal(res.body.message,'4');
            done();
        });
  });
});
