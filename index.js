const express = require("express");
const request = require("request");

const app = express();
const PORT = process.env.PORT || 4000;

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

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT);

module.exports = app;
