const jwt = require("jsonwebtoken");
const jwtSecret = "asjfkdsjfdkadaf";

function generateToken(user) {
    return jwt.sign({ email: user.email, id: user._id }, jwtSecret, {});
  }
  
  async function verifyToken(token) {
    try {
      const decoded = await jwt.verify(token, jwtSecret);
      return decoded;
    } catch (error) {
      return null;
    }
  }
  
  module.exports = {
    generateToken,
    verifyToken,
  };
