const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
app.disable("x-powered-by");

// Bodyparser Middleware
app.use(express.json());
const db = config.get("mongoURI");

// Connect to Mongo
mongoose
    .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    }) // Adding new mongo url parser
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

// Use Routes
app.use("/api/events", require("./routes/postRoute"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));