const express = require("express");
const app = express();

//Start the Server

const port = 3000;
app.listen(port, () => {
  console.log("server listening on port");
});
