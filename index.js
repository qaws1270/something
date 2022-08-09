const express = require("express");
const app = express();
const port = process.env.PORT;
const result = "";

app.get("/", function (req, res) {
  if (!req.query.res) {
    res.send("No query");
    return;
  }
  result += req.query.res + "<br>";
  res.send("OK");
});
app.get("/see", function (req, res) {
  if (res.query.id == "mofucker") {
    res.send(result);
  } else {
    res.send("Nugumma");
  }
});

app.listen(port, function () {});
