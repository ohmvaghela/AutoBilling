const express = require("express")
require("./connect");
const app = express();
const ejs = require("ejs");
app.use(express.static('public'));
app.set("view engine","ejs");
const path = require("path");
app.get("/", (req, res) => {

    res.render("razor");    
})

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

const razorRouter = require("./routes/razor.js");
app.use("/razor",razorRouter);

const fetchOrders = require("./routes/fetchOrders.js");
app.use("/fetchOrders",fetchOrders);

app.listen(8000);