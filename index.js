require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const multer=require('multer')
const mongoose=require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

// const ImageModel=require("./image.model");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'))

app.use(require('./router/index'))

app.set("view engine", "ejs")

const database = require('./database/db');
database();

app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})