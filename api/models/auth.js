const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  date: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("auth", AuthSchema);
