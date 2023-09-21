const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
const database = require("./config/database.js");
const authRouter = require("./routes/auth.js");
const placeRouter = require("./routes/place.js");
const uploadRouter = require("./routes/upload.js");


dotenv.config();
const app = express();

app.use(express.json());
app.use('/uploads',express.static(__dirname+'/uploads'))
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173",
}));

app.use("/",authRouter)
app.use("/",uploadRouter)
app.use("/",placeRouter)

database();

app.listen(4000, () => {
    console.log("server is running 4000")
})