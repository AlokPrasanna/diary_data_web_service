// -------------------- Third-party Libraries and Modules --------------------
const express = require("express");

// -------------------- Custom Library and Modules --------------------
const {
    SaveDiary
} = require("../controllers");

// ---------- Initilaize the Router ----------
const router = express.Router();

// ----- Routes -----
// Save Diary Data
router.post("/save" , SaveDiary);


module.exports = router;