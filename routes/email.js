const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();
const cron = require('node-cron');
// const userSchema = require("../model/userSchema.js");
// const cookieParser = require("cookie-parser");

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    var mail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "seventhfloor860@gmail.com",
        pass: "fatu qfro vciz rown",
      },
    });
    var mailOptions = {
      from: "seventhfloor860@gmail.com",
      to: "von10@iitbbs.ac.in",
      subject: "PAYMENT REMINDER",
      text: "PAYMENT REMINDER",
      attachments: [
        {
          filename: "Hello.txt",
          path: "./public/datafolder/test.txt",
        },
      ],
    };

    cron.schedule('58 11 * * 6', function () {
      console.log('---------------------');
      console.log('Running Cron Process');
      // Delivering mail with sendMail method
      mail.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log("Email sent:" + info.response);
          res.send("Email sent");
        }
      });
    });
    // mail.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //     res.send(error);
    //   } else {
    //     console.log("Email sent:" + info.response);
    //     res.send("Email sent");
    //   }
    // });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
