const express = require("express");
const { place } = require("../controllers/place.js");

const router = express.Router();


router.get("/place",place)

module.exports = router;