var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../index");

var expect = chai.expect;

chai.use(chaiHttp);

it("responds with status 200", function(done) {
  chai
    .request(app)
    .get("/api/landings")
    .end(function(err, res) {
      expect(res).to.have.status(200);
      done();
    });
});
