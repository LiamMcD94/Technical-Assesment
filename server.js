const express = require('express');
const app = express();
app.set("view engine", "ejs")
const database = require("./database.js")
const port = 3000;



const data = [
  {
    pollId: 1,
    pollName: "Premier League Winner",
    question: "Who will win the Premier League?",
    options: [
      {
      optionId: 1,
      optionText: "Manchester City",
      vote: 35
      },
      {
      optionId: 2,
      optionText: "Arsenal",
      vote: 23
      },
      {
      optionId: 3,
      optionText: "Liverpool",
      vote: 42
      },
      {
      optionId: 4,
      optionText: "Liverpool",
      vote: 42
      },
      {
      optionId: 5,
      optionText: "Liverpool",
      vote: 42
      },    
    ]
  }
]

app.get('/', (req, res) => {
  res.render("index.ejs", {
    data
    
  })
})

app.get("/results", (req, res) => {
  res.render("results.ejs", {
    data
  })
})


app.use("/public", express.static("public"))

app.listen(port, () => {
  console.log('Example app is listening at http://localhost:' + port);
});