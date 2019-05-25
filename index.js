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

server.post("/api/users", (req, res) => {
  const user = req.body;
  if (!user.name || !user.bio) {
    res.status(400).json({
      errorMessage: "Please provide name and bio for the user."
    });
  }
  db.insert(user)
    .then(userInfo => {
      res.status(201).json(userInfo);
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the user to the database"
      });
    });
});

server.listen(5000, () => console.log("API running on port 5000"));
