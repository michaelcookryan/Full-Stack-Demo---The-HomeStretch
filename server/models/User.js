const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    clientId: String,
    name: String,
    email: String,
    password: String,
    role: String,
    videos: [{videoId: String, title:String, url: String}]
});

module.exports = mongoose.model("User", userSchema);
