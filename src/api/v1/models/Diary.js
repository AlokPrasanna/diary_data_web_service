// -------------------- Third-party Libraries and Modules --------------------
const mongoose = require("mongoose");

// -------------------- Diary Schema --------------------
const DiarySchema =  new mongoose.Schema({
    date:{
        type:date,
        require: true,
    },
    time:{
        type: time,
        require: true,
    },
    note:{
        type: String,
        require: true,
    }
},{timestamps: true});

module.exports = mongoose.model("Diary" , DiarySchema);