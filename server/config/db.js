const mongoos = require("mongoose");

const connectDB = async () =>{
    await mongoos.connect(process.env.MONGO_URL);
    console.log("dB connection...");

}
module.exports = connectDB;