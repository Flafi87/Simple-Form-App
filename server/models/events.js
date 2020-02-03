const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({

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

module.exports = Events = mongoose.model("Events", EventSchema);