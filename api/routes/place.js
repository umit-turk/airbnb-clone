const express = require("express");
const { getAll, places } = require("../controllers/place.js");

const router = express.Router();

router.get("/places", getAll);
router.post("/place", places);

module.exports = router;
