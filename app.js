const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const pickRandomQuote = require("./src/pickRandomQuote");
const lotrQuotes = require("./src/quotes");
const rateLimit = require("express-rate-limit");
 
// Has to be enabled since app runs on Heroku
app.set('trust proxy', 1);
 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
 
//  apply to all requests
app.use(limiter);

const cors = require('cors');
app.use(cors({optionSuccessStatus: 200})); 

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/quote", (req, res) => {
  res.json(pickRandomQuote(lotrQuotes));
});

app.get("/images/:picture", (req, res) => {
  const image = req.params.picture.toLowerCase();
  res.sendFile(`${__dirname}/public/images/${image}`);
});

app.listen(port, () =>
  console.log(`Connected to LOTR random quote app on port ${port}`)
);
