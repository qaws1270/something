const express = require("express");
const app = express();

app.get("/", function (req, res) {
  if (!req.query.email) {
    res.send("No query");
    return;
  }
  const { email, pw, uuid, result } = req.query;
  console.log(email, pw, uuid, result);
  res.send("OK");
});

app.listen(80, function () {
  console.log("Example app listening on port 80!");
});
