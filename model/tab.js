const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const tabSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    dataPoints:{
        type: Array,
        default: []
    }
}, {timestamps: true});

const Tab = mongoose.model("Tab", tabSchema);
module.exports = Tab;