
const express = require("express");
const app = express();
// const ejs = require("ejs");
const path = require("path");
require("dotenv").config();
// const auth = require("./routes/auth.js");

app.use(express.static('public'));
app.use(express.json());

app.set("view engine","ejs");

require("./connect");

const addUserRouter = require("./routes/addUser.js");
app.use("/addUser",addUserRouter);

// const addBillRouter = require("./routes/addBill.js");
// app.use("/addBill",addBillRouter);

const loginRouter = require("./routes/loginUser.js");
app.use("/loginUser",loginRouter);

// const pdfRouter = require("./routes/pdfCreate.js");
// app.use("/pdfCreate",pdfRouter);

// const downRouter = require("./routes/pdfDownload.js");
// app.use("/pdfDownload", downRouter);

// const updateBill = require("./routes/billFetch.js");
// app.use("/billFetch",updateBill);

// const shopFetch = require("./routes/shopFetch.js");
// app.use("/shopFetch",shopFetch);

// const emailRouter = require("./routes/email.js");
// app.use("/sendEmail",emailRouter);

// const razorRouter = require("./routes/razor.js");
// app.use("/razor",razorRouter);

// const fetchOrders = require("./routes/fetchOrders.js");
// app.use("/fetchOrders",fetchOrders);

// const paymentRouter = require("./routes/payment.js");
// app.use("/payment",paymentRouter);

// const fetchOrdersByEmail = require("./routes/fetchOrdersByEmail.js");
// app.use("/fetchOrdersByEmail",fetchOrdersByEmail);

app.listen(8000);