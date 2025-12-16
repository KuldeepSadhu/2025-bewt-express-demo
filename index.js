const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world home page");
});

app.get("/students", (req, res) => {
  res.send("Hello world students");
});

app.listen(process.env.PORT, () => {
  console.log(`Server started @ ${process.env.PORT}`);
});
