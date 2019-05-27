const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const roastSchema = new Schema({
    originName: {
        type: String,
    },
    dateRoast: {
        type: Date
    },
    temp: {
        type: String,
        enum: ['high', 'med', 'low', 'other']
    },
    fanSpeed: {
        type: String,
        enum: ['high', 'med', 'low', 'other']
    },
    roastTime: {
        type: Number
    },
    yellowingTime: {
        type: Number
    },
    browningTime: {
        type: Number
    },
    firstCrkStart: {
        type: Number
    },
    firstCrkEnd: {
        type: Number
    },
    airRoaster: {
        type: String,
        enum: ['Popcorn popper', 'Fresh Roast SR500', 'Other']
    },
    drumRoaster: {
        type: String,
        enum: ['Behmor 1600PLUS', 'Gene Cafe Roaster', 
        'Aillio Bullet R1', 'Hot Top Basic', 'Other']
    },
    stoveRoaster: {
        type: String,
        enum: ['Wok', 'Pan', 'Other']
        } 
    }, {
        timestamps: Date 
    });

    module.exports = mongoose.model('Roast', roastSchema);