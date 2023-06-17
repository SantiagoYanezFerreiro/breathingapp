const express = require("express");
const app = express();
const port = 3000;
const User = require("./db");

//Parse JSON Data
app.use(express.json());

//API Routes

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Start the Server
app.listen(port, () => {
  console.log("server listening on port");
});
