const mongoose = require("mongoose");
require('mongoose-type-email');

const billSchema = new mongoose.Schema({
    billID:{
        type:Number,
        required: true,
        unique: true,
    },
    orderId:{
        type:String,
        required: true,
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
        // unique: false,
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
    },
    billStatus:{
        type:Boolean,
        require: true,
        default: false,
    },
    reminder:{
        type: Number,
        require: true,
        default: 7,
    },
    remdinderDate:{
        type: Date,
        require: true,
        default: Date.now() + 7 * 24 * 60 * 60 * 1000,
    }
})

module.exports = mongoose.model('bills',billSchema);