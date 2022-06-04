const mongoose = require("mongoose");

const connectDB = async () => {
    try {       
        console.log('hi')
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database is connected");
    } 
    catch (err) {
        console.log("erreur", err);
    }
};

module.exports = connectDB;
