const express = require("express");
const {createTab, getTabById} = require("../tabHandler")

const router = express.Router();

router.post("/", createTab);
router.get("/:id", getTabById);

module.exports = router;