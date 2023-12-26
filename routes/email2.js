const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const axios = require('axios');
const nodemailer = require('nodemailer')


router.get('/', async (req, res) => {
    // let transporter = nodemailer.createTransport(options[, defaults])
    try {
        var mailOptions = {
            from: "vaghelaohm@gmail.com",
            to: "von10@iitbbs.ac.in",
            subject: "Message title",
            text: "Plaintext version of the message",
            html: "<p>HTML version of the message</p>"
        };
        nodemailer.createTransport({
            host: "vaghelaohm@gmail.com",
            port: 8000,
            secure: false, // upgrade later with STARTTLS
            auth: {
                user: "vaghelaohm@gmail.com",
                pass: "ewdq fytx frlt zqzh",
            },
        });
        console.log("here")
        mail.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log("Email sent:" + info.response);
                res.send("Email sent");
            }
        });
    } catch (e) {
        res.send(e);
    }


});

module.exports = router;


// ewdq fytx frlt zqzh
