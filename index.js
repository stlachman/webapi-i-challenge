const express = require("express");
const cors = require("cors");
const db = require("./data/db");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("It's alive!");
});

// Create a new user
server.post("/api/users", (req, res) => {
  const user = req.body;
  if (!user.name || !user.bio) {
    res.status(400).json({
      errorMessage: "Please provide name and bio for the user."
    });
    return;
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

// Get All Users

server.get("/api/users", (req, res) => {
  db.find()
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(err => {
      res.status(500).json({
        error: "The users information could not be retrieved."
      });
    });
});

// Get user by id

server.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  db.findById(userId)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The user information could not be retrieved." });
    });
});

// Delete a user
server.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  db.remove(userId)
    .then(user => {
      if (user) {
        res.status(204).end();
      } else {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The user could not be removed" });
    });
});

// Edit a user

server.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = req.body;
  if (!user.name || !user.bio) {
    res.status(400).json({
      errorMessage: "Please provide name and bio for the user."
    });
    return;
  }
  db.update(userId, user)
    .then(changes => {
      if (changes) {
        res.status(200).json({ changes });
      } else {
        res.status(404).json({
          message: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The user information could not be modified." });
    });
});

server.listen(5000, () => console.log("API running on port 5000"));
