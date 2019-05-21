const express = require("express");
const request = require("request");

const app = express();

app.get("/api/landings", async (req, res) => {
  request("https://data.nasa.gov/resource/gh4g-9sfh.json", function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode === 200) {
      const query = req.query.search;
      const landings = JSON.parse(body);

      !!query
        ? res.json(
            landings.filter(landing =>
              landing.name.toLowerCase().includes(query.toLowerCase())
            )
          )
        : res.json(landings);
    } else {
      res.json(error);
    }
  });
});

app.listen(4000);
