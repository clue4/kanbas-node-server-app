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
    questions: [{
      questionType: String,
      title: String,
      points: Number,
      question: String, // may be changed after using wysiwyg
      correctAnswer: mongoose.Mixed,
      possibleAnswers: [String],
      correctAnswers: [String],
      // typing is less strict here - not sure how to do it well in Mongoose
    }]
  },
  { collection: "quizzes" });
export default quizSchema;