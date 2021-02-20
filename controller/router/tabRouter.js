const express = require("express");
const {createTab} = require("../tabHandler")

const router = express.Router();

router.post("/", createTab);

module.exports = router;