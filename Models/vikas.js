//vikas Schema start
const mongoose = require ("mongoose");

const vikas = new mongoose.Schema({
    category:{
        type:String
    },
    Description:{
        type:String
    },
    image_user:
    {
        type:String
    }
   
})
const vikas_schema = new mongoose.model("category",vikas);
module.exports = vikas_schema;

