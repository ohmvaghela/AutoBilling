const mongoose = require("mongoose");
const validator = require("validator");
require('mongoose-type-email');

const userSchema = new mongoose.Schema({
    shopID : {
        type : Number,
        required : true,
        unique : true, 
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now(),
    },
    shopEmail : {
        type : mongoose.SchemaTypes.Email,
        required : true,
        unique : true,
    },
    shopName : {
        type : String,
        required : true,
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    bills : [{
        billID:{
            type : Number,
            required : true, 
        },
        customerEmaill : {
            type : mongoose.SchemaTypes.Email,
            required : true,

        }
    }]
});


module.exports = mongoose.model("users",userSchema);