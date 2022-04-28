const mongoose = require ("mongoose");

const contract = new mongoose.Schema({
  
    Movie_Name:
    {
        type:String,
        required:true
    },
    Provider_Name:
    {
        type:String,
        required:true
    },
    Provider_Phone:
    {
        type:Number,
        required:true
    },
    Period:
    {
        type:Number,
        required:true
    },  
    Provider_Ratio:
    {
        type:Number,
        required:true
    },
    Paltform_Ratio:
    {
        type:Number,
        required:true
    },
    Fee:{
        type:String,
        required:true
    },
    Payment_Charge:{
        type:String,
        required:true
    },
    Company_Name:{
        type:String,
        required:true
    },
    Adress:{
        type:String,
        required:true
    },
    CIN:
    {
        type:String,
        required:true
    },
    Director_Name:
    {
        type:String,
        required:true
    },
    DIN:{

        type:String,
        required:true
    }   
   
})
const Contract = new mongoose.model("Contract",contract);
module.exports = Contract;