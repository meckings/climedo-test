require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const tabRouter = require("./controller/router/tabRouter");
const statusCodes = require("./util");

const app = express();
const dbUrl = process.env.DB_URL;
const serverPort = process.env.SERVER_PORT;

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(result=>{
            console.log("connected to the db");
            app.listen(serverPort, ()=>{
                console.log("app started on port", serverPort);
            });
        })
        .catch(err=>console.log(err));

app.use(express.json());
app.use("/tab", tabRouter);

app.use((req, res)=>{
    const body = {
        message: "The route you are trying to access does not exist!"
    }
    res.status(statusCodes.NOT_FOUND).json(body);
})
