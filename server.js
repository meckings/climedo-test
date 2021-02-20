require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");

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
