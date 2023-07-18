require("../../mongoDB").connect();
import CardModel from "@/models/card";

export default async function handler(req, res) {
  const {
    name,
    rarity,
    set,
    cardType,
    difficulty,
    control,
    blockZone,
    blockModifier,
    speed,
    attackZone,
    damage,
    symbols,
    cardText,
    keywords,
  } = req.query;

  function searchQuery(array) {
    if (array) {
      let arrayCheck = array;
      if (typeof array === "string") {
        arrayCheck = array.split(",");
      }
      const arrayRegex = arrayCheck.join("|");
      return arrayRegex;
    }
  }

  try {
    let query = {};
    if (name) {
      query.name = { $regex: name, $options: "i" };
    }
    if (rarity) {
      query.rarity = { $regex: rarity, $options: "i" };
    }
    if (set) {
      query.set = { $regex: set, $options: "i" };
    }
    if (cardType) {
      query.cardType = { $regex: cardType, $options: "i" };
    }
    if (difficulty) {
      query.difficulty = { $eq: difficulty };
    }
    if (control) {
      query.control = { $eq: control };
    }
    if (blockZone) {
      query.blockZone = { $regex: blockZone, $options: "i" };
    }
    if (blockModifier) {
      query.blockModifier = { $eq: blockModifier };
    }
    if (speed) {
      query.speed = { $eq: speed };
    }
    if (attackZone) {
      query.attackZone = { $regex: attackZone, $options: "i" };
    }
    if (damage) {
      query.damage = { $eq: damage };
    }
    if (symbols) {
      let symbolsArray = searchQuery(symbols);

      query.symbols = { $regex: symbolsArray, $options: "i" };
    }
    if (cardText) {
      query.cardText = { $regex: cardText, $options: "i" };
    }
    if (keywords) {
      let keywordsArray = searchQuery(keywords);

      query.keywords = { $regex: keywordsArray, $options: "i" };
    }
    const results = await CardModel.find({ ...query });
    return res.status(200).json(results);
  } catch (error) {
    console.log(`Something went wrong during the search --> ${error}`);
  }
}
