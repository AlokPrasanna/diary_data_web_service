// -------------------- Custom Libraries and Modules ----------------------
const { DiaryModel } = require("../models");

// ---------- Function to save New diary data ----------
const SaveDiary = async(req , res) => {
    // ----- Request Body -----
    const {
        date,
        time,
        note
    } = req.body;

    try {
        const DiaryData = new DiaryModel({
            date,
            time,
            note
        });

        const saveDiaryData = await DiaryData.save();

        return res.status(201).json({
            status: true,
            data: saveDiaryData,
            success: {
                message: "Data save success!"
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status:false,
            error:{
                message:"Can not save data because server error!"
            }
        });
    }
};


module.exports = {
    SaveDiary
};