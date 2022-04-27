const mongoose = require ("mongoose");

const contract = new mongoose.Schema({
  
    Movie_Name:
    {
        type:String
    },
    Provider_Name:
    {
        type:String
    },
    Provider_Phone:
    {
        type:Number
    },
    Period:
    {
        type:Number
    },  
    Provider_Ratio:
    {
        type:Number
    },
    Paltform_Ratio:
    {
        type:Number
    },
    Fee:{
        type:String
    },
    Payment_Charge:{
        type:String
    },
    Company_Name:{
        type:String
    },
    Adress:{
        type:String
    },
    CIN:
    {
        type:String
    },
    Director_Name:
    {
        type:String
    },
    DIN:{

        type:String
    }   
   
})
const Contract = new mongoose.model("Contract",contract);
module.exports = Contract;