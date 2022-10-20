const mongoose = require('mongoose');

const conn = ()=>{
    mongoose.connect("mongodb://localhost:27017/taxdata").then(()=> {
        console.log("DATABASE CONNECTED");
    }).catch((err) =>{
        console.log(err)
    })
}

module.exports =conn;
