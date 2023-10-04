const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
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
  bills: [
    {
      billID: {
        type: Number,
        required: true,
      },
      customerEmaill: {
        type: mongoose.SchemaTypes.Email,
        required: true,
      },
      // pdf, cost
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

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

userSchema.pre("save", async function(next) {
  if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
})

module.exports = mongoose.model("users",userSchema);