const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    clientId: String,
    name: String,
    email: String,
    role: String,
    videos:[String]
});

module.exports = mongoose.model("User", userSchema);
