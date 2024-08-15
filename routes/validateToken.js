const express = require('express');
const { verify } = require('jsonwebtoken');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const userSchema = require('../model/userSchema');
const app = express();

app.use(express.json());
app.use(cookieParser());

const validateToken = async (req, res, next) => {

    const token = req.header('auth-token');
    // console.log("validateToken: Start", token);

    // no token found
    if (!token) {
        // console.log("validateToken: Token not found");
        return res.status(401).send("Token not found: Log out user");
    }
    // token found
    try {
        // try verfying token
        // console.log("token found");
        const data = verify(token, process.env.SECRET_KEY);
        
        // token verified
        req.user = data.user;
        // console.log("valid:",data);
        next();
        // console.log("next");
    } catch (error) {
        // token expired
        // console.log("token expired");
        if (error.message === "jwt expired") {
            try{
                const refreshToken = req.cookies.jwt;
                const data = verify(refreshToken,process.env.SECRET_KEY);                
                const userData = await userSchema.findById(data._id);
                const newToken = await userData.generateAuthToken();
                res.status(206).send({token:newToken});
            }
            catch(e){
                // invalid refresh token
                // console.log("invalid refresh token");
                res.status(401).send(["invalid refresh token",e]);
            }
        } else {
            // console.log("token validation failed with error", error)
            res.status(401).send(["token validation failed with error", error]);
        }
    }
};

app.use('/validateToken', validateToken);

module.exports = validateToken;
