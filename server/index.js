const express = require("express");
const request = require("request");

const app = express();

app.get("/api/landings", async (req, res) => {
  const offset = req.query.offset ? req.query.offset : 0;
  const query = req.query.query ? req.query.query : "";
  const url = `https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name&$limit=100&$offset=${offset}&$where=name like '%25${query}%25'`;

  request(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      res.json(JSON.parse(body));
    } else {
      res.json(error);
    }
  });
});

app.listen(4000);

module.exports = app;
