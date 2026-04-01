const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "available", version: "1.0.0", uptime: process.uptime(), timestamp: new Date() });
});

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "Patient A" }]);
});

app.get("/api/activities", (req, res) => {
  res.json([]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`VitalSync API on :${PORT}`));
