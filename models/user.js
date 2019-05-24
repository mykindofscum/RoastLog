const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user');

const factSchema = new mongoose.Schema({
    text: String
}, {
    timestamps: true
});

const userSchema = new Schema({
    name: String,
    email: String,
    avatar: String,
    facts: [factSchema],
    googleId: String
}, {
    timestamps: true
});