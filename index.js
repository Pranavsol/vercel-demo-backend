// server.js
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Hardcoded credentials
const allowedEmail = "p@gmail.com";
const allowedPassword = "123456";

// Prefix all routes with /.netlify/functions/server if testing locally (e.g., Netlify)
// Vercel uses /api by default when using vercel.json routing

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
