// -------------------- Third-party Libraries and Modules --------------------
const express = require("express");

// -------------------- Custom Library and Modules --------------------
const {
    SaveDiary,
    GetAllData,
    GetDiaryDataById,
} = require("../controllers");

// ---------- Initilaize the Router ----------
const router = express.Router();

// ----- Routes -----
// Save Diary Data
router.post("/save" , SaveDiary);

// Get All data
router.get("/all" , GetAllData);

// Get Data By Id
router.get("/one/:diaryId" , GetDiaryDataById);


module.exports = router;