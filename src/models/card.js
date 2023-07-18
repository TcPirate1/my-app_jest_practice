const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    rarity: {
        type: String,
    },
    set: {
        type: String,
    },
    cardType: {
        type: String,
    },
    difficulty: {
        type: Number,
    },
    control: {
        type: Number,
    },
    blockZone: {
        type: String,
    },
    blockModifier: {
        type: Number,
    },
    speed: {
        type: Number,
    },
    attackZone: {
        type: String,
    },
    damage: {
        type: Number,
    },
    symbols: [{
        type: String,
    }],
    cardText: {
        type: String,
    },
    keywords: [{
        type: String,
    }],
});

const CardModel = mongoose.models.card || mongoose.model('card', cardSchema);

module.exports = CardModel;