const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/usersDB");

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", userSchema);