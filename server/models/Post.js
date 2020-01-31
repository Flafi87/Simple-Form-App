const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },

});

module.exports = Post = mongoose.model("Events", PostSchema);