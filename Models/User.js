const mongoose = require ("mongoose");
const user = new mongoose.Schema({
    
    User_Name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        unique:true
    },
    Password:{
        type:String,
        require:true

    },
    video_id:{
        type:String,
    },
})
const User = new mongoose.model("User",user);
module.exports = User;