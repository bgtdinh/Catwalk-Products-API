const chai = require('chai');
const chaiiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiiHttp);

describe('/GET products', () => {
  it( 'it should get 5 products by default', (done) => {
    chai.request(server)
      .get('/products')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
