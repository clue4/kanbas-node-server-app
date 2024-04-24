import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    quizType: String,
    points: Number,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtTime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    published: Boolean,
    instructions: String,
    name: String,
    course: String,
  },
  { collection: "quizzes" });
export default quizSchema;