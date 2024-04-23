import mongoose from "mongoose";
const couseSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    number: String,
    startDate: Date,
    endDate: Date,
    credits: Number,
    description: String,
  },
  { collection: "courses" });
export default couseSchema;

