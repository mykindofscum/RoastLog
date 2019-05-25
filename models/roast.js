const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const roastSchema = new Schema({
    title: {
        originName: String,
        required: true,
    },
    date: {
        default: function () {
            return new Date().getFullYear();
        }, required: true,
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
        type: Number,
        required: true
    },
    yellowingTime: {
        type: Number,
        required: true
    },
    browningTime: {
        type: Number,
        required: true
    },
    firstCrkStart: {
        type: Number,
        required: true
    },
    firstCrkEnd: {
        type: Number,
        required: true
    },
    endTime: {
        type: Number,
        required: true
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