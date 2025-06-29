const express = require("express");
const Parser = require("rss-parser");
const cors = require("cors");

const app = express();
const parser = new Parser();

app.use(cors());

app.get("/api/news", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: "Missing query" });

  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(rssUrl);
    const xml = await response.text();

    const feed = await parser.parseString(xml);
    feed.items.sort((a, b) => {
      return new Date(b.pubDate) - new Date(a.pubDate);
    });
    const filteredItems = feed.items
      .filter((item) => item.pubDate)
      .filter(
        (item) =>
          item.title && !item.title.trim().toLowerCase().includes("obituary")
      );
    const topItems = filteredItems.slice(0, 5);

    res.json(topItems);
  } catch (err) {
    console.error("RSS Fetch Error:", err);
    res.status(500).json({ error: "Failed to fetch RSS" });
  }
});

app.get("/", (req, res) => {
  res.send("You've reached the server!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
