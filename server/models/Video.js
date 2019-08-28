const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const videoSchema = new Schema({
    videoId: String,
    title: String,
    url: String
});

module.exports = mongoose.model("Video", videoSchema);