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
            data:AllData,
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
};

// -------------------- Function to Get Data by Id --------------------
const GetDiaryDataById = async(req , res) => {
    // Get Diary Id by param
    const { diaryId } = req.params;
    try {
       // Check Id available or not
       const DiaryData = await DiaryModel.findOne({_id:diaryId}).exec();
       
       if(!DiaryData){
        return res.status(404).json({
            status:false,
            error:{
                message:"No data found for provided Id!"
            }
        });
       }

        return res.status(200).json({
            status: true,
            data:DiaryData,
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

// -------------------- Function to Update diary data --------------------
const UpdateDiaryData = async(req , res) => {
    // Get Diary Id by param
    const { diaryId } = req.params;

    // Request body
    const {
        date,
        time,
        note
    } = req.body;
    try {
       // Validate request body
       if (!date || !time || !note) {
            return res.status(400).json({
                status: false,
                error: {
                    message: "All fields (date, time, note) are required!",
                },
            });
        }

        // Check if the Diary ID exists and update the data
        const updatedDiary = await DiaryModel.findOneAndUpdate(
            { _id: diaryId }, 
            { date, time, note },
            { new: true } 
        );

        if (!updatedDiary) {
            return res.status(404).json({
                status: false,
                error: {
                    message: "No diary entry found for the provided ID!",
                },
            });
        }

       return res.status(200).json({
        status:true,
        data:updatedDiary,
        success:{
            message:"Update data success!"
        }
       });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status:false,
            error:{
                message:"Can not update data because server error!"
            }
        });
    }
}


module.exports = {
    SaveDiary,
    GetAllData,
    GetDiaryDataById,
    UpdateDiaryData,
};