const express = require("express");
const router = express.Router();
const userSchema = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");

router.use(express.json());
const cur_route = "loginUser : ";
router.post("/", async (req, res) => {
  const loginEmail = req.body.email;
  const password = req.body.password;

  const userData = await userSchema.findOne({ shopEmail: loginEmail });

  // new login, no token exist
  try {
    // user not found in database
    if (!userData) {
      console.log(cur_route + "user not found");
      res.status(404).send("user not found");
    } else {
      // user found
      const sharableUserData = {
        shopID:9,
        shopEmail:userData.shopEmail,
        shopName :userData.shopName,
        firstName:userData.firstName,
        lastName :userData.lastName,
      }
      const passmatch = await bcrypt.compare(password, userData.password);
      if (passmatch) {
        // password matches
        // generate access token
        const token = await userData.generateAuthToken();
        //generate refresh token
        const refreshToken = await userData.generateRefreshToken();
        console.log(refreshToken);
        res.cookie("jwt", refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', 
          // secure: true, // Ensure this is true for HTTPS
          sameSite: 'None', // Must be 'None' to allow cross-site requests
        });

        res.status(200).send({token:token,user:sharableUserData});
      } else {
        // password dont match
        res.status(200).send("Incorrect password");
      }
    }
  } catch (e) {
    res.send(400).send(e);
  }
});

module.exports = router;
