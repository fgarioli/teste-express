"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World Abacaxi");
});

app.get("/abacaxi", (req, res) => {
  res.send("Jacitec com Docker teste");
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
