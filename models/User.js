const mongoose = require('mongoose')
const { Schema, model } = mongoose
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFood: [String],
})

module.exports = User = model('User', userSchema)
