const express = require("express");
const fetch = require("node-fetch");
const Parser = require("rss-parser");
const cors = require("cors");

const app = express();
const parser = new Parser();

app.use(cors());

app.get("/api/news", async (req, res) => {
  res.json({ message: "Server Online" });
});

app.get("/", (req, res) => {
  res.send("You've reached the server!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
