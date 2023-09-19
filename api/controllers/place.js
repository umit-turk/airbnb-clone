const PlaceSchema = require("../models/place.js");
const imageDownloader = require("image-downloader");
const multer = require('multer');
const fs = require("fs");
const place = async (req, res) => {
  try {
  } catch (error) {}
};

const uploadByLink = async (req, res) => {
    try {
      const { link } = req.body;
      const newName = 'photo' + Date.now() + ".jpg";
      const destPath = __dirname + '/../uploads';
  
      await imageDownloader.image({
        url: link,
        dest: destPath + '/' + newName,
      });
      res.json(newName);
    } catch (error) {
      console.log(error);
    }
  };
  const photosMiddleware = multer({dest:'uploads/'})
  const upload = async (req,res) => {
    try {
      const files = []
      const uploadedFiles = req.files;
      for(let i =0; i < uploadedFiles.length; i++){
        const {path, originalname} = uploadedFiles[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
        files.push(newPath.replace('uploads\\',''))
      }
      res.json(files);
    } catch (error) {
      console.log(error)
    }
  }
module.exports = { place, upload, uploadByLink, photosMiddleware };
