const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Video = require("../models/Video")

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb+srv://mcryan27:mike272727@homestretch-l9uzw.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);

const db = mongoose.connection

db.once("open", () => {
    console.log("connected to video database");
});


router.get("/", (req, res) => {

    Video.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ data });
    });

});

module.exports = router;