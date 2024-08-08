const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
// const userSchema = require("../model/userSchema.js");
// const cookieParser = require("cookie-parser");
var fs = require('fs');
const axios = require("axios");

router.use(express.json());

const Emailoptions = async (req) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ohmvaghela@gmail.com",
        pass: "mnun xtvb taww nwrw",
      },
    });

    const mailOptions = {
      from: "ohmvaghela@gmail.com",
      to: req.body.email,
      subject: "Payment Due",
      text: "This is link to make payment http://localhost:8000/payment/" + req.body.id,
      attachments: [
        {
          filename: "result.pdf",
          path: "./public/result.pdf",
        },
      ],
    };

    // Send the email using a Promise-based approach
    await transporter.sendMail(mailOptions);

    // Delete the result.pdf file after sending the email
    const filePath = "./public/result.pdf";
    fs.unlinkSync(filePath);
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
    await axios.get('http://localhost:8000/pdfDownload', {
      id: req.body.id, // Replace 'yourData' with your actual data
    });
    const emailStatus = await Emailoptions(req);

    // Send the response with the email status
    res.send(["response", emailStatus]);
  } catch (error) {
    console.error('Error:', error);
    res.send(error);
  }
});

module.exports = router;
