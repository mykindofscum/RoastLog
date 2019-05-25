const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String
}, {
    timestamps: Date
});

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 10, default: 10},
    brewType: {
        type: String,
        enum: ['Drip', 'Espresso', 'French Press', 'Aeropress', 
        'Cowboy', 'Cold Brew', 'Other']
    }, 
    timestamps: Date
});     




module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Review', reviewSchema);