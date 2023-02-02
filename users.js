const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/usersDB");

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String
});

const secret = "Thisisourlittlesecret.";
userSchema.plugin(encrypt, {secret: secret, encryptedFields: ['password']});

module.exports = mongoose.model("User", userSchema);