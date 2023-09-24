const PlaceSchema = require("../models/place.js");
const jwtUtils = require("../utils/jwt.js");

const getAll = async (req, res) => {};
const places = async (req, res) => {
  try {
    const { token } = req.cookies;
    const {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    } = req.body;
    const generateToken = await jwtUtils.verifyToken(token);
    const placeDoc = await PlaceSchema.create({
      owner: generateToken.id,
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });
    res.json(placeDoc)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Veri alınamadı" }); // Hata durumunda istemciye hata bildir
  }
};

module.exports = { getAll, places };
