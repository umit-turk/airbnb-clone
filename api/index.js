const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./config/database.js");
const bodyParser = require("body-parser");
const authRouter = require("./routes/auth.js");


dotenv.config();

const app = express();
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}));

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));

app.use("/",authRouter)

database();

app.listen(4000, () => {
    console.log("server is running 4000")
})