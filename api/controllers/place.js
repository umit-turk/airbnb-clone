const PlaceSchema = require("../models/place.js");
const imageDownloader = require("image-downloader");

const place = async (req, res) => {
  try {
  } catch (error) {}
};

const upload = async (req, res) => {
    try {
      const { link } = req.body;
      const newName = 'photo' + Date.now() + ".jpg";
      const destPath = __dirname + '/../uploads'; // Hedef yolu burada belirtiyoruz ve bir üst dizine çıkarak "uploads" dizinine ulaşıyoruz
  
      await imageDownloader.image({
        url: link,
        dest: destPath + '/' + newName, // Hedef yolu ve dosya adı
      });
      res.json(newName); // Dosyanın tam yolu
    } catch (error) {
      console.log(error);
    }
  };
module.exports = { place, upload };
