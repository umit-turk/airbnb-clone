const express = require("express");
const { place, upload } = require("../controllers/place.js");

const router = express.Router();

router.get("/place", place);
router.post("/upload-by-link", upload);

module.exports = router;
