const express = require("express");
const {createTab, getTabById, getAllTabs} = require("../tabHandler")

const router = express.Router();

router.post("/", createTab);
router.get("/:id", getTabById);
router.get("/", getAllTabs);

module.exports = router;