const express = require("express");
const app = express();
const router = require("./routes/clients");
// const router = express.Router();
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const User = require("./models/User")
// mongoose.connect(
//   process.env.MONGODB_URI ||
//     "mongodb+srv://mcryan27:mike272727@homestretch-l9uzw.mongodb.net/test?retryWrites=true&w=majority",
//   { useNewUrlParser: true }
// );
// mongoose.connection.once("open", () => {
//   console.log("connected to database");

// });

const port = process.env.PORT || process.argv[2] || 8080;

app.use(bodyParser.json());
app.use('/clients', router);

// router.get("/", (req, res) => {
//     res.send("GET string"); //change to json
// });

// router.post("/add", (req, res) => {
//     res.send("PUT string"); //change to json
    // let user = new User({ 
    //     id : req.body.id,
    //     name : req.body.name,
    //     email : req.body.email,
    //     password : req.body.password,
    //     role : req.body.role,
    //     videos : req.body.videos})

// console.log(user)


    // const { id, name, email, password, role, videos } = req.body;

    // user.id = req.body.id,
    //     user.name = req.body.name,
    //     user.email = req.body.email,
    //     user.password = req.body.password,
    //     user.role = req.body.role,
    //     user.videos = req.body.videos

    // user.save((err) => {
    //     if (err) return res.json({ success: false, error: err });
    //     return res.json({ success: true });
    // });
    
// });

// router.put("/", (req, res) => {
//     res.send("PUT string"); //change to json
// });

// router.delete("/", (req, res) => {
//     res.send("DELETE string"); //change to json
// });




app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
