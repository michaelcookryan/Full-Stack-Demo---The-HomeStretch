const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Video = require("../models/Video")
const mongodbAccount = "Your MongoDB account details and password"

mongoose.connect(
    process.env.MONGODB_URI || mongodbAccount,
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