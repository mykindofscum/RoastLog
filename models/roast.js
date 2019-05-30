var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    content: String,
    rating: {
        type: Number, 
        min: 1, 
        max: 10, 
        default: 10
    },
    brewType: {
        type: String,
        enum: ['Drip', 'Espresso', 'French Press', 'Aeropress', 
        'Cowboy', 'Cold Brew', 'Other']
    }
}, {
    timestamps: true
});

var roastSchema = new Schema({
    roastName: {
        type: String
    },
    roastDate: {
        type: Date
    },
    roastTime: {
        type: Number
    },
    roastType: {
        type: String,
        enum: ['City', 'City+', 'Full City', 'Full City+', 
        'Vienna', 'Full French', 'Fully Carbonized']
    },
    temp: {
        type: String,
        enum: ['high', 'med', 'low', 'other']
    },
    fanSpeed: {
        type: String,
        enum: ['high', 'med', 'low', 'other']
    },
    yellowTime: {
        type: Number
    },
    brownTime: {
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
        enum: ['Electric Popcorn Popper', 'Fresh Roast SR500', 'Other', 'none']
    },
    drumRoaster: {
        type: String,
        enum: ['Behmor 1600PLUS', 'Gene Cafe Roaster', 
        'Aillio Bullet R1', 'Hot Top Basic', 'Other', 'none']
    },
    stoveRoaster: {
        type: String,
        enum: ['Wok', 'Pan', 'Other', 'none']
    },
    nowSharing: { type: Boolean, default: false },
    reviews: [reviewSchema]
    }, {
        timestamps: Date
    });

    module.exports = mongoose.model('Roast', roastSchema);
    // module.exports = mongoose.model('Review', reviewSchema);