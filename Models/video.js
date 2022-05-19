const mongoose = require ("mongoose");
// var Schema = mongoose.Schema;
const video1 = new mongoose.Schema({
    


        Title:{
            type:String
        },
        Rating:{
            type:String
        },
        Subscribe:{
            type:String
        },
        Discription:{
            type:String
        },
        Contract:{
            type:String
        },
        Trailer_time:{
            type:String
        },
        Video_time:{
            type:String
        },
        Country:{
            type:String
        },
        Cast:{
            type:String
        },
        Publish:{
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




  
    // method:
    // {
    //     type:String
    // },
    // v_id:{
    //     type:String
    // },
    // banner:
    // {
    //     type:String
    // },
    // status:
    // {
    //     type:String
    // },
    // rdate:
    // {
    //     type:String
    // },  
    // edate:
    // {
    //     type:String
    // },
    // title:
    // {
    //     type:String
    // },
    // category:{
    //     type:String
    // },
    // subcategory:{
    //     type:String
    // },
    // language:{
    //     type:String
    // },
    // Description:{
    //     type:String
    // },
    // image_user:
    // {
    //     type:String
    // },
    // Trailer_video:
    // {
    //     type:String
    // },
    // banner_video:{

    //     type:String
    // },
    // User_Id:{

    //     type: Schema.ObjectId
    // }

    
   
    
   
})
const video = new mongoose.model("video",video1);
module.exports = video;