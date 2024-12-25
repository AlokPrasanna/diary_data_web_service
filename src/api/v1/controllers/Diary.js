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

// -------------------- Function to get all data --------------------
const GetAllData = async(req , res) => {
    try {
        // Get All data from the database
        const AllData = await DiaryModel.find().exec();

        return res.status(200).json({
            status: true,
            success:{
                message:"Data fetch success!"
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status:false,
            error:{
                message:"Can not fetch data because server error!"
            }
        });
    }
}


module.exports = {
    SaveDiary,
    GetAllData,
};