const express = require("express");
const { getAll, createPlace, getPlace, updatePlace, places, place } = require("../controllers/place.js");

const router = express.Router();

router.get("/user-places", getAll);
router.get("/places/:id", getPlace);
router.post("/places", createPlace);
router.put("/places", updatePlace);
router.get("/places", places);
router.get("/place/:id", place);

module.exports = router;
