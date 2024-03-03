const mongoose = require("mongoose");
require("dotenv").config();
const mogoConnection = mongoose.connect("mongodb+srv://sourabh:patel@cluster0.boh3pow.mongodb.net/Hrms?retryWrites=true&w=majority");
module.exports = {mogoConnection};
