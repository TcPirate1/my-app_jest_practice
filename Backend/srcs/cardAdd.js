require("dotenv").config();
require("./mongoDB").connect();
const cardModel = require("./models/card");

export default async function handler(req, res) {
  const { name, image } = req.body;
  const existingCard = await cardModel.findOne({ name });
  if (req.method !== "POST") {
    console.log("Method not allowed");
    res.status(405).redirect("/addcard");
  } else {
    const card = await cardModel.create({
      name,
      image,
    });
    console.log(`Successfully stored "${card.name}" in database`);
    res.status(200).redirect("/addcard");
  }
}
