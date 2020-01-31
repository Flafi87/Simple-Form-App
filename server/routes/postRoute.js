const express = require("express");
const router = express.Router();

// Post Model
const Post = require("../models/Post");

// @route   POST api/posts
// @desc    Create an event

router.post("/", (req, res) => {
    console.log(req.body)

    const newPost = new Post({
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        email: req.body.email,
        eventDate: req.body.eventDate
    });

    newPost.save().then(post => res.json(post)).catch(err => res.json({ error: err }));
});

module.exports = router;