import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.DATABASE,
  })
  .then(() => console.log("Connected to mongoDB"));
