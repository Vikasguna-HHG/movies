const mongoose = require ("mongoose");
const Data = new mongoose.Schema({
    language:{
        type:String
    },
    
   
})
const Parth = new mongoose.model("Language",Data);
module.exports = Parth;



