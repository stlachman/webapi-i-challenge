const express = require("express");
const db = require("./data/db");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("It's alive!");
});

server.get("/api/users", (req, res) => {
  db.find()
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(err => {
      res.json({ error: err, message: "GET failed" });
    });
});

server.listen(5000, () => console.log("API running on port 5000"));
