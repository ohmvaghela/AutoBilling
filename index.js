require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express")

const app = express();
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

app.use(express.json());

const addUserRouter = require("./routes/addUser.js");
app.use("/addUser",addUserRouter);



app.listen(8000);