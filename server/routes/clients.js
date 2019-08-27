const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User")
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb+srv://mcryan27:mike272727@homestretch-l9uzw.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);

const db = mongoose.connection

db.once("open", () => {
    console.log("connected to database");
});


router.get("/", (req, res) => {

    User.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
    
});

router.post("/", (req, res) => {
  
    let user = new User({ 
        clientId : req.body.id,
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        role : req.body.role,
        videos : req.body.videos})


    user.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json(user);
    });

});

router.put("/", (req, res) => {

    let userUpdated = new User({
        name: req.body.name,
        email: req.body.email,
        videos: req.body.videos
    })
    User.find((err, data) => {
        console.log("Data: ", data)
        if (err) return res.json({ success: false, error: err });
        // return res.json({ success: true, data: data });

        userUpdated.save((err) => {
            if (err) return res.json({ success: false, error: err });
            return res.json(userUpdated);
        });
    });

    // newInfo.save((err) => {
    //     if (err) return res.json({ success: false, error: err });
    //     return res.json(user);
    // });

});

router.delete("/", (req, res) => {
    res.send("DELETE string"); //change to json
});



module.exports = router;