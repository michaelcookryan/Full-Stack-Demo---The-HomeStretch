const express = require("express");
const app = express();
const clientRouter = require("./routes/clients");
const videoRouter = require("./routes/videos");
const bodyParser = require("body-parser");
const cors = require('cors')

const port = process.env.PORT || process.argv[2] || 8090;

app.use(cors())
app.use(bodyParser.json());
app.use('/clients', clientRouter);
app.use('/videos', videoRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
