const express = require("express");
const request = require("request");

const app = express();

app.get("/", async (req, res) => {
  request("https://data.nasa.gov/resource/gh4g-9sfh.json", function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode === 200) {
      res.json(JSON.parse(body));
    } else {
      res.json(error);
    }
  });
});

app.listen(4000);
