import mongoose from "mongoose";
import schema from "./schema.js";
const questionModel = mongoose.model("questionModel", schema);
export default questionModel;