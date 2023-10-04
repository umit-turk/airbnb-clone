const PlaceSchema = require("../models/place.js");
const jwtUtils = require("../utils/jwt.js");

const getAll = async (req, res) => {
  try {
    const {token} = req.cookies
    const generateToken = await jwtUtils.verifyToken(token);
    const {id} = generateToken;
    const places = await PlaceSchema.find({owner:id})
    res.json(places)
  } catch (error) {
    console.log(error)
  }
};
const getPlace = async (req, res) => {
  try {
    const {id} = req.params;
    const place = await PlaceSchema.findById(id)
    res.json(place)
  } catch (error) {
    console.log(error)
  }
}
const updatePlace = async (req, res) => {
  try {
    const { token } = req.cookies;
    const {
      id, title, address, addedPhotos, description,
      perks, extraInfo, checkIn, checkOut, maxGuests,
    } = req.body;
    console.log(req.body,"photos")
    // Place dokümanını bul
    const placeDoc = await PlaceSchema.findById(id);
    // Token doğrulaması yap
    const generateToken = await jwtUtils.verifyToken(token);
    if (generateToken.id === placeDoc.owner.toString()) {
      // Eğer sahiplik doğrulandıysa, güncellemeleri yap
      placeDoc.set({
        title, address, photos: addedPhotos, description,
        perks, extraInfo, checkIn, checkOut, maxGuests,
      });
      await placeDoc.save();

      // Güncellenmiş dokümanı yanıtla
      res.json(placeDoc);
    } else {
      res.status(403).json({ message: "Erişim reddedildi" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sunucu hatası" });
  }
};

const createPlace = async (req, res) => {
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
      photos:addedPhotos,
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

module.exports = { getAll, createPlace, getPlace, updatePlace };
