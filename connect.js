require('dotenv').config();

const mongoose = require("mongoose");

/*
useNewUrlParser : option tells Mongoose to use the new MongoDB connection string parser.
useUnifiedTopology : option enables the new unified topology engine, which provides a more modern and efficient way of handling MongoDB connections.
*/ 
mongoose.connect(process.env.DATABASEURL,{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err);
});
