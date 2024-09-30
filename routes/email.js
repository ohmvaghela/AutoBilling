const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
// const userSchema = require("../model/userSchema.js");
// const cookieParser = require("cookie-parser");
var fs = require("fs");
const axios = require("axios");
const ejs = require("ejs");
const path = require("path");
const { BACKEND_URL } = process.env;

router.use(express.json());

const data = {
  billId: '26',
  orderId: 'order_0ko9jxfujivqXV',
  consumerName: 'Ohm Vaghela',
  consumerEmail: 'vaghelaohm@gmail.com',
  shopEmail: 'xyz@gmail.com',
  dateTime: '2024-08-14T14:12:11.656+00:00',
  billAmount: 5000,
  billDescription: 'nothing',
  billStatus: false
};

const Emailoptions = async (req) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "autobilling4@gmail.com",
        pass: "embo wtdz sndp iquz",
      },
    });
    const htmlContent = await ejs.renderFile(
      path.join(__dirname, "../views", "bill.ejs"),
      { data: data }
    );
    const mailOptions = {
      from: "autobilling4@gmail.com",
      to: req.body.consumerEmail,
      subject: "Payment Due",
      text: `Please pay the bill using the following link: ${BACKEND_URL}/pdfCreate/${req.body._id}`,
    };

    // Send the email using a Promise-based approach
    await transporter.sendMail(mailOptions);


    console.log("Email sent successfully");
    return "Email sent";
  } catch (err) {
    console.log(err);
    return err;
  }
};

router.post("/", async (req, res) => {
  // const id = req.body.id;
  const id = 1;
  req.body = req.body.User;
  try {
    // Await the PDF download and email sending
    // await axios.get("http://localhost:8000/pdfDownload", {
    //   id: req.body.id, // Replace 'yourData' with your actual data
    // });
    const emailStatus = await Emailoptions(req);

    // Send the response with the email status
    res.send(["response", emailStatus]);
  } catch (error) {
    console.error("Error:", error);
    res.send(error);
  }
});

module.exports = router;