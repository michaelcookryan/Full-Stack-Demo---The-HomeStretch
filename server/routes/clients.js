const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const Video = require("../models/Video")

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb+srv://mcryan27:mike272727@homestretch-l9uzw.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);

const nanoid = require("nanoid");

const db = mongoose.connection

db.once("open", () => {
    console.log("connected to client database");
});


router.get("/", (req, res) => {

    User.find((err, data) => {
        if (err) return res.json({ success: false, error: err });

        return res.json({ data });
    });
    
});

router.get("/:id", (req, res) => {
    const query = { "clientId": req.params.id };

    User.findOne(query)
        .then(response => {

            return res.json({ response });

        }).catch(err => console.error(`Failed to find document: ${err}`))

});

router.get("/:id/videos", (req, res) => {
   
    Video.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ data });
    });
  

});

router.post("/", (req, res) => {

    let user = new User({
        clientId: nanoid(5),
        name: req.body.name,
        email: req.body.email,
        role: "Client",
        videos: req.body.videos
    });


    user.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json(user);
    });

});

router.put("/", (req, res) => {

    // let userUpdated = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     videos: req.body.videos
    // })
    // User.find((err, data) => {
    //     console.log("Data: ", data)
    //     if (err) return res.json({ success: false, error: err });
    //     // return res.json({ success: true, data: data });

    //     userUpdated.save((err) => {
    //         if (err) return res.json({ success: false, error: err });
    //         return res.json(userUpdated);
    //     });
    // });

    // newInfo.save((err) => {
    //     if (err) return res.json({ success: false, error: err });
    //     return res.json(user);
    // });

});

router.delete("/", (req, res) => {
    res.send("DELETE string"); //change to json
});



module.exports = router;