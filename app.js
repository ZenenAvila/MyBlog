const express = require("express");
const cors = require("cors");

const app = express();
const whiteList = ["http://www.facebook.com", "http:/ww.youtube.com"];

//use json middleware
app.use(express.json());

//use middleware cors

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  console.log("Api running in port: " + 5000);
});
