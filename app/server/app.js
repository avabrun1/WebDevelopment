// just an example of a simple express app - trying to test out the container

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Dockerized Node.js!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
