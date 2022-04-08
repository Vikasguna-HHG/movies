const mongoose = require ("mongoose");

const video1 = new mongoose.Schema({
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
const video = new mongoose.model("video",video1);
module.exports = video;