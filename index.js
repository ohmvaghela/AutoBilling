const express = require("express")
require("./connect");
const app = express();

const addUserRouter = require("./routes/addUser.js");
app.use("/addUser",addUserRouter);

const loginRouter = require("./routes/loginUser.js");
app.use("/loginUser",loginRouter);

const emailRouter = require("./routes/email.js");
app.use("/sendEmail",emailRouter);

app.listen(8000);