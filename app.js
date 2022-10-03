const { application } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

const log = (req, res, next) => {
  console.log(req.body);
  console.log(`Data: ${Date.now()}`);
  next();
};

app.use(log);

//set express routes
app.get("/", (req, res) => {
  res.send("<h1>To Do List</h1>");
});

app.get("/json", (req, res) => {
  console.log(req.body);
});

//start the server
app.listen(3000, () => {
  console.log("Server is online");
});
