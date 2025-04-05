// Example of an API in action

// setting up global variables for communication
const express = require('express');
const app = express();
const port = 5001;
const cors = require('cors')

app.use(cors());
app.use(express.json());


// Prints a simple line to let you know things are working!
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
