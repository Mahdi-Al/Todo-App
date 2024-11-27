const mongoose = require("mongoose");
async function connectDB() {
  // mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("successfully connected to db 🥂");
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

module.exports = connectDB;
