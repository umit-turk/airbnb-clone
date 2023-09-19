const express = require("express");
const { place, upload, uploadByLink, photosMiddleware } = require("../controllers/place.js");

const router = express.Router();

router.get("/place", place);
router.post("/upload-by-link", uploadByLink);
router.post("/upload", photosMiddleware.array('photos',100),upload);

module.exports = router;
