import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  title: String,
  artist: String,
  year: Number,
  cover: String,
  price: Number,
});

const Record = new mongoose.model("Record", recordSchema);

// module.exports = Record;
export default Record;
