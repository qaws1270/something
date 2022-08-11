const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const result = "";

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

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
