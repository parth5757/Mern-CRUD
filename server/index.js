const express = require('express'); // this are the thing require for setting up the node server express, mongoose, cors
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require("./models/Users");
const app = express()
app.use(cors({
    origin: 'http://localhost:5173', // or '*' for all origins
    methods: ['GET', 'POST']
}));

app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.listen(3300, () => {
    console.log("Server is Running")
})