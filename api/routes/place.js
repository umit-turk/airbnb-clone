const express = require("express");
const { getAll, createPlace, getPlace, updatePlace } = require("../controllers/place.js");

const router = express.Router();

router.get("/places", getAll);
router.get("/places/:id", getPlace);
router.post("/places", createPlace);
router.put("/places", updatePlace);

module.exports = router;
