var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../index");

var expect = chai.expect;

chai.use(chaiHttp);

it("fetches landing data", function(done) {
  chai
    .request(app)
    .get("/api/landings")
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.have.lengthOf(100);
      done();
    });
});

it("fetches filtered results", function(done) {
  chai
    .request(app)
    .get("/api/landings")
    .query({ query: "aa" })
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.have.lengthOf(12);
      done();
    });
});

it("fetches filtered results regardless of case and whitespace", function(done) {
  chai
    .request(app)
    .get("/api/landings")
    .query({ query: "aA  " })
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.body).to.have.lengthOf(12);
      done();
    });
});
