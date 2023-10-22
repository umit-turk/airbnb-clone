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
      perks, extraInfo, checkIn, checkOut, maxGuests,price
    } = req.body;
    const placeDoc = await PlaceSchema.findById(id);
    const generateToken = await jwtUtils.verifyToken(token);
    if (generateToken.id === placeDoc.owner.toString()) {
      placeDoc.set({
        title, address, photos: addedPhotos, description,
        perks, extraInfo, checkIn, checkOut, maxGuests,price
      });
      await placeDoc.save();
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
      price
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
      price
    });
    res.json(placeDoc)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Veri alınamadı" }); // Hata durumunda istemciye hata bildir
  }
};

const places = async (req, res) => {
  try {
    const places = await PlaceSchema.find()
    res.json(places)
  } catch (error) {
    console.log(error)
  }
}
const place = async (req, res) => {
  const {id} = req.params;
  try {
    const places = await PlaceSchema.findById(id)
    res.json(places)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAll, createPlace, getPlace, updatePlace, places, place };
