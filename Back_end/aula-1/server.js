const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get("/mach1-backend", function (req, res) {
    res.send('hello students');
  });

app.listen(3000);
