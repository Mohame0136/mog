const express = require("express");
const port = 5000;
const User = require("./models/User");
const connectDB = require("./config/ConnectDB");
const app = express();

require("dotenv").config();
connectDB();


User.find((err, data) => { err ? console.log("Ereur", err) : console.log("data", data) })


app.listen(port, (err) =>
    err
        ? console.log("Erreur!", err)
        : console.log(`this server is running on port : ${port}`)
);

// User.create(
//     [
//         { name: "user1", email: "user1@gmail.com", age: 4 },
//         { name: "user2", email: "user2@gmail.com", age: 8 },
//     ]
// )

