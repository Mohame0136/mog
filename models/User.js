const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
    },
    age: Number,
    email: {
        type: String,
        required: true,
    },
    job:String
});

module.exports = User = model("User", userSchema);
