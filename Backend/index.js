const express = require("express");
const { mogoConnection } = require("./Server/server");

let app = express();

app.listen(8080, async () => {
  try {
    await mogoConnection
    console.log("server is connected to db");
  } catch (err) {
    console.log("error", err);
  }
  console.log("server is running on port 8080");
});
