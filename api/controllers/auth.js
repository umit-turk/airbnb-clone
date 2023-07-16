const Auth = require("../models/auth.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "asjfkdsjfdkadaf";

const register = async (req, res) => {
    const {name, email, password} = req.body
    try {
        const user = await Auth.findOne({email});

        if(user){
            return res.status(422).json({message:"Email is not available"})
        }
        if(!name){
            return res.status(400).json({ message: "Name is required." });
        }
        if(!password){
            return res.status(400).json({ message: "Password is required." });
        }
        if(password.length < 6){
            return res.status(400).json({message:"Your password grather than 6 characters"})
        }
        if(!isEmail(email)){
            return res.status(Enum.HTTP_CODES.BAD_REQUEST).json({message:"It does not comply with the email format."})
        }

       const newUser = await Auth.create({name,email,password:bcrypt.hashSync(password, bcryptSalt)})
       res.json(newUser);

    } catch (error) {
        res.status(422).json(error)
    }
}

const login = async (req,res) => {
    const {email, password} = req.body
    try {

   const user = await Auth.findOne({email})

   if(!user){
    return res.status(400).json({message:"There is no user with email."})
   }

   if(!email){
    return res.status(400).json({message:"Email is required."})
   }

   if(!password){
    return res.status(400).json({message:"Password is required."})
   }

   const passwordCompare = await bcrypt.compare(password, user.password)

   if(!passwordCompare){
    return res.status(400).json({message:"Password or email not correct."})
   }
   jwt.sign({email:user.email, id:user._id}, jwtSecret, {}, (err, token) => {
    if(err) throw err;
    res.cookie('token',token).json({user, token})
   })
        
    } catch (error) {
        return res.status(500).json({message:error})
    }
}

const profile = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await Auth.findById(userId);
  
      // Kullanıcı bilgilerini içeren token oluştur
      const token = jwt.sign({ email: user.email, id: user._id }, jwtSecret, {});
  
      // Token'i kullanıcıya gönder
      res.cookie('token', token).json({ user, token });
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


function isEmail(emailAddress) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    return regex.test(emailAddress);
  }

module.exports = {register, login, profile}