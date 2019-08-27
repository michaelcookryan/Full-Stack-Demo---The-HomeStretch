const express = require("express");
const app = express();
const router = require("./routes/clients");
const bodyParser = require("body-parser");
const cors = require('cors')

const port = process.env.PORT || process.argv[2] || 8090;

app.use(cors())
app.use(bodyParser.json());
app.use('/clients', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
