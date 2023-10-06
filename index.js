const express = require("express")
require("./connect");
const app = express();
app.use(express.static('public'));
app.set("view engine","ejs");



const addUserRouter = require("./routes/addUser.js");
app.use("/addUser",addUserRouter);

const loginRouter = require("./routes/loginUser.js");
app.use("/loginUser",loginRouter);

const pdfRouter = require("./routes/pdfCreate.js");
app.use("/pdfCreate",pdfRouter);

const downRouter = require("./routes/pdfDownload.js");
app.use("/pdfDownload", downRouter);

app.listen(8000);