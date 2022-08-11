const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
let result = "";

app.use(cors());

app.use((req, res, next) => {
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
  if (req.query.id == "mofucker") {
    res.send(result);
  } else {
    res.send("Nugumma");
  }
});

app.listen(port, function () {});
