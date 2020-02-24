const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const pickRandomQuote = require("./src/pickRandomQuote");
const lotrQuotes = require("./src/quotes");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/lotr/quote", (req, res) => {
  res.json(pickRandomQuote(lotrQuotes));
});

app.listen(port, () =>
  console.log(`Connected to LOTR random quote app on port ${port}`)
);
