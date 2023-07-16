const express = require("express");
const { register,login, profile } = require("../controllers/auth");

const router = express.Router();

router.post("/register",register)
router.post("/login",login)
router.get("/profile/:id",profile)

module.exports = router;