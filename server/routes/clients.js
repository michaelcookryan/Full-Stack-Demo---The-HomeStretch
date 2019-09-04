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
      
    }).sort({"name":1});
    
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

router.put("/:id", (req, res) => {

    User.updateOne({ clientId: req.body.clientId }, { videos: req.body.videos })
        .then((response) => {
        
            console.log("Updated client: ", response)
            res.json(response)

    }).catch(err => console.error(`Failed to update document: ${err}`))

});

router.delete("/:id", (req, res) => {

    const query = { clientId: req.params.id };

    User.deleteOne(query)
        .then(response => {

            return res.json({ response });

        }).catch(err => console.error(`Failed to remove document: ${err}`))

});



module.exports = router;