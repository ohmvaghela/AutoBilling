
const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
var cors = require("cors");
require("dotenv").config();
const cookieParser = require('cookie-parser');

// const auth = require("./routes/auth.js");
const validateToken = require("./routes/validateToken.js");
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: process.env.FRONTEND_URL, // Your frontend URL
    credentials: true, // Allow credentials
    allowedHeaders: ['auth-token', 'Content-Type'],
  };
  
  app.use(cors(corsOptions));

app.set("view engine","ejs");

require("./connect");

const addUserRouter = require("./routes/addUser.js");
app.use("/addUser",addUserRouter);

const addBillRouter = require("./routes/addBill.js");
app.use("/addBill",validateToken,addBillRouter);

const loginRouter = require("./routes/loginUser.js");
app.use("/loginUser",loginRouter);

const getUserData = require("./routes/getUserData.js");
app.use("/userData",validateToken,getUserData);

const pdfRouter = require("./routes/pdfCreate.js");
app.use("/pdfCreate",pdfRouter);

// const downRouter = require("./routes/pdfDownload.js");
// app.use("/pdfDownload", downRouter);

const updateBill = require("./routes/billFetch.js");
app.use("/billFetch",updateBill);

const shopFetch = require("./routes/shopFetch.js");
app.use("/shopFetch",shopFetch);

const emailRouter = require("./routes/email.js");
app.use("/sendEmail",emailRouter);

const razorRouter = require("./routes/razor.js");
app.use("/razor",razorRouter);

// const fetchOrders = require("./routes/fetchOrders.js");
// app.use("/fetchOrders",validateToken,fetchOrders);
const fetchOrders = require("./routes/fetchOrders.js");
app.use("/fetchOrders",fetchOrders);

const fetchRazorPayOrder = require("./routes/fetchRazorPayOrder.js");
app.use("/fetchRazorPayOrder",fetchRazorPayOrder);

const fetchOrdersByEmail = require("./routes/fetchOrdersByEmail.js");
app.use("/fetchOrdersByEmail",validateToken,fetchOrdersByEmail);
// const fetchOrdersByEmail = require("./routes/fetchOrdersByEmail.js");
// app.use("/fetchOrdersByEmail",fetchOrdersByEmail);

const paymentRouter = require("./routes/payment.js");
app.use("/payment",paymentRouter);



// const fetchOrdersByEmail = require("./routes/fetchOrdersByEmail.js");
// app.use("/fetchOrdersByEmail",fetchOrdersByEmail);

app.listen(8000);