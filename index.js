const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World i am swaraj");
});

app.get("/about", (req, res) => {
  res.send("I am Swaraj of nit dgp");
});

app.get("/contact", (req, res) => {
  res.send("Contact me at");
});

app.get("/hobbies", (req, res) => {
  res.send("I love to play cricket");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
