const mongoose = require ("mongoose");

const hel = new mongoose.Schema({
    category:{
        type:String
    },
    subcategorie:{
        type:String
    },
    image_user:
    {
        type:String
    },
    description:{
        type:String
    }
})
const keyur_schema = new mongoose.model("SubCategories",hel);
module.exports = keyur_schema;
