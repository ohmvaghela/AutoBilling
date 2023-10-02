const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs')
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
    password : {
        type: String,
        required: true,
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

userSchema.pre("save", async function(next) {
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
})

module.exports = mongoose.model("users",userSchema);