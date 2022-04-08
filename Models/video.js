const mongoose = require ("mongoose");

const vikas1 = new mongoose.Schema({
    title:
    {
        type:String
    },
    category:{
        type:String
    },
    subcategory:{
        type:String
    },
    language:{
        type:String
    },
    Description:{
        type:String
    },
    image_user:
    {
        type:String
    },
    banner_video:{

        type:String
    },
    // banner_img:
    // {
    //     type:String
    // },
   
    
   
})
const vikas1_schema = new mongoose.model("video",vikas1);
module.exports = vikas1_schema;