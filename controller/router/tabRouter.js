const express = require("express");
const {createTab, getTabById, getAllTabs, updateTab, deleteTab} = require("../tabHandler")

const router = express.Router();

router.post("/", createTab);
router.get("/:id", getTabById);
router.get("/", getAllTabs);
router.put("/:id", updateTab);
router.delete("/:id", deleteTab);

module.exports = router;