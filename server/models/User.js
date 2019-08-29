const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Video = require('./Video')


const userSchema = new Schema({
    clientId: String,
    name: String,
    email: String,
    role: String,
    // videos: [{videoId: String, title:String, url: String}]
    // videos:[{type: mongoose.Schema.ObjectId, ref: 'Video'}]
    videos:[String]
});

module.exports = mongoose.model("User", userSchema);
