const express = require("express")
require("./connect");
const app = express();
app.use(express.static('public'));
app.set("view engine","ejs");



const addUserRouter = require("./routes/addUser.js");
app.use("/addUser",addUserRouter);

const addBillRouter = require("./routes/addBill.js");
app.use("/addBill",addBillRouter);

const loginRouter = require("./routes/loginUser.js");
app.use("/loginUser",loginRouter);

const pdfRouter = require("./routes/pdfCreate.js");
app.use("/pdfCreate",pdfRouter);

const downRouter = require("./routes/pdfDownload.js");
app.use("/pdfDownload", downRouter);

const updateBill = require("./routes/billFetch.js");
app.use("/billFetch",updateBill);

const shopFetch = require("./routes/shopFetch.js");
app.use("/shopFetch",shopFetch);

const emailRouter = require("./routes/email.js");
app.use("/sendEmail",emailRouter);

app.listen(8000);