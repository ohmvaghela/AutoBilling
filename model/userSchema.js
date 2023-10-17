const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const billSchema = require('./billSchema');

require('mongoose-type-email');


const cur_route = "userSchema : ";
const userSchema = new mongoose.Schema({
  shopID: {
    type: Number,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  shopEmail: {
    type: mongoose.SchemaTypes.Email,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  // used to track login history
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});


/**
For normal JS object we can use prototype
but for mongoose schema we should use methods
Eg : Object :
    const person = new Object();
    person.prototype.sayHi = function(){}
    Schema : 
    const userSchema = new mongoose.Schema({})
    userSchema.methods.sayHi = function(){}

*/
userSchema.methods.generateAuthToken = async function(){
    try{
        const token = jwt.sign({_id: this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        // console.log([cur_route,token]);
        return token;
    }catch(error){
        console.log(cur_route+"auth token not generated");
        // res.send("the error part" + error);
    }
}
/*
 pre is a middleware
trigeer a pre hook before "..."
Here we hashing password before saving it
other middleware are :- 
  - "save" : runs before saving
  - "validate : runs before validating the data"
  - "remove" : runs before removing a doc from collection
  - "updateOne", "updateMany", "findOneAndUpdate" : runs before updating
  - "init" : runs before initializing a new document
*/ 
userSchema.pre("save", async function(next) {
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
})

module.exports = mongoose.model("users",userSchema);