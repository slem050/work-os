"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    Phonenumber: String,
    Birthday: String,
    site: String,
    subject: String
});
//the collection
var USERS = mongoose.model("users", userSchema);
exports["default"] = USERS;
