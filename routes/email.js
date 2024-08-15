const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
// const userSchema = require("../model/userSchema.js");
// const cookieParser = require("cookie-parser");
var fs = require("fs");
const axios = require("axios");
const ejs = require("ejs");
const path = require("path");

router.use(express.json());

const data = {
  name: "Alison Burgers",
  logo: "./iit.png",
  companyLocaction: ` 8358 Sunset Blvd, West Hollywood, CA 90069, United States`,
  buyerLocaction: `Los Angeles, CA, United States `,
  email: "xyz@ele.works.in",
  buyerName: "Walter White",
  companyName: "ElectroChemical Works",
  invoiceID: 1234,
  dueDate: Date.now().toString(),
  curDate: Date.now().toString(),
  Description: "Material : Aluminum",
  cost: 15000,
  header: "electrochemical works",
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
      to: req.body.email,
      subject: "Payment Due",
      html: htmlContent,
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
