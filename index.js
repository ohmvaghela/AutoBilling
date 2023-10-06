const express = require("express")
require("./connect");
const app = express();

const addUserRouter = require("./routes/addUser.js");
app.use("/addUser",addUserRouter);

const addBillRouter = require("./routes/addBill.js");
app.use("/addBill",addBillRouter);

const loginRouter = require("./routes/loginUser.js");
app.use("/loginUser",loginRouter);

app.listen(8000);