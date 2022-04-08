const mongoose = require ("mongoose");
// import validator from 'validator';
const validator = require('validator');

// Mukunj schema start
const Mukunj = new mongoose.Schema({
    First_Name:{
        type:String,
        required:true
    },
    Last_Name:{
        type:String,
        required:true

    },
    User_Name:
    {
        type:String,
        required:true
        
    },
    Email:
    {
        type:String,
        unique:true,
        required:true,
        validate(value){
            if(validator.isEmail(value)){
                throw new Error("Email is in valid")
            }
        }
    },
    Password:
    {
        type:String,
        unique:true

    }
   
})
const Mukunj_Schema = new mongoose.model("movie_maker",Mukunj);
module.exports = Mukunj_Schema;

// mukunj schema end