// -------------------- Third-party components and modules --------------------
const express = require("express");
require("dotenv/config");

// -------------------- Custom Library and Modules -------------------
const Config = require("./config");
const { ConnectDatabase } = require("./api/v1/libraries")

// -------------------- Third-pary modules component and modules --------------------
const app = express();
const PORT = Config.PORT || 3308;

// -------------------- Common Middleware --------------------
app.use(express.json());

// -------------------- Base Route --------------------
app.get("/" , (req, res) => {
    res.status(200).json({
        status: true,
        message: "Welcome to the server!"
    });
});

//-------------------- Error Route --------------------
app.use((req , res) => {
    res.status(404).json({
        status: false,
        message: "Not Found!"
    });
});

// -------------------- Initialize Connection --------------------
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT} port`);
    ConnectDatabase()
        .then(() => console.log("Connected to Database!"))
        .catch((err) => console.error(err))
});