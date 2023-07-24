const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});

const CardModel = mongoose.models.card || mongoose.model("card", cardSchema);

module.exports = CardModel;
