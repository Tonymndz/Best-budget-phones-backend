const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 1, unique: true }, 
  password: { type: String, required: true, minlength: 1 },
})

const User = mongoose.model('User', userSchema)

module.exports = User;