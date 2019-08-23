const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const dbRoute = 'mongodb + srv://mcryan27:cook51502727@homestretch-l9uzw.mongodb.net/test?retryWrites=true&w=majority';
const port = process.env.PORT || process.argv[2] || 8080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("GET string");  //change to json
});

app.post("/", (req, res) => {
    res.send("POST string");  //change to json
});

app.put("/", (req, res) => {
    res.send("PUT string");  //change to json
});

app.delete("/", (req, res) => {
    res.send("DELETE string");  //change to json
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
