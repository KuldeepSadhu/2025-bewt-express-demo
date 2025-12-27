const express = require("express");
require("dotenv").config();

const app = express();

app.get("/book/:source-:destination", (req, res) => {
  res.send(`${req.params.source} to ${req.params.destination} `);
});
mobile = 787787888
app.get("/student/:enrollment", (req, res) => {
  res.send(`Mobile Number: ${mobile}`);
});

app.all(/.*/, (req, res) => {
  const data = {
    error: "no route matching with given path",
    message: "asdfasdf ",
  };
  res.status(404).send(data);
});

app.listen(process.env.PORT, () => {
  console.log(`Server started @ ${process.env.PORT}`);
});
