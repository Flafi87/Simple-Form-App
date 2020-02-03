const express = require("express");
const router = express.Router();

// Post Model
const Event = require("../models/events");

// @route   POST api/posts
// @desc    Create an event

router.post("/", (req, res) => {
    console.log(req.body)

    const newEvent = new Event({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email: req.body.email,
        eventDate: req.body.eventDate
    });

    newEvent.save().then(post => res.json(post)).catch(err => res.json({ error: err }));
});

module.exports = router;