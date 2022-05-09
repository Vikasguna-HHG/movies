const mongoose = require ("mongoose");
var Schema = mongoose.Schema;
<<<<<<< HEAD
=======

>>>>>>> b3e00d0d520c233e0844121b5cfb5b35f87f5e3d
const video1 = new mongoose.Schema({
  
    method:
    {
        type:String
    },
    v_id:{
        type:String
    },
    banner:
    {
        type:String
    },
    status:
    {
        type:String
    },
    rdate:
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
    Trailer_video:
    {
        type:String
    },
    banner_video:{

        type:String
    },
<<<<<<< HEAD
    User_id:{

        type: Schema.ObjectId
    }
=======
    User_Id:
    {
        type: Schema.ObjectId
    }   
>>>>>>> b3e00d0d520c233e0844121b5cfb5b35f87f5e3d

    
   
    
   
})
const video = new mongoose.model("video",video1);
module.exports = video;