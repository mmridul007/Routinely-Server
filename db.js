const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_OFFLINE_URL = process.env.MONGODB_OFFLINE;

mongoose.connect(MONGODB_OFFLINE_URL, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB Connection Successfully");
});

db.on("error", () => {
  console.log("MongoDB Connection Error");
});

db.on("disconnected", ()=>{
    console.log("MongoDB Connection Disconnected")
})

module.exports = db;