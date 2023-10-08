const mongoose = require("mongoose");
require('mongoose-type-email');

const billSchema = new mongoose.Schema({
    billID:{
        type:Number,
        required: true,
        unique: true,
    },
    consumerName:{
        type: String,
        required:true,
    },
    consumerEmail:{
        type : mongoose.SchemaTypes.Email,
        required : true,
    },
    shopEmail: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true,
      },
    dateTime:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    billAmount:{
        type: mongoose.Types.Decimal128,
        required: true,
    },
    billDescription:{
        type:String,
        required: true,
    }
})

module.exports = mongoose.model('bills',billSchema);