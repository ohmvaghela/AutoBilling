const express = require("express")
require("./connect");
const app = express();

const addUserRouter = require("./routes/addUser.js");
app.use("/addUser",addUserRouter);

app.listen(8000);