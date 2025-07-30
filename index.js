// server.js
const express = require("express");
const app = express();
const serverless = require("serverless-http");

// Middleware
app.use(cors());
app.use(express.json());

// Hardcoded credentials
const allowedEmail = "admin@example.com";
const allowedPassword = "1234";

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === allowedEmail && password === allowedPassword) {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = app;
module.exports.handler = serverless(app);
