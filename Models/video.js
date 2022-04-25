const mongoose = require ("mongoose");

const video1 = new mongoose.Schema({
    method:
    {
        type:String
    },
    rdate:
    {
        type:String
    },  
    status:
    {
        type:String
    },
    edate:
    {
        type:String
    },
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
    Trailer_video:
    {
        type:String
    },
   
    
   
})
const video = new mongoose.model("video",video1);
module.exports = video;