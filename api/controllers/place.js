const PlaceSchema = require("../models/place.js")
const getAll = async (req, res) => {
  try {
    const data = await PlaceSchema.find();
    const {token} = req.cookies
    console.log(token)
    res.json(data); // Veriyi istemciye JSON olarak gönder
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Veri alınamadı' }); // Hata durumunda istemciye hata bildir
  }
};
const places = async (req, res) => {
  try {

  //  PlaceSchema.create({
  //     owner:
  //   })
  } catch (error) {
    console.log(error)
  }
};

module.exports = { getAll, places };
