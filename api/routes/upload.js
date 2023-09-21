const express = require("express");
const { upload, uploadByLink, photosMiddleware } = require("../controllers/upload.js");

const router = express.Router();

router.post("/upload-by-link", uploadByLink);
router.post("/upload", photosMiddleware.array('photos',100),upload);

module.exports = router;
