const mongoose = require('mongoose');

const ThingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} required"]
        },
        position: {
            type: String,
            required: [true, "{PATH} required"]
        },
        imageUrl: {
            type: String,
            required: [true, "{PATH} required"]
        },
        treasures: {
            type: Number,
            required: [true, "{PATH} required"]
        },
        favoritePhrase: {
            type: String,
            required: [true, "{PATH} required"]
        },
        pegLeg: {
            type: Boolean,
            required: [true, "{PATH} required"]
        },
        eyePatch: {
            type: Boolean,
            required: [true, "{PATH} required"]
        },
        hookHand: {
            type: Boolean,
            required: [true, "{PATH} required"]
        }
    },
    { timestamps: true }
);


module.exports = mongoose.model('pirate', ThingSchema);
